import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { sql, liberarHoldsExpirados, type ModalidadReserva, type Servicio } from '@/lib/db'
import { firmarIntegridad } from '@/lib/wompi'

const FECHAS_EVENTO = ['2026-10-10', '2026-10-11']

interface CuerpoReserva {
  servicioId: number
  modalidad: ModalidadReserva
  slotId: number | null
  fechaEvento: string
  nombreCliente: string
  whatsappCliente: string
  emailCliente: string
  porcentajePago: 50 | 100
}

// POST /api/reservas
// Crea un hold de pago: aparta el cupo de la manana (si aplica) y devuelve la
// referencia + firma de integridad que necesita el Widget de Wompi para cobrar.
// El hold expira en 15 minutos (ver db/schema.sql); si no se paga, liberarHoldsExpirados
// libera el cupo automaticamente en la siguiente consulta de disponibilidad/reserva.
export async function POST(request: Request) {
  let body: CuerpoReserva
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'JSON invalido' }, { status: 400 })
  }

  const { servicioId, modalidad, slotId, fechaEvento, nombreCliente, whatsappCliente, emailCliente, porcentajePago } = body

  if (!FECHAS_EVENTO.includes(fechaEvento)) {
    return NextResponse.json({ error: 'fechaEvento invalida' }, { status: 400 })
  }
  if (modalidad !== 'manana_sueroterapia' && modalidad !== 'tarde_paquete') {
    return NextResponse.json({ error: 'modalidad invalida' }, { status: 400 })
  }
  if (modalidad === 'manana_sueroterapia' && !slotId) {
    return NextResponse.json({ error: 'slotId es requerido para sueroterapia de la manana' }, { status: 400 })
  }
  if (porcentajePago !== 50 && porcentajePago !== 100) {
    return NextResponse.json({ error: 'porcentajePago debe ser 50 o 100' }, { status: 400 })
  }
  if (!nombreCliente?.trim() || !whatsappCliente?.trim() || !emailCliente?.trim()) {
    return NextResponse.json({ error: 'Faltan datos del cliente' }, { status: 400 })
  }

  await liberarHoldsExpirados()

  const servicioRows = (await sql`
    SELECT * FROM servicios WHERE id = ${servicioId} AND activo = TRUE
  `) as Servicio[]
  const servicio = servicioRows[0]
  if (!servicio) return NextResponse.json({ error: 'Servicio no encontrado' }, { status: 404 })

  const columnaDisponible = modalidad === 'manana_sueroterapia' ? servicio.disponible_manana : servicio.disponible_tarde
  if (!columnaDisponible) {
    return NextResponse.json({ error: 'Ese servicio no esta disponible en esa modalidad' }, { status: 400 })
  }

  let horaInicio: string | null = null
  if (modalidad === 'manana_sueroterapia') {
    const slotRows = (await sql`
      UPDATE disponibilidad SET cupos_ocupados = cupos_ocupados + 1
      WHERE id = ${slotId} AND fecha = ${fechaEvento} AND cupos_ocupados < capacidad_total
      RETURNING hora_inicio
    `) as { hora_inicio: string }[]
    if (slotRows.length === 0) {
      return NextResponse.json({ error: 'Ese horario ya no tiene cupos disponibles' }, { status: 409 })
    }
    horaInicio = slotRows[0].hora_inicio
  }

  const precioServicio = servicio.precio
  const montoPagado = Math.round((precioServicio * porcentajePago) / 100)
  const bonoSorpresa = porcentajePago === 100
  const wompiReference = `renacer-${randomUUID()}`

  try {
    const reservaRows = (await sql`
      INSERT INTO reservas (
        servicio_id, modalidad, slot_id, fecha_evento,
        nombre_cliente, whatsapp_cliente, email_cliente,
        precio_servicio, porcentaje_pago, monto_pagado, bono_sorpresa,
        wompi_reference
      ) VALUES (
        ${servicioId}, ${modalidad}, ${slotId}, ${fechaEvento},
        ${nombreCliente.trim()}, ${whatsappCliente.trim()}, ${emailCliente.trim()},
        ${precioServicio}, ${porcentajePago}, ${montoPagado}, ${bonoSorpresa},
        ${wompiReference}
      ) RETURNING id
    `) as { id: string }[]

    const montoEnCentavos = montoPagado * 100
    const signature = firmarIntegridad(wompiReference, montoEnCentavos)

    return NextResponse.json({
      reservaId: reservaRows[0].id,
      wompiReference,
      amountInCents: montoEnCentavos,
      currency: 'COP',
      publicKey: process.env.WOMPI_PUBLIC_KEY,
      signature,
      servicioNombre: servicio.nombre,
      horaInicio,
    })
  } catch (err) {
    // Compensa el cupo si el insert de la reserva fallo despues de apartarlo.
    if (modalidad === 'manana_sueroterapia' && slotId) {
      await sql`UPDATE disponibilidad SET cupos_ocupados = cupos_ocupados - 1 WHERE id = ${slotId}`
    }
    console.error('[reservas] Error creando reserva', err)
    return NextResponse.json({ error: 'Error creando la reserva' }, { status: 500 })
  }
}

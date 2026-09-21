import { NextResponse } from 'next/server'
import { sql, type Reserva, type ModalidadReserva } from '@/lib/db'
import { verificarEventoWompi, type EventoWompi } from '@/lib/wompi'
import { notificarReserva } from '@/lib/notify'

// POST /api/webhooks/wompi
// Wompi llama esta URL cuando una transaccion cambia de estado. Confirma la reserva
// solo si el checksum del evento es valido (evita que cualquiera falsifique un "pago
// aprobado" llamando este endpoint directamente).
export async function POST(request: Request) {
  const evento = (await request.json()) as EventoWompi

  if (evento.event !== 'transaction.updated') {
    return NextResponse.json({ ok: true }) // ignoramos otros tipos de evento
  }
  if (!verificarEventoWompi(evento)) {
    return NextResponse.json({ error: 'checksum invalido' }, { status: 401 })
  }

  const { reference, status, id: transactionId } = evento.data.transaction

  const reservaRows = (await sql`
    SELECT r.*, s.nombre AS servicio_nombre
    FROM reservas r JOIN servicios s ON s.id = r.servicio_id
    WHERE r.wompi_reference = ${reference}
  `) as (Reserva & { servicio_nombre: string })[]
  const reserva = reservaRows[0]
  if (!reserva) return NextResponse.json({ error: 'reserva no encontrada' }, { status: 404 })

  if (status === 'APPROVED') {
    if (reserva.estado_pago === 'aprobado') return NextResponse.json({ ok: true }) // ya procesado, evita doble notificacion

    const nuevoEstadoReserva = reserva.modalidad === 'manana_sueroterapia' ? 'confirmada' : 'pendiente_agendar'
    await sql`
      UPDATE reservas SET
        estado_pago = 'aprobado',
        estado_reserva = ${nuevoEstadoReserva},
        wompi_transaction_id = ${transactionId},
        confirmed_at = now()
      WHERE id = ${reserva.id}
    `

    await notificarReserva({
      modalidad: reserva.modalidad as ModalidadReserva,
      servicioNombre: reserva.servicio_nombre,
      fechaEvento: reserva.fecha_evento,
      horaInicio: null,
      reservaId: reserva.id,
    })
  } else if (status === 'DECLINED' || status === 'ERROR' || status === 'VOIDED') {
    await sql`
      UPDATE reservas SET estado_pago = ${status === 'DECLINED' ? 'rechazado' : 'expirado'},
        estado_reserva = 'cancelada', wompi_transaction_id = ${transactionId}
      WHERE id = ${reserva.id}
    `
    // Libera el cupo de la manana que se habia apartado al crear el hold.
    if (reserva.slot_id) {
      await sql`UPDATE disponibilidad SET cupos_ocupados = cupos_ocupados - 1 WHERE id = ${reserva.slot_id}`
    }
  }

  return NextResponse.json({ ok: true })
}

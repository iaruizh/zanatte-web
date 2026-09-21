import { neon } from '@neondatabase/serverless'

// Usa la variable de entorno que Vercel inyecta automaticamente al conectar
// la base de datos Postgres (Neon) al proyecto. No se necesita configurar
// nada mas aqui; DATABASE_URL / POSTGRES_URL las agrega Vercel solo.
export const sql = neon(process.env.DATABASE_URL ?? process.env.POSTGRES_URL!)

export type TipoServicio = 'suero' | 'paquete'
export type ModalidadReserva = 'manana_sueroterapia' | 'tarde_paquete'
export type EstadoReserva =
  | 'hold_pendiente_pago'
  | 'confirmada'
  | 'pendiente_agendar'
  | 'cancelada'
  | 'expirada'
  | 'completada'
export type EstadoPago = 'pendiente' | 'aprobado' | 'rechazado' | 'expirado'

export interface Servicio {
  id: number
  nombre: string
  tipo: TipoServicio
  descripcion: string
  precio: number
  duracion_min: number | null
  disponible_manana: boolean
  disponible_tarde: boolean
  activo: boolean
  orden: number
}

export interface Disponibilidad {
  id: number
  fecha: string
  hora_inicio: string
  capacidad_total: number
  cupos_ocupados: number
}

export interface Reserva {
  id: string
  servicio_id: number
  modalidad: ModalidadReserva
  slot_id: number | null
  fecha_evento: string
  nombre_cliente: string
  whatsapp_cliente: string
  email_cliente: string
  precio_servicio: number
  porcentaje_pago: 50 | 100
  monto_pagado: number
  bono_sorpresa: boolean
  estado_reserva: EstadoReserva
  estado_pago: EstadoPago
  wompi_reference: string
  wompi_transaction_id: string | null
  reembolso_monto: number | null
  created_at: string
  confirmed_at: string | null
  cancelled_at: string | null
  hold_expires_at: string
}

// Numero de WhatsApp que debe notificarse segun la modalidad de la reserva.
export const WHATSAPP_NOTIFICACION: Record<ModalidadReserva, string> = {
  manana_sueroterapia: '573104762206', // enfermera
  tarde_paquete: '573023333830',       // esteticista
}

// Marca como expirados los holds de pago vencidos y libera sus cupos de la manana
// en una sola sentencia atomica. Se llama antes de leer/escribir disponibilidad para
// que los cupos abandonados (formulario sin pagar) vuelvan a quedar disponibles.
export async function liberarHoldsExpirados() {
  await sql`
    WITH expiradas AS (
      UPDATE reservas SET estado_reserva = 'expirada'
      WHERE estado_reserva = 'hold_pendiente_pago' AND hold_expires_at < now()
      RETURNING slot_id
    ), conteo AS (
      SELECT slot_id, count(*) AS cnt FROM expiradas WHERE slot_id IS NOT NULL GROUP BY slot_id
    )
    UPDATE disponibilidad d SET cupos_ocupados = d.cupos_ocupados - conteo.cnt
    FROM conteo WHERE d.id = conteo.slot_id
  `
}

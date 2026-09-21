import { sql } from '@/lib/db'
import AdminView, { type ReservaAdmin } from './AdminView'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const reservas = (await sql`
    SELECT
      r.id, r.modalidad, r.fecha_evento, r.nombre_cliente, r.whatsapp_cliente, r.email_cliente,
      r.precio_servicio, r.porcentaje_pago, r.monto_pagado, r.bono_sorpresa,
      r.estado_reserva, r.estado_pago, r.wompi_reference, r.created_at, r.confirmed_at,
      s.nombre AS servicio_nombre, d.hora_inicio
    FROM reservas r
    JOIN servicios s ON s.id = r.servicio_id
    LEFT JOIN disponibilidad d ON d.id = r.slot_id
    ORDER BY r.created_at DESC
  `) as ReservaAdmin[]

  return <AdminView reservas={reservas} />
}

import { NextResponse } from 'next/server'
import { sql, type Reserva } from '@/lib/db'

// GET /api/reservas/estado?ref=renacer-xxxx
// Usado por la pagina /renacer-por-dentro/gracias cuando Wompi redirige de vuelta
// (flujo movil), para mostrarle al cliente si su pago quedo aprobado.
export async function GET(request: Request) {
  const ref = new URL(request.url).searchParams.get('ref')
  if (!ref) return NextResponse.json({ error: 'falta ref' }, { status: 400 })

  const rows = (await sql`
    SELECT r.estado_reserva, r.estado_pago, r.fecha_evento, r.monto_pagado, s.nombre AS servicio_nombre
    FROM reservas r JOIN servicios s ON s.id = r.servicio_id
    WHERE r.wompi_reference = ${ref}
  `) as Pick<Reserva, 'estado_reserva' | 'estado_pago' | 'fecha_evento' | 'monto_pagado'>[] & { servicio_nombre: string }[]

  const reserva = rows[0]
  if (!reserva) return NextResponse.json({ error: 'no encontrada' }, { status: 404 })
  return NextResponse.json(reserva)
}

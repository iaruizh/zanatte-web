import { NextResponse } from 'next/server'
import { sql, liberarHoldsExpirados, type Disponibilidad } from '@/lib/db'

// GET /api/disponibilidad?fecha=2026-10-10
// Cupos de sueroterapia de la manana para una fecha del evento. Las tardes (paquetes)
// no tienen disponibilidad digital, se coordinan manualmente.
export async function GET(request: Request) {
  const fecha = new URL(request.url).searchParams.get('fecha')
  if (!fecha || !['2026-10-10', '2026-10-11'].includes(fecha)) {
    return NextResponse.json({ error: 'fecha invalida, debe ser 2026-10-10 o 2026-10-11' }, { status: 400 })
  }

  await liberarHoldsExpirados()

  const filas = (await sql`
    SELECT id, fecha, hora_inicio, capacidad_total, cupos_ocupados
    FROM disponibilidad
    WHERE fecha = ${fecha}
    ORDER BY hora_inicio
  `) as Disponibilidad[]

  const slots = filas.map((f) => ({
    id: f.id,
    horaInicio: f.hora_inicio,
    cuposDisponibles: f.capacidad_total - f.cupos_ocupados,
  }))

  return NextResponse.json({ fecha, slots })
}

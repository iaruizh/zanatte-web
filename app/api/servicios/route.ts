import { NextResponse } from 'next/server'
import { sql, type Servicio } from '@/lib/db'

// GET /api/servicios — catalogo de sueros y paquetes activos, para el formulario de reserva.
export async function GET() {
  const servicios = (await sql`
    SELECT * FROM servicios WHERE activo = TRUE ORDER BY orden
  `) as Servicio[]
  return NextResponse.json({ servicios })
}

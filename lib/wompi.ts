import { createHash } from 'crypto'

// Firma de integridad que exige el Widget de Wompi para abrir el checkout:
// SHA256(referencia + montoEnCentavos + moneda + secretoDeIntegridad)
export function firmarIntegridad(referencia: string, montoEnCentavos: number, moneda = 'COP') {
  const cadena = `${referencia}${montoEnCentavos}${moneda}${process.env.WOMPI_INTEGRITY_SECRET}`
  return createHash('sha256').update(cadena).digest('hex')
}

interface EventoWompi {
  event: string
  data: {
    transaction: {
      id: string
      amount_in_cents: number
      reference: string
      status: 'APPROVED' | 'DECLINED' | 'VOIDED' | 'ERROR' | 'PENDING'
      status_message: string | null
    }
  }
  signature: { properties: string[]; checksum: string }
  timestamp: number
}

// Verifica que el webhook realmente venga de Wompi: concatena los valores de las
// propiedades indicadas (en orden) + el timestamp + el secreto de eventos, y compara
// el SHA256 resultante contra el checksum que envio Wompi.
export function verificarEventoWompi(evento: EventoWompi): boolean {
  const valores = evento.signature.properties.map((prop) => {
    const partes = prop.split('.') // ej. "transaction.id" -> data.transaction.id
    let valor: unknown = evento.data
    for (const parte of partes) valor = (valor as Record<string, unknown>)?.[parte]
    return String(valor)
  })
  const cadena = `${valores.join('')}${evento.timestamp}${process.env.WOMPI_EVENTS_SECRET}`
  const checksum = createHash('sha256').update(cadena).digest('hex')
  return checksum.toUpperCase() === evento.signature.checksum.toUpperCase()
}

export type { EventoWompi }

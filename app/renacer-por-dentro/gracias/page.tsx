'use client'
import { useEffect, useState } from 'react'

interface EstadoReserva {
  estado_reserva: string
  estado_pago: string
  fecha_evento: string
  monto_pagado: number
  servicio_nombre: string
}

const MENSAJES: Record<string, string> = {
  aprobado: 'Tu pago fue aprobado y tu cupo quedó confirmado.',
  pendiente: 'Tu pago está siendo procesado. Te confirmamos por WhatsApp en cuanto se apruebe.',
  rechazado: 'Tu pago no pudo procesarse. Puedes volver a intentarlo desde la página de reservas.',
  expirado: 'El tiempo para pagar esta reserva venció. Vuelve a intentarlo desde la página de reservas.',
}

export default function GraciasPage() {
  const [estado, setEstado] = useState<EstadoReserva | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (!ref) {
      setError('No encontramos la referencia de tu reserva.')
      return
    }
    fetch(`/api/reservas/estado?ref=${encodeURIComponent(ref)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setEstado)
      .catch(() => setError('No pudimos consultar el estado de tu reserva. Escríbenos por WhatsApp.'))
  }, [])

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: 480, textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>Renacer por dentro</h1>
        {error && <p>{error}</p>}
        {!error && !estado && <p>Consultando el estado de tu reserva…</p>}
        {estado && (
          <>
            <p style={{ fontSize: 16, lineHeight: 1.7 }}>{MENSAJES[estado.estado_pago] ?? 'Estamos verificando tu pago.'}</p>
            <p style={{ marginTop: 12, fontSize: 14, opacity: 0.7 }}>{estado.servicio_nombre} · {estado.fecha_evento}</p>
          </>
        )}
        <a href="/renacer-por-dentro" style={{ display: 'inline-block', marginTop: 32, color: '#2E7D32' }}>Volver a Renacer por Dentro</a>
      </div>
    </div>
  )
}

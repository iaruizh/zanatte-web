'use client'
import { useMemo, useState } from 'react'

export interface ReservaAdmin {
  id: string
  modalidad: 'manana_sueroterapia' | 'tarde_paquete'
  fecha_evento: string
  nombre_cliente: string
  whatsapp_cliente: string
  email_cliente: string
  precio_servicio: number
  porcentaje_pago: number
  monto_pagado: number
  bono_sorpresa: boolean
  estado_reserva: string
  estado_pago: string
  wompi_reference: string
  created_at: string
  confirmed_at: string | null
  servicio_nombre: string
  hora_inicio: string | null
}

const ESTADO_COLOR: Record<string, string> = {
  confirmada: '#2E7D32',
  pendiente_agendar: '#2E7D32',
  hold_pendiente_pago: '#C8A030',
  cancelada: '#B23A3A',
  expirada: '#9C9282',
  completada: '#3D2E20',
}

function formatCOP(v: number) {
  return v.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
}

function formatFechaHora(iso: string) {
  return new Date(iso).toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' })
}

export default function AdminView({ reservas }: { reservas: ReservaAdmin[] }) {
  const [filtro, setFiltro] = useState<string>('todas')

  const resumen = useMemo(() => {
    const confirmadas = reservas.filter((r) => r.estado_pago === 'aprobado')
    const recaudado = confirmadas.reduce((acc, r) => acc + r.monto_pagado, 0)
    return {
      confirmadas: confirmadas.length,
      pendientes: reservas.filter((r) => r.estado_reserva === 'hold_pendiente_pago').length,
      canceladas: reservas.filter((r) => ['cancelada', 'expirada'].includes(r.estado_reserva)).length,
      recaudado,
    }
  }, [reservas])

  const visibles = filtro === 'todas' ? reservas : reservas.filter((r) => r.estado_reserva === filtro)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '32px 24px', maxWidth: 1200, margin: '0 auto', color: '#222' }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>Renacer por Dentro — Reservas</h1>
      <p style={{ color: '#666', marginBottom: 24, fontSize: 14 }}>
        {reservas.length} reservas totales ·{' '}
        <button onClick={() => window.location.reload()} style={{ border: 'none', background: 'none', color: '#2E7D32', cursor: 'pointer', textDecoration: 'underline' }}>
          Actualizar
        </button>
      </p>

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ background: '#F7F3EE', padding: '14px 20px', borderRadius: 6, minWidth: 140 }}>
          <div style={{ fontSize: 12, color: '#7A6A52' }}>Confirmadas</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: '#2E7D32' }}>{resumen.confirmadas}</div>
        </div>
        <div style={{ background: '#F7F3EE', padding: '14px 20px', borderRadius: 6, minWidth: 140 }}>
          <div style={{ fontSize: 12, color: '#7A6A52' }}>Pendientes de pago</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: '#C8A030' }}>{resumen.pendientes}</div>
        </div>
        <div style={{ background: '#F7F3EE', padding: '14px 20px', borderRadius: 6, minWidth: 140 }}>
          <div style={{ fontSize: 12, color: '#7A6A52' }}>Canceladas/expiradas</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: '#B23A3A' }}>{resumen.canceladas}</div>
        </div>
        <div style={{ background: '#F7F3EE', padding: '14px 20px', borderRadius: 6, minWidth: 180 }}>
          <div style={{ fontSize: 12, color: '#7A6A52' }}>Recaudado (abonos aprobados)</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: '#3D2E20' }}>{formatCOP(resumen.recaudado)}</div>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        {['todas', 'confirmada', 'pendiente_agendar', 'hold_pendiente_pago', 'cancelada', 'expirada'].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            style={{
              marginRight: 8,
              marginBottom: 8,
              padding: '6px 14px',
              borderRadius: 14,
              border: '1px solid #ddd',
              background: filtro === f ? '#3D2E20' : '#fff',
              color: filtro === f ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {f === 'todas' ? 'Todas' : f.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
              <th style={{ padding: '8px 10px' }}>Cliente</th>
              <th style={{ padding: '8px 10px' }}>Contacto</th>
              <th style={{ padding: '8px 10px' }}>Servicio</th>
              <th style={{ padding: '8px 10px' }}>Cuándo</th>
              <th style={{ padding: '8px 10px' }}>Abono</th>
              <th style={{ padding: '8px 10px' }}>Estado</th>
              <th style={{ padding: '8px 10px' }}>Creada</th>
            </tr>
          </thead>
          <tbody>
            {visibles.map((r) => (
              <tr key={r.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px 10px', fontWeight: 500 }}>
                  {r.nombre_cliente}
                  {r.bono_sorpresa && ' 🎁'}
                </td>
                <td style={{ padding: '8px 10px' }}>
                  <div>{r.whatsapp_cliente}</div>
                  <div style={{ color: '#888' }}>{r.email_cliente}</div>
                </td>
                <td style={{ padding: '8px 10px' }}>
                  {r.servicio_nombre}
                  <div style={{ color: '#888' }}>{r.modalidad === 'manana_sueroterapia' ? 'Sueroterapia' : 'Paquete tarde'}</div>
                </td>
                <td style={{ padding: '8px 10px' }}>
                  {new Date(r.fecha_evento).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })}
                  {r.hora_inicio && ` · ${r.hora_inicio.slice(0, 5)}`}
                </td>
                <td style={{ padding: '8px 10px' }}>
                  {formatCOP(r.monto_pagado)} <span style={{ color: '#888' }}>({r.porcentaje_pago}%)</span>
                </td>
                <td style={{ padding: '8px 10px' }}>
                  <span style={{ color: ESTADO_COLOR[r.estado_reserva] ?? '#333', fontWeight: 500 }}>{r.estado_reserva.replace(/_/g, ' ')}</span>
                </td>
                <td style={{ padding: '8px 10px', color: '#888' }}>{formatFechaHora(r.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibles.length === 0 && <p style={{ padding: 20, color: '#888' }}>No hay reservas en este filtro.</p>}
      </div>
    </div>
  )
}

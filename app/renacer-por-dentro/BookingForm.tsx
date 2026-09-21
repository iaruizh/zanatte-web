'use client'
import { useEffect, useState } from 'react'
import type { Servicio, ModalidadReserva } from '@/lib/db'
import styles from './BookingForm.module.css'

declare global {
  interface Window {
    WidgetCheckout: new (config: Record<string, unknown>) => { open: (cb: (result: unknown) => void) => void }
  }
}

const FECHAS = [
  { valor: '2026-10-10', etiqueta: 'Sábado 10 de octubre' },
  { valor: '2026-10-11', etiqueta: 'Domingo 11 de octubre' },
]

type Paso = 'modalidad' | 'servicio' | 'fecha' | 'slot' | 'datos' | 'pago' | 'exito'

interface Slot {
  id: number
  horaInicio: string
  cuposDisponibles: number
}

function formatCOP(valor: number) {
  return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
}

export default function BookingForm() {
  const [abierto, setAbierto] = useState(false)
  const [paso, setPaso] = useState<Paso>('modalidad')
  const [servicios, setServicios] = useState<Servicio[]>([])
  const [modalidad, setModalidad] = useState<ModalidadReserva | null>(null)
  const [servicio, setServicio] = useState<Servicio | null>(null)
  const [fecha, setFecha] = useState<string | null>(null)
  const [slots, setSlots] = useState<Slot[]>([])
  const [slot, setSlot] = useState<Slot | null>(null)
  const [porcentaje, setPorcentaje] = useState<50 | 100>(50)
  const [nombre, setNombre] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const abrir = () => {
      setAbierto(true)
      setPaso('modalidad')
      setError(null)
    }
    window.addEventListener('abrir-reserva', abrir)
    return () => window.removeEventListener('abrir-reserva', abrir)
  }, [])

  useEffect(() => {
    if (!abierto || servicios.length > 0) return
    fetch('/api/servicios')
      .then((r) => r.json())
      .then((d) => setServicios(d.servicios ?? []))
      .catch(() => setError('No pudimos cargar el catálogo, intenta de nuevo.'))
  }, [abierto, servicios.length])

  useEffect(() => {
    if (!document.getElementById('wompi-widget-script')) {
      const script = document.createElement('script')
      script.id = 'wompi-widget-script'
      script.src = 'https://checkout.wompi.co/widget.js'
      document.body.appendChild(script)
    }
  }, [])

  function cerrar() {
    setAbierto(false)
    setPaso('modalidad')
    setModalidad(null)
    setServicio(null)
    setFecha(null)
    setSlot(null)
    setSlots([])
    setPorcentaje(50)
    setNombre('')
    setWhatsapp('')
    setEmail('')
    setError(null)
  }

  function elegirModalidad(m: ModalidadReserva) {
    setModalidad(m)
    setServicio(null)
    setPaso('servicio')
  }

  function elegirServicio(s: Servicio) {
    setServicio(s)
    setPaso('fecha')
  }

  async function elegirFecha(f: string) {
    setFecha(f)
    if (modalidad === 'manana_sueroterapia') {
      setCargando(true)
      setError(null)
      try {
        const res = await fetch(`/api/disponibilidad?fecha=${f}`)
        const data = await res.json()
        setSlots(data.slots ?? [])
        setPaso('slot')
      } catch {
        setError('No pudimos cargar los horarios disponibles.')
      } finally {
        setCargando(false)
      }
    } else {
      setPaso('datos')
    }
  }

  function elegirSlot(s: Slot) {
    setSlot(s)
    setPaso('datos')
  }

  function validarDatos(): string | null {
    if (!nombre.trim()) return 'Falta tu nombre completo.'
    if (!/^\+?[0-9 ]{7,15}$/.test(whatsapp.trim())) return 'Ingresa un número de WhatsApp válido.'
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return 'Ingresa un correo válido.'
    return null
  }

  async function confirmarYPagar() {
    const err = validarDatos()
    if (err) return setError(err)
    if (!servicio || !modalidad || !fecha) return
    setError(null)
    setCargando(true)
    try {
      const res = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          servicioId: servicio.id,
          modalidad,
          slotId: slot?.id ?? null,
          fechaEvento: fecha,
          nombreCliente: nombre.trim(),
          whatsappCliente: whatsapp.trim(),
          emailCliente: email.trim(),
          porcentajePago: porcentaje,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'No pudimos crear la reserva.')
        setCargando(false)
        return
      }

      if (!window.WidgetCheckout) {
        setError('El módulo de pago no cargó, recarga la página e intenta de nuevo.')
        setCargando(false)
        return
      }

      const checkout = new window.WidgetCheckout({
        currency: data.currency,
        amountInCents: data.amountInCents,
        reference: data.wompiReference,
        publicKey: data.publicKey,
        redirectUrl: `${window.location.origin}/renacer-por-dentro/gracias?ref=${data.wompiReference}`,
        signature: { integrity: data.signature },
      })
      setCargando(false)
      checkout.open(() => {
        // La confirmacion real llega por el webhook; aqui solo mostramos el mensaje de cierre.
        setPaso('exito')
      })
    } catch {
      setError('Ocurrió un error creando la reserva, intenta de nuevo.')
      setCargando(false)
    }
  }

  if (!abierto) return null

  const catalogo = servicios.filter((s) =>
    modalidad === 'manana_sueroterapia' ? s.disponible_manana : s.disponible_tarde
  )
  const monto = servicio ? Math.round((servicio.precio * porcentaje) / 100) : 0

  return (
    <div className={styles.overlay} onClick={cerrar}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={cerrar} aria-label="Cerrar">×</button>
        <span className={styles.eyebrow}>Renacer por dentro</span>
        <h3 className={styles.title}>Reserva tu cupo</h3>

        {error && <div className={styles.error}>{error}</div>}

        {paso === 'modalidad' && (
          <>
            <div className={styles.stepLabel}>¿Qué quieres reservar?</div>
            <div className={styles.optionGrid}>
              <button className={styles.optionCard} onClick={() => elegirModalidad('manana_sueroterapia')}>
                <div>
                  <div className={styles.optionName}>Sueroterapia — mañana</div>
                  <div className={styles.optionMeta}>10 y 11 de oct · 7:00am a 12:00pm · horario fijo</div>
                </div>
              </button>
              <button className={styles.optionCard} onClick={() => elegirModalidad('tarde_paquete')}>
                <div>
                  <div className={styles.optionName}>Paquetes — tarde</div>
                  <div className={styles.optionMeta}>10 y 11 de oct · te contactamos para agendar la hora</div>
                </div>
              </button>
            </div>
          </>
        )}

        {paso === 'servicio' && (
          <>
            <div className={styles.stepLabel}>Elige el servicio</div>
            <div className={styles.optionGrid}>
              {catalogo.length === 0 && <div className={styles.loadingText}>Cargando catálogo…</div>}
              {catalogo.map((s) => (
                <button key={s.id} className={styles.optionCard} onClick={() => elegirServicio(s)}>
                  <div>
                    <div className={styles.optionName}>{s.nombre}</div>
                    {s.duracion_min && <div className={styles.optionMeta}>{s.duracion_min} min aprox.</div>}
                  </div>
                  <div className={styles.optionPrice}>{formatCOP(s.precio)}</div>
                </button>
              ))}
            </div>
            <div className={styles.actions}>
              <button className={styles.btnBack} onClick={() => setPaso('modalidad')}>← Atrás</button>
            </div>
          </>
        )}

        {paso === 'fecha' && (
          <>
            <div className={styles.stepLabel}>Elige la fecha</div>
            <div className={styles.optionGrid}>
              {FECHAS.map((f) => (
                <button key={f.valor} className={styles.optionCard} onClick={() => elegirFecha(f.valor)}>
                  <div className={styles.optionName}>{f.etiqueta}</div>
                </button>
              ))}
            </div>
            {cargando && <div className={styles.loadingText}>Cargando horarios…</div>}
            <div className={styles.actions}>
              <button className={styles.btnBack} onClick={() => setPaso('servicio')}>← Atrás</button>
            </div>
          </>
        )}

        {paso === 'slot' && (
          <>
            <div className={styles.stepLabel}>Elige el horario ({fecha === '2026-10-10' ? 'Sáb 10' : 'Dom 11'})</div>
            <div className={styles.slotGrid}>
              {slots.map((s) => (
                <button
                  key={s.id}
                  className={`${styles.slotBtn} ${slot?.id === s.id ? styles.selected : ''}`}
                  disabled={s.cuposDisponibles <= 0}
                  onClick={() => elegirSlot(s)}
                >
                  {s.horaInicio.slice(0, 5)} {s.cuposDisponibles <= 0 ? '(lleno)' : `· ${s.cuposDisponibles} cupos`}
                </button>
              ))}
            </div>
            <div className={styles.actions}>
              <button className={styles.btnBack} onClick={() => setPaso('fecha')}>← Atrás</button>
            </div>
          </>
        )}

        {paso === 'datos' && servicio && (
          <>
            <div className={styles.stepLabel}>Tus datos y el abono</div>
            <div className={styles.field}>
              <label>Nombre completo</label>
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Como en tu cédula" />
            </div>
            <div className={styles.field}>
              <label>WhatsApp</label>
              <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="Ej. 3001234567" />
            </div>
            <div className={styles.field}>
              <label>Correo</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tucorreo@email.com" />
            </div>

            <div className={styles.porcentajeGrid}>
              <button
                className={`${styles.porcentajeBtn} ${porcentaje === 50 ? styles.selected : ''}`}
                onClick={() => setPorcentaje(50)}
              >
                <span className="pct">50%</span>
                <span className="amt">{formatCOP(Math.round(servicio.precio * 0.5))} ahora</span>
              </button>
              <button
                className={`${styles.porcentajeBtn} ${porcentaje === 100 ? styles.selected : ''}`}
                onClick={() => setPorcentaje(100)}
              >
                <span className="pct">100%</span>
                <span className="amt">{formatCOP(servicio.precio)} ahora</span>
              </button>
            </div>
            {porcentaje === 100 && <div className={styles.bonoNote}>✦ Pagando el 100% recibes un bono sorpresa adicional.</div>}

            <div className={styles.summary}>
              <div><strong>{servicio.nombre}</strong> — {formatCOP(servicio.precio)}</div>
              <div>{fecha === '2026-10-10' ? 'Sábado 10 de octubre' : 'Domingo 11 de octubre'}{slot ? ` · ${slot.horaInicio.slice(0, 5)}` : ' · tarde (te contactamos para agendar)'}</div>
              <div>Abonas hoy: <strong>{formatCOP(monto)}</strong></div>
              <div>Restante en el lugar: {formatCOP(servicio.precio - monto)} + adicionales que elijas ese día</div>
            </div>

            <div className={styles.actions}>
              <button className={styles.btnBack} onClick={() => setPaso(modalidad === 'manana_sueroterapia' ? 'slot' : 'fecha')}>← Atrás</button>
              <button className={styles.btnNext} onClick={confirmarYPagar} disabled={cargando}>
                {cargando ? 'Procesando…' : `Pagar ${formatCOP(monto)}`}
              </button>
            </div>
          </>
        )}

        {paso === 'exito' && (
          <div className={styles.successBox}>
            <div className={styles.optionName}>¡Listo!</div>
            <p>
              Si tu pago fue aprobado, te llegará la confirmación y muy pronto te escribiremos por WhatsApp
              para cualquier detalle de tu cita. Si el pago no pasó, puedes intentar de nuevo cuando quieras.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnNext} onClick={cerrar}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

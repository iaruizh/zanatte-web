'use client'
import { useRef, useEffect } from 'react'

const pasos = [
  { n: '01', title: 'Recepción y valoración', desc: 'Conversamos contigo para entender qué necesita tu cuerpo hoy.' },
  { n: '02', title: 'Suero personalizado', desc: 'Elegimos la fórmula ideal según tu objetivo: energía, defensas, piel o recuperación.' },
  { n: '03', title: 'Aplicación en ambiente relajado', desc: 'Procedimiento cómodo, seguro y supervisado por profesionales certificados.' },
  { n: '04', title: 'Recarga y bienestar inmediato', desc: 'Sales sintiendo la diferencia: más ligereza, más energía, más tú.' },
]

const razones = [
  'Profesionales certificados',
  'Productos seguros y de calidad',
  'Ambiente cómodo y privado',
  'Resultados que se sienten desde el día uno',
]

export function RenacerProceso() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(40px)'
      ref.current.style.transition = 'opacity 1s ease, transform 1s ease'
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ padding: '100px 40px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--green-oliva)', marginBottom: '24px' }}>
            Cómo vivirás tu jornada
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--bark)', marginBottom: '16px' }}>
            Cuatro pasos, <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>una sola sesión.</em>
          </h2>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '0 auto' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {pasos.map((p, i) => (
            <div key={p.n} style={{
              display: 'flex', gap: '32px', paddingBottom: i < pasos.length - 1 ? '40px' : 0,
              borderLeft: '1px solid rgba(180,164,138,0.3)', marginLeft: '28px', paddingLeft: '36px',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute', left: '-28px', top: 0,
                fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontStyle: 'italic',
                color: 'var(--gold)', background: 'var(--cream)', width: '56px', textAlign: 'center',
              }}>{p.n}</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--earth)', lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', paddingTop: '56px', borderTop: '1px solid rgba(180,164,138,0.25)' }}>
          <p style={{ textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--green-oliva)', marginBottom: '32px' }}>
            Por qué unirte
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px 32px' }}>
            {razones.map((r) => (
              <div key={r} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--green-oliva)', fontStyle: 'italic' }}>✓</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--bark)', fontWeight: 300 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

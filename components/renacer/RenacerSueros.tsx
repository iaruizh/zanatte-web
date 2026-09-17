'use client'
import { useRef, useEffect } from 'react'

const sueros = [
  { nombre: 'Revitalizante', desc: 'Vitaminas y antioxidantes que devuelven la energía del día a día.', para: 'Cansancio acumulado', icono: '◉' },
  { nombre: 'Inmunológico', desc: 'Fortalece tus defensas frente a los males de temporada.', para: 'Prevención', icono: '⊕' },
  { nombre: 'Detox', desc: 'Elimina toxinas, mejora la digestión y purifica el organismo.', para: 'Limpieza interna', icono: '∿' },
  { nombre: 'Antiaging', desc: 'Retrasa el envejecimiento celular y mejora la luminosidad de la piel.', para: 'Piel y vitalidad', icono: '◈' },
  { nombre: 'Recuperación', desc: 'Repone minerales, rehidrata y reduce la inflamación post-esfuerzo.', para: 'Después del ejercicio', icono: '♡' },
]

export function RenacerSueros() {
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
    <section id="sueros" ref={ref} style={{ padding: '100px 40px', background: 'var(--cream-deep)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--green-oliva)', marginBottom: '24px',
          }}>
            Nuestros sueros
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--bark)', marginBottom: '16px' }}>
            Elige el que <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>tu cuerpo</em> te está pidiendo.
          </h2>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px', background: 'rgba(180,164,138,0.25)',
        }}>
          {sueros.map((s) => (
            <div
              key={s.nombre}
              style={{ padding: '40px 32px', background: 'var(--cream)', transition: 'background 0.4s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold)', display: 'block', marginBottom: '20px' }}>{s.icono}</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '12px' }}>{s.nombre}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--earth)', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>{s.desc}</p>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)' }}>{s.para}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

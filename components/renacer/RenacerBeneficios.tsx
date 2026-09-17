'use client'
import { useRef, useEffect } from 'react'

const beneficios = [
  { nombre: 'Sistema inmune más fuerte', desc: 'Refuerza tus defensas y te ayuda a prevenir los males de temporada.', icono: '⊕' },
  { nombre: 'Más energía y vitalidad', desc: 'Vitaminas y antioxidantes que combaten el cansancio acumulado.', icono: '◉' },
  { nombre: 'Piel más radiante', desc: 'Hidratación celular que se nota en la luminosidad de tu piel.', icono: '◯' },
  { nombre: 'Desintoxicación celular', desc: 'Ayuda a tu cuerpo a eliminar lo que ya no necesita.', icono: '∿' },
]

export function RenacerBeneficios() {
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
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--green-oliva)', marginBottom: '24px',
          }}>
            Lo que tu cuerpo recibe
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300,
            color: 'var(--bark)', marginBottom: '16px', maxWidth: '640px', margin: '0 auto 16px',
          }}>
            Un <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>reset</em> para tu cuerpo, tu energía y tu manera de sentirte contigo mismo.
          </h2>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px', background: 'rgba(180,164,138,0.2)',
        }}>
          {beneficios.map((b) => (
            <div
              key={b.nombre}
              style={{ padding: '40px 28px', background: 'var(--cream)', transition: 'background 0.4s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream-deep)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold)', display: 'block', marginBottom: '18px' }}>{b.icono}</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '10px' }}>{b.nombre}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--earth)', lineHeight: 1.7, fontWeight: 300 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

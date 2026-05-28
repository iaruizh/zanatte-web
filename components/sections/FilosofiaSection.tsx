'use client'
import { useRef, useEffect } from 'react'

export function FilosofiaSection() {
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
      { threshold: 0.2 }
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
    <section
      id="filosofia"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--cream-deep)',
        borderTop: '1px solid rgba(180,164,138,0.2)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--green-oliva)',
          marginBottom: '48px',
          fontWeight: 400,
        }}>
          Nuestra filosofía
        </p>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 300,
          color: 'var(--bark)',
          lineHeight: 1.2,
          marginBottom: '32px',
        }}>
          La desconexión también<br />
          <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>se manifiesta en el cuerpo.</em>
        </h2>

        <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '48px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--earth)',
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: '24px',
            }}>
              La mayoría de los malestares que experimentamos no tienen una sola causa.
              Nos enfermamos desde lo biológico y lo psicoemocional — desde nuestros hábitos,
              nuestras emociones no procesadas, nuestra desconexión con el cuerpo y el entorno.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--earth)',
              lineHeight: 1.9,
              fontWeight: 300,
            }}>
              En ZANATTE no tratamos síntomas. Acompañamos procesos. Exploramos la raíz
              de cada desequilibrio y construimos juntos un camino hacia la restauración integral.
            </p>
          </div>

          <div style={{
            padding: '48px 40px',
            border: '1px solid rgba(180,164,138,0.3)',
            background: 'rgba(247,243,238,0.6)',
          }}>
            {[
              { icon: '◯', title: 'Cuerpo', desc: 'Restauración física profunda mediante terapias integrativas' },
              { icon: '◎', title: 'Emoción', desc: 'Acompañamiento del paisaje emocional como origen del malestar' },
              { icon: '◉', title: 'Consciencia', desc: 'Reconexión con el propósito y el sentido de vida' },
            ].map((item) => (
              <div key={item.title} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                marginBottom: '32px', paddingBottom: '32px',
                borderBottom: '1px solid rgba(180,164,138,0.15)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  color: 'var(--gold)',
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: '2px',
                }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--bark)',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}>{item.title}</p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--earth)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

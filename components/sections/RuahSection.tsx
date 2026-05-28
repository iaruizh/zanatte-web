'use client'
import { useRef, useEffect } from 'react'

export function RuahSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = '1'
              child.style.transform = 'translateY(0)'
            }, i * 200)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="ruah"
      ref={ref}
      style={{
        padding: '140px 40px',
        background: 'var(--ruah-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Atmósfera */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(160,104,64,0.12) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 80%, rgba(107,123,94,0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>

        <p
          data-reveal
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.62rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--ruah-copper)',
            marginBottom: '48px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          La experiencia insignia
        </p>

        <h2
          data-reveal
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            fontWeight: 300,
            color: '#F0E8D8',
            lineHeight: 1,
            marginBottom: '8px',
            letterSpacing: '0.05em',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          RUAH
        </h2>

        <p
          data-reveal
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: 'var(--ruah-copper)',
            fontStyle: 'italic',
            marginBottom: '64px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          Restauración y Reconexión Integral
        </p>

        <div
          data-reveal
          style={{
            width: '1px', height: '60px',
            background: 'linear-gradient(to bottom, var(--ruah-copper), transparent)',
            margin: '0 auto 64px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        />

        <p
          data-reveal
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#D8CFC0',
            lineHeight: 1.6,
            fontWeight: 300,
            marginBottom: '32px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          "RUAH no es una terapia.
        </p>

        <p
          data-reveal
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#D8CFC0',
            lineHeight: 1.6,
            fontWeight: 300,
            fontStyle: 'italic',
            marginBottom: '64px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          Es una experiencia de reconexión."
        </p>

        <p
          data-reveal
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            color: '#A09080',
            lineHeight: 1.9,
            fontWeight: 300,
            maxWidth: '600px',
            margin: '0 auto 80px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          Tres horas de restauración profunda. Una conversación terapéutica, preparación consciente
          y activación corporal mediante vapor medicinal. Una experiencia diseñada para quienes
          buscan algo más que alivio: buscan transformación.
        </p>

        {/* Stats */}
        <div
          data-reveal
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            marginBottom: '80px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {[
            { num: '3', label: 'Horas de experiencia' },
            { num: '3', label: 'Fases de restauración' },
            { num: '1', label: 'Experiencia única' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '3rem',
                color: 'var(--ruah-copper)',
                fontWeight: 300,
                lineHeight: 1,
                marginBottom: '8px',
              }}>{s.num}</p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#706050',
              }}>{s.label}</p>
            </div>
          ))}
        </div>

        <a
          data-reveal
          href="https://wa.me/573144114302?text=Hola,%20quiero%20información%20sobre%20la%20experiencia%20RUAH"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#F0E8D8',
            border: '1px solid rgba(160,104,64,0.4)',
            padding: '18px 48px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.4s',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--ruah-copper)'
            e.currentTarget.style.borderColor = 'var(--ruah-copper)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(160,104,64,0.4)'
          }}
        >
          Entrar a la experiencia
        </a>
      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section
      id="inicio"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '120px 40px 80px',
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo sutil */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 60% 40%, rgba(200,169,110,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 80%, rgba(107,123,94,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Eyebrow */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.65rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--green-oliva)',
        marginBottom: '32px',
        fontWeight: 400,
      }}>
        Bogotá, Colombia · Centro Holointegrativo
      </p>

      {/* Headline principal */}
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(3rem, 7vw, 6.5rem)',
        fontWeight: 300,
        color: 'var(--bark)',
        lineHeight: 1.05,
        maxWidth: '900px',
        marginBottom: '16px',
        letterSpacing: '-0.01em',
      }}>
        Experiencias de restauración
      </h1>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(3rem, 7vw, 6.5rem)',
        fontWeight: 300,
        color: 'var(--green-oliva)',
        lineHeight: 1.05,
        maxWidth: '900px',
        marginBottom: '40px',
        fontStyle: 'italic',
        letterSpacing: '-0.01em',
      }}>
        física, emocional y espiritual.
      </h1>

      {/* Línea divisora */}
      <div style={{
        width: '48px', height: '1px',
        background: 'var(--gold)',
        margin: '0 auto 40px',
      }} />

      {/* Subtítulo */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
        color: 'var(--earth)',
        maxWidth: '560px',
        lineHeight: 1.9,
        fontWeight: 300,
        marginBottom: '56px',
      }}>
        Un ecosistema de bienestar donde la ciencia, la humanidad y la consciencia
        se integran para acompañar procesos reales de transformación.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="#ruah"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            background: 'var(--bark)',
            padding: '16px 36px',
            textDecoration: 'none',
            transition: 'background 0.4s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-oliva)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--bark)')}
        >
          Descubrir RUAH
        </a>
        <a
          href="#experiencias"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--earth)',
            border: '1px solid var(--sand)',
            padding: '16px 36px',
            textDecoration: 'none',
            transition: 'all 0.4s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--earth)'
            e.currentTarget.style.color = 'var(--bark)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--sand)'
            e.currentTarget.style.color = 'var(--earth)'
          }}
        >
          Ver experiencias
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--stone)',
        }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--stone), transparent)',
          animation: 'scrollLine 2s ease infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        }
      `}</style>
    </section>
  )
}

'use client'
import { useRef, useEffect } from 'react'
import { BOOKING_WHATSAPP_URL } from './bookingLink'

export function RenacerHero() {
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
      ref={ref}
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '160px 40px 80px',
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 60% 30%, rgba(200,169,110,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 15% 85%, rgba(107,123,94,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.3em',
        textTransform: 'uppercase', color: 'var(--green-oliva)', marginBottom: '32px', fontWeight: 400,
      }}>
        Bogotá · Jornada especial de Sueroterapia
      </p>

      <h1 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.4rem, 9vw, 7.5rem)', fontWeight: 300,
        color: 'var(--bark)', lineHeight: 1, marginBottom: '4px', letterSpacing: '-0.01em',
      }}>
        Renacer
      </h1>
      <h1 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300,
        color: 'var(--green-oliva)', lineHeight: 1.1, marginBottom: '40px', fontStyle: 'italic',
      }}>
        por dentro
      </h1>

      <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '0 auto 40px' }} />

      <p style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
        color: 'var(--earth)', maxWidth: '560px', lineHeight: 1.7, fontWeight: 300, marginBottom: '56px',
      }}>
        No es solo un suero. Es un espacio para que tu cuerpo, tu energía y tu manera
        de sentirte contigo mismo vuelvan a empezar.
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href={BOOKING_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--cream)', background: 'var(--bark)',
            padding: '16px 36px', textDecoration: 'none', transition: 'background 0.4s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-oliva)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--bark)')}
        >
          Reservar mi cupo
        </a>
        <a
          href="#sueros"
          style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--earth)', border: '1px solid var(--sand)',
            padding: '16px 36px', textDecoration: 'none', transition: 'all 0.4s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--earth)'; e.currentTarget.style.color = 'var(--bark)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--sand)'; e.currentTarget.style.color = 'var(--earth)' }}
        >
          Ver los sueros
        </a>
      </div>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--stone)', marginTop: '28px',
      }}>
        Cupos limitados · Respuesta inmediata por WhatsApp
      </p>
    </section>
  )
}

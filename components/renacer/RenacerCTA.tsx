'use client'
import { useRef, useEffect } from 'react'
import { BOOKING_WHATSAPP_URL } from './bookingLink'

export function RenacerCTA() {
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
            }, i * 150)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const reveal = { opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }

  return (
    <section ref={ref} style={{ padding: '140px 40px', background: 'var(--ruah-dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(160,104,64,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 80%, rgba(107,123,94,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <p data-reveal style={{ ...reveal, fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--ruah-copper)', marginBottom: '40px' }}>
          Cupos limitados
        </p>

        <h2 data-reveal style={{ ...reveal, fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 300, color: '#F0E8D8', lineHeight: 1.05, marginBottom: '28px' }}>
          Tu cuerpo ya te está<br /><em style={{ color: 'var(--ruah-copper)', fontStyle: 'italic' }}>pidiendo este espacio.</em>
        </h2>

        <p data-reveal style={{ ...reveal, fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: '#A09080', lineHeight: 1.9, fontWeight: 300, maxWidth: '460px', margin: '0 auto 56px' }}>
          Escríbenos por WhatsApp y te confirmamos tu cupo para Renacer por Dentro,
          la jornada de sueroterapia de Zanatte.
        </p>

        <a
          data-reveal
          href={BOOKING_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...reveal, fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#F0E8D8', border: '1px solid rgba(160,104,64,0.4)',
            padding: '18px 48px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.4s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--ruah-copper)'; e.currentTarget.style.borderColor = 'var(--ruah-copper)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(160,104,64,0.4)' }}
        >
          Reservar mi cupo
        </a>

        <p data-reveal style={{ ...reveal, fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.1em', color: '#706050', marginTop: '32px' }}>
          302 333 3830 · 310 476 2206
        </p>
      </div>
    </section>
  )
}

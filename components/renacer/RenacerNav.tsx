'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BOOKING_WHATSAPP_URL } from './bookingLink'

export function RenacerNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '12px 40px' : '24px 40px',
        background: scrolled ? 'rgba(247,243,238,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(180,164,138,0.2)' : 'none',
        transition: 'all 0.5s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Image src="/images/logo-zanatte.png" alt="Zanatte" width={120} height={38} style={{ objectFit: 'contain' }} />
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--stone)', display: 'none',
        }} />
      </a>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--earth)', textDecoration: 'none',
          }}
        >
          ← Zanatte
        </a>
        <a
          href={BOOKING_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--cream)', background: 'var(--green-oliva)',
            padding: '10px 20px', textDecoration: 'none', transition: 'background 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--bark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--green-oliva)')}
        >
          Reservar
        </a>
      </div>
    </nav>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#filosofia', label: 'Filosofía' },
    { href: '#experiencias', label: 'Experiencias' },
    { href: '#ruah', label: 'RUAH' },
    { href: '#ivan', label: 'Iván' },
    { href: '#contacto', label: 'Contacto' },
  ]

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
      <a href="#inicio">
        <Image
          src="/images/logo-zanatte.png"
          alt="Zanatte"
          width={140}
          height={45}
          style={{ objectFit: 'contain' }}
        />
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--earth)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--bark)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--earth)')}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://wa.me/573144114302"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            background: 'var(--green-oliva)',
            padding: '10px 20px',
            textDecoration: 'none',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--bark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--green-oliva)')}
        >
          Agendar
        </a>
      </div>
    </nav>
  )
}

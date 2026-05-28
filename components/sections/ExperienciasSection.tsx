'use client'
import { useRef, useEffect } from 'react'

const experiencias = [
  {
    nombre: 'Valoración Integral',
    desc: 'Diagnóstico iridiológico, quantum electromagnético y psicoterapia breve. El punto de partida de todo proceso.',
    duracion: '20–40 min',
    icono: '◎',
  },
  {
    nombre: 'Hipertermia',
    desc: 'Tu cuerpo combate con calor. Simulación de fiebre controlada — la desintoxicación más poderosa.',
    duracion: '1 hora',
    icono: '◉',
  },
  {
    nombre: 'Masaje Reestructurativo',
    desc: 'Desbloquea memorias celulares almacenadas en el tejido conjuntivo. Restauración profunda.',
    duracion: '30–40 min',
    icono: '◯',
  },
  {
    nombre: 'Terapia de Hologramas',
    desc: 'Gran impacto contra el dolor. No invasiva, resultados inmediatos. Estimula mecanismos autocurativos.',
    duracion: '10–20 min',
    icono: '⬡',
  },
  {
    nombre: 'Gemoterapia',
    desc: 'Uso energético de minerales para activar la autocuración latente. Limpieza y equilibrio.',
    duracion: '20 min',
    icono: '◈',
  },
  {
    nombre: 'Terapia de Vapor',
    desc: 'Sesión de ortiga y vapor de plantas. Purifica, desintoxica y estimula el sistema nervioso.',
    duracion: '30 min',
    icono: '∿',
  },
  {
    nombre: 'Biomagnetismo',
    desc: 'Terapia complementaria con imanes. Mejora circulación, reduce inflamación, fortalece defensas.',
    duracion: '20 min',
    icono: '⊕',
  },
  {
    nombre: 'Acompañamiento Emocional',
    desc: 'Psicoterapia breve y biodescodificación. El componente emocional como causa real de la enfermedad.',
    duracion: 'Variable',
    icono: '♡',
  },
]

export function ExperienciasSection() {
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
    <section
      id="experiencias"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--cream)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--green-oliva)',
            marginBottom: '24px',
          }}>
            Nuestras experiencias
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: 'var(--bark)',
            marginBottom: '16px',
          }}>
            No son servicios.{' '}
            <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>Son experiencias.</em>
          </h2>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(180,164,138,0.2)',
        }}>
          {experiencias.map((exp) => (
            <div
              key={exp.nombre}
              style={{
                padding: '40px 32px',
                background: 'var(--cream)',
                transition: 'background 0.4s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream-deep)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
            >
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: '20px',
              }}>{exp.icono}</span>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--bark)',
                marginBottom: '12px',
              }}>{exp.nombre}</h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--earth)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '20px',
              }}>{exp.desc}</p>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--stone)',
              }}>{exp.duracion}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            href="https://wa.me/573144114302"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--green-oliva)',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.4s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--bark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--green-oliva)')}
          >
            Agendar experiencia
          </a>
        </div>
      </div>
    </section>
  )
}

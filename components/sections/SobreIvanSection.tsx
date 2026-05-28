'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

export function SobreIvanSection() {
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
      { threshold: 0.15 }
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
      id="ivan"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: 'var(--cream-deep)',
        borderTop: '1px solid rgba(180,164,138,0.2)',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Foto */}
        <div style={{
          position: 'relative',
          aspectRatio: '3/4',
          overflow: 'hidden',
          border: '1px solid rgba(180,164,138,0.2)',
        }}>
          <Image
            src="/images/ivan-ruiz-hero.jpg"
            alt="Iván Alejandro Ruiz — Fundador de Zanatte"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            padding: '32px',
            background: 'linear-gradient(to top, rgba(26,20,16,0.8), transparent)',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: '#F0E8D8',
              fontWeight: 300,
              marginBottom: '4px',
            }}>Iván Alejandro Ruiz</p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(200,180,140,0.8)',
            }}>Fundador · Terapeuta Holointegrativo</p>
          </div>
        </div>

        {/* Texto */}
        <div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--green-oliva)',
            marginBottom: '32px',
          }}>
            Quién está detrás
          </p>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 300,
            color: 'var(--bark)',
            lineHeight: 1.2,
            marginBottom: '32px',
          }}>
            Un ingeniero que encontró<br />
            <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>el camino de la restauración humana.</em>
          </h2>

          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '40px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--earth)',
              lineHeight: 1.9,
              fontWeight: 300,
            }}>
              Soy Ingeniero Mecatrónico de la Universidad Nacional de Colombia y Terapeuta
              Holointegrativo certificado. Esa combinación no es accidental — es la esencia de todo mi trabajo.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--earth)',
              lineHeight: 1.9,
              fontWeight: 300,
            }}>
              Mi camino me llevó a entender que el cuerpo humano no es solo una máquina biológica.
              Es un sistema vivo donde las emociones, los hábitos, la energía y la consciencia
              están profundamente entrelazados.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--earth)',
              lineHeight: 1.9,
              fontWeight: 300,
            }}>
              Fundé ZANATTE con la visión de crear un ecosistema donde las personas pudieran
              comprender el origen real de su malestar y transitar hacia una transformación integral auténtica.
            </p>
          </div>

          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            color: 'var(--green-oliva)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.5,
            paddingLeft: '24px',
            borderLeft: '2px solid var(--gold)',
            marginBottom: '48px',
          }}>
            "Sana tu cuerpo, sana tu mente,<br />sana tu alma."
          </blockquote>

          <a
            href="https://ivanruizholistico.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--earth)',
              border: '1px solid var(--sand)',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
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
            Ver marca personal →
          </a>
        </div>
      </div>
    </section>
  )
}

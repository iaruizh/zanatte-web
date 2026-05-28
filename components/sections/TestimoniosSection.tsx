'use client'

export function TestimoniosSection() {
  return (
    <section
      id="testimonios"
      style={{
        padding: '120px 40px',
        background: 'var(--cream)',
        borderTop: '1px solid rgba(180,164,138,0.2)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--green-oliva)',
            marginBottom: '24px',
          }}>
            Voces de transformación
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: 'var(--bark)',
          }}>
            Lo que dicen quienes<br />
            <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>vivieron la experiencia.</em>
          </h2>
        </div>

        {/* Placeholders para testimonios */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(180,164,138,0.2)',
        }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              padding: '48px 40px',
              background: 'var(--cream)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '3rem',
                color: 'var(--gold)',
                lineHeight: 1,
              }}>"</span>
              <div style={{
                height: '80px',
                background: 'rgba(180,164,138,0.1)',
                borderRadius: '2px',
              }} />
              <div style={{
                height: '16px',
                background: 'rgba(180,164,138,0.1)',
                borderRadius: '2px',
                width: '60%',
              }} />
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--stone)',
              }}>Próximamente</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

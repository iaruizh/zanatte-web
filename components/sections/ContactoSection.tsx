'use client'

export function ContactoSection() {
  return (
    <section
      id="contacto"
      style={{
        padding: '120px 40px',
        background: 'var(--cream-deep)',
        borderTop: '1px solid rgba(180,164,138,0.2)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--green-oliva)',
            marginBottom: '32px',
          }}>
            Contacto
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: 'var(--bark)',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            El primer paso<br />
            <em style={{ color: 'var(--green-oliva)', fontStyle: 'italic' }}>es una conversación.</em>
          </h2>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '40px' }} />
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--earth)',
            lineHeight: 1.9,
            fontWeight: 300,
            marginBottom: '48px',
          }}>
            La valoración inicial no tiene costo. Escríbenos y cuéntanos qué estás viviendo.
            A partir de ahí, construimos juntos el camino.
          </p>

          <a
            href="https://wa.me/573144114302?text=Hola,%20quiero%20agendar%20una%20valoración%20integral%20en%20Zanatte"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--green-oliva)',
              padding: '18px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.4s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--bark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--green-oliva)')}
          >
            Escribir por WhatsApp
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center' }}>
          {[
            { icon: '📱', label: 'WhatsApp', value: '+57 314 411 4302' },
            { icon: '✉️', label: 'Email', value: 'iaruizh@gmail.com' },
            { icon: '📍', label: 'Dirección', value: 'Calle 1f #18-19, Bogotá, Colombia' },
            { icon: '🕐', label: 'Atención', value: 'Lunes a Sábado · Previa cita' },
            { icon: '🌐', label: 'Instagram', value: '@zanatte.c' },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{
              display: 'flex', gap: '20px', alignItems: 'flex-start',
              paddingBottom: '32px',
              borderBottom: '1px solid rgba(180,164,138,0.2)',
            }}>
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '2px' }}>{icon}</span>
              <div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--stone)',
                  marginBottom: '4px',
                }}>{label}</p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  color: 'var(--bark)',
                  fontWeight: 300,
                }}>{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

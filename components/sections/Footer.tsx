import Image from 'next/image'

export function Footer() {
  return (
    <footer style={{
      padding: '60px 40px',
      background: 'var(--bark)',
      borderTop: '1px solid rgba(180,164,138,0.1)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '32px',
      }}>
        <div>
          <Image
            src="/images/logo-zanatte-blanco.png"
            alt="Zanatte"
            width={120}
            height={40}
            style={{ objectFit: 'contain', marginBottom: '12px' }}
          />
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            color: 'rgba(247,243,238,0.4)',
            letterSpacing: '0.1em',
          }}>
            Experiencias de restauración integral · Bogotá, Colombia
          </p>
        </div>

        <div style={{ display: 'flex', gap: '40px' }}>
          {['Experiencias', 'RUAH', 'Sobre Iván', 'Contacto'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(247,243,238,0.4)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(247,243,238,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,243,238,0.4)')}
            >
              {l}
            </a>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.62rem',
          color: 'rgba(247,243,238,0.25)',
          letterSpacing: '0.08em',
        }}>
          © {new Date().getFullYear()} Zanatte · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

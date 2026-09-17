import Image from 'next/image'

export function RenacerFooter() {
  return (
    <footer style={{ padding: '48px 40px', background: 'var(--bark)', borderTop: '1px solid rgba(180,164,138,0.1)' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '24px',
      }}>
        <Image src="/images/logo-zanatte-blanco.png" alt="Zanatte" width={110} height={36} style={{ objectFit: 'contain' }} />
        <a href="/" style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(247,243,238,0.5)', textDecoration: 'none',
        }}>
          Volver a Zanatte.com.co
        </a>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', color: 'rgba(247,243,238,0.25)', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} Zanatte · Renacer por Dentro
        </p>
      </div>
    </footer>
  )
}

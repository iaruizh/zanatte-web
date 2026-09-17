import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renacer por Dentro · Jornada de Sueroterapia | Zanatte',
  description:
    'Jornada especial de sueroterapia Zanatte en Bogotá. Un reset para tu cuerpo, tu energía y tu manera de sentirte contigo mismo. Cupos limitados.',
}

export default function RenacerLayout({ children }: { children: React.ReactNode }) {
  return children
}

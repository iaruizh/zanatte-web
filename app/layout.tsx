import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zanatte | Experiencias de restauración física, emocional y espiritual',
  description: 'Zanatte es un ecosistema de bienestar y restauración integral en Bogotá, Colombia. Experiencias transformacionales que reconectan cuerpo, mente y espíritu.',
  keywords: 'zanatte, bienestar integral, hipertermia, restauración, bogotá, colombia, RUAH, experiencias terapéuticas',
  openGraph: {
    title: 'Zanatte | Restauración Integral',
    description: 'Experiencias de restauración física, emocional y espiritual.',
    url: 'https://zanatte.com.co',
    siteName: 'Zanatte',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/images/og-zanatte.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

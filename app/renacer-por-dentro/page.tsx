import type { Metadata } from 'next'
import { RenacerNav } from '@/components/renacer/RenacerNav'
import { RenacerHero } from '@/components/renacer/RenacerHero'
import { RenacerBeneficios } from '@/components/renacer/RenacerBeneficios'
import { RenacerSueros } from '@/components/renacer/RenacerSueros'
import { RenacerProceso } from '@/components/renacer/RenacerProceso'
import { RenacerCTA } from '@/components/renacer/RenacerCTA'
import { RenacerFooter } from '@/components/renacer/RenacerFooter'

export const metadata: Metadata = {
  title: 'Renacer por Dentro · Jornada de Sueroterapia | Zanatte',
  description:
    'Un reset para tu cuerpo, tu energía y tu manera de sentirte contigo mismo. Jornada especial de sueroterapia Zanatte en Bogotá. Cupos limitados.',
}

export default function RenacerPorDentroPage() {
  return (
    <>
      <RenacerNav />
      <RenacerHero />
      <RenacerBeneficios />
      <RenacerSueros />
      <RenacerProceso />
      <RenacerCTA />
      <RenacerFooter />
    </>
  )
}

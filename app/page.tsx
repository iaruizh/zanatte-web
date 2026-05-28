import { NavBar } from '@/components/sections/NavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { FilosofiaSection } from '@/components/sections/FilosofiaSection'
import { ExperienciasSection } from '@/components/sections/ExperienciasSection'
import { RuahSection } from '@/components/sections/RuahSection'
import { SobreIvanSection } from '@/components/sections/SobreIvanSection'
import { TestimoniosSection } from '@/components/sections/TestimoniosSection'
import { ContactoSection } from '@/components/sections/ContactoSection'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FilosofiaSection />
      <ExperienciasSection />
      <RuahSection />
      <SobreIvanSection />
      <TestimoniosSection />
      <ContactoSection />
      <Footer />
    </>
  )
}

'use client'
import { useEffect } from 'react'
import { RENACER_CSS, RENACER_BODY } from './renacer-content'
import BookingForm from './BookingForm'

export default function RenacerPorDentroPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RENACER_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: RENACER_BODY }} />
      <BookingForm />
    </>
  )
}

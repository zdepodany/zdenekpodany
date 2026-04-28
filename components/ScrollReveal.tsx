'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const selectors = [
      '.section-title', '.section-subtitle', '.service-card', '.process-step',
      '.about-layout', '.comparison-table', '.comparison-cta-button',
      '.comparison-cta', '.showcase-cta', '.testimonials-carousel',
      '.pricing-note', '.section-cta', '.value-compare-panel',
      '.faq-item', '.contact-form',
    ]

    const elements = document.querySelectorAll<HTMLElement>(selectors.join(', '))
    elements.forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}

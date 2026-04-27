'use client'

import BorderGlow from '@/components/ui/BorderGlow'

interface PricingCard {
  label: string
  title: string
  price: string
  description: string
  features: string[]
  featured?: boolean
  badge?: string
  ctaText: string
  ctaClass: string
  glowColor: string
}

const CARDS: PricingCard[] = [
  {
    label: 'Základ',
    title: 'Jednoduchý prezentační web',
    price: 'od 14 900 Kč',
    description: 'Základní web, který za vás pracuje i když spíte.',
    features: [
      'Design na míru podle vašeho podnikání',
      'Jednostránkový web',
      'Hosting na 2 měsíce zdarma',
      'Hotovo do 5–7 dní',
    ],
    ctaText: 'Mám zájem',
    ctaClass: 'btn btn-secondary btn-full pricing-card-btn',
    glowColor: '#3d8ef7',
  },
  {
    label: 'Doporučuji',
    title: 'Web na rozjezd podnikání',
    price: 'od 19 900 Kč',
    description: 'Web připravený přivést první zákazníky. Většina projektů vychází na 19 900–30 000 Kč podle rozsahu.',
    features: [
      'Design na míru podle vašeho podnikání',
      'Web s až 5 podstránkami',
      'Kontaktní formulář',
      'Nastavení custom emailu',
      'Hosting na 2 měsíce zdarma',
      'Hotovo do 2–4 týdnů',
    ],
    featured: true,
    badge: 'Nejoblíbenější',
    ctaText: 'Chci tento web',
    ctaClass: 'btn btn-full pricing-card-btn pricing-card-btn--featured',
    glowColor: '#006DEC',
  },
  {
    label: 'Analýza',
    title: 'UI/UX Audit',
    price: 'od 3 900 Kč',
    description: 'Osobně nebo online projdeme váš web a přesně pojmenujeme, co zákazníky odrazuje.',
    features: [
      'Řízený průchod webem či rozhraním',
      'Konkrétní návrhy úprav podle priority',
      'Stručná písemná zpráva',
      'Probíhá osobně i vzdáleně',
    ],
    ctaText: 'Mám zájem',
    ctaClass: 'btn btn-secondary btn-full pricing-card-btn',
    glowColor: '#3d8ef7',
  },
]

export default function PricingSection() {
  return (
    <section id="cenik" className="section pricing">
      <div className="container">
        <h2 className="section-title">Orientační ceník</h2>
        <p className="section-subtitle">Transparentní odhady – u každé služby víte, do čeho jdete.</p>
        <div className="pricing-grid">
          {CARDS.map((card, i) => (
            <BorderGlow
              key={i}
              color={card.glowColor}
              glowSize={card.featured ? 160 : 100}
              duration={card.featured ? 2500 : 3500}
            >
              <div className={`pricing-card reveal${card.featured ? ' featured' : ''}`}>
                {card.badge && <span className="pricing-badge">{card.badge}</span>}
                <div className="pricing-card-label">{card.label}</div>
                <h3>{card.title}</h3>
                <div className="price">{card.price}</div>
                <div className="pricing-divider"></div>
                <p>{card.description}</p>
                <ul className="pricing-features">
                  {card.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#kontakt" className={card.ctaClass}>{card.ctaText}</a>
              </div>
            </BorderGlow>
          ))}
        </div>
        <p className="pricing-note">Přesnou cenu vždy víte předem. Bez překvapení a skrytých poplatků.</p>
      </div>
    </section>
  )
}

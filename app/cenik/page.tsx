import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import PricingTable from '@/components/sections/PricingTable'

export const metadata: Metadata = {
  title: 'Kompletní ceník a nabídka služeb',
  description: 'Transparentní ceník tvorby webových stránek, hostingu a správy webu pro živnostníky a malé firmy. Přesná cena vždy předem, bez překvapení.',
  alternates: { canonical: '/cenik' },
  openGraph: {
    url: 'https://zdenekpodany.cz/cenik',
    description: 'Kompletní ceník tvorby webových stránek, hostingu a správy webu. Přesná cena vždy předem, bez překvapení.',
  },
}

const MAIN_CARDS = [
  {
    label: 'Základ',
    title: 'Jednoduchý prezentační web',
    price: 'od 14 900 Kč',
    salePrice: '1 990 Kč',
    discountPct: 87,
    description: 'Základní web, který za vás pracuje i když spíte.',
    features: [
      'Design na míru podle vašeho podnikání',
      'Jednostránkový web',
      'Hosting na 2 měsíce zdarma',
      'Hotovo do 5–7 dní',
    ],
    ctaText: 'Mám zájem',
    featured: false,
    badge: undefined as string | undefined,
  },
  {
    label: 'Doporučuji',
    title: 'Web na rozjezd podnikání',
    price: 'od 19 900 Kč',
    salePrice: '2 990 Kč',
    discountPct: 85,
    description: 'Web připravený přivést první zákazníky. Většina projektů vychází na 19 900–30 000 Kč podle rozsahu.',
    features: [
      'Design na míru podle vašeho podnikání',
      'Web s až 5 podstránkami',
      'Kontaktní formulář',
      'Nastavení custom emailu',
      'Hosting na 2 měsíce zdarma',
      'Hotovo do 2–4 týdnů',
    ],
    ctaText: 'Chci tento web',
    featured: true,
    badge: 'Nejoblíbenější',
  },
  {
    label: 'Analýza',
    title: 'UI/UX Audit',
    price: 'od 3 900 Kč',
    salePrice: '2 900 Kč',
    discountPct: 26,
    description: 'Osobně nebo online projdeme váš web a přesně pojmenujeme, co zákazníky odrazuje.',
    features: [
      'Řízený průchod webem či rozhraním',
      'Konkrétní návrhy úprav podle priority',
      'Stručná písemná zpráva',
      'Probíhá osobně i vzdáleně',
    ],
    ctaText: 'Mám zájem',
    featured: false,
    badge: undefined as string | undefined,
  },
]

export default function CenikPage() {
  return (
    <main className="cenik-page">

      {/* ── Hero ── */}
      <section className="cenik-hero">
        <div className="container">
          <Link href="/" className="cenik-breadcrumb">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Zpět na úvod
          </Link>
          <h1 className="cenik-hero-title">Kompletní ceník<br />a nabídka služeb</h1>
          <p className="cenik-hero-sub">Transparentní ceny, které vidíte předem.<br />Bez překvapení a skrytých poplatků.</p>
        </div>
      </section>

      {/* ── Tvorba webu ── */}
      <section className="section cenik-main-pricing">
        <div className="container">
          <h2 className="section-title">Tvorba webu</h2>
          <p className="section-subtitle">Jednorázová investice do webu, který pracuje za vás.</p>
          <div className="pricing-sale-banner">
            <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14" aria-hidden="true">
              <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z"/>
            </svg>
            Letní akce — ceny platí do <strong>30. 6. 2026</strong>
          </div>
          <div className="pricing-grid">
            {MAIN_CARDS.map((card, i) => (
              <div key={i} className={`pricing-card${card.featured ? ' featured' : ''}`}>
                {card.badge && <span className="pricing-badge">{card.badge}</span>}
                <div className="pricing-card-label">{card.label}</div>
                <h3>{card.title}</h3>
                {card.salePrice ? (
                  <div className="pricing-price-wrap">
                    <div className="price price--sale">{card.salePrice}</div>
                    <div className="price-meta">
                      <span className="price-original">{card.price}</span>
                      <span className="price-discount-badge">-{card.discountPct}&nbsp;%</span>
                    </div>
                  </div>
                ) : (
                  <div className="price">{card.price}</div>
                )}
                <div className="pricing-divider" />
                <p>{card.description}</p>
                <ul className="pricing-features">
                  {card.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a
                  href="/#kontakt"
                  className={`btn btn-full pricing-card-btn${card.featured ? ' pricing-card-btn--featured' : ' btn-secondary'}`}
                >
                  {card.ctaText}
                </a>
              </div>
            ))}
          </div>
          <p className="pricing-note">Přesnou cenu vždy víte předem. Bez překvapení a skrytých poplatků.</p>
        </div>
      </section>

      {/* ── Průběžné služby ── */}
      <section className="section cenik-addons">
        <div className="container">
          <h2 className="section-title">Hosting a správa webu</h2>
          <p className="section-subtitle">Průběžná péče o váš web po spuštění — vyberte si plán, který sedí.</p>
          <PricingTable />
          <p className="pricing-note" style={{ marginTop: '24px' }}>
            Faktura 1.&nbsp;den v&nbsp;měsíci, splatnost 7&nbsp;dní. Kdykoli lze plán změnit nebo zrušit.
          </p>
        </div>
      </section>

      {/* ── Hodinová sazba ── */}
      <section className="section cenik-hourly">
        <div className="container">
          <div className="hourly-card">
            <div className="hourly-card-content">
              <div className="hourly-card-label">Na zakázku</div>
              <h2 className="hourly-card-title">Hodinová sazba</h2>
              <p className="hourly-card-desc">
                Potřebujete větší zásah nebo custom funkcionalitu? Pracuji na hodinové bázi — víte přesně, za co platíte. Rozsah vždy odhadneme předem.
              </p>
              <ul className="hourly-card-features">
                <li>Větší obsahové a designové změny</li>
                <li>Nové funkce a podstránky</li>
                <li>Technická řešení na míru</li>
              </ul>
            </div>
            <div className="hourly-card-price-side">
              <div className="hourly-price">1 000 Kč</div>
              <div className="hourly-price-period">/ hodina</div>
              <a href="/#kontakt" className="btn btn-secondary hourly-cta">Domluvit spolupráci</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cenik-cta-section">
        <div className="container">
          <div className="cenik-cta-inner">
            <h2>Nejste si jistí, co přesně potřebujete?</h2>
            <p>Napište mi – společně projdeme, co dává smysl pro váš byznys.<br />Konzultace je zdarma.</p>
            <a href="/#kontakt" className="btn btn-primary cenik-cta-btn">Domluvit konzultaci zdarma</a>
            <Link href="/" className="cenik-cta-back">← Zpět na úvod</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

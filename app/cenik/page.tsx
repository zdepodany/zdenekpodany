import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

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
          <div className="pricing-grid">
            {MAIN_CARDS.map((card, i) => (
              <div key={i} className={`pricing-card${card.featured ? ' featured' : ''}`}>
                {card.badge && <span className="pricing-badge">{card.badge}</span>}
                <div className="pricing-card-label">{card.label}</div>
                <h3>{card.title}</h3>
                <div className="price">{card.price}</div>
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

      {/* ── Doplňkové služby ── */}
      <section className="section cenik-addons">
        <div className="container">
          <h2 className="section-title">Doplňkové služby</h2>
          <p className="section-subtitle">Vše, co váš web potřebuje po spuštění.</p>
          <div className="addons-grid">

            {/* Hosting */}
            <div className="addon-card">
              <div className="addon-card-header">
                <div className="addon-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18.5 9.5A6.5 6.5 0 0 0 6.1 7.3a4 4 0 0 0-1.8 7.5H18.5a3.5 3.5 0 0 0 0-7z"/>
                    <path d="M12 13v4M9 15l3-2 3 2"/>
                  </svg>
                </div>
                <div className="addon-card-title-block">
                  <div className="addon-card-label">Infrastruktura</div>
                  <h3 className="addon-card-title">Hosting</h3>
                </div>
              </div>
              <p className="addon-card-desc">Na Edge síti – super rychlý a super bezpečný. Váš web se načte bleskově odkudkoli v Evropě.</p>
              <div className="addon-pricing-options">
                <div className="addon-price-option">
                  <span className="addon-price-amount">229 Kč</span>
                  <span className="addon-price-period">/ měsíc</span>
                </div>
                <div className="addon-price-divider">nebo</div>
                <div className="addon-price-option addon-price-option--alt">
                  <span className="addon-price-amount">2 290 Kč</span>
                  <span className="addon-price-period">/ rok</span>
                  <span className="addon-price-save">ušetříte ~15&nbsp;%</span>
                </div>
              </div>
              <a href="/#kontakt" className="btn btn-secondary addon-card-btn">Objednat hosting</a>
            </div>

            {/* Web pod dohledem */}
            <div className="addon-card addon-card--featured">
              <div className="addon-card-header">
                <div className="addon-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L4 6v6c0 5.5 3.4 10.7 8 13 4.6-2.3 8-7.5 8-13V6l-8-4z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div className="addon-card-title-block">
                  <div className="addon-card-label">Správa webu</div>
                  <h3 className="addon-card-title">Web pod dohledem</h3>
                </div>
              </div>
              <p className="addon-card-desc">Kompletní péče o váš web každý měsíc – od technické kontroly po drobné úpravy obsahu.</p>
              <div className="addon-pricing-options">
                <div className="addon-price-option">
                  <span className="addon-price-amount">990 Kč</span>
                  <span className="addon-price-period">/ měsíc</span>
                </div>
              </div>
              <ul className="addon-features">
                <li>Kontrola funkčnosti webu 1× měsíčně</li>
                <li>Drobné obsahové úpravy (texty, fotky)</li>
                <li>Základní kontrola SEO (indexace, technické chyby)</li>
                <li>Dohled nad výkonem</li>
                <li>E-mailová podpora</li>
              </ul>
              <div className="addon-card-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                </svg>
                Rozsah drobných úprav je omezen na <strong>60 min / měsíc</strong>. Faktura 1.&nbsp;den v&nbsp;měsíci, splatnost 7&nbsp;dní.
              </div>
              <a href="/#kontakt" className="btn addon-card-btn addon-card-btn--featured">Mám zájem</a>
            </div>

            {/* Hodinová sazba */}
            <div className="addon-card">
              <div className="addon-card-header">
                <div className="addon-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="addon-card-title-block">
                  <div className="addon-card-label">Na zakázku</div>
                  <h3 className="addon-card-title">Hodinová sazba</h3>
                </div>
              </div>
              <p className="addon-card-desc">Potřebujete větší zásah nebo custom funkcionalitu? Pracuji na hodinové bázi – víte přesně, za co platíte.</p>
              <div className="addon-pricing-options">
                <div className="addon-price-option">
                  <span className="addon-price-amount">1 000 Kč</span>
                  <span className="addon-price-period">/ hodina</span>
                </div>
              </div>
              <ul className="addon-features">
                <li>Větší obsahové a designové změny</li>
                <li>Nové funkce a podstránky</li>
                <li>Technická řešení na míru</li>
                <li>Rozsah odhadneme předem</li>
              </ul>
              <a href="/#kontakt" className="btn btn-secondary addon-card-btn">Domluvit spolupráci</a>
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

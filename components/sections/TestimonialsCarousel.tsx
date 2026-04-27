'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

interface Testimonial {
  text: string
  authorName: string
  authorRole: string
  authorImage?: string
  businessName: string
  businessUrl: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: '"Web od Zdeňka není jen hezká stránka, ale funkční nástroj, který reálně vydělává. Celý proces byl rychlý, komunikace bezproblémová a výsledek předčil moje očekávání. Návratnost byla navíc opravdu rychlá, takže investice se mi vyplatila mnohem dřív, než jsem čekal..."',
    authorName: '— Martin',
    authorRole: 'majitel',
    authorImage: '/img/review-bauch.webp',
    businessName: 'Pohodlné hubnutí',
    businessUrl: 'https://pohodlnehubnuti.cz',
  },
  {
    text: '"Se Zdeňkem jsme spolupracovali na tvorbě webu pro spolek Mackovská chasa z. s. Od začátku bylo vidět, že rozumí nejen technické stránce, ale i tomu, jak má web působit na lidi. Výsledkem je přehledný a důstojný web, který dobře prezentuje naši činnost, historii i akce. Spolupráce byla bezproblémová a vše probíhalo podle domluvy."',
    authorName: '— Milan',
    authorRole: 'předseda spolku',
    authorImage: '/img/review-mackovskachasa.webp',
    businessName: 'Mackovská chasa z.s.',
    businessUrl: 'https://www.mackovskachasa.cz',
  },
  {
    text: '"Celá spolupráce probíhala naprosto hladce a výsledek předčil naše očekávání! Hlavně se nám líbí moderní, jednoduchý, ale přesto hravý design, který pro náš web zpracoval. Stejně tak z uživatelského hlediska je web velmi příjemný. Moc děkujeme a těšíme se na další spolupráci."',
    authorName: '— Tadeáš',
    authorRole: 'CEO',
    authorImage: '/img/review-studiobarak.webp',
    businessName: 'Studio Barák',
    businessUrl: 'https://studiobarak.cz',
  },
  {
    text: '"S panem Podaným je velmi dobrá a rychlá spolupráce. Poskytuje kvalitní poradenství i pro osoby, kteří jsou absolutní počítačoví analfabeti. Obrátil jsem se na něj s požadavky na web pro začínajícího podnikatele. S webovými stránkami i s profesionálním přístupem jsem velmi spokojený."',
    authorName: '— Petr',
    authorRole: 'majitel',
    businessName: 'Izolace Petr Kráčman',
    businessUrl: 'https://izolacekracman.cz',
  },
  {
    text: '"Spolupráce při tvorbě webových stránek proběhla profesionálně a bez problémů. Oceňujeme rychlou komunikaci, dodržení termínů a kvalitní zpracování. Výsledný web splnil naše očekávání a výrazně zlepšil naši online prezentaci. Doporučujeme."',
    authorName: '— Richard',
    authorRole: 'Výkup domů 24',
    businessName: 'vykupdomu24.cz',
    businessUrl: 'https://vykupdomu24.cz',
  },
]

export default function TestimonialsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const count = TESTIMONIALS.length

  const getIndex = useCallback(() => {
    const vp = viewportRef.current
    if (!vp || vp.clientWidth <= 0) return 0
    return Math.min(count - 1, Math.max(0, Math.round(vp.scrollLeft / vp.clientWidth)))
  }, [count])

  const goTo = useCallback((index: number, animate = true) => {
    const vp = viewportRef.current
    if (!vp || vp.clientWidth <= 0) return
    const i = Math.max(0, Math.min(count - 1, index))
    vp.scrollTo({ left: i * vp.clientWidth, behavior: animate ? 'smooth' : 'auto' })
    setCurrentIndex(i)
  }, [count])

  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return
    let raf: number
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setCurrentIndex(getIndex()))
    }
    vp.addEventListener('scroll', onScroll, { passive: true })
    const ro = new ResizeObserver(() => goTo(getIndex(), false))
    ro.observe(vp)
    return () => { vp.removeEventListener('scroll', onScroll); ro.disconnect(); cancelAnimationFrame(raf) }
  }, [getIndex, goTo])

  return (
    <div className="testimonials-carousel">
      <div
        className="testimonials-carousel-viewport"
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-roledescription="karousel"
        aria-label="Reference klientů – posun šipkami, tečkami nebo gestem"
        onKeyDown={e => {
          if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex - 1) }
          else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1) }
          else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
          else if (e.key === 'End') { e.preventDefault(); goTo(count - 1) }
        }}
      >
        <div className="testimonials-track">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonials-slide">
              <blockquote className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <footer className="testimonial-author">
                  {t.authorImage && (
                    <img src={t.authorImage} alt={`${t.authorName}, ${t.businessName}`} className="testimonial-author-image" loading="lazy" />
                  )}
                  <div className="testimonial-author-info">
                    <strong>{t.authorName}</strong>, {t.authorRole}<br />
                    <a href={t.businessUrl} target="_blank" rel="noopener">{t.businessName}</a>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials-carousel-controls">
        <button
          type="button"
          className="testimonials-carousel-btn testimonials-carousel-btn--prev"
          aria-label="Předchozí reference"
          disabled={currentIndex <= 0}
          onClick={() => goTo(currentIndex - 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="testimonials-carousel-dots" aria-label="Výběr reference">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonials-carousel-dot${i === currentIndex ? ' is-active' : ''}`}
              aria-label={`Zobrazit referenci ${i + 1} z ${count}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="testimonials-carousel-btn testimonials-carousel-btn--next"
          aria-label="Další reference"
          disabled={currentIndex >= count - 1}
          onClick={() => goTo(currentIndex + 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  )
}

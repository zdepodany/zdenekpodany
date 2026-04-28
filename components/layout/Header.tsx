'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/#ukazky',    label: 'Ukázky' },
  { href: '/#sluzby',    label: 'Služby' },
  { href: '/#o-mne',     label: 'O mně' },
  { href: '/#reference', label: 'Reference' },
  { href: '/#cenik',     label: 'Ceník' },
  { href: '/#faq',       label: 'FAQ' },
  { href: '/blog',       label: 'Blog', isLink: true },
]

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/** Native scroll-progress bar — zero framer dependency */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => {
      const el = barRef.current
      if (!el) return
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollTop / max) : 0})`
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div ref={barRef} className="nav-progress" />
}

export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  // scroll-aware pill
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // delayed unmount so CSS exit transition plays
  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true)
    } else {
      const t = setTimeout(() => setMenuVisible(false), 320)
      return () => clearTimeout(t)
    }
  }, [menuOpen])

  // close on desktop resize
  useEffect(() => {
    if (!menuOpen) return
    const onResize = () => { if (window.innerWidth > 860) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [menuOpen])

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <ScrollProgress />

      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header-pill">
          <nav className="nav-inner">

            <Link href="/" className="logo" onClick={close}>
              <span className="logo-mark" aria-hidden="true" />
              <span className="logo-first">Zdeněk</span>
              <span className="logo-last">Podaný</span>
            </Link>

            <ul className="nav-links" role="list">
              {NAV_LINKS.map(({ href, label, isLink }) => (
                <li key={href}>
                  {isLink
                    ? <Link href={href} className="nav-link">{label}</Link>
                    : <a href={href} className="nav-link">{label}</a>}
                </li>
              ))}
            </ul>

            <a href="/#kontakt" className="nav-cta">
              Cenová nabídka
              <ArrowRightIcon />
            </a>

            <button
              className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
              aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </nav>
        </div>
      </header>

      {/* CSS-driven overlay — no framer dependency */}
      {menuVisible && (
        <div
          className="mobile-overlay"
          data-open={menuOpen ? 'true' : undefined}
        >
          <nav className="mobile-nav">
            <ul className="mobile-nav-list" role="list">
              {NAV_LINKS.map(({ href, label, isLink }) => (
                <li key={href}>
                  {isLink
                    ? <Link href={href} className="mobile-nav-link" onClick={close}>{label}</Link>
                    : <a href={href} className="mobile-nav-link" onClick={close}>{label}</a>}
                </li>
              ))}
            </ul>
            <a href="/#kontakt" className="mobile-nav-cta" onClick={close}>
              Cenová nabídka
              <ArrowRightIcon />
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

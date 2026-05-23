'use client'

import { useState, useEffect } from 'react'

const BANNER_H = 44
const HEADER_H = 80
const STORAGE_KEY = 'promo-banner-dismissed-2026-06'

export default function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
      document.documentElement.dataset.banner = 'true'
      document.documentElement.style.setProperty('--header-h', `${HEADER_H + BANNER_H}px`)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(STORAGE_KEY, '1')
    delete document.documentElement.dataset.banner
    document.documentElement.style.removeProperty('--header-h')
  }

  if (!visible) return null

  return (
    <div className="promo-banner" role="banner" aria-label="Časově omezená akce">
      <div className="promo-banner-inner">
        <svg className="promo-banner-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14">
          <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z"/>
        </svg>
        <span className="promo-banner-text">
          Letní akce — slevy až&nbsp;87&nbsp;% na&nbsp;weby
        </span>
        <span className="promo-banner-sep" aria-hidden="true">·</span>
        <a href="#cenik" className="promo-banner-cta" onClick={dismiss}>
          Zobrazit ceny
        </a>
        <span className="promo-banner-deadline">Platí do 30.&nbsp;6.&nbsp;2026</span>
      </div>
      <button
        className="promo-banner-close"
        onClick={dismiss}
        aria-label="Skrýt akci"
      >
        <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M2 2l10 10M12 2L2 12"/>
        </svg>
      </button>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'

const CONSENT_KEY = 'cookie-consent'
const GA_ID = 'G-HVYTTEV5WY'

function loadGA() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) { window.dataLayer.push(args) }
  window.gtag = gtag
  ;(window.gtag as (...args: unknown[]) => void)('js', new Date())
  ;(window.gtag as (...args: unknown[]) => void)('config', GA_ID)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') {
      loadGA()
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadGA()
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div id="cookie-consent" className="cookie-consent" role="dialog" aria-label="Souhlas s cookies" aria-describedby="cookie-consent-text">
      <div className="cookie-consent-inner container">
        <p id="cookie-consent-text" className="cookie-consent-text">
          Tento web používá cookies pro měření návštěvnosti (Google Analytics). Pomáhají mi pochopit, jak stránky používáte, abych je mohl zlepšovat.{' '}
          <a href="/zasady-ochrany-osobnich-udaju">Zásady ochrany osobních údajů</a>
        </p>
        <div className="cookie-consent-actions">
          <button type="button" className="btn btn-primary cookie-consent-accept" onClick={accept}>
            Přijmout cookies
          </button>
          <button type="button" className="cookie-consent-reject" onClick={reject}>
            Nepřijmout
          </button>
        </div>
      </div>
    </div>
  )
}

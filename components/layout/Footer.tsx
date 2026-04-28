'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

function LogoMark() {
  return (
    <span className="footer-logo">
      <span className="footer-logo-dot" aria-hidden="true" />
      <span className="footer-logo-first">Zdeněk</span>
      <span className="footer-logo-last">Podaný</span>
    </span>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 01-2.064-2.065 2.072 2.072 0 114.144 0 2.07 2.07 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.989 4.388 10.953 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

const socials = [
  { href: 'https://www.linkedin.com/in/zdenekpodany/', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'https://www.instagram.com/webovkyjednoduse/', label: 'Instagram', icon: <InstagramIcon /> },
  { href: 'https://www.facebook.com/profile.php?id=61586352639392', label: 'Facebook', icon: <FacebookIcon /> },
]

export default function Footer({ blogFooter = false }: { blogFooter?: boolean }) {
  const [year, setYear] = useState(2025)
  useEffect(() => { setYear(new Date().getFullYear()) }, [])

  return (
    <footer className="footer">
      {/* ambient glow */}
      <div className="footer-glow" aria-hidden="true" />

      {/* CTA strip */}
      <div className="footer-cta-strip">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-label">Připraveni začít?</span>
            <p className="footer-cta-sub">Napište mi a web máte do 7 dní.</p>
          </div>
          <a href="/#kontakt" className="btn btn-primary footer-cta-btn">
            Nezávazná konzultace
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="footer-main">
        <div className="footer-brand-col">
          <Link href="/" className="footer-brand-link">
            <LogoMark />
          </Link>
          <p className="footer-desc">
            Moderní webové stránky pro malé firmy a živnostníky. Primárně Znojmo, Pohořelice a okolí.
          </p>
          <div className="footer-socials">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className="footer-social-pill"
                target="_blank"
                rel="noopener"
                aria-label={label}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Navigace</h4>
          <ul className="footer-list">
            {blogFooter ? (
              <>
                <li><Link href="/">Hlavní stránka</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/tvorba-webu-znojmo">Tvorba webu Znojmo</Link></li>
                <li><Link href="/vseobecne-obchodni-podminky">Obchodní podmínky</Link></li>
                <li><Link href="/zasady-ochrany-osobnich-udaju">Ochrana osobních údajů</Link></li>
              </>
            ) : (
              <>
                <li><a href="/#o-mne">O mně</a></li>
                <li><Link href="/tvorba-webu-znojmo">Tvorba webu Znojmo</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><a href="https://countdownerapp.figma.site" target="_blank" rel="noopener">Countdowner App</a></li>
                <li><Link href="/vseobecne-obchodni-podminky">Obchodní podmínky</Link></li>
                <li><Link href="/zasady-ochrany-osobnich-udaju">Ochrana osobních údajů</Link></li>
              </>
            )}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Kontakt</h4>
          <ul className="footer-list">
            <li><a href="mailto:zdenek@zdenekpodany.cz">zdenek@zdenekpodany.cz</a></li>
            <li><a href="tel:+420735945421">+420 735 945 421</a></li>
          </ul>
          <h4 className="footer-col-heading footer-col-heading--spaced">Fakturační údaje</h4>
          <ul className="footer-list">
            <li>
              IČO:{' '}
              <a href="https://ares.gov.cz/ekonomicke-subjekty/res/07864825" target="_blank" rel="noopener">
                07864825
              </a>
            </li>
            <li>Účet: 6557870369 / 0800</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">© {year} Zdeněk Podaný. Všechna práva vyhrazena.</p>
        <p className="footer-tagline">Webové stránky pro byznys</p>
      </div>
    </footer>
  )
}

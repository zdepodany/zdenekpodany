'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-brand">
          <Link href="/" className="logo">Zdeněk Podaný</Link>
        </div>
        <button
          className="nav-toggle"
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><a href="/#ukazky" onClick={() => setMenuOpen(false)}>Ukázky</a></li>
          <li><a href="/#sluzby" onClick={() => setMenuOpen(false)}>Služby</a></li>
          <li><a href="/#o-mne" onClick={() => setMenuOpen(false)}>O mně</a></li>
          <li><a href="/#reference" onClick={() => setMenuOpen(false)}>Reference</a></li>
          <li><a href="/#cenik" onClick={() => setMenuOpen(false)}>Ceník</a></li>
          <li><a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
          <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><a href="/#kontakt" className="nav-cta" onClick={() => setMenuOpen(false)}>Cenová nabídka</a></li>
        </ul>
      </nav>
    </header>
  )
}

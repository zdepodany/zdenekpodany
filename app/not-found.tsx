import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '404 – Stránka nenalezena',
  description: 'Stránka, kterou hledáte, neexistuje. Vraťte se na hlavní stránku.',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <>
      <main>
        <section className="section page-404">
          <div className="container">
            <div className="page-404-content">
              <p className="page-404-number">404</p>
              <h1 className="page-404-title">Tady nic není. Ale web vám klidně vytvořím.</h1>
              <p className="page-404-text">
                Stránka, kterou hledáte, neexistuje.<br />
                Pokud ale hledáte jednoduchý a funkční web, jste na správném místě.
              </p>
              <div className="page-404-actions">
                <a href="/#kontakt" className="btn btn-primary">Chci web</a>
                <Link href="/" className="btn btn-secondary">Zpět na úvod</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

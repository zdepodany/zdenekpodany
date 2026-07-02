import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/layout/Header'
import CookieConsent from '@/components/layout/CookieConsent'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  metadataBase: new URL('https://zdenekpodany.cz'),
  title: {
    default: 'Zdeněk Podaný | Tvorba webových stránek Znojmo & okolí',
    template: '%s | Zdeněk Podaný',
  },
  description: 'Potřebujete moderní web, který vám skutečně přivede zákazníky? Zdeněk Podaný tvoří profesionální webové stránky pro živnostníky a malé firmy na Znojemsku. Rychle, férově a bez zbytečných technikálií.',
  authors: [{ name: 'Zdeněk Podaný' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'Zdeněk Podaný',
    images: [{ url: '/img/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/img/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        {children}
        <CookieConsent />
        <a href="tel:+420735945421" className="call-fab" aria-label="Zavolat na +420 735 945 421">
          <svg className="call-fab-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
        <ScrollReveal />
        <Analytics />
        <SpeedInsights />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","wawvgt8jxv");`,
          }}
        />
      </body>
    </html>
  )
}

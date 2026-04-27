# Next.js – Projekt je připraven

## Spuštění

```bash
# Vývojový server (localhost:3000)
pnpm dev

# Produkční build (generuje out/)
pnpm build
```

## Struktura projektu

```
app/
  layout.tsx                      ← kořenový layout (Header, Analytics, CookieConsent)
  globals.css                     ← veškeré CSS + Tailwind direktivy
  page.tsx                        ← homepage
  not-found.tsx                   ← 404 stránka
  blog/
    page.tsx                      ← výpis článků
    [slug]/page.tsx               ← jednotlivý článek
  tvorba-webu-znojmo/page.tsx     ← landing page Znojmo
  vseobecne-obchodni-podminky/    ← VOP
  zasady-ochrany-osobnich-udaju/  ← GDPR

components/
  layout/
    Header.tsx                    ← navigace (mobilní menu)
    Footer.tsx                    ← patička (varianta pro blog)
    CookieConsent.tsx             ← GDPR banner + GA4 loading
  ui/
    BorderGlow.tsx                ← animovaný glow kolem ceníkových karet
  sections/
    PricingSection.tsx            ← CENÍK s BorderGlow ← zde je React Bits efekt
    TestimonialsCarousel.tsx      ← karusel referencí
    MetricsBar.tsx                ← animovaná čísla
    FaqList.tsx                   ← animovaný FAQ accordion
    ContactForm.tsx               ← Formspree formulář
  ScrollReveal.tsx                ← globální scroll animace (.reveal)

content/blog/                     ← Markdown soubory s články
lib/blog.ts                       ← parsování MD (gray-matter + remark)
public/
  img/                            ← všechny obrázky
  favicon.ico, icon.svg, ...      ← favicon a další assety
  robots.txt, sitemap.xml         ← SEO soubory
```

## Kde najdete ceník s BorderGlow efektem

Soubor: `components/sections/PricingSection.tsx`

Každá z 3 karet ceníku je obalena komponentou `<BorderGlow>` z `components/ui/BorderGlow.tsx`.
Glow animace obíhá po okraji karty pomocí framer-motion canvas efektu.

Barvy glowu:
- Základ: `#3d8ef7` (světle modrá)
- Nejoblíbenější: `#006DEC` (primární modrá, intenzivnější)
- UI/UX Audit: `#3d8ef7` (světle modrá)

## Přidání nového blogu

1. Vytvořte soubor `content/blog/nazev-clanku.md`
2. Frontmatter (povinné: `title`, `description`, `date`, `tags`):
   ```yaml
   ---
   title: "Název článku"
   description: "Krátký popis"
   date: 2026-05-01
   image: "/img/obrazek.webp"
   tags:
     - blog
     - webdesign
   ---
   ```
3. Spusťte `pnpm build` — nový článek se automaticky přidá do výpisu

## Deployment na Vercel

Vercel je nakonfigurován v `vercel.json`:
- Build command: `pnpm build`
- Output directory: `out/`
- Clean URLs zapnuty, trailing slash vypnut

Stačí pushovat na main branch — Vercel buildí automaticky.

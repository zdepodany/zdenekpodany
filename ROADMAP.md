# Roadmap / TODO

- Zmínit někde na webu (jinde než v sekci "Co dostanete" na /tvorba-webu), že při odchodu klient dostane vše — přístupy a podklady k webu, ať si ho může v případě potřeby spravovat sám. Původně to bylo v poznámce pod "Co dostanete" na /tvorba-webu, teď je pryč, promyslet kam to přesunout (např. FAQ, sekce "Jak to probíhá", nebo /cenik).

## Před spuštěním nové verze (2026-09-01)

Web je teď během vývoje na `dev.zdenekpodany.cz`, záměrně schovaný před vyhledávači a bez trackingu. **Až bude nová verze hotová a jde se live na `zdenekpodany.cz`, je potřeba tohle zase vrátit:**

- `public/robots.txt` — vrátit zpět na `Allow: /` + sitemap (teď je `Disallow: /`)
- `src/partials/head-common.html` — smazat `<meta name="robots" content="noindex, nofollow" />` a vrátit `og:image`/`twitter:image` na produkční doménu
- `src/pages/index.html` — vrátit `<meta name="robots">` na `index, follow`, canonical/og:url a JSON-LD (`@id`, `url`, `publisher`) zpět na `zdenekpodany.cz`, a odkazy v sekci "V kostce" (`vkostce-dd` u "Web")
- `src/pages/**/index.html`, `src/pages/blog/*.html` — vrátit `canonical`/`og:url` z `dev.zdenekpodany.cz` zpět na `zdenekpodany.cz`
- `public/sitemap.xml` — všechny `<loc>` zpět na `zdenekpodany.cz`
- `public/llms.txt` — název a všechny URL zpět na `zdenekpodany.cz`
- `public/admin/config.yml` — `base_url` zpět na `https://zdenekpodany.cz`
- Vercel env proměnná `NEXT_PUBLIC_SITE_URL` (používá ji `api/auth.js` pro OAuth redirect Decap CMS) — zkontrolovat, že po přepnutí zpět ukazuje na `zdenekpodany.cz`
- `src/js/cookie-consent.js` — smazat/nastavit na `false` flag `ANALYTICS_DISABLED` (GA4)
- `src/partials/scripts.html` — odkomentovat blok Vercel Analytics + Speed Insights + Microsoft Clarity

Poznámka: e-mailové adresy (`zdenek@zdenekpodany.cz`, `kontakt@zdenekpodany.cz`) a cizí subdomény (`countdowner.zdenekpodany.cz`, `portfolio.zdenekpodany.cz`) jsem záměrně nechal beze změny — nesouvisí s doménou webu.


# SHADOW-DESIGN.md

Design systém pro redesign webu **zdenekpodany.cz**. Spojuje UI jazyk hry
**Assassin's Creed Shadows** (struktura, komponenty, přesnost, taktický HUD) s
**barvami a přístupem značky Zdeněk Podaný** (modrá `#006DEC`, tmavá navy, čisté
a konverzně zaměřené rozhraní). Poměr inspirace je **50/50**: layout a UI patterny
z AC Shadows, barvy a tón ze značky.

> **Pravidlo pro Claude Code:** Tento soubor je závazný. Při jakékoli úpravě
> vzhledu se řiď tokeny a pravidly níže. Nevymýšlej nové barvy, radiusy ani
> stíny mimo definované tokeny. Pokud něco chybí, odvoď to z nejbližšího tokenu
> a napiš to do komentáře, ať to jde dohledat.

---

## 1. Filozofie stylu

AC Shadows UI je **tmavé, přesné a nabité klidem**. Není to křiklavé „herní"
rozhraní — je to plynulé menu s vysokým kontrastem, kde každý prvek dýchá a je
dokonale zarovnaný. Klíčové znaky, které přenášíme na web:

- **Tmavé plátno, světlý text.** Základ je hluboká navy (ne čistá černá), obsah
  je světlý. Vytváří to prémiový, soustředěný dojem.
- **Řádky jako karty.** Každá informace/akce žije ve vlastním horizontálním
  „řádku" s jemným ohraničením. Vlevo popisek, vpravo hodnota a ovládání.
- **Milimetrová přesnost.** Vše je zarovnané do mřížky. Levý okraj popisků a
  pravý okraj ovládání drží svislé linie napříč celou stránkou.
- **Minimum barev, maximum kontrastu.** Rozhraní je v zásadě grayscale; **jediný
  akcent je brand modrá** — používá se cíleně (aktivní stav, focus, výplň
  slideru, CTA), ne dekorativně.
- **HUD detaily.** Rohové „závorky" (bracket marks), tenké oddělovače, klávesové
  hinty v rozích — vše jemné, funkční, nikdy rušivé.
- **Klid a prostor.** Velké vnitřní odsazení řádků, žádná tlačenice. Web má
  působit sebejistě a čitelně — v souladu s „web má vydělávat".

**Čeho se vyvarovat:** neonové záře, přehnané glow efekty, skeuomorfismus,
gradientové duhy, těžké stíny, více než jedna akcentní barva, dekorativní ikony
bez funkce.

---

## 2. Design tokens

Vlož jako CSS custom properties do `:root`. Toto je jediný zdroj pravdy pro barvy.

```css
:root {
  /* --- Plátno / povrchy (tmavý taktický základ z AC Shadows,
         odvozený z brand navy #1a1a2e a hero gradientu #001a42) --- */
  --bg:            #0a0e1a;   /* hlavní pozadí – hluboká navy, ne čistá černá */
  --bg-elevated:   #0f1524;   /* mírně vyvýšené sekce */
  --surface:       #131a2b;   /* povrch řádku/karty */
  --surface-active:#1b2434;   /* aktivní/vybraný řádek */

  /* --- Text --- */
  --text:          #eef2f8;   /* primární text – téměř bílý */
  --text-muted:    #9aa4b8;   /* hodnoty, popisky, sekundární */
  --text-dim:      #5c6880;   /* nejjemnější, hinty */

  /* --- Akcent = brand modrá (jediná barva rozhraní) --- */
  --accent:        #006DEC;   /* brand primary */
  --accent-light:  #3d8ef7;   /* hover / světlejší stav */
  --accent-dark:   #005bc4;   /* stisk / tmavší stav */
  --accent-soft:   rgba(0, 109, 236, 0.12); /* jemná výplň, focus glow */

  /* --- Linky / ohraničení (translucentní bílá = AC Shadows) --- */
  --border:        rgba(255, 255, 255, 0.10); /* běžné ohraničení řádku */
  --border-strong: rgba(255, 255, 255, 0.18); /* výraznější linka */
  --divider:       rgba(255, 255, 255, 0.06);  /* jemný oddělovač v seznamu */

  /* --- Ovládací prvky --- */
  --track:         rgba(255, 255, 255, 0.08);  /* pozadí slideru */
  --track-fill:    #006DEC;                     /* výplň slideru = akcent */
  --control-bg:    rgba(255, 255, 255, 0.05);  /* pozadí stepperu/toggle */

  /* --- Výběr / focus (charakteristický AC Shadows highlight ring) --- */
  --ring:          rgba(0, 109, 236, 0.55);
  --ring-glow:     0 0 0 1px rgba(0,109,236,0.55), 0 0 18px rgba(0,109,236,0.20);

  /* --- Rádiusy (z brandu) --- */
  --radius-sm:     8px;
  --radius:        12px;
  --radius-lg:     20px;

  /* --- Stíny (jemné, tmavé – žádné barevné záře kromě focusu) --- */
  --shadow:        0 4px 24px rgba(0, 0, 0, 0.35);
  --shadow-lg:     0 12px 48px rgba(0, 0, 0, 0.45);

  /* --- Pohyb --- */
  --transition:    0.2s ease;
  --transition-slow: 0.35s ease;

  /* --- Rozestupy (8px mřížka) --- */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;

  /* --- Layout --- */
  --row-h:        64px;  /* min. výška řádku – vzdušný jako v AC Shadows */
  --row-pad-x:    24px;
  --content-max:  1080px;
}
```

> **Pozn.:** Hover řešíme přes `--accent-soft` (ne samostatný token). Ostatní
> tokeny jsou finální a připravené k použití.

---

## 3. Typografie

AC Shadows používá čistý humanistický sans-serif se střední vahou a mírně
rozšířeným prostorem. Drž web na jednom bezpatkovém písmu.

```css
--font: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
```

Škála a pravidla:

- **Nadpisy sekcí:** 13–14px, `text-transform: uppercase`, `letter-spacing: 0.08em`,
  váha 600, barva `--text-muted`. Slouží jako „štítek" nad blokem (jako „Mouse",
  „Display" ve hře) — malé, ne velké hero nadpisy.
- **H1 / hero:** 44–56px, váha 700, `letter-spacing: -0.02em`, `--text`.
- **H2:** 28–34px, váha 700.
- **Popisek řádku (label):** 16px, váha 500, `--text`.
- **Hodnota (value):** 16px, váha 500, `--text-muted`, zarovnaná vpravo těsně
  před ovládací prvek.
- **Tělo textu:** 16px, váha 400, řádkování 1.6, `--text-muted`.
- **Hint / mikrotext:** 12px, `--text-dim`, `letter-spacing: 0.04em`.

Nepoužívej patkové písmo ani více než dvě váhy v jednom bloku.

---

## 4. Klíčové komponenty

### 4.1 Řádek / Settings Row (základní stavební kámen)

Nejcharakterističtější prvek AC Shadows. Použij ho pro položky ceníku, kroky
procesu, FAQ, srovnávací tabulky, feature listy.

```
┌────────────────────────────────────────────────────────────┐
│  Popisek vlevo                     Hodnota   [ ovládání ]    │
└────────────────────────────────────────────────────────────┘
```

Pravidla:
- `display: flex; align-items: center; justify-content: space-between;`
- `min-height: var(--row-h); padding: 0 var(--row-pad-x);`
- `background: var(--surface); border: 1px solid var(--border);
   border-radius: var(--radius);`
- Popisek vlevo (`--text`), napravo skupina hodnota + control.
- **Hover:** `border-color: var(--border-strong); background: var(--accent-soft);`
  plynule přes `--transition`.
- **Aktivní / vybraný:** `box-shadow: var(--ring-glow);
   border-color: transparent;` — to je ten typický „obrys ring" kolem
   zvýrazněného řádku ve hře.

### 4.2 Rohové závorky (bracket marks) — signature HUD prvek

Jemné rohové značky, které rámují klíčové sekce, tabulky a hero. Nesmí být
křiklavé — 1px, `--border-strong`, jen v rozích.

```css
.bracket { position: relative; }
.bracket::before, .bracket::after {
  content: ""; position: absolute; width: 14px; height: 14px;
  border: 1px solid var(--border-strong);
}
.bracket::before { top: 0; left: 0; border-right: 0; border-bottom: 0; }
.bracket::after  { bottom: 0; right: 0; border-left: 0; border-top: 0; }
```

Použij střídmě: hero panel, sekce ceníku, aktivní stav tabů. Ne na každý prvek.

### 4.3 Slider

Tenký, přesný. Track tmavý, výplň = akcent.

- Track: výška 4px, `background: var(--track)`, `border-radius: 2px`.
- Fill: `background: var(--track-fill)`.
- Thumb: 12×12px, bílý (`--text`), jemný stín; při hoveru `box-shadow: var(--ring-glow)`.
- Použití na webu: dekorativní indikátory (např. „vytíženost", progress procesu),
  ne nutně funkční inputy.

### 4.4 Stepper `< >` (chevron selector)

Náhrada za dropdowny tam, kde jsou 2–4 volby (varianty služeb, filtry).

- Dvě čtvercová tlačítka `< >`, `--control-bg`, `border: 1px solid --border`,
  `border-radius: var(--radius-sm)`, mezi nimi hodnota.
- Hover tlačítka: `border-color: var(--accent)`, šipka zesvětlá na `--accent-light`.

### 4.5 Toggle

- Zaškrtávací čtvereček (jako v AC Shadows) NEBO klasický switch.
- Stav **On**: pozadí `--accent`, bílý check/knob.
- Stav **Off**: `--control-bg`, `--text-dim` popisek „Off".

### 4.6 Taby / navigace sekcí

- Centrované, textové, s rohovými závorkami kolem aktivního tabu.
- Aktivní: `--text` + bracket rám; neaktivní: `--text-muted`.
- Podtržení není potřeba — rám dělá práci.

### 4.7 Tlačítka (CTA)

CTA je jediné místo s plnou barvou — drží konverzní roli značky.

- **Primární:** `background: var(--accent); color: #fff;
   border-radius: var(--radius); padding: 14px 28px; font-weight: 600;`
  hover `--accent-light` + `box-shadow: var(--shadow-lg)`.
- **Sekundární:** průhledné, `border: 1px solid var(--border-strong);
   color: var(--text);` hover `background: var(--accent-soft);
   border-color: var(--accent);`.
- Klávesový hint (volitelně, HUD styl): malý štítek v rohu tlačítka
  `--text-dim`, 12px.

### 4.8 Karta / panel

Pro ukázky, reference, sekci „V kostce".
- `background: var(--surface); border: 1px solid var(--border);
   border-radius: var(--radius-lg); padding: var(--space-6);`
- Hover: povyk `border-strong` + lehký `translateY(-2px)` + `--shadow`.

---

## 5. Layout a mřížka

- Obsah centrovaný v `max-width: var(--content-max)` (1080px).
- 8px mřížka pro všechny rozestupy (používej `--space-*`).
- **Svislé zarovnání je posvátné:** levé okraje popisků a pravé okraje ovládání
  musí lícovat napříč řádky sekce.
- Sekce oddělené velkým vertikálním prostorem (`--space-8`) a volitelně jemným
  `--divider`.
- Hero: tmavý panel s brand gradientem jako jediný „barevný" moment:
  ```css
  background: linear-gradient(155deg,#001a42 0%,#002d7a 32%,#004fbd 65%,#006dec 100%);
  ```
  Přes něj světlý text, rohové závorky, CTA.

---

## 6. Pohyb a interakce

- Přechody krátké a plynulé (`--transition`), žádné bouncy/přehnané animace.
- Hover vždy mění `border` a/nebo `background` (`--accent-soft`), nikdy neposouvá
  text.
- Focus (klávesnice) = `--ring-glow`. Nikdy neruš `outline` bez náhrady
  (přístupnost).
- Vstup sekcí: jemný fade + `translateY(8px)`, max 0.35s, jednou.

---

## 7. Přístupnost

- Kontrast textu min. WCAG AA: `--text` na `--bg` bohatě splňuje;
  `--text-muted` používej jen na většího textu a hodnot, ne na dlouhý drobný text.
- Akcent `#006DEC` na tmavém pozadí = dobrý kontrast pro prvky, ale bílý text na
  `#006DEC` u tlačítek ověř (AA pro velký/tučný text — drž váhu 600+).
- Všechny interaktivní prvky mají viditelný focus ring.
- Respektuj `prefers-reduced-motion`: vypni fade/translate animace.

---

## 8. Rychlý checklist pro Claude Code

Než označíš úpravu vzhledu za hotovou, ověř:

- [ ] Pozadí je tmavá navy (`--bg`), ne čistá černá a ne světlé.
- [ ] Jediná barevná akcentní barva v celém rozhraní je brand modrá.
- [ ] Interaktivní řádky/karty mají `1px` translucentní ohraničení a hover mění
      `border` + `--accent-soft`.
- [ ] Aktivní/focus stav používá `--ring-glow`.
- [ ] Popisky sekcí jsou malé uppercase štítky, ne velké nadpisy.
- [ ] Svislé zarovnání popisků a ovládání v rámci sekce lícuje.
- [ ] Žádný neon, žádný druhý akcent, žádné těžké/barevné stíny mimo focus.
- [ ] Všechny barvy, radiusy a stíny pochází z tokenů v sekci 2.
- [ ] CTA drží plnou brand modrou a jasnou konverzní roli.

---

## 9. Mapování na sekce webu

| Sekce webu            | AC Shadows pattern                                  |
|-----------------------|-----------------------------------------------------|
| Hero                  | Tmavý gradient panel + rohové závorky + CTA         |
| Ukázky                | Karty (4.8) v mřížce, hover ring                    |
| Služby (01/02/03)     | Číslované řádky (4.1) s velkým labelem              |
| Jak to probíhá        | Řádky/kroky s číslem vlevo, hodnotou vpravo         |
| Ceník                 | Panely s rohovými závorkami, „Doporučuji" = akcent  |
| Srovnání s agenturou  | Settings-row tabulka, zarovnaná do mřížky           |
| FAQ                   | Rozbalovací řádky (4.1) se stepper/chevron ikonou   |
| Reference             | Karty (4.8) s jemným ohraničením                    |
| Kontakt / formulář    | Inputy s `--surface` pozadím, focus `--ring-glow`   |

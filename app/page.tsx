import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// ─── Critical path: static HTML, no JS needed above fold ─────────────────────
// Hero, Ukázky (plain links), Services, Process are all inline static HTML.

// ─── Lazy: everything below fold ─────────────────────────────────────────────
// next/dynamic with default ssr:true → HTML pre-rendered at build time,
// but each component's JS chunk is only parsed/executed when it becomes needed.
const MetricsBar           = dynamic(() => import('@/components/sections/MetricsBar'))
const OmneSection          = dynamic(() => import('@/components/sections/OmneSection'))
const ProcWebSection       = dynamic(() => import('@/components/sections/ProcWebSection'))
const TestimonialsCarousel = dynamic(() => import('@/components/sections/TestimonialsCarousel'))
const PricingSection       = dynamic(() => import('@/components/sections/PricingSection'))
const FaqList              = dynamic(() => import('@/components/sections/FaqList'))
const ContactForm          = dynamic(() => import('@/components/sections/ContactForm'))
const VKostceSection       = dynamic(() => import('@/components/sections/VKostceSection'))
const Footer               = dynamic(() => import('@/components/layout/Footer'))

export const metadata: Metadata = {
  title: 'Zdeněk Podaný | Tvorba webových stránek Znojmo & okolí',
  description: 'Potřebujete moderní web, který vám skutečně přivede zákazníky? Zdeněk Podaný tvoří profesionální webové stránky pro živnostníky a malé firmy na Znojemsku. Rychle, férově a bez zbytečných technikálií.',
  alternates: { canonical: '/' },
  openGraph: {
    description: 'Vytvořím vám moderní a prodejný web dostupně a rychle. Specializuji se na živnostníky na Znojemsku. Web hotový do 7 dnů.',
    url: 'https://zdenekpodany.cz/',
  },
}

const ldJsonLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zdeněk Podaný',
  description: 'Tvorba webových stránek a UI/UX design pro malé firmy a živnostníky. Působím v okolí Znojma, Pohořelic a Hrušovan.',
  address: { '@type': 'PostalAddress', streetAddress: 'Mackovice 23', postalCode: '671 78' },
  email: 'zdenek@zdenekpodany.cz',
  telephone: '+420 735 945 421',
  priceRange: 'od 3 900 Kč',
  serviceType: ['Tvorba webových stránek', 'UI/UX design'],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Jihomoravský kraj' },
    { '@type': 'City', name: 'Znojmo' },
    { '@type': 'City', name: 'Pohořelice' },
    { '@type': 'City', name: 'Hrušovany nad Jevišovkou' },
  ],
  dateModified: '2026-04-24',
}

const ldJsonGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://zdenekpodany.cz/#website',
      url: 'https://zdenekpodany.cz',
      name: 'Zdeněk Podaný - UI/UX Designer',
      inLanguage: 'cs-CZ',
      description: 'Tvorba webových stránek, webdesign a UI/UX pro malé firmy a živnostníky. Působení zejména na Znojemsku a v celé České republice.',
      publisher: { '@id': 'https://zdenekpodany.cz/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://zdenekpodany.cz/#person',
      name: 'Zdeněk Podaný',
      url: 'https://zdenekpodany.cz',
      jobTitle: 'UI/UX Designer',
      email: 'zdenek@zdenekpodany.cz',
      telephone: '+420 735 945 421',
      address: { '@type': 'PostalAddress', streetAddress: 'Mackovice 23', postalCode: '671 78', addressCountry: 'CZ' },
      sameAs: [
        'https://www.linkedin.com/in/zdenekpodany/',
        'https://www.instagram.com/webovkyjednoduse/',
        'https://www.facebook.com/webovkyjednoduse',
      ],
    },
  ],
}

const ldJsonFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kolik web vlastně stojí? Bojím se, že to bude drahé.', acceptedAnswer: { '@type': 'Answer', text: 'Jednoduchý prezentační web od 14 900 Kč, web na rozjezd podnikání od 19 900 Kč, UI/UX audit od 3 900 Kč. Cenu vždy domluvíme předem — žádné skryté poplatky ani překvapení na konci. Pokud rozpočet nestačí, řekneme si to rovnou a najdeme řešení.' } },
    { '@type': 'Question', name: 'Co všechno musím připravit? Nemám texty ani fotky.', acceptedAnswer: { '@type': 'Answer', text: 'Nic speciálního nepotřebujete. Stačí mi říct, co děláte a pro koho. S texty pomůžu, fotky vyřešíme — buď použijeme kvalitní bezplatné fotografie, nebo poradím, jak jednoduše získat vlastní.' } },
    { '@type': 'Question', name: 'Jak dlouho tvorba webu trvá?', acceptedAnswer: { '@type': 'Answer', text: 'Jednoduchý web bývá hotový do 1–2 týdnů od chvíle, kdy si ujasníme, co má obsahovat. Záleží hlavně na tom, jak rychle si vyměňujeme informace — ne na složitosti technického zpracování.' } },
    { '@type': 'Question', name: 'Budu web zvládat sám udržovat?', acceptedAnswer: { '@type': 'Answer', text: 'Záleží na typu webu. Pokud potřebujete měnit obsah pravidelně (jídelníček, aktuality), nastavím vše tak, abyste to zvládli sami bez technických znalostí. Pokud jde jen o základní prezentaci, změny za vás udělám já — většinou jde o drobnosti, které zvládnu rychle.' } },
    { '@type': 'Question', name: 'Co když se mi výsledek nebude líbit?', acceptedAnswer: { '@type': 'Answer', text: 'Před spuštěním webu vám ukážu návrh a zapracuji vaše připomínky. Nespouštíme nic, s čím nejste spokojeni. Celý proces probíhá průběžně — nejste postaveni před hotovou věc, kterou buď přijmete, nebo ne.' } },
    { '@type': 'Question', name: 'Potřebuji web, nebo mi stačí Facebook a Instagram?', acceptedAnswer: { '@type': 'Answer', text: 'Sociální sítě jsou fajn, ale máte je půjčené — algoritmus rozhoduje, kdo váš příspěvek uvidí, a profil můžete přijít o přístup. Web je váš vlastní prostor, který funguje 24/7, nezávisí na žádné platformě a zákazníci ho najdou přímo přes Google.' } },
    { '@type': 'Question', name: 'Proč bych si měl vybrat vás a ne větší agenturu?', acceptedAnswer: { '@type': 'Answer', text: 'U agentury platíte za projektového manažera, designera, kodéra a režii kanceláře. U mě komunikujete přímo s člověkem, který web navrhne i vytvoří — bez přeposílání informací a čekání. Výsledek je stejně profesionální, cena třikrát až pětkrát nižší.' } },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonGraph) }} />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-inner container">
            <div className="hero-panel">
              <div className="hero-panel-media" aria-hidden="true">
                <picture>
                  <source media="(max-width: 959px)" srcSet="/img/hero-s.webp" type="image/webp" />
                  <img className="hero-panel-img" src="/img/hero.webp" alt="" width={2688} height={1949} fetchPriority="high" decoding="async" />
                </picture>
              </div>
              <div className="hero-panel-overlay" aria-hidden="true"></div>
              <div className="hero-dots" aria-hidden="true"></div>
              <div className="hero-content">
                <div className="hero-eyebrow" aria-hidden="true">
                  <span className="hero-eyebrow-line"></span>
                  <span>Webdesign · Znojmo</span>
                </div>
                <h1 className="hero-title">
                  Váš web má <span className="highlight">vydělávat</span>
                </h1>
                <p className="hero-subtitle">
                  Hezký web nestačí. Záleží na tom, co návštěvník udělá. Stavím weby tak, aby návštěvník udělal to, co potřebuješ — zavolal, napsal, přišel.
                </p>
                <div className="hero-cta-wrap">
                  <div className="hero-cta">
                    <a href="#kontakt" className="btn btn-primary" data-ga-hero-cta="cenova_nabidka">Chci cenovou nabídku</a>
                    <a href="#cenik" className="btn btn-secondary" data-ga-hero-cta="cenik">Kolik to stojí?</a>
                  </div>
                  <p className="hero-cta-micro">Bez závazků, odpovím do 24 hodin.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ukázky */}
        <section id="ukazky" className="section showcase">
          <div className="container">
            <div className="showcase-header">
              <div>
                <h2 className="section-title">Ukázky</h2>
                <p className="section-subtitle">Takhle může vypadat váš web.</p>
              </div>
            </div>
            <div className="showcase-grid">
              <a href="https://izolacekracman.cz" target="_blank" rel="noopener" className="showcase-card showcase-card--featured reveal">
                <img src="/img/izolacekracmanznojmo.webp" alt="Izolace Petr Kráčman – web pro izolace" loading="lazy" />
                <div className="showcase-cap">
                  <p className="showcase-story">Petr měl živnost rozjetou, ale online byl jen bod na Google Maps. Teď má web, který zákazníkům ukáže, co dělá, a jak ho kontaktovat.</p>
                  <div className="showcase-foot">
                    <span className="showcase-title">Izolace Petr Kráčman</span>
                    <span className="showcase-domain">izolacekracman.cz ↗</span>
                  </div>
                </div>
              </a>
              <a href="https://www.mackovskachasa.cz" target="_blank" rel="noopener" className="showcase-card reveal">
                <img src="/img/mackovskachasa.webp" alt="Mackovská chasa – web pro spolek" loading="lazy" />
                <div className="showcase-cap">
                  <p className="showcase-story">Spolek potřeboval přehledné místo pro aktuality, historii a povinně zveřejňované informace. Hotovo rychle, bez zbytečné složitosti.</p>
                  <div className="showcase-foot">
                    <span className="showcase-title">Mackovská chasa z.s.</span>
                    <span className="showcase-domain">mackovskachasa.cz ↗</span>
                  </div>
                </div>
              </a>
              <a href="https://obecnirestauracezeliv.cz" target="_blank" rel="noopener" className="showcase-card reveal">
                <img src="/img/obecnirestauracezeliv.webp" alt="Obecní restaurace Želiv – web pro restauraci" loading="lazy" />
                <div className="showcase-cap">
                  <p className="showcase-story">Nový majitel potřeboval web s jídelníčkem a základními informacemi hned od začátku. Spustili jsme rychle, bez komplikací.</p>
                  <div className="showcase-foot">
                    <span className="showcase-title">Obecní restaurace Želiv</span>
                    <span className="showcase-domain">obecnirestauracezeliv.cz ↗</span>
                  </div>
                </div>
              </a>
              <a href="https://vykupdomu24.cz" target="_blank" rel="noopener" className="showcase-card reveal">
                <img src="/img/showcase-vykupdomu24.webp" alt="Výkup domů 24 – web pro výkup nemovitostí" loading="lazy" />
                <div className="showcase-cap">
                  <p className="showcase-story">Firma potřebovala důvěryhodnou online prezentaci pro klienty zvažující prodej nemovitosti. Web jim ji dodal.</p>
                  <div className="showcase-foot">
                    <span className="showcase-title">Výkup domů 24</span>
                    <span className="showcase-domain">vykupdomu24.cz ↗</span>
                  </div>
                </div>
              </a>
              <a href="https://pohodlnehubnuti.cz" target="_blank" rel="noopener" className="showcase-card reveal">
                <img src="/img/showcase-pohodlnehubnuti.webp" alt="Pohodlné hubnutí – web pro jídelníčky na míru a coaching" loading="lazy" />
                <div className="showcase-cap">
                  <p className="showcase-story">Martin potřeboval jedno místo, kde zákazníci pochopí, co nabízí, a rovnou si objednají. Web mu teď reálně vydělává.</p>
                  <div className="showcase-foot">
                    <span className="showcase-title">Pohodlné hubnutí</span>
                    <span className="showcase-domain">pohodlnehubnuti.cz ↗</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="showcase-cta">
              <a href="#cenik" className="btn btn-primary">Kolik takový web stojí?</a>
            </div>
          </div>
        </section>

        {/* Metriky */}
        <MetricsBar />

        {/* Služby */}
        <section id="sluzby" className="section services">
          <div className="container">
            <h2 className="section-title">Co pro vás připravím</h2>
            <p className="section-subtitle">Tři varianty podle toho, v jaké fázi podnikání se nacházíte. Všechny přehledné, funkční a bez zbytečné složitosti.</p>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon">01</div>
                <h3>Jednoduchý prezentační web</h3>
                <p>Ideální pro živnostníky, kteří chtějí mít na internetu profesionální vizitku. O vás, vaše služby a kontakt – přehledně a na jednom místě.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">02</div>
                <h3>Web na rozjezd podnikání</h3>
                <p>Rozběhnete nový byznys? Potřebujete web, který vás představí a přivede první zákazníky. Vše co potřebujete pro start, nic navíc.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">03</div>
                <h3>UI/UX Audit</h3>
                <p>Máte web nebo rozhraní a nejste si jisti, kde brzdí zákazníky? Projdu strukturu, texty i ovládání a dostanete srozumitelné doporučení, co zlepšit jako první.</p>
              </article>
            </div>
            <div className="services-cta">
              <a href="#kontakt" className="btn btn-primary">Chci web</a>
            </div>
          </div>
        </section>

        {/* Jak spolupracujeme */}
        <section id="jak-spolupracujeme" className="section process">
          <div className="container">
            <h2 className="section-title">Jak to probíhá – bez stresu</h2>
            <p className="section-subtitle">Všechno složité řeším já. Vy mi řeknete, co potřebujete, a já to dodám.</p>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Napíšete mi, co potřebujete</h3>
                <p>Stačí pár vět – kdo jste, co děláte a co od webu očekáváte. Nemusíte nic technického znát.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Domluvíme se na detailech</h3>
                <p>Probereme obsah, barvy a strukturu. Zeptám se na to důležité, vy mi odpovíte jednoduše.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Vytvořím váš web</h3>
                <p>Připravím návrh a po odsouhlasení web během několika dní spustíme.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Spustíme ho a jste online</h3>
                <p>Pomůžu s nasazením, ukážu vám základy údržby. A máte hotovo.</p>
              </div>
            </div>
            <div className="section-cta">
              <a href="#kontakt" className="btn btn-primary">Chci začít</a>
            </div>
          </div>
        </section>

        {/* O mně */}
        <OmneSection />

        {/* Proč má kvalitní web smysl */}
        <ProcWebSection />

        {/* Reference */}
        <section id="reference" className="section testimonials">
          <div className="container">
            <h2 className="section-title">Co říkají klienti</h2>
            <p className="section-subtitle">Reference od lidí, kterým jsem pomohl s webem.</p>
            <TestimonialsCarousel />
            <div className="section-cta">
              <a href="#kontakt" className="btn btn-primary">Chci podobný výsledek</a>
            </div>
          </div>
        </section>

        {/* Ceník */}
        <PricingSection />

        {/* Value Compare */}
        <section className="section value-compare" aria-labelledby="value-compare-heading">
          <div className="container">
            <h2 id="value-compare-heading" className="section-title">Proč platíte méně za stejnou kvalitu?</h2>
            <p className="section-subtitle">Stejný typ výsledku jako u větší agentury — jiný model práce, bez zbytečné režie kanceláří a velkého týmu.</p>
            <div className="value-compare-panel">
              <table className="value-compare-table">
                <thead>
                  <tr>
                    <th scope="col">Položka</th>
                    <th scope="col">Běžná digitální agentura</th>
                    <th scope="col">Webovky jednoduše (Zdeněk)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Proces</th>
                    <td data-label="Běžná digitální agentura">Manažer, designer, kodér</td>
                    <td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">1 expert – návrh, tvorba i spuštění</td>
                  </tr>
                  <tr>
                    <th scope="row">Režie</th>
                    <td data-label="Běžná digitální agentura">Uklízečka, kancelář, ředitel, investor, technika, DPH</td>
                    <td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">Domácí kancelář v Břežanech</td>
                  </tr>
                  <tr>
                    <th scope="row">Cena za web</th>
                    <td data-label="Běžná digitální agentura">40 000 Kč +</td>
                    <td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">14 900 Kč +</td>
                  </tr>
                  <tr>
                    <th scope="row">Výsledek</th>
                    <td data-label="Běžná digitální agentura">Profesionální web</td>
                    <td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">Profesionální web</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="section-cta">
              <a href="#kontakt" className="btn btn-primary">Chci ušetřit</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section-title">Časté otázky</h2>
            <p className="section-subtitle">Odpovědi na to, co řeší většina klientů před začátkem spolupráce.</p>
            <FaqList />
            <div className="section-cta">
              <p className="faq-cta-lead">Nezodpovězená otázka? Napište mi.</p>
              <a href="#kontakt" className="btn btn-primary">Chci se zeptat</a>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="section contact">
          <div className="container">
            <h2 className="section-title">Napište mi</h2>
            <p className="section-subtitle">Máte dotaz nebo chcete začít? Napište, co potřebujete – ozvu se co nejdřív.</p>
            <ContactForm />
            <p className="contact-alternative">Nebo mi napište přímo na <a href="mailto:zdenek@zdenekpodany.cz">zdenek@zdenekpodany.cz</a></p>
          </div>
        </section>

        {/* V kostce */}
        <VKostceSection />
      </main>

      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const MetricsBar           = dynamic(() => import('@/components/sections/MetricsBar'))
const TestimonialsCarousel = dynamic(() => import('@/components/sections/TestimonialsCarousel'))
const PricingSection       = dynamic(() => import('@/components/sections/PricingSection'))
const FaqList              = dynamic(() => import('@/components/sections/FaqList'))
const ContactForm          = dynamic(() => import('@/components/sections/ContactForm'))
const Footer               = dynamic(() => import('@/components/layout/Footer'))
const ProcWebSection       = dynamic(() => import('@/components/sections/ProcWebSection'))

export const metadata: Metadata = {
  title: 'Webovky a appky na míru Znojmo | Žádné šablony',
  description: 'Zapomeňte na pomalý WordPress. Stavím ultra-rychlé custom weby a aplikace ve Znojmě, které vám skutečně vydělají. Podívejte se na mé reference.',
  alternates: { canonical: '/tvorba-webu-znojmo' },
}

export default function TvorbaWebuZnojmoPage() {
  return (
    <>
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
              <div className="hero-content">
                <h1 className="hero-title">
                  Tvorba webů ve Znojmě — od někoho, kdo tu <span className="highlight">žije</span> a zná region
                </h1>
                <p className="hero-subtitle">
                  Zákazníci ve Znojmě a okolí hledají lokální firmy online každý den. Stavím weby, které je přivedou přímo k vám — ne ke konkurenci.
                </p>
                <div className="hero-cta-wrap">
                  <div className="hero-cta">
                    <a href="#kontakt" className="btn btn-primary">Chci cenovou nabídku</a>
                    <a href="#cenik" className="btn btn-secondary">Kolik to stojí?</a>
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

        {/* Osobní setkání */}
        <section className="section" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="local-highlight">
              <h2 className="section-title">Osobní přístup ve Znojmě a okolí</h2>
              <p className="section-subtitle">
                Bydlím v Břežanech, pár kilometrů od Znojma. Znám zdejší region, zdejší podnikatele a zdejší zákazníky. Ať jste řemeslník z centra Znojma, vinař z Šatova nebo majitel penzionetu ve Vranovské přehradě — potkáme se osobně, probereme vše u kávy a domluvíme web přesně pro váš byznys.
              </p>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                Konzultace je zdarma a nezavazuje. Napište mi a domluvíme termín.
              </p>
            </div>
          </div>
        </section>

        {/* Metriky */}
        <MetricsBar />

        {/* Služby */}
        <section id="sluzby" className="section services">
          <div className="container">
            <h2 className="section-title">Co pro znojemské podnikatele připravím</h2>
            <p className="section-subtitle">Tři varianty pro znojemské živnostníky a firmy. Všechny přehledné, funkční a bez zbytečné složitosti.</p>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon">01</div>
                <h3>Jednoduchý prezentační web</h3>
                <p>Ideální pro znojemské živnostníky – řemeslníky, obchody, vinaře, ubytování. Profesionální vizitka na internetu: o vás, vaše služby a kontakt. Zákazníci z Jihomoravského kraje vás snadno najdou.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">02</div>
                <h3>Web na rozjezd podnikání</h3>
                <p>Rozběhnete podnikání ve Znojmě nebo okolí? Potřebujete web, který vás představí a přivede první zákazníky. Vše pro start, nic navíc.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">03</div>
                <h3>UI/UX Audit</h3>
                <p>Web už máte, ale nefunguje podle očekávání? Projdu ho UI/UX optikou a dostanete jasné tipy, co upravit – osobně ve Znojmě nebo vzdáleně.</p>
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
            <p className="section-subtitle">Všechno složité řeším já. Můžeme se potkat osobně ve Znojmě nebo okolí – probereme vše naživo a vy mi jednoduše řeknete, co potřebujete.</p>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Napíšete mi nebo se potkáme</h3>
                <p>Stačí pár vět – kdo jste, co děláte a co od webu čekáte. Nebo se potkáme osobně: Znojmo, Moravský Krumlov, Hrušovany, Pohořelice — přijedu k vám.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Domluvíme se na detailech</h3>
                <p>Probereme obsah, barvy a strukturu. Zeptám se na to důležité, vy mi odpovíte jednoduše. Osobně nebo online.</p>
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

        {/* Proč má kvalitní web smysl */}
        <ProcWebSection />

        {/* Reference */}
        <section id="reference" className="section testimonials">
          <div className="container">
            <h2 className="section-title">Co říkají klienti z regionu</h2>
            <p className="section-subtitle">Reference od lidí, kterým jsem pomohl s webem – včetně firem z okolí Znojma.</p>
            <TestimonialsCarousel />
            <div className="section-cta">
              <a href="#kontakt" className="btn btn-primary">Chci podobný výsledek</a>
            </div>
          </div>
        </section>

        {/* Ceník */}
        <PricingSection />

        {/* Value Compare */}
        <section className="section value-compare" aria-labelledby="value-compare-heading-znojmo">
          <div className="container">
            <h2 id="value-compare-heading-znojmo" className="section-title">Proč platíte méně za stejnou kvalitu?</h2>
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
                  <tr><th scope="row">Proces</th><td data-label="Běžná digitální agentura">Manažer, designer, kodér</td><td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">1 expert – návrh, tvorba i spuštění</td></tr>
                  <tr><th scope="row">Režie</th><td data-label="Běžná digitální agentura">Uklízečka, kancelář, ředitel, investor, technika, DPH</td><td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">Domácí kancelář v Břežanech</td></tr>
                  <tr><th scope="row">Cena za web</th><td data-label="Běžná digitální agentura">40 000 Kč +</td><td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">14 900 Kč +</td></tr>
                  <tr><th scope="row">Výsledek</th><td data-label="Běžná digitální agentura">Profesionální web</td><td className="value-compare-highlight" data-label="Webovky jednoduše (Zdeněk)">Profesionální web</td></tr>
                </tbody>
              </table>
            </div>
            <div className="section-cta">
              <a href="#kontakt" className="btn btn-primary">Chci ušetřit</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq" aria-labelledby="faq-heading-znojmo">
          <div className="container">
            <h2 id="faq-heading-znojmo" className="section-title">Časté otázky</h2>
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
            <p className="section-subtitle">Máte dotaz nebo chcete začít? Napište, co potřebujete — ozvu se do 24 hodin. Jste ze Znojemska? Rád se s vámi potkám osobně.</p>
            <ContactForm />
            <p className="contact-alternative">Nebo mi napište přímo na <a href="mailto:zdenek@zdenekpodany.cz">zdenek@zdenekpodany.cz</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

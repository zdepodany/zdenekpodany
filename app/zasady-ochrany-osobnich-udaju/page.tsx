import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů',
  description: 'Zásady ochrany osobních údajů – Zdeněk Podaný. Informace o zpracování osobních údajů, cookies a vašich právech.',
  alternates: { canonical: '/zasady-ochrany-osobnich-udaju' },
}

export default function GdprPage() {
  return (
    <>
      <main>
        <article className="section legal-page">
          <div className="container">
            <div className="legal-content">
              <h1 className="legal-title">Zásady ochrany osobních údajů</h1>
              <p className="legal-revised">Poslední úprava: 21. března 2026</p>

              <section>
                <h2>1. Správce osobních údajů</h2>
                <p>Správcem osobních údajů je:</p>
                <p>
                  <strong>Zdeněk Podaný</strong><br />
                  IČO: <a href="https://ares.gov.cz/ekonomicke-subjekty/res/07864825" target="_blank" rel="noopener">07864825</a><br />
                  Sídlo: Mackovice 23, 671 78, Mackovice, Česká republika<br />
                  E-mail: <a href="mailto:zdenek@zdenekpodany.cz">zdenek@zdenekpodany.cz</a>
                </p>
                <p>(dále jen „správce")</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>2. Jaké osobní údaje zpracovávám</h2>
                <p>Zpracovávám pouze údaje, které mi sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailové komunikace, zejména:</p>
                <ul>
                  <li>jméno</li>
                  <li>e-mailovou adresu</li>
                  <li>výběr služby</li>
                  <li>obsah zprávy</li>
                </ul>
                <p>Tyto údaje slouží výhradně pro vyřízení vaší poptávky a následnou komunikaci.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>3. Účel zpracování osobních údajů</h2>
                <p>Osobní údaje zpracovávám za účelem:</p>
                <ul>
                  <li>odpovědi na poptávku</li>
                  <li>uzavření a plnění smlouvy</li>
                  <li>následné komunikace s klientem</li>
                  <li>vedení základní evidence komunikace</li>
                </ul>
                <p>Právním základem zpracování je:</p>
                <ul>
                  <li>plnění smlouvy nebo opatření před jejím uzavřením</li>
                  <li>oprávněný zájem (např. archivace komunikace pro ochranu práv)</li>
                </ul>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>4. Doba uchovávání údajů</h2>
                <ul>
                  <li>Poptávky, které nevedou ke spolupráci, jsou průběžně mazány.</li>
                  <li>Údaje klientů jsou uchovávány po dobu trvání spolupráce a dále pouze po nezbytně nutnou dobu (např. z důvodu účetních a právních povinností).</li>
                  <li>E-mailová komunikace může být uchovávána po dobu potřebnou k ochraně oprávněných zájmů správce.</li>
                </ul>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>5. Předávání osobních údajů třetím stranám</h2>
                <p>Osobní údaje mohou být zpracovávány těmito poskytovateli služeb:</p>
                <ul>
                  <li><strong>Formspree</strong> – zpracování formulářů</li>
                  <li><strong>Google Analytics 4</strong> – měření návštěvnosti webu</li>
                  <li><strong>Google Search Console</strong> – analytika vyhledávání</li>
                  <li><strong>Vercel</strong> – hosting webu</li>
                  <li><strong>iCloud Mail (Apple)</strong> – e-mailová komunikace</li>
                </ul>
                <p>Tyto služby mohou zpracovávat údaje jako tzv. zpracovatelé osobních údajů.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>6. Cookies</h2>
                <p>Tento web používá analytické cookies služby Google Analytics 4 za účelem měření návštěvnosti a zlepšování obsahu webu.</p>
                <p>Tyto cookies jsou používány pouze na základě vašeho souhlasu, který můžete kdykoliv odvolat.</p>
                <p>Web nepoužívá marketingové ani remarketingové cookies.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>7. Vaše práva</h2>
                <p>Máte právo:</p>
                <ul>
                  <li>požadovat přístup ke svým osobním údajům</li>
                  <li>požadovat opravu nebo výmaz údajů</li>
                  <li>požadovat omezení zpracování</li>
                  <li>vnést námitku proti zpracování</li>
                  <li>podat stížnost u Úřadu pro ochranu osobních údajů</li>
                </ul>
                <p>V případě dotazů mě můžete kontaktovat na: <a href="mailto:zdenek@zdenekpodany.cz">zdenek@zdenekpodany.cz</a></p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>8. Závěrečná ustanovení</h2>
                <p>Tyto zásady mohou být v případě potřeby aktualizovány. Aktuální verze je vždy dostupná na této webové stránce.</p>
              </section>

              <p className="legal-back"><Link href="/">← Zpět na hlavní stránku</Link></p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

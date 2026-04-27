import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Všeobecné obchodní podmínky',
  description: 'Všeobecné obchodní podmínky Zdeňka Podaného – webdesign, vývoj, SEO a správa webu. Platné pro smluvní vztahy mezi podnikateli.',
  alternates: { canonical: '/vseobecne-obchodni-podminky' },
  robots: 'noindex, follow',
}

export default function VopPage() {
  return (
    <>
      <main>
        <article className="section legal-page">
          <div className="container">
            <div className="legal-content legal-content--vop">
              <h1 className="legal-title">Všeobecné obchodní podmínky (VOP)</h1>

              <div className="legal-card" aria-label="Základní údaje o dokumentu">
                <p className="legal-card-line"><strong>Poskytovatel:</strong> Zdeněk Podaný, IČ: <a href="https://ares.gov.cz/ekonomicke-subjekty/res/07864825" target="_blank" rel="noopener">07864825</a>, se sídlem Mackovice 23, 671&nbsp;78</p>
                <p className="legal-card-line"><strong>Předmět:</strong> Poskytování služeb v oblasti webdesignu, programování, SEO a správy webu.</p>
                <div className="legal-card-footer">
                  <span className="legal-badge">Verze 1</span>
                  <span className="legal-card-meta">Účinnost od: 7. dubna 2026</span>
                </div>
              </div>

              <p className="legal-lead">Tyto VOP se vztahují výhradně na smluvní vztahy mezi podnikateli ve smyslu § 420 zákona č. 89/2012 Sb., občanského zákoníku (NOZ).</p>

              <hr className="legal-divider" />

              <section>
                <h2>1. Rozsah služeb a objednávka</h2>
                <h3>1.1</h3>
                <p>Smluvní vztah vzniká potvrzením cenové nabídky a odsouhlasením rozsahu prací klientem (písemně či e-mailem).</p>
                <h3>1.2</h3>
                <p>Součástí služeb je webdesign, kódování, SEO optimalizace a případná správa či hosting dle dohody.</p>
                <h3>1.3</h3>
                <p>Před zahájením placených prací může Dodavatel vypracovat nezávazný návrh. Po jeho schválení a vytyčení rozsahu je vystavena zálohová faktura.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>2. Platební podmínky a sankce</h2>
                <h3>2.1 Model 50/50</h3>
                <p>Klient se zavazuje uhradit 50&nbsp;% z celkové ceny jako zálohu před zahájením prací. Zbývajících 50&nbsp;% je splatných po dokončení díla, ale před jeho oficiálním předáním (převodem na doménu klienta či spuštěním do ostrého provozu).</p>
                <h3>2.2 Splatnost</h3>
                <p>Standardní splatnost faktur je 10 dní od data vystavení.</p>
                <h3>2.3 Prodlení s platbou</h3>
                <p>Pokud je klient v prodlení s úhradou, účtuje si Dodavatel smluvní pokutu ve výši 0,1&nbsp;% z dlužné částky za každý den prodlení. Smluvní pokuta se uplatňuje vedle zákonného úroku z prodlení.</p>
                <h3>2.4 Omezení a smazání služeb</h3>
                <p>Po 30 dnech prodlení s platbou má Dodavatel právo pozastavit provoz webu (vypnout jej).</p>
                <p>Pokud platba nedorazí ani do 14 dní od vypnutí webu, Dodavatel zašle klientovi písemnou výzvu e-mailem na adresu uvedenou ve smlouvě s upozorněním, že data budou smazána za 7 dní. Druhé upozornění zašle Dodavatel 1 den před plánovaným smazáním.</p>
                <p>Pokud klient ani po těchto výzvách dluh neuhradí, budou data webu nenávratně smazána ze serveru Dodavatele. Obnova dat po tomto termínu není možná.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>3. Součinnost a korektury</h2>
                <h3>3.1 Podklady</h3>
                <p>Klient je povinen dodat veškeré podklady (texty, fotografie, loga) v dohodnutých termínech. O dobu, po kterou je klient v prodlení s dodáním podkladů, se automaticky prodlužuje termín odevzdání díla.</p>
                <h3>3.2 Korektury</h3>
                <p>V ceně díla jsou zahrnuta 3 kola korektur. Za každé další kolo nebo rozsáhlé změny nad rámec původního zadání si Dodavatel účtuje hodinovou sazbu 900&nbsp;Kč/hod.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>4. Autorská práva a reference</h2>
                <h3>4.1 Přechod licence</h3>
                <p>Dodavatel uděluje klientovi výhradní licenci k dílu okamžikem úplného zaplacení celkové ceny díla. Do úplného zaplacení je klient oprávněn dílo užívat pouze v rozsahu nezbytném pro jeho schválení a testování.</p>
                <h3>4.2 Odkaz v patičce</h3>
                <p>Dodavatel si vyhrazuje právo umístit do patičky webu diskrétní odkaz typu <em>Web vytvořil Zdeněk Podaný | Webovky Jednoduše</em>. Klient s tímto umístěním souhlasí potvrzením objednávky. Pokud klient o vynechání odkazu písemně požádá před zahájením prací, Dodavatel odkaz neuvede.</p>
                <h3>4.3 Portfolio</h3>
                <p>Dodavatel je oprávněn prezentovat hotové dílo ve svém portfoliu a na sociálních sítích, pokud klient v úvodu spolupráce výslovně písemně nevyjádří nesouhlas.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>5. Záruka, odpovědnost a servis</h2>
                <h3>5.1 Záruční doba</h3>
                <p>Dodavatel poskytuje záruku 30 dní od předání webu na opravu technických chyb vzniklých jeho činností. Po uplynutí této lhůty jsou úpravy zpoplatněny sazbou 900&nbsp;Kč/hod.</p>
                <h3>5.2 Hosting a třetí strany</h3>
                <p>Dodavatel neodpovídá za výpadky způsobené třetími stranami (hosting, doménové registry) ani za změny v API rozhraních třetích stran (Google, Facebook apod.).</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>6. Odstoupení od smlouvy</h2>
                <h3>6.1</h3>
                <p>Pokud klient odstoupí od smlouvy v průběhu realizace, uhrazená záloha ve výši 50&nbsp;% zůstává Dodavateli jako náhrada za prokazatelně vynaložené náklady a blokování kapacity v daném časovém období. Tím není dotčeno právo Dodavatele požadovat náhradu škody přesahující výši zálohy, pokud skutečné náklady zálohu překročily.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>7. Ochrana osobních údajů</h2>
                <h3>7.1</h3>
                <p>Dodavatel zpracovává osobní údaje klientů (jméno, e-mail, telefon, fakturační údaje) za účelem plnění smlouvy a vedení účetní evidence, a to po dobu trvání smluvního vztahu a následně po dobu stanovenou příslušnými právními předpisy. Podrobné informace o zpracování osobních údajů jsou dostupné na: <Link href="/zasady-ochrany-osobnich-udaju">zásady ochrany osobních údajů</Link></p>
                <h3>7.2</h3>
                <p>Klient bere na vědomí, že při správě webu může mít Dodavatel přístup k osobním údajům návštěvníků webu klienta. V takovém případě vystupuje Dodavatel jako zpracovatel a klient jako správce osobních údajů ve smyslu nařízení GDPR. Klient odpovídá za to, že zpracování osobních údajů na jeho webu je v souladu s platnými právními předpisy.</p>
              </section>

              <hr className="legal-divider" />

              <section>
                <h2>8. Závěrečná ustanovení</h2>
                <h3>8.1 Rozhodné právo a řešení sporů</h3>
                <p>Tyto VOP se řídí právním řádem České republiky. Veškeré spory vzniklé z těchto VOP nebo v souvislosti s nimi řeší věcně a místně příslušné soudy České republiky.</p>
                <h3>8.2 Změny VOP</h3>
                <p>Dodavatel je oprávněn tyto VOP jednostranně měnit. O změně informuje klienta e-mailem nejméně 30 dní před nabytím účinnosti nové verze. Pokud klient se změnou nesouhlasí, je oprávněn před nabytím účinnosti změn smlouvu písemně vypovědět.</p>
                <h3>8.3 Oddělitelnost</h3>
                <p>Pokud se některé ustanovení těchto VOP ukáže jako neplatné nebo nevymahatelné, ostatní ustanovení zůstávají v platnosti.</p>
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

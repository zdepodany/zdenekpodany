'use client'

import { useRef } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Kolik web vlastně stojí? Bojím se, že to bude drahé.',
    answer: 'Jednoduchý prezentační web od 14 900 Kč, web na rozjezd podnikání od 19 900 Kč, UI/UX audit od 3 900 Kč. Cenu vždy domluvíme předem — žádné skryté poplatky ani překvapení na konci. Pokud rozpočet nestačí, řekneme si to rovnou a najdeme řešení.',
  },
  {
    question: 'Co všechno musím připravit? Nemám texty ani fotky.',
    answer: 'Nic speciálního nepotřebujete. Stačí mi říct, co děláte a pro koho. S texty pomůžu, fotky vyřešíme — buď použijeme kvalitní bezplatné fotografie, nebo poradím, jak jednoduše získat vlastní.',
  },
  {
    question: 'Jak dlouho tvorba webu trvá?',
    answer: 'Jednoduchý web bývá hotový do 1–2 týdnů od chvíle, kdy si ujasníme, co má obsahovat. Záleží hlavně na tom, jak rychle si vyměňujeme informace — ne na složitosti technického zpracování.',
  },
  {
    question: 'Budu web zvládat sám udržovat?',
    answer: 'Záleží na typu webu. Pokud potřebujete měnit obsah pravidelně (jídelníček, aktuality), nastavím vše tak, abyste to zvládli sami bez technických znalostí. Pokud jde jen o základní prezentaci, změny za vás udělám já — většinou jde o drobnosti, které zvládnu rychle.',
  },
  {
    question: 'Co když se mi výsledek nebude líbit?',
    answer: 'Před spuštěním webu vám ukážu návrh a zapracuji vaše připomínky. Nespouštíme nic, s čím nejste spokojeni. Celý proces probíhá průběžně — nejste postaveni před hotovou věc, kterou buď přijmete, nebo ne.',
  },
  {
    question: 'Potřebuji web, nebo mi stačí Facebook a Instagram?',
    answer: 'Sociální sítě jsou fajn, ale máte je půjčené — algoritmus rozhoduje, kdo váš příspěvek uvidí, a profil můžete přijít o přístup. Web je váš vlastní prostor, který funguje 24/7, nezávisí na žádné platformě a zákazníci ho najdou přímo přes Google.',
  },
  {
    question: 'Proč bych si měl vybrat vás a ne větší agenturu?',
    answer: 'U agentury platíte za projektového manažera, designera, kodéra a režii kanceláře. U mě komunikujete přímo s člověkem, který web navrhne i vytvoří — bez přeposílání informací a čekání. Výsledek je stejně profesionální, cena třikrát až pětkrát nižší.',
  },
]

function FaqItem({ question, answer }: FaqItem) {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    const el = detailsRef.current
    if (!el) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (el.classList.contains('is-open')) {
      el.classList.remove('is-open')
      timeoutRef.current = setTimeout(() => el.removeAttribute('open'), 450)
    } else {
      el.setAttribute('open', '')
      void el.offsetHeight
      el.classList.add('is-open')
    }
  }

  return (
    <details className="faq-item" ref={detailsRef}>
      <summary className="faq-question" onClick={handleClick}>{question}</summary>
      <div className="faq-answer"><p>{answer}</p></div>
    </details>
  )
}

export default function FaqList() {
  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem key={i} {...item} />
      ))}
    </div>
  )
}

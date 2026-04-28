'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

const facts = [
  { label: 'Zkušenosti', value: 'Od roku 2020' },
  { label: 'Vzdělání', value: 'Grafická škola Jihlava' },
  { label: 'Předchozí role', value: 'UI/UX designer' },
  { label: 'Přístup', value: 'Každý web od nuly' },
];

const paragraphs = [
  'Jmenuji se Zdeněk a weby tvořím od roku 2020 — nejdřív volnočasově, dnes naplno pro malé firmy a živnostníky z okolí Znojma a celé republiky.',
  'K webdesignu jsem se dostal přirozeně — studoval jsem grafickou školu v Jihlavě a první roky jsem se živil jako UI/UX designer. Jenže projekty, kde bylo potřeba web nejen navrhnout, ale i postavit, přicházely čím dál častěji. Tak jsem začal stavět.',
  'Na téhle práci mě baví jedna věc — každý web je jiný. Stejný proces, jiný výsledek. Každý klient má jiný byznys, jiné zákazníky, jiný příběh. A web musí odrážet právě tohle, ne šablonu staženou z internetu.',
  'Proto každý web stavím od nuly — od prvního rozhovoru s klientem až po spuštění.',
];

export default function OmneSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="o-mne" ref={ref} aria-labelledby="about-heading" className="omne-section">
      <div className="omne-container">

        {/* Left: photo block */}
        <motion.div
          className="omne-photo-wrap"
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <figure className="omne-photo">
            <img
              src="/img/zdenek.webp"
              alt="Zdeněk Podaný"
              width={1280}
              height={941}
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* Floating fact pills anchored to photo */}
          <motion.div
            className="omne-fact-pill omne-fact-pill--tl"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45, ease }}
          >
            <span className="omne-fact-pill-dot" />
            Tvorba od roku 2020
          </motion.div>

          <motion.div
            className="omne-fact-pill omne-fact-pill--br"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55, ease }}
          >
            <span className="omne-fact-pill-dot omne-fact-pill-dot--blue" />
            Každý web od nuly
          </motion.div>
        </motion.div>

        {/* Right: content */}
        <div className="omne-content">
          <motion.span
            className="omne-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
          >
            O mně
          </motion.span>

          <motion.h2
            id="about-heading"
            className="omne-title"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            Kdo pro vás<br />
            <span className="omne-title-accent">web postaví</span>
          </motion.h2>

          <div className="omne-body">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.07, ease }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Fact grid */}
          <motion.div
            className="omne-facts"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.52, ease }}
          >
            {facts.map(({ label, value }) => (
              <div key={label} className="omne-fact">
                <span className="omne-fact-label">{label}</span>
                <span className="omne-fact-value">{value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.6, ease }}
          >
            <a href="#kontakt" className="btn btn-primary omne-cta-btn">
              Pojďme spolupracovat
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

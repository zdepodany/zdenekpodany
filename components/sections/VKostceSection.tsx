'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 15c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="13" cy="6" r="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M13 11c1.5 0 3.5 1 3.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 12l7 3 7-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8.5l7 3 7-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 5l7 3 7-3-7-3L2 5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function FlowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 4h4M14 6v4M6.5 6l5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9 2C9 2 6 6 6 9s3 7 3 7M9 2c0 0 3 4 3 7s-3 7-3 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M2 9h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

const facts = [
  {
    icon: <PersonIcon />,
    dt: 'Kdo',
    dd: 'Zdeněk Podaný — tvorba webů, webdesign a UI/UX. Jeden člověk od návrhu po spuštění, bez agenturní režie.',
  },
  {
    icon: <UsersIcon />,
    dt: 'Pro koho',
    dd: 'Malé firmy a živnostníci — řemeslníci, služby, spolky. Primárně Znojemsko, weby ale tvořím i pro klienty z celé ČR.',
  },
  {
    icon: <LayersIcon />,
    dt: 'Co nabízím',
    dd: 'Prezentační weby, UI/UX audit, návrh ve Figmě, základní SEO, analytika, pomoc s texty a strukturou stránek.',
  },
  {
    icon: <FlowIcon />,
    dt: 'Jak pracuji',
    dd: 'Nejdřív ujasníme cíl, ukážu návrh, pak teprve stavím. Cenu domluvíme předem; detaily v sekci FAQ.',
  },
  {
    icon: <MailIcon />,
    dt: 'Kontakt',
    dd: (
      <>
        E-mail{' '}
        <a href="mailto:zdenek@zdenekpodany.cz" className="vkostce-link">
          zdenek@zdenekpodany.cz
        </a>
        , telefon{' '}
        <a href="tel:+420735945421" className="vkostce-link">
          +420 735 945 421
        </a>
        . Obvykle odpovím do 24 hodin.
      </>
    ),
  },
  {
    icon: <GlobeIcon />,
    dt: 'Web',
    dd: (
      <>
        <a href="https://zdenekpodany.cz/" className="vkostce-link">
          zdenekpodany.cz
        </a>{' '}
        — včetně sekce O mně.{' '}
        <a href="https://zdenekpodany.cz/tvorba-webu-znojmo" className="vkostce-link">
          Tvorba webu Znojmo
        </a>
        .
      </>
    ),
  },
];

export default function VKostceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section
      id="v-kostce"
      ref={ref}
      aria-labelledby="geo-summary-heading"
      className="vkostce-section"
    >
      <div className="vkostce-container">

        {/* Left: intro */}
        <div className="vkostce-intro">
          <motion.span
            className="vkostce-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
          >
            Rychlý přehled
          </motion.span>

          <motion.h2
            id="geo-summary-heading"
            className="vkostce-title"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            V&nbsp;kostce
          </motion.h2>

          <motion.p
            className="vkostce-lead"
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease }}
          >
            Kdo jsem, co dělám a jak mě kontaktovat — stručně a bez obchodní mluvy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.26, ease }}
          >
            <a href="#kontakt" className="btn btn-primary vkostce-cta">
              Nezávazná konzultace
            </a>
          </motion.div>
        </div>

        {/* Right: fact cards */}
        <dl className="vkostce-grid">
          {facts.map(({ icon, dt, dd }, i) => (
            <motion.div
              key={dt}
              className="vkostce-card"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: 0.22 + i * 0.07, ease }}
            >
              <div className="vkostce-card-icon">{icon}</div>
              <dt className="vkostce-dt">{dt}</dt>
              <dd className="vkostce-dd">{dd}</dd>
            </motion.div>
          ))}
        </dl>

      </div>
    </section>
  );
}

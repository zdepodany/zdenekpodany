'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const rows: [string, string][] = [
  ['Zákazník si vás musí složitě dohledávat', 'Vše důležité najde během pár vteřin'],
  ['Informace jen po telefonu nebo zprávách', 'Služby, ceny i reference přehledně online'],
  ['Náhodný první dojem', 'Profesionální a důvěryhodná prezentace'],
  ['Závislost jen na doporučení', 'Stabilní online vizitka, která pracuje 24/7'],
  ['Konkurence působí silněji', 'Vy působíte stejně profesionálně — nebo lépe'],
];

const ease = [0.16, 1, 0.3, 1] as const;

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.25" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" />
      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProcWebSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="proc-web" ref={ref} className="proc-web-section">
      {/* subtle dot-grid texture */}
      <div className="proc-web-bg-grid" aria-hidden="true" />

      <div className="proc-web-container">
        {/* Left: headline block */}
        <div className="proc-web-intro">
          <motion.span
            className="proc-web-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            Proč investovat do webu
          </motion.span>

          <motion.h2
            className="proc-web-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease }}
          >
            Kvalitní web není&nbsp;luxus.<br />
            <span className="proc-web-title-accent">Je to základ podnikání.</span>
          </motion.h2>

          <motion.p
            className="proc-web-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16, ease }}
          >
            Nemusí být složitý ani drahý. Stačí, aby fungoval a budoval důvěru zákazníků.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26, ease }}
          >
            <a href="#kontakt" className="btn btn-primary proc-web-cta-btn">
              Chci funkční web
            </a>
          </motion.div>
        </div>

        {/* Right: comparison table */}
        <div className="proc-web-table-wrap">
          {/* Column headers */}
          <motion.div
            className="proc-web-col-headers"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            <div className="proc-web-col-label proc-web-col-label--neg">Bez webu</div>
            <div className="proc-web-col-label proc-web-col-label--pos">S kvalitním webem</div>
          </motion.div>

          {/* Rows */}
          <div className="proc-web-rows">
            {rows.map(([neg, pos], i) => (
              <motion.div
                key={i}
                className="proc-web-row"
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.48, delay: 0.3 + i * 0.075, ease }}
              >
                <div className="proc-web-cell proc-web-cell--neg">
                  <span className="proc-web-icon proc-web-icon--cross">
                    <CrossIcon />
                  </span>
                  <span className="proc-web-cell-text">{neg}</span>
                </div>
                <div className="proc-web-cell proc-web-cell--pos">
                  <span className="proc-web-icon proc-web-icon--check">
                    <CheckIcon />
                  </span>
                  <span className="proc-web-cell-text">{pos}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

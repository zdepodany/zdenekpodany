'use client'

import { useState } from 'react'

const PLANS = [
  {
    id: 'web-bezi',
    title: 'Web běží',
    desc: 'Spolehlivý hosting na Edge síti.',
    monthlyPrice: 199,
    yearlyPrice: 1890,
    featured: false,
    badge: null,
    ctaText: 'Objednat',
  },
  {
    id: 'web-kontaktuje',
    title: 'Web kontaktuje',
    desc: 'Hosting + kontaktní formulář pro zákazníky.',
    monthlyPrice: 239,
    yearlyPrice: 2290,
    featured: false,
    badge: null,
    ctaText: 'Objednat',
  },
  {
    id: 'web-pod-dohledem',
    title: 'Web pod dohledem',
    desc: 'Kompletní péče — hosting, monitoring i úpravy.',
    monthlyPrice: 999,
    yearlyPrice: 9890,
    featured: true,
    badge: 'Doporučuji',
    ctaText: 'Objednat',
  },
] as const

const FEATURES = [
  { key: 'hosting',     label: 'Hosting (Edge síť)' },
  { key: 'form',        label: 'Kontaktní formulář' },
  { key: 'speedCheck',  label: 'Kontrola rychlosti 1× týdně' },
  { key: 'seoCheck',    label: 'Kontrola technického SEO 1× týdně' },
  { key: 'updates',     label: '60 min drobných úprav měsíčně' },
] as const

const PLAN_FEATURES: Record<string, Record<string, boolean>> = {
  'web-bezi':         { hosting: true,  form: false, speedCheck: false, seoCheck: false, updates: false },
  'web-kontaktuje':   { hosting: true,  form: true,  speedCheck: false, seoCheck: false, updates: false },
  'web-pod-dohledem': { hosting: true,  form: true,  speedCheck: true,  seoCheck: true,  updates: true  },
}

function fmt(n: number) {
  return n.toLocaleString('cs-CZ') + ' Kč'
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 7l3.5 3.5 6.5-7"/>
    </svg>
  )
}

export default function PricingTable() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="pt-wrapper">

      {/* Billing toggle */}
      <div className="pt-toggle-wrap" role="group" aria-label="Způsob platby">
        <button
          className={`pt-toggle-btn${!yearly ? ' pt-toggle-btn--active' : ''}`}
          onClick={() => setYearly(false)}
          aria-pressed={!yearly}
        >
          Měsíčně
        </button>
        <button
          className={`pt-toggle-btn${yearly ? ' pt-toggle-btn--active' : ''}`}
          onClick={() => setYearly(true)}
          aria-pressed={yearly}
        >
          Ročně
          <span className="pt-save-chip">ušetříte ~20&nbsp;%</span>
        </button>
      </div>

      {/* Comparison table */}
      <div className="pt-table-wrap">
        <table className="pt-table" aria-label="Srovnání plánů hostingu">
          <thead>
            <tr>
              <th className="pt-th-label" scope="col" />
              {PLANS.map(plan => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`pt-th-plan${plan.featured ? ' pt-th-plan--featured' : ''}`}
                >
                  {plan.badge && (
                    <span className="pt-plan-badge">{plan.badge}</span>
                  )}
                  <div className="pt-plan-name">{plan.title}</div>
                  <div className="pt-plan-price-wrap">
                    <span className="pt-plan-price">
                      {yearly ? fmt(plan.yearlyPrice) : fmt(plan.monthlyPrice)}
                    </span>
                    <span className="pt-plan-period">
                      &nbsp;/&nbsp;{yearly ? 'rok' : 'měsíc'}
                    </span>
                  </div>
                  {yearly && (
                    <div className="pt-plan-equiv">
                      ≈ {fmt(Math.round(plan.yearlyPrice / 12))} / měsíc
                    </div>
                  )}
                  <a
                    href="/#kontakt"
                    className={`btn pt-plan-cta${plan.featured ? ' pt-plan-cta--featured' : ' btn-secondary'}`}
                  >
                    {plan.ctaText}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feat, fi) => (
              <tr key={feat.key} className={`pt-row${fi % 2 === 0 ? ' pt-row--even' : ''}`}>
                <td className="pt-td-label">{feat.label}</td>
                {PLANS.map(plan => {
                  const has = PLAN_FEATURES[plan.id][feat.key]
                  return (
                    <td
                      key={plan.id}
                      className={`pt-td-check${plan.featured ? ' pt-td-check--featured' : ''}`}
                      aria-label={has ? 'Zahrnuto' : 'Nezahrnuto'}
                    >
                      {has ? (
                        <span className={`pt-check${plan.featured ? ' pt-check--featured' : ''}`}>
                          <CheckIcon />
                        </span>
                      ) : (
                        <span className="pt-dash" aria-hidden="true">—</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

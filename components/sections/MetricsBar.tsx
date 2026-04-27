'use client'

import { useEffect, useRef } from 'react'

interface Metric {
  count: number
  suffix?: string
  label: string
}

const METRICS: Metric[] = [
  { count: 20, suffix: '+', label: 'webů pro malé firmy' },
  { count: 9, suffix: '+', label: 'mobilních a webových aplikací' },
  { count: 7, label: 'let praxe v UX a designu' },
]

function animateCount(el: HTMLElement, target: number, suffix: string, duration: number) {
  const start = performance.now()
  const run = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(target * ease) + suffix
    if (progress < 1) requestAnimationFrame(run)
    else el.textContent = target + suffix
  }
  requestAnimationFrame(run)
}

export default function MetricsBar() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('.metric-number')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !(entry.target as HTMLElement).dataset.animated) {
            const el = entry.target as HTMLElement
            el.dataset.animated = 'true'
            const target = parseInt(el.dataset.count || '0', 10)
            const suffix = el.dataset.suffix || ''
            animateCount(el, target, suffix, 1500)
          }
        })
      },
      { threshold: 0.5 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="metrics-bar">
      <div className="container">
        <div className="metrics-grid" ref={containerRef}>
          {METRICS.map((m, i) => (
            <div key={i} className="metric-item">
              <span className="metric-number" data-count={m.count} data-suffix={m.suffix || ''}>0{m.suffix || ''}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

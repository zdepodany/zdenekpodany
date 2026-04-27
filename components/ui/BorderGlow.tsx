'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

interface BorderGlowProps {
  children: React.ReactNode
  color?: string
  glowSize?: number
  duration?: number
  className?: string
}

export default function BorderGlow({
  children,
  color = '#006DEC',
  glowSize = 120,
  duration = 3000,
  className = '',
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const startRef = useRef<number | null>(null)

  useAnimationFrame((time) => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const { width, height } = container.getBoundingClientRect()
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (startRef.current === null) startRef.current = time
    const elapsed = time - startRef.current
    const progress = (elapsed % duration) / duration
    const perimeter = 2 * (width + height)
    const pos = progress * perimeter

    let x = 0
    let y = 0
    if (pos < width) {
      x = pos
      y = 0
    } else if (pos < width + height) {
      x = width
      y = pos - width
    } else if (pos < 2 * width + height) {
      x = width - (pos - width - height)
      y = height
    } else {
      x = 0
      y = height - (pos - 2 * width - height)
    }

    ctx.clearRect(0, 0, width, height)
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
    gradient.addColorStop(0, color)
    gradient.addColorStop(0.5, color + '66')
    gradient.addColorStop(1, 'transparent')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  })

  return (
    <div ref={containerRef} className={`border-glow-wrapper${className ? ' ' + className : ''}`} style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

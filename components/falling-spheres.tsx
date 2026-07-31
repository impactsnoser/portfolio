"use client"

import { useEffect, useRef } from "react"

type Ball = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  hue: number
}

const COLORS = [175, 200, 260, 320, 30]

export function FallingSpheres() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let balls: Ball[] = []
    let rafId = 0

    function resize() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      canvas!.width = width * devicePixelRatio
      canvas!.height = height * devicePixelRatio
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    function init() {
      resize()
      const count = width < 640 ? 12 : width < 1200 ? 20 : 28
      balls = Array.from({ length: count }, () => {
        const r = 8 + Math.random() * 26
        return {
          x: Math.random() * width,
          y: -Math.random() * height,
          r,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 1.5,
          hue: COLORS[Math.floor(Math.random() * COLORS.length)],
        }
      })
    }

    const gravity = 0.045
    const damping = 0.72

    function tick() {
      ctx!.clearRect(0, 0, width, height)

      for (const b of balls) {
        b.vy += gravity
        b.x += b.vx
        b.y += b.vy

        if (b.y + b.r > height) {
          b.y = height - b.r
          b.vy *= -damping
          b.vx *= 0.98
        }
        if (b.x - b.r < 0) {
          b.x = b.r
          b.vx *= -1
        } else if (b.x + b.r > width) {
          b.x = width - b.r
          b.vx *= -1
        }

        const gradient = ctx!.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.3,
          b.r * 0.1,
          b.x,
          b.y,
          b.r
        )
        gradient.addColorStop(0, `oklch(0.8 0.14 ${b.hue} / 0.9)`)
        gradient.addColorStop(1, `oklch(0.55 0.14 ${b.hue} / 0.35)`)

        ctx!.beginPath()
        ctx!.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx!.fillStyle = gradient
        ctx!.fill()
      }

      rafId = requestAnimationFrame(tick)
    }

    init()
    const onResize = () => {
      const oldWidth = width
      resize()
      const scale = oldWidth ? width / oldWidth : 1
      balls.forEach((b) => (b.x *= scale))
    }
    window.addEventListener("resize", onResize)

    if (prefersReducedMotion) {
      tick()
      cancelAnimationFrame(rafId)
    } else {
      tick()
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

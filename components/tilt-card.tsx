"use client"

import { useRef, type ReactNode } from "react"

/**
 * Карточка с интерактивным 3D-наклоном, следующим за курсором.
 * На сенсорных устройствах эффект просто не срабатывает.
 */
export function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const ry = (x - 0.5) * (max * 2)
    const rx = (0.5 - y) * (max * 2)
    el.style.setProperty("--ry", `${ry}deg`)
    el.style.setProperty("--rx", `${rx}deg`)
  }

  function reset() {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--ry", "0deg")
    el.style.setProperty("--rx", "0deg")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  )
}

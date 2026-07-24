"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#services", label: "Услуги" },
  { href: "#work", label: "Работы" },
  { href: "#contact", label: "Контакты" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-primary">{"<"}</span>
          ML
          <span className="text-primary">{" />"}</span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-block"
          >
            Связаться
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

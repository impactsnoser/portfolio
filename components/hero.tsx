"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { LiquidBlobs } from "@/components/liquid-blobs"

// Если хочешь фоновое видео — положи файл в /public (например /public/hero-bg.mp4)
// и укажи путь ниже. Если оставить пустой строкой — будет фон без видео (просто
// текущий тёмный/светлый фон сайта), ничего не сломается.
const BG_VIDEO = ""

const navLinks = [
  { href: "#about", label: "Обо мне", active: true },
  { href: "#skills", label: "Навыки" },
  { href: "#services", label: "Услуги" },
  { href: "#work", label: "Работы" },
  { href: "#contact", label: "Контакты" },
]

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section id="about" className="relative h-screen w-full overflow-hidden">
      {/* Фоновое видео (опционально) */}
      {BG_VIDEO ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <LiquidBlobs />
      )}
      {/* Затемнение поверх фона для читаемости текста */}
      <div className="absolute inset-0 bg-black/15" aria-hidden="true" />

      {/* Навбар */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-base font-medium text-white">
          <span className="font-mono text-primary">{"<"}</span>
          {profile.name.split(" ")[0]}
          <span className="font-mono text-primary">{" />"}</span>
        </a>

        <nav className="liquid-glass hidden items-center gap-1 rounded-xl px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-0.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
                link.active ? "bg-white/15 text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="liquid-glass rounded-full px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Связаться
          </a>
          <div className="[&_button]:border-white/15 [&_button]:bg-white/5 [&_button]:text-white">
            <ThemeToggle />
          </div>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="liquid-glass rounded-lg p-2 text-white md:hidden"
          aria-label="Меню"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="liquid-glass absolute left-4 right-4 top-[72px] z-30 flex flex-col gap-1 rounded-2xl p-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm text-white/85 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Связаться
            </a>
            <div className="[&_button]:border-white/15 [&_button]:bg-white/5 [&_button]:text-white">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      {/* Контент героя */}
      <div className="absolute bottom-0 left-0 z-20 max-w-2xl px-6 pb-10 sm:px-12 sm:pb-16">
        {profile.available && (
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Открыт к новым проектам
          </div>
        )}

        <h1 className="mb-4 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mb-2 text-xl font-medium text-white/80 sm:text-2xl">{profile.role}</p>
        <p className="mb-7 max-w-md text-sm leading-relaxed text-white/60">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-7 sm:text-base"
          >
            Мои работы
          </a>
          <a
            href="#contact"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-7 sm:text-base"
          >
            Связаться со мной
          </a>
        </div>
      </div>
    </section>
  )
}

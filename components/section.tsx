import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <Reveal className="mb-10 flex items-center gap-4">
        <div>
          <p className="font-mono text-sm text-primary">{eyebrow}</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="h-px flex-1 bg-border" />
      </Reveal>
      {children}
    </section>
  )
}

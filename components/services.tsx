import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { services } from "@/lib/portfolio-data"
import { Code2, Server, Palette, MessageCircle } from "lucide-react"

const icons = {
  code: Code2,
  server: Server,
  palette: Palette,
  message: MessageCircle,
}

export function Services() {
  return (
    <Section id="services" eyebrow="02. Что я делаю" title="Услуги">
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[service.icon]
          return (
            <Reveal key={service.title} delay={i * 90}>
              <TiltCard className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-primary/70 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mt-3 text-lg font-medium">{service.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

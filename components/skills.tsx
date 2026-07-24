import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { skillGroups } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <Section id="skills" eyebrow="01. Технологии" title="Навыки">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 90}
            className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <h3 className="text-sm font-medium text-muted-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

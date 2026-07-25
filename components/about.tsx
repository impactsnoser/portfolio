import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { about } from "@/lib/portfolio-data"
import { withBasePath } from "@/lib/utils"
import { FileDown } from "lucide-react"

export function About() {
  return (
    <Section id="bio" eyebrow="00. Кто я" title="Немного обо мне">
      <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {about.bio}
        </p>
        {about.resumeUrl && (
          <a
            href={withBasePath(about.resumeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <FileDown className="h-4 w-4" />
            Резюме
          </a>
        )}
      </Reveal>
    </Section>
  )
}

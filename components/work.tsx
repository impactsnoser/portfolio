import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { projects } from "@/lib/portfolio-data"
import { withBasePath } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function Work() {
  return (
    <Section id="work" eyebrow="03. Портфолио" title="Мои работы">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 100}>
            <TiltCard
              max={5}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image ? withBasePath(project.image) : withBasePath("/placeholder.svg")}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center overflow-hidden bg-secondary">
                  <span className="font-mono text-4xl font-semibold text-muted-foreground/40 transition-transform duration-500 group-hover:scale-110">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <div className="flex gap-2">
                    {!project.repos && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — исходный код`}
                        className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                      >
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — открыть сайт`}
                        className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.repos && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.repos.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <GithubIcon className="h-4 w-4" />
                        {repo.label}
                      </a>
                    ))}
                  </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

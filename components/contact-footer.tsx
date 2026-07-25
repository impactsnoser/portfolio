import { contact, profile } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

const socialIcons: Record<string, (props: { className?: string }) => JSX.Element> = {
  GitHub: GithubIcon,
  Telegram: TelegramIcon,
}

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 md:py-28"
    >
      <Reveal className="flex flex-col items-center text-center">
        <p className="font-mono text-sm text-primary">04. Контакты</p>
        <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Давай поработаем вместе
        </h2>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Есть проект или идея? Напиши мне — отвечу в ближайшее время.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 active:translate-y-0"
        >
          {contact.email}
        </a>

        <a
          href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
          className="mt-4 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          {contact.phone}
        </a>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {contact.socials.map((social) => {
            const Icon = socialIcons[social.label]
            return (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  {Icon ? <Icon className="h-5 w-5" /> : social.label}
                </a>
              </li>
            )
          })}
        </ul>
      </Reveal>

      <div className="mt-16 border-t border-border pt-8 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}

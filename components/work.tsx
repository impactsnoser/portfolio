import { contact, profile } from "@/lib/portfolio-data"
import { Reveal } from "@/components/reveal"

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

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {contact.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {social.label}
              </a>
            </li>
          ))}
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

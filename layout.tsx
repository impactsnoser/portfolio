import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main id="top" className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Skills />
      <Services />
      <Work />
      <ContactFooter />
    </main>
  )
}

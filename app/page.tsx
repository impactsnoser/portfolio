import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main id="top" className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <ContactFooter />
    </main>
  )
}

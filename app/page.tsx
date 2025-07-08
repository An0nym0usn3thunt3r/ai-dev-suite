import Hero from "@/components/hero"
import Features from "@/components/features"
import Demo from "@/components/demo"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}

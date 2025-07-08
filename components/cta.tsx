import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4 mr-2" />
          Join 50,000+ developers already using DevAI Suite
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Ready to <span className="gradient-text">Transform</span>
          <br />
          Your Development Workflow?
        </h2>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Start your free trial today and experience the future of AI-powered development. No credit card required,
          cancel anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/dashboard">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
            <Link href="/contact">Request Demo</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}

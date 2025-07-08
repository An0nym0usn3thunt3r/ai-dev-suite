import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individual developers",
    price: "Free",
    period: "forever",
    popular: false,
    features: [
      { name: "AI Code Assistant (Basic)", included: true },
      { name: "Code completion & suggestions", included: true },
      { name: "Basic bug detection", included: true },
      { name: "5 rapid prototypes/month", included: true },
      { name: "Community support", included: true },
      { name: "Advanced code review", included: false },
      { name: "Team collaboration", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false },
    ],
    cta: "Get Started Free",
    href: "/demo",
  },
  {
    name: "Professional",
    description: "For serious developers and small teams",
    price: "$29",
    period: "per user/month",
    popular: true,
    features: [
      { name: "AI Code Assistant (Advanced)", included: true },
      { name: "Developer Copilot", included: true },
      { name: "LLM-Powered Code Review", included: true },
      { name: "Unlimited rapid prototypes", included: true },
      { name: "Automation Framework", included: true },
      { name: "Smart Analytics", included: true },
      { name: "Team collaboration (up to 5)", included: true },
      { name: "Priority email support", included: true },
      { name: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    href: "/demo",
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "Custom",
    period: "contact sales",
    popular: false,
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Custom AI model training", included: true },
      { name: "On-premise deployment", included: true },
      { name: "Advanced security & compliance", included: true },
      { name: "Custom integrations & API", included: true },
      { name: "Dedicated success manager", included: true },
      { name: "24/7 phone & chat support", included: true },
      { name: "SLA guarantees", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
]

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 14-day free trial of our Professional plan with full access to all features. No credit card required.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and can arrange invoicing for enterprise customers.",
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer:
      "Yes, we offer 50% discounts for students and qualified nonprofit organizations. Contact us for more details.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your development needs. Start free, upgrade when you're ready.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            14-day free trial • No credit card required
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-2">/{plan.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg" asChild>
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Compare All <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">See exactly what's included in each plan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">AI Code Assistant</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4">Advanced</td>
                  <td className="text-center p-4">Advanced + Custom</td>
                </tr>
                <tr className="border-t bg-muted/20">
                  <td className="p-4 font-medium">Developer Copilot</td>
                  <td className="text-center p-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Code Review</td>
                  <td className="text-center p-4">
                    <X className="h-4 w-4 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="h-4 w-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-t bg-muted/20">
                  <td className="p-4 font-medium">Rapid Prototyping</td>
                  <td className="text-center p-4">5/month</td>
                  <td className="text-center p-4">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Team Members</td>
                  <td className="text-center p-4">1</td>
                  <td className="text-center p-4">Up to 5</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-t bg-muted/20">
                  <td className="p-4 font-medium">Support</td>
                  <td className="text-center p-4">Community</td>
                  <td className="text-center p-4">Email</td>
                  <td className="text-center p-4">24/7 Phone & Chat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Pricing <span className="gradient-text">FAQ</span>
            </h2>
            <p className="text-xl text-muted-foreground">Common questions about our pricing and plans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers who are already building faster with DevAI Suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/demo">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Cancel anytime • 14-day free trial
          </p>
        </div>
      </section>
    </div>
  )
}

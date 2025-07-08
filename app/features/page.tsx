import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Code,
  Brain,
  GitPullRequest,
  Rocket,
  Settings,
  Sparkles,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Clock,
  Users,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Code,
    title: "AI Code Assistant",
    description: "Your intelligent coding companion that writes, refactors, and debugs code in real-time.",
    color: "text-blue-500",
    benefits: [
      "Intelligent autocomplete with context awareness",
      "Real-time bug detection and automatic fixes",
      "Code optimization suggestions",
      "Support for 30+ programming languages",
      "IDE integration with VS Code, IntelliJ, and more",
      "Custom coding style adaptation",
    ],
    metrics: {
      improvement: "10x faster coding",
      accuracy: "95% bug detection",
      languages: "30+ languages",
    },
  },
  {
    icon: Brain,
    title: "Developer Copilot",
    description: "AI that learns from your coding habits and proactively suggests workflow improvements.",
    color: "text-purple-500",
    benefits: [
      "Personalized coding suggestions based on your style",
      "Pattern recognition across your codebase",
      "Workflow optimization recommendations",
      "Smart refactoring suggestions",
      "Team collaboration insights",
      "Performance bottleneck identification",
    ],
    metrics: {
      improvement: "300% productivity boost",
      accuracy: "90% suggestion relevance",
      languages: "Learns continuously",
    },
  },
  {
    icon: GitPullRequest,
    title: "LLM-Powered Code Review",
    description: "Comprehensive pull request analysis with natural language feedback and insights.",
    color: "text-green-500",
    benefits: [
      "Automated security vulnerability detection",
      "Performance impact analysis",
      "Code quality scoring and recommendations",
      "Best practice enforcement",
      "Natural language explanations",
      "Integration with GitHub, GitLab, and Bitbucket",
    ],
    metrics: {
      improvement: "80% faster reviews",
      accuracy: "99% security detection",
      languages: "Human-like feedback",
    },
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Transform ideas into working prototypes using natural language specifications.",
    color: "text-orange-500",
    benefits: [
      "Natural language to code conversion",
      "Multi-framework support (React, Vue, Angular, etc.)",
      "Instant deployment and hosting",
      "Template generation and customization",
      "API integration assistance",
      "Responsive design generation",
    ],
    metrics: {
      improvement: "20x faster prototyping",
      accuracy: "Production-ready code",
      languages: "Any framework",
    },
  },
  {
    icon: Settings,
    title: "Automation Framework",
    description: "BLACKBOX.AI automates testing, deployment, and documentation seamlessly.",
    color: "text-red-500",
    benefits: [
      "Automated test case generation",
      "CI/CD pipeline optimization",
      "Documentation auto-generation",
      "Deployment strategy recommendations",
      "Monitoring and alerting setup",
      "Rollback automation",
    ],
    metrics: {
      improvement: "90% less manual work",
      accuracy: "99.9% uptime",
      languages: "Zero-config setup",
    },
  },
  {
    icon: Sparkles,
    title: "Smart Analytics",
    description: "Deep insights into development patterns and team productivity metrics.",
    color: "text-yellow-500",
    benefits: [
      "Code quality trend analysis",
      "Team productivity metrics",
      "Performance bottleneck identification",
      "Technical debt tracking",
      "Developer happiness insights",
      "Custom dashboard creation",
    ],
    metrics: {
      improvement: "Data-driven decisions",
      accuracy: "Real-time insights",
      languages: "Actionable metrics",
    },
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and privacy controls.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support with dedicated success managers for enterprise.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools with real-time sharing and commenting.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with sub-second response times globally.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">Modern Developers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Discover how our comprehensive AI suite transforms every aspect of your development workflow, from writing
            code to deployment and beyond.
          </p>
          <Button size="lg" asChild>
            <Link href="/demo">
              Try All Features Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-lg mb-6 ${feature.color}`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-xl text-muted-foreground mb-6">{feature.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="font-bold text-primary">{feature.metrics.improvement}</div>
                      <div className="text-sm text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="font-bold text-primary">{feature.metrics.accuracy}</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="font-bold text-primary">{feature.metrics.languages}</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/demo">
                      Try {feature.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex-1">
                  <Card className="bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Key Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Plus Many More <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need for a complete development experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience All Features?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial and see how DevAI Suite can transform your development workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/demo">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

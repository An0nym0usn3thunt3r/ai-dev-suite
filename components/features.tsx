import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Brain, Settings, ArrowRight, Sparkles, GitPullRequest, Rocket } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Code,
    title: "AI Code Assistant",
    description: "Real-time code writing, refactoring, and debugging help with context-aware suggestions.",
    features: ["Intelligent autocomplete", "Bug detection & fixes", "Code optimization", "Multi-language support"],
    color: "text-blue-500",
  },
  {
    icon: Brain,
    title: "Developer Copilot",
    description: "Learns from your coding habits and suggests proactive improvements to your workflow.",
    features: ["Personalized suggestions", "Pattern recognition", "Workflow optimization", "Smart refactoring"],
    color: "text-purple-500",
  },
  {
    icon: GitPullRequest,
    title: "LLM-Powered Code Review",
    description: "Analyzes pull requests and provides detailed feedback in natural language.",
    features: [
      "Automated PR analysis",
      "Security vulnerability detection",
      "Performance insights",
      "Best practice recommendations",
    ],
    color: "text-green-500",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Turns user prompts and specifications into working prototypes for various frameworks.",
    features: ["Natural language to code", "Multi-framework support", "Instant deployment", "Template generation"],
    color: "text-orange-500",
  },
  {
    icon: Settings,
    title: "Automation Framework",
    description: "BLACKBOX.AI automates testing, deployment, and documentation tasks seamlessly.",
    features: ["Automated testing", "CI/CD integration", "Documentation generation", "Deployment automation"],
    color: "text-red-500",
  },
  {
    icon: Sparkles,
    title: "Smart Analytics",
    description: "Deep insights into your development patterns and team productivity metrics.",
    features: ["Performance tracking", "Team analytics", "Code quality metrics", "Productivity insights"],
    color: "text-yellow-500",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Supercharge Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive AI suite covers every aspect of the development lifecycle, from writing code to deployment
            and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background shadow-sm mb-4 ${feature.color}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

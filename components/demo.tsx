"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Play, Code, GitPullRequest, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const demoTabs = [
  {
    id: "code-assistant",
    label: "Code Assistant",
    icon: Code,
    title: "AI-Powered Code Generation",
    description: "Watch as our AI writes, refactors, and optimizes your code in real-time.",
    features: ["Context-aware suggestions", "Multi-language support", "Instant bug fixes"],
    code: `// AI suggests optimized solution
function fibonacci(n) {
  // AI: "Consider using memoization for better performance"
  const memo = {};
  
  function fib(num) {
    if (num in memo) return memo[num];
    if (num <= 1) return num;
    
    memo[num] = fib(num - 1) + fib(num - 2);
    return memo[num];
  }
  
  return fib(n);
}

// AI: "Added memoization - 10x performance improvement!"`,
  },
  {
    id: "code-review",
    label: "Code Review",
    icon: GitPullRequest,
    title: "Intelligent Code Analysis",
    description: "Our AI reviews your pull requests and provides detailed, actionable feedback.",
    features: ["Security analysis", "Performance insights", "Best practices"],
    code: `// PR Analysis Results
✅ Security: No vulnerabilities detected
⚠️  Performance: Consider using Promise.all() for parallel execution
💡 Suggestion: Extract reusable utility function
📝 Documentation: Add JSDoc comments for better maintainability

// Recommended changes:
- Line 23: Use const instead of let for immutable values
- Line 45: Add error handling for async operations
- Line 67: Consider using TypeScript for better type safety`,
  },
  {
    id: "automation",
    label: "Automation",
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate testing, deployment, and documentation with intelligent workflows.",
    features: ["Auto-testing", "CI/CD integration", "Smart deployment"],
    code: `# Auto-generated workflow
name: AI-Powered CI/CD

on: [push, pull_request]

jobs:
  ai-analysis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: AI Code Analysis
        run: |
          # AI automatically detects test requirements
          # Generates appropriate test cases
          # Runs security scans
          # Optimizes build process
          
  deploy:
    needs: ai-analysis
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Smart Deploy
        run: |
          # AI determines optimal deployment strategy
          # Handles rollback scenarios automatically`,
  },
]

export default function Demo() {
  const [activeTab, setActiveTab] = useState("code-assistant")

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See Our AI in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven development tools through interactive demos and real-world examples.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {demoTabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {demoTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{tab.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {tab.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href="/dashboard">
                          <Play className="mr-2 h-4 w-4" />
                          Try Interactive Demo
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/docs">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Live Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-muted-foreground whitespace-pre-wrap">{tab.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

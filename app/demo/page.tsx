"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Play, Code, GitPullRequest, Zap, ArrowRight, Sparkles, Copy, Download, Share } from "lucide-react"
import Link from "next/link"

const demoExamples = {
  "code-assistant": {
    title: "AI Code Assistant Demo",
    description: "See how our AI writes and optimizes code in real-time",
    input: "Create a React component for a user profile card",
    output: `import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    location?: string;
    avatar?: string;
    role: string;
    status: 'online' | 'offline' | 'away';
  };
}

export default function UserProfile({ user }: UserProfileProps) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    away: 'bg-yellow-500'
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="relative mx-auto">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className={\`absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white \${statusColors[user.status]}\`} />
        </div>
        <CardTitle className="mt-4">{user.name}</CardTitle>
        <Badge variant="secondary">{user.role}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{user.email}</span>
        </div>
        {user.phone && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>{user.phone}</span>
          </div>
        )}
        {user.location && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{user.location}</span>
          </div>
        )}
        <div className="flex space-x-2 pt-4">
          <Button className="flex-1">Message</Button>
          <Button variant="outline" className="flex-1 bg-transparent">Call</Button>
        </div>
      </CardContent>
    </Card>
  );
}`,
    insights: [
      "Generated TypeScript interfaces automatically",
      "Added proper accessibility attributes",
      "Included responsive design patterns",
      "Used modern React patterns and hooks",
    ],
  },
  "code-review": {
    title: "AI Code Review Demo",
    description: "Experience intelligent code analysis and feedback",
    input: `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}`,
    output: `// AI Code Review Results

🔍 ANALYSIS COMPLETE

✅ FUNCTIONALITY: Code works correctly
⚠️  IMPROVEMENTS SUGGESTED:

1. **Use Modern JavaScript (ES6+)**
   - Replace 'var' with 'const' for immutable variables
   - Use array methods like reduce() for better readability

2. **Add Type Safety**
   - Consider adding TypeScript or JSDoc types
   - Validate input parameters

3. **Error Handling**
   - Add null/undefined checks for items array
   - Handle edge cases (empty array, invalid prices)

📝 RECOMMENDED REFACTOR:

function calculateTotal(items = []) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
  
  return items.reduce((total, item) => {
    if (!item || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
      console.warn('Invalid item detected:', item);
      return total;
    }
    return total + (item.price * item.quantity);
  }, 0);
}

🎯 IMPACT: +40% readability, +60% maintainability, +100% error resilience`,
    insights: [
      "Detected outdated JavaScript patterns",
      "Suggested modern alternatives",
      "Identified potential runtime errors",
      "Provided complete refactored solution",
    ],
  },
  automation: {
    title: "Automation Framework Demo",
    description: "See how AI automates your development workflow",
    input: "Set up automated testing and deployment for a React app",
    output: `# 🤖 AI-Generated Workflow Configuration

## GitHub Actions Workflow
name: AI-Powered CI/CD
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run AI-generated tests
        run: |
          npm run test:unit
          npm run test:integration
          npm run test:e2e
      
      - name: AI Security Scan
        run: npm audit --audit-level moderate

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Vercel
        run: |
          # AI optimizes build settings
          npm run build
          vercel --prod --token \${{ secrets.VERCEL_TOKEN }}

## Auto-Generated Test Suite
// tests/components/UserProfile.test.tsx
import { render, screen } from '@testing-library/react';
import UserProfile from '../UserProfile';

describe('UserProfile Component', () => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
    status: 'online' as const
  };

  it('renders user information correctly', () => {
    render(<UserProfile user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('displays correct status indicator', () => {
    render(<UserProfile user={mockUser} />);
    const statusIndicator = screen.getByRole('status');
    expect(statusIndicator).toHaveClass('bg-green-500');
  });
});

## Performance Monitoring
// Auto-configured monitoring
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App() {
  return (
    <>
      <YourApp />
      <Analytics />
      <SpeedInsights />
    </>
  );
}`,
    insights: [
      "Generated complete CI/CD pipeline",
      "Created comprehensive test suite",
      "Added security scanning",
      "Configured performance monitoring",
    ],
  },
}

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState("code-assistant")
  const [userInput, setUserInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
  }

  const currentDemo = demoExamples[activeDemo as keyof typeof demoExamples]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Interactive AI Demo
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Experience AI-Powered <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Try our AI tools in action. See how they can transform your development workflow with real-time code
            generation, intelligent reviews, and automated workflows.
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="code-assistant" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Code Assistant
              </TabsTrigger>
              <TabsTrigger value="code-review" className="flex items-center gap-2">
                <GitPullRequest className="h-4 w-4" />
                Code Review
              </TabsTrigger>
              <TabsTrigger value="automation" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Automation
              </TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Try It Yourself
                  </CardTitle>
                  <CardDescription>{currentDemo.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Input:</label>
                    <Textarea
                      placeholder={currentDemo.input}
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate with AI
                      </>
                    )}
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Generated Result</CardTitle>
                  <CardDescription>{currentDemo.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{currentDemo.output}</code>
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">AI Insights:</h4>
                    {currentDemo.insights.map((insight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {insight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              More AI-Powered <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">Explore all the ways AI can accelerate your development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mx-auto mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <CardTitle>Smart Refactoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI analyzes your code and suggests optimal refactoring strategies to improve performance and
                  maintainability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 mx-auto mb-4">
                  <GitPullRequest className="h-6 w-6" />
                </div>
                <CardTitle>Security Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatically detect security vulnerabilities and get actionable recommendations to fix them.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get AI-powered insights on performance bottlenecks and optimization opportunities in your code.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Development?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial and experience the full power of AI-driven development tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial • Full feature access
          </p>
        </div>
      </section>
    </div>
  )
}

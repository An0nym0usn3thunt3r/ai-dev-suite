"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Code, Play, Save, Share, Lightbulb, Bug, Zap, CheckCircle, AlertTriangle, Copy, RefreshCw } from "lucide-react"

const codeExamples = {
  javascript: `// AI-Enhanced JavaScript Code
function calculateUserMetrics(users) {
  // AI Suggestion: Use modern array methods for better performance
  return users
    .filter(user => user.isActive)
    .map(user => ({
      id: user.id,
      name: user.name,
      score: calculateScore(user),
      lastActive: new Date(user.lastLogin)
    }))
    .sort((a, b) => b.score - a.score);
}

// AI detected potential optimization
function calculateScore(user) {
  // AI: Consider memoization for expensive calculations
  const baseScore = user.contributions * 10;
  const timeBonus = getTimeBonus(user.lastLogin);
  return baseScore + timeBonus;
}`,
  python: `# AI-Enhanced Python Code
import pandas as pd
from typing import List, Dict

def analyze_user_data(data: pd.DataFrame) -> Dict[str, float]:
    """
    AI Suggestion: Added type hints and docstring
    Analyzes user engagement data and returns key metrics
    """
    # AI detected: Use vectorized operations for better performance
    active_users = data[data['is_active'] == True]
    
    metrics = {
        'total_users': len(data),
        'active_users': len(active_users),
        'engagement_rate': len(active_users) / len(data) * 100,
        'avg_session_time': active_users['session_time'].mean()
    }
    
    return metrics`,
  typescript: `// AI-Enhanced TypeScript Code
interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  lastLogin: Date;
}

interface UserMetrics {
  totalUsers: number;
  activeUsers: number;
  engagementRate: number;
}

// AI Suggestion: Added proper error handling and type safety
class UserAnalytics {
  private users: User[] = [];

  constructor(users: User[]) {
    this.users = users;
  }

  public getMetrics(): UserMetrics {
    const activeUsers = this.users.filter(user => user.isActive);
    
    return {
      totalUsers: this.users.length,
      activeUsers: activeUsers.length,
      engagementRate: (activeUsers.length / this.users.length) * 100
    };
  }
}`,
}

const suggestions = [
  {
    type: "optimization",
    title: "Performance Optimization",
    description: "Use array.reduce() instead of multiple loops for better performance",
    icon: Zap,
    color: "text-yellow-500",
    severity: "medium",
  },
  {
    type: "bug",
    title: "Potential Bug",
    description: "Null check missing for user.lastLogin property",
    icon: Bug,
    color: "text-red-500",
    severity: "high",
  },
  {
    type: "improvement",
    title: "Code Improvement",
    description: "Consider using TypeScript interfaces for better type safety",
    icon: Lightbulb,
    color: "text-blue-500",
    severity: "low",
  },
  {
    type: "security",
    title: "Security Enhancement",
    description: "Add input validation for user data",
    icon: AlertTriangle,
    color: "text-orange-500",
    severity: "high",
  },
]

export default function CodeAssistantPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [code, setCode] = useState(codeExamples.javascript)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    setCode(codeExamples[language as keyof typeof codeExamples])
  }

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalyzing(false)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            AI Code Assistant
          </h1>
          <p className="text-muted-foreground">Write, refactor, and optimize your code with AI assistance</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <CheckCircle className="h-3 w-3 text-green-500" />
            AI Ready
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code Editor */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Code Editor</CardTitle>
                <CardDescription>Write and edit your code with real-time AI assistance</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
                placeholder="Start typing your code here..."
              />
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Analyze Code
                  </>
                )}
              </Button>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              AI Suggestions
            </CardTitle>
            <CardDescription>Real-time code improvements and optimizations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="p-3 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <suggestion.icon className={`h-4 w-4 ${suggestion.color}`} />
                    <span className="font-medium text-sm">{suggestion.title}</span>
                  </div>
                  <Badge className={getSeverityColor(suggestion.severity)} variant="secondary">
                    {suggestion.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Apply
                  </Button>
                  <Button size="sm" variant="ghost">
                    Dismiss
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Code Analysis Results */}
      <Card>
        <CardHeader>
          <CardTitle>Code Analysis Results</CardTitle>
          <CardDescription>Detailed analysis of your code quality and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="maintainability">Maintainability</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-500">A</div>
                  <div className="text-sm text-muted-foreground">Overall Grade</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-sm text-muted-foreground">Code Quality</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Issues Found</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Improvements</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span>Time Complexity</span>
                  <Badge variant="outline">O(n log n)</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span>Space Complexity</span>
                  <Badge variant="outline">O(n)</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span>Performance Score</span>
                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No SQL injection vulnerabilities</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Input validation implemented</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span>Consider adding rate limiting</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintainability" className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span>Cyclomatic Complexity</span>
                  <Badge variant="outline">Low</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span>Code Duplication</span>
                  <Badge className="bg-green-100 text-green-800">Minimal</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span>Documentation Coverage</span>
                  <Badge variant="outline">85%</Badge>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

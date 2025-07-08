"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Brain,
  GitPullRequest,
  Rocket,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Activity,
  Users,
  ArrowRight,
  Play,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Mock data for charts
const productivityData = [
  { name: "Mon", value: 85 },
  { name: "Tue", value: 92 },
  { name: "Wed", value: 78 },
  { name: "Thu", value: 95 },
  { name: "Fri", value: 88 },
  { name: "Sat", value: 45 },
  { name: "Sun", value: 32 },
]

const codeQualityData = [
  { name: "Week 1", bugs: 12, fixed: 10 },
  { name: "Week 2", bugs: 8, fixed: 8 },
  { name: "Week 3", bugs: 15, fixed: 13 },
  { name: "Week 4", bugs: 6, fixed: 6 },
]

const quickActions = [
  {
    title: "Start Code Session",
    description: "Begin AI-assisted coding",
    icon: Code,
    href: "/dashboard/code-assistant",
    color: "text-blue-500",
  },
  {
    title: "Review PRs",
    description: "Check pending reviews",
    icon: GitPullRequest,
    href: "/dashboard/code-review",
    color: "text-green-500",
  },
  {
    title: "Create Prototype",
    description: "Build from prompt",
    icon: Rocket,
    href: "/dashboard/prototyping",
    color: "text-orange-500",
  },
  {
    title: "Run Automation",
    description: "Execute workflows",
    icon: Zap,
    href: "/dashboard/automation",
    color: "text-purple-500",
  },
]

const recentActivity = [
  {
    type: "code",
    title: "Code suggestion accepted",
    description: "Optimized database query in user-service.js",
    time: "2 minutes ago",
    icon: Code,
    color: "text-blue-500",
  },
  {
    type: "review",
    title: "PR review completed",
    description: "Authentication module review approved",
    time: "15 minutes ago",
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    type: "automation",
    title: "Deployment successful",
    description: "Production deployment completed successfully",
    time: "1 hour ago",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    type: "alert",
    title: "Security vulnerability detected",
    description: "Potential SQL injection in login endpoint",
    time: "2 hours ago",
    icon: AlertCircle,
    color: "text-red-500",
  },
]

export default function DashboardPage() {
  const [stats, setStats] = useState({
    codeLines: 0,
    suggestions: 0,
    reviews: 0,
    automations: 0,
  })

  // Animate counters on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        codeLines: 12547,
        suggestions: 342,
        reviews: 28,
        automations: 156,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's what's happening with your development workflow today.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Activity className="h-3 w-3" />
            All systems operational
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lines of Code</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.codeLines.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Suggestions</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.suggestions}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8%</span> acceptance rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Code Reviews</CardTitle>
            <GitPullRequest className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.reviews}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-500">3</span> pending review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automations</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.automations}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">99.2%</span> success rate
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Start your most common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3" asChild>
                <Link href={action.href}>
                  <action.icon className={`h-5 w-5 mr-3 ${action.color}`} />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm text-muted-foreground">{action.description}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates from your development workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Productivity Trend
            </CardTitle>
            <CardDescription>Your coding productivity over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Code Quality
            </CardTitle>
            <CardDescription>Bugs detected vs fixed over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={codeQualityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bugs" fill="hsl(var(--destructive))" />
                <Bar dataKey="fixed" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Current Projects & Team Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Your current development projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">E-commerce Platform</p>
                  <p className="text-sm text-muted-foreground">React, Node.js, PostgreSQL</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">In Progress</Badge>
                  <p className="text-sm text-muted-foreground mt-1">75% complete</p>
                </div>
              </div>
              <Progress value={75} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Mobile App API</p>
                  <p className="text-sm text-muted-foreground">Express.js, MongoDB</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">Review</Badge>
                  <p className="text-sm text-muted-foreground mt-1">90% complete</p>
                </div>
              </div>
              <Progress value={90} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Analytics Dashboard</p>
                  <p className="text-sm text-muted-foreground">Next.js, Tailwind CSS</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">Planning</Badge>
                  <p className="text-sm text-muted-foreground mt-1">25% complete</p>
                </div>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Status
            </CardTitle>
            <CardDescription>Your team's current activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Working on authentication module</p>
                </div>
              </div>
              <Badge variant="secondary">Online</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Mike Johnson</p>
                  <p className="text-sm text-muted-foreground">Code review in progress</p>
                </div>
              </div>
              <Badge variant="secondary">Away</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Emily Davis</p>
                  <p className="text-sm text-muted-foreground">Testing deployment pipeline</p>
                </div>
              </div>
              <Badge variant="secondary">Online</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Alex Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Last seen 2 hours ago</p>
                </div>
              </div>
              <Badge variant="outline">Offline</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

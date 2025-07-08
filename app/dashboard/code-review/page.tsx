"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  GitPullRequest,
  MessageSquare,
  Clock,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Eye,
  GitBranch,
  FileText,
  Users,
} from "lucide-react"

const pullRequests = [
  {
    id: "PR-123",
    title: "Add user authentication middleware",
    author: "Sarah Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "pending",
    priority: "high",
    branch: "feature/auth-middleware",
    files: 8,
    additions: 245,
    deletions: 12,
    comments: 3,
    reviewers: ["Mike Johnson", "Emily Davis"],
    createdAt: "2 hours ago",
    description: "Implements JWT-based authentication middleware with role-based access control",
  },
  {
    id: "PR-124",
    title: "Optimize database queries in user service",
    author: "Mike Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "approved",
    priority: "medium",
    branch: "perf/optimize-queries",
    files: 3,
    additions: 89,
    deletions: 156,
    comments: 7,
    reviewers: ["Sarah Chen"],
    createdAt: "1 day ago",
    description: "Reduces query time by 60% through indexing and query optimization",
  },
  {
    id: "PR-125",
    title: "Fix memory leak in WebSocket connections",
    author: "Emily Davis",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "changes_requested",
    priority: "high",
    branch: "fix/websocket-memory-leak",
    files: 2,
    additions: 34,
    deletions: 28,
    comments: 12,
    reviewers: ["Alex Rodriguez", "Sarah Chen"],
    createdAt: "3 days ago",
    description: "Addresses memory leak issue in WebSocket connection handling",
  },
]

const aiInsights = [
  {
    type: "security",
    title: "Security Vulnerability Detected",
    description: "Potential SQL injection in user input validation",
    severity: "high",
    file: "src/middleware/auth.js",
    line: 45,
    suggestion: "Use parameterized queries to prevent SQL injection",
  },
  {
    type: "performance",
    title: "Performance Optimization",
    description: "Inefficient loop detected in data processing",
    severity: "medium",
    file: "src/services/userService.js",
    line: 123,
    suggestion: "Consider using array.map() for better performance",
  },
  {
    type: "maintainability",
    title: "Code Complexity",
    description: "Function exceeds recommended complexity threshold",
    severity: "low",
    file: "src/utils/helpers.js",
    line: 78,
    suggestion: "Break down into smaller, more focused functions",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
    case "changes_requested":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "text-red-500"
    case "medium":
      return "text-yellow-500"
    case "low":
      return "text-green-500"
    default:
      return "text-gray-500"
  }
}

export default function CodeReviewPage() {
  const [selectedPR, setSelectedPR] = useState(pullRequests[0])
  const [reviewComment, setReviewComment] = useState("")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GitPullRequest className="h-8 w-8 text-primary" />
            Code Review
          </h1>
          <p className="text-muted-foreground">Review pull requests with AI-powered insights and feedback</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" />3 pending reviews
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PR List */}
        <Card>
          <CardHeader>
            <CardTitle>Pull Requests</CardTitle>
            <CardDescription>Active pull requests awaiting review</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pullRequests.map((pr) => (
              <div
                key={pr.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedPR.id === pr.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedPR(pr)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(pr.status)} variant="secondary">
                      {pr.status.replace("_", " ")}
                    </Badge>
                    <AlertTriangle className={`h-4 w-4 ${getPriorityColor(pr.priority)}`} />
                  </div>
                  <span className="text-xs text-muted-foreground">{pr.createdAt}</span>
                </div>

                <h3 className="font-medium text-sm mb-1">{pr.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {pr.id} • {pr.branch}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={pr.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {pr.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{pr.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      {pr.files}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {pr.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* PR Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {selectedPR.title}
                  <Badge className={getStatusColor(selectedPR.status)} variant="secondary">
                    {selectedPR.status.replace("_", " ")}
                  </Badge>
                </CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span>{selectedPR.id}</span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    {selectedPR.branch}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {selectedPR.reviewers.length} reviewers
                  </span>
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  View Diff
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="files">Files Changed</TabsTrigger>
                <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm">{selectedPR.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-lg font-bold text-green-600">+{selectedPR.additions}</div>
                    <div className="text-xs text-muted-foreground">Additions</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="text-lg font-bold text-red-600">-{selectedPR.deletions}</div>
                    <div className="text-xs text-muted-foreground">Deletions</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{selectedPR.files}</div>
                    <div className="text-xs text-muted-foreground">Files</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Reviewers</h4>
                  {selectedPR.reviewers.map((reviewer, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <span className="text-sm">{reviewer}</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="files" className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-mono">src/middleware/auth.js</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-green-600">+45</span>
                      <span className="text-red-600">-12</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-mono">src/routes/user.js</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-green-600">+23</span>
                      <span className="text-red-600">-5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-mono">tests/auth.test.js</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-green-600">+67</span>
                      <span className="text-red-600">-0</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai-insights" className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`h-4 w-4 ${getPriorityColor(insight.severity)}`} />
                        <span className="font-medium text-sm">{insight.title}</span>
                      </div>
                      <Badge className={getStatusColor(insight.severity)} variant="secondary">
                        {insight.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                    <div className="text-xs text-muted-foreground">
                      {insight.file}:{insight.line}
                    </div>
                    <div className="p-2 bg-muted/50 rounded text-sm">
                      <strong>Suggestion:</strong> {insight.suggestion}
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="comments" className="space-y-4">
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">Mike Johnson</span>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm">
                      The authentication logic looks good, but consider adding rate limiting to prevent brute force
                      attacks.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Add Review Comment</label>
                    <Textarea
                      placeholder="Leave your review feedback..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button size="sm">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Comment
                      </Button>
                      <Button size="sm" variant="destructive">
                        <ThumbsDown className="mr-2 h-4 w-4" />
                        Request Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

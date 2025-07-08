"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Play,
  Pause,
  Square,
  Settings,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Activity,
  GitBranch,
  TestTube,
  FileText,
  Calendar,
} from "lucide-react"

const automationRuns = [
  {
    id: "run-001",
    name: "Deploy to Production",
    status: "running",
    progress: 75,
    startTime: "2 minutes ago",
    estimatedTime: "1 minute remaining",
    steps: [
      { name: "Build Application", status: "completed", duration: "45s" },
      { name: "Run Tests", status: "completed", duration: "1m 20s" },
      { name: "Deploy to Staging", status: "completed", duration: "30s" },
      { name: "Run E2E Tests", status: "running", duration: "2m 15s" },
      { name: "Deploy to Production", status: "pending", duration: "-" },
      { name: "Health Check", status: "pending", duration: "-" },
    ],
  },
  {
    id: "run-002",
    name: "Code Quality Check",
    status: "completed",
    progress: 100,
    startTime: "1 hour ago",
    estimatedTime: "Completed",
    steps: [
      { name: "Lint Code", status: "completed", duration: "15s" },
      { name: "Type Check", status: "completed", duration: "8s" },
      { name: "Security Scan", status: "completed", duration: "45s" },
      { name: "Generate Report", status: "completed", duration: "5s" },
    ],
  },
  {
    id: "run-003",
    name: "Database Migration",
    status: "failed",
    progress: 60,
    startTime: "3 hours ago",
    estimatedTime: "Failed",
    steps: [
      { name: "Backup Database", status: "completed", duration: "2m 30s" },
      { name: "Run Migrations", status: "failed", duration: "1m 15s" },
      { name: "Verify Schema", status: "skipped", duration: "-" },
      { name: "Update Documentation", status: "skipped", duration: "-" },
    ],
  },
]

const workflows = [
  {
    id: "workflow-1",
    name: "CI/CD Pipeline",
    description: "Automated testing and deployment workflow",
    trigger: "Push to main branch",
    lastRun: "2 minutes ago",
    status: "active",
    runs: 156,
    successRate: 94,
    icon: GitBranch,
  },
  {
    id: "workflow-2",
    name: "Code Quality Gate",
    description: "Automated code review and quality checks",
    trigger: "Pull request created",
    lastRun: "1 hour ago",
    status: "active",
    runs: 89,
    successRate: 98,
    icon: TestTube,
  },
  {
    id: "workflow-3",
    name: "Security Scan",
    description: "Daily security vulnerability scanning",
    trigger: "Scheduled (daily at 2 AM)",
    lastRun: "8 hours ago",
    status: "active",
    runs: 45,
    successRate: 100,
    icon: AlertTriangle,
  },
  {
    id: "workflow-4",
    name: "Documentation Update",
    description: "Auto-generate and update API documentation",
    trigger: "Code changes in API",
    lastRun: "2 days ago",
    status: "paused",
    runs: 23,
    successRate: 87,
    icon: FileText,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "running":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
    case "failed":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
    case "paused":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
  }
}

const getStepIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "running":
      return <Activity className="h-4 w-4 text-blue-500 animate-pulse" />
    case "failed":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-gray-400" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

export default function AutomationPage() {
  const [selectedRun, setSelectedRun] = useState(automationRuns[0])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            Automation Framework
          </h1>
          <p className="text-muted-foreground">Manage and monitor your automated workflows and deployments</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Activity className="h-3 w-3" />2 running
          </Badge>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            New Workflow
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Workflow List */}
        <Card>
          <CardHeader>
            <CardTitle>Workflows</CardTitle>
            <CardDescription>Your automation workflows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="p-3 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <workflow.icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">{workflow.name}</span>
                  </div>
                  <Badge className={getStatusColor(workflow.status)} variant="secondary">
                    {workflow.status}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground">{workflow.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{workflow.runs} runs</span>
                  <span>{workflow.successRate}% success</span>
                </div>

                <div className="flex gap-1">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Play className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Settings className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Automation Runs</CardTitle>
            <CardDescription>Monitor active and recent automation executions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="w-full">
              <TabsList>
                <TabsTrigger value="active">Active Runs</TabsTrigger>
                <TabsTrigger value="history">Run History</TabsTrigger>
                <TabsTrigger value="logs">Logs</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {automationRuns.map((run) => (
                    <Card
                      key={run.id}
                      className={`cursor-pointer transition-colors ${
                        selectedRun.id === run.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedRun(run)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{run.name}</CardTitle>
                          <Badge className={getStatusColor(run.status)} variant="secondary">
                            {run.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Started {run.startTime}</span>
                          <span>{run.estimatedTime}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{run.progress}%</span>
                          </div>
                          <Progress value={run.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detailed Run View */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{selectedRun.name} - Steps</CardTitle>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Pause className="mr-2 h-4 w-4" />
                          Pause
                        </Button>
                        <Button size="sm" variant="outline">
                          <Square className="mr-2 h-4 w-4" />
                          Stop
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedRun.steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                          {getStepIcon(step.status)}
                          <div className="flex-1">
                            <div className="font-medium text-sm">{step.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {step.status === "running" ? "In progress..." : `Duration: ${step.duration}`}
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {step.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <div className="space-y-3">
                  {automationRuns.map((run) => (
                    <div key={run.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {run.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : run.status === "failed" ? (
                          <XCircle className="h-5 w-5 text-red-500" />
                        ) : (
                          <Activity className="h-5 w-5 text-blue-500" />
                        )}
                        <div>
                          <div className="font-medium">{run.name}</div>
                          <div className="text-sm text-muted-foreground">Started {run.startTime}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(run.status)} variant="secondary">
                          {run.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="logs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Execution Logs</CardTitle>
                    <CardDescription>Real-time logs from automation runs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto">
                      <div>[2024-01-15 14:30:15] Starting deployment pipeline...</div>
                      <div>[2024-01-15 14:30:16] ✓ Environment variables loaded</div>
                      <div>[2024-01-15 14:30:17] ✓ Dependencies installed</div>
                      <div>[2024-01-15 14:30:45] ✓ Build completed successfully</div>
                      <div>[2024-01-15 14:31:20] ✓ Tests passed (45/45)</div>
                      <div>[2024-01-15 14:31:50] ✓ Deployed to staging environment</div>
                      <div>[2024-01-15 14:32:15] → Running end-to-end tests...</div>
                      <div>[2024-01-15 14:34:30] ✓ E2E tests completed (12/12)</div>
                      <div>[2024-01-15 14:34:31] → Deploying to production...</div>
                      <div className="animate-pulse">
                        [2024-01-15 14:34:32] → Updating load balancer configuration...
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Scheduled Workflows
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Security Scan</div>
                          <div className="text-sm text-muted-foreground">Daily at 2:00 AM</div>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Backup Database</div>
                          <div className="text-sm text-muted-foreground">Every 6 hours</div>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Performance Report</div>
                          <div className="text-sm text-muted-foreground">Weekly on Monday</div>
                        </div>
                        <Badge variant="secondary">Paused</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Runs</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="font-medium">Security Scan</div>
                          <div className="text-sm text-muted-foreground">In 9 hours</div>
                        </div>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="font-medium">Database Backup</div>
                          <div className="text-sm text-muted-foreground">In 3 hours</div>
                        </div>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="font-medium">Performance Report</div>
                          <div className="text-sm text-muted-foreground">In 2 days</div>
                        </div>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

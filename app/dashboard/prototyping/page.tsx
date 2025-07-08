"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Rocket,
  Wand2,
  Download,
  Share,
  Eye,
  Code,
  Smartphone,
  Monitor,
  Tablet,
  RefreshCw,
  Play,
  Save,
} from "lucide-react"

const frameworks = [
  { value: "react", label: "React", icon: "⚛️" },
  { value: "vue", label: "Vue.js", icon: "🟢" },
  { value: "angular", label: "Angular", icon: "🔴" },
  { value: "svelte", label: "Svelte", icon: "🧡" },
  { value: "nextjs", label: "Next.js", icon: "⚫" },
  { value: "nuxt", label: "Nuxt.js", icon: "💚" },
]

const templates = [
  {
    id: "dashboard",
    name: "Admin Dashboard",
    description: "Complete admin dashboard with charts and tables",
    preview: "/placeholder.svg?height=200&width=300",
    framework: "react",
    components: 12,
  },
  {
    id: "ecommerce",
    name: "E-commerce Store",
    description: "Product catalog with shopping cart functionality",
    preview: "/placeholder.svg?height=200&width=300",
    framework: "nextjs",
    components: 18,
  },
  {
    id: "landing",
    name: "Landing Page",
    description: "Modern landing page with hero section and features",
    preview: "/placeholder.svg?height=200&width=300",
    framework: "react",
    components: 8,
  },
  {
    id: "blog",
    name: "Blog Platform",
    description: "Content management system for blogging",
    preview: "/placeholder.svg?height=200&width=300",
    framework: "nextjs",
    components: 15,
  },
]

const generatedCode = `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Filter } from 'lucide-react';

export default function UserDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                    {user.status}
                  </Badge>
                  <Badge variant="outline">{user.role}</Badge>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`

export default function PrototypingPage() {
  const [prompt, setPrompt] = useState("")
  const [selectedFramework, setSelectedFramework] = useState("react")
  const [isGenerating, setIsGenerating] = useState(false)
  const [viewMode, setViewMode] = useState("desktop")
  const [activeTab, setActiveTab] = useState("prompt")

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
    setActiveTab("preview")
  }

  const getViewModeIcon = () => {
    switch (viewMode) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            Rapid Prototyping
          </h1>
          <p className="text-muted-foreground">Transform your ideas into working prototypes with AI</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Wand2 className="h-3 w-3" />
            AI Ready
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Configuration Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>Set up your prototype parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="framework">Framework</Label>
              <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      <span className="flex items-center gap-2">
                        <span>{framework.icon}</span>
                        {framework.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Styling</Label>
              <Select defaultValue="tailwind">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tailwind">Tailwind CSS</SelectItem>
                  <SelectItem value="styled">Styled Components</SelectItem>
                  <SelectItem value="css">CSS Modules</SelectItem>
                  <SelectItem value="emotion">Emotion</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="components">UI Library</Label>
              <Select defaultValue="shadcn">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shadcn">shadcn/ui</SelectItem>
                  <SelectItem value="mui">Material-UI</SelectItem>
                  <SelectItem value="antd">Ant Design</SelectItem>
                  <SelectItem value="chakra">Chakra UI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>View Mode</Label>
              <div className="flex gap-1">
                <Button
                  variant={viewMode === "desktop" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("desktop")}
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "tablet" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("tablet")}
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "mobile" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("mobile")}
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Prototype Builder</CardTitle>
                <CardDescription>Describe what you want to build and watch AI create it</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                {getViewModeIcon()}
                <span className="text-sm text-muted-foreground capitalize">{viewMode}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="prompt">Prompt</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>

              <TabsContent value="prompt" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="prompt">Describe your prototype</Label>
                    <Textarea
                      id="prompt"
                      placeholder="Create a user management dashboard with a table showing user details, search functionality, and action buttons for editing and deleting users. Include a header with an 'Add User' button and make it responsive."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="features">Additional Features (optional)</Label>
                    <Input id="features" placeholder="e.g., dark mode, animations, form validation" />
                  </div>

                  <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="w-full">
                    {isGenerating ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating Prototype...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate Prototype
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="templates" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="aspect-video bg-muted rounded-lg mb-2 flex items-center justify-center">
                          <Eye className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{template.framework}</Badge>
                            <span className="text-sm text-muted-foreground">{template.components} components</span>
                          </div>
                          <Button size="sm">
                            <Play className="mr-2 h-4 w-4" />
                            Use Template
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="preview" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Live Preview</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Full Screen
                    </Button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg overflow-hidden ${
                    viewMode === "mobile" ? "max-w-sm mx-auto" : viewMode === "tablet" ? "max-w-2xl mx-auto" : "w-full"
                  }`}
                >
                  <div className="bg-muted/50 p-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="ml-4 text-sm text-muted-foreground">localhost:3000</div>
                    </div>
                  </div>
                  <div className="bg-background p-6 min-h-[400px]">
                    {/* Simulated preview content */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">User Management</h1>
                        <Button size="sm">Add User</Button>
                      </div>

                      <div className="border rounded-lg">
                        <div className="p-4 border-b">
                          <div className="flex items-center gap-2">
                            <Input placeholder="Search users..." className="max-w-sm" />
                            <Button variant="outline" size="sm">
                              Filter
                            </Button>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 border rounded">
                              <div>
                                <div className="font-medium">User {i}</div>
                                <div className="text-sm text-muted-foreground">user{i}@example.com</div>
                              </div>
                              <div className="flex gap-2">
                                <Badge>Active</Badge>
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Generated Code</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg">
                  <div className="bg-muted/50 p-2 border-b flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span className="text-sm font-medium">UserDashboard.jsx</span>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>{generatedCode}</code>
                    </pre>
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

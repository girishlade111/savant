import Link from "next/link"
import { ArrowLeft, Mic, Volume2, Download, BookOpen, Brain, MessageSquare, Settings, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function AITutorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Voice Study Assistant</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Ask Anything</CardTitle>
                <CardDescription>Get detailed answers in English or Shona</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-slate-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-amber-500">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Assistant" />
                      <AvatarFallback className="bg-amber-500 text-white">AI</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">EduPesa Assistant</p>
                      <p className="text-xs text-muted-foreground">English & Shona support</p>
                    </div>
                  </div>
                  <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
                    <p className="text-sm text-muted-foreground">
                      "Hello! I can help with your studies in both English and Shona. Ask me to explain a concept, solve
                      a problem, or help you prepare for an exam."
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="flex-1" placeholder="Ask anything... e.g., 'Explain inflation like I'm 10'" />
                    <Button size="icon" variant="outline" className="rounded-full h-10 w-10 flex-shrink-0">
                      <Mic className="h-5 w-5 text-amber-500" />
                    </Button>
                    <Button className="bg-navy-800 hover:bg-navy-900">Ask</Button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Supports voice input in English & Shona</p>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      View conversation history
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="mt-1 h-8 w-8">
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-slate-100 p-3">
                      <p className="text-sm">Explain inflation like I'm 10</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Avatar className="mt-1 h-8 w-8 border-2 border-amber-500">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                      <AvatarFallback className="bg-amber-500 text-white">AI</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-white p-3 shadow-sm">
                        <p className="text-sm">
                          Imagine you have 5 sweets that cost $1 each. So with $5, you can buy 5 sweets, right? Now,
                          imagine that next month, the sweet maker says "I need to charge $2 for each sweet now."
                          Suddenly, your $5 can only buy 2 sweets and you'd have $1 left over. That's inflation! It's
                          when prices go up over time, so your money buys less than before. In Zimbabwe, we've seen this
                          happen a lot with our currency. It's like your money is "shrinking" in what it can buy, even
                          though it's the same amount of money.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Volume2 className="h-3 w-3" />
                          Listen
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Download className="h-3 w-3" />
                          Save
                        </Button>
                        <Select defaultValue="english">
                          <SelectTrigger className="h-8 w-[130px]">
                            <SelectValue placeholder="Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="shona">Shona</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Topics</CardTitle>
                  <CardDescription>Based on your courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2 text-left" size="sm">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>Binary Tree Traversal Algorithms</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-left" size="sm">
                    <BookOpen className="h-4 w-4 text-amber-600" />
                    <span>Zimbabwe's Fiscal Policy Challenges</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-left" size="sm">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                    <span>Memory Techniques for Exam Prep</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-left" size="sm">
                    <BookOpen className="h-4 w-4 text-green-600" />
                    <span>Solving Quadratic Equations</span>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Saved Answers</CardTitle>
                  <CardDescription>Available offline</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-slate-600" />
                      <span className="text-sm">Binary Search Explanation</span>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      Saved
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-slate-600" />
                      <span className="text-sm">Inflation in Zimbabwe</span>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      Saved
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    View All Saved Answers
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Voice Assistant Settings</CardTitle>
              <CardDescription>Customize your learning experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="language">
                <TabsList className="w-full">
                  <TabsTrigger value="language" className="flex-1">
                    Language
                  </TabsTrigger>
                  <TabsTrigger value="voice" className="flex-1">
                    Voice Settings
                  </TabsTrigger>
                  <TabsTrigger value="data" className="flex-1">
                    Data Usage
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="language" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryLanguage">Primary Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger id="primaryLanguage">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="shona">Shona</SelectItem>
                        <SelectItem value="ndebele">Ndebele</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="autoTranslate">Auto-translate complex topics to Shona</Label>
                      <Switch id="autoTranslate" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      When enabled, the assistant will automatically translate complex academic concepts to Shona for
                      better understanding
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="localExamples">Use Zimbabwean examples</Label>
                      <Switch id="localExamples" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      When enabled, the assistant will use local Zimbabwean examples and contexts in explanations
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="voice" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="voiceType">Voice Type</Label>
                    <Select defaultValue="female">
                      <SelectTrigger id="voiceType">
                        <SelectValue placeholder="Select voice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Voice Speed</Label>
                    <div className="flex items-center gap-2">
                      <VolumeX className="h-4 w-4 text-muted-foreground" />
                      <Input type="range" className="h-2" />
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="autoPlay">Auto-play voice responses</Label>
                      <Switch id="autoPlay" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="data" className="mt-4 space-y-4">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-slate-600" />
                      <p className="font-medium">Low-Bandwidth Mode</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Optimizes voice responses for slower connections by compressing audio files and reducing data
                      usage.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <Label htmlFor="lowBandwidth">Enable Low-Bandwidth Mode</Label>
                      <Switch id="lowBandwidth" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="offlineAccess">Save responses for offline access</Label>
                      <Switch id="offlineAccess" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      When enabled, voice responses will be saved for offline access when you don't have internet
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-navy-800 hover:bg-navy-900">Save Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conversation History</CardTitle>
              <CardDescription>Your recent questions and answers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-sm font-medium">Binary Search Explanation</p>
                      <p className="text-xs text-muted-foreground">April 14, 2025 • 3:45 PM</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-sm font-medium">Inflation in Zimbabwe</p>
                      <p className="text-xs text-muted-foreground">April 14, 2025 • 2:30 PM</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-sm font-medium">Solving Quadratic Equations</p>
                      <p className="text-xs text-muted-foreground">April 13, 2025 • 7:15 PM</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View All Conversations
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <p>© 2025 EduPesa - Learn, Earn, Grow</p>
      </footer>
    </div>
  )
}

import Link from "next/link"
import {
  Bell,
  BookOpen,
  ChevronRight,
  Clock,
  FileText,
  Mic,
  Users,
  Calendar,
  Search,
  Brain,
  BookMarked,
  AlarmClock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6 text-amber-500" />
          <span className="text-xl font-bold text-navy-900">EduPesa</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#" className="text-sm font-medium">
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/past-papers" className="text-sm font-medium">
              Past Papers
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/study-planner" className="text-sm font-medium">
              Study Planner
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/ai-tutor" className="text-sm font-medium">
              AI Tutor
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/earnings" className="text-sm font-medium">
              Earn
            </Link>
          </Button>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              3
            </span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-full">
            <h1 className="text-2xl font-bold">Welcome back, Tinashe</h1>
            <p className="text-muted-foreground">Your academic dashboard for April 15, 2025</p>
          </div>

          {/* Voice Study Assistant */}
          <Card className="col-span-full md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle>Voice Study Assistant</CardTitle>
              <CardDescription>Ask anything in English or Shona</CardDescription>
            </CardHeader>
            <CardContent>
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
                    "Hello Tinashe! I can help with your studies. Try asking me to explain a concept, solve a problem,
                    or help you prepare for an exam."
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
            </CardContent>
          </Card>

          {/* Smart Study Time */}
          <Card>
            <CardHeader>
              <CardTitle>Smart Study Time</CardTitle>
              <CardDescription>AI-optimized study schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-green-50 p-3 border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <AlarmClock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Best time to study: Now!</p>
                    <p className="text-sm text-green-700">90% focus score • 2 hours available</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Today's Study Plan</p>
                  <Button variant="ghost" size="sm" className="gap-1 text-xs">
                    View Full Schedule <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <BookMarked className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">CS 301 - Binary Trees</p>
                      <p className="text-xs text-muted-foreground">2:00 PM - 3:30 PM • High Priority</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <FileText className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">ECON 202 - Practice Questions</p>
                      <p className="text-xs text-muted-foreground">4:00 PM - 5:00 PM • Medium Priority</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/study-planner">Adjust Study Schedule</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Past Exam Papers */}
          <Card>
            <CardHeader>
              <CardTitle>Past Exam Papers</CardTitle>
              <CardDescription>Search Zimbabwean curriculum</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by course, year..." className="pl-8 w-full" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Recently Added</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                      <FileText className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">UZ ACCT 201 - 2024</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>With model answers</span>
                        <span>•</span>
                        <span className="text-green-600">New</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">NUST CS 301 - 2023</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>With model answers</span>
                        <span>•</span>
                        <span>Downloaded 120+ times</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900" asChild>
                <Link href="/past-papers">Browse All Papers</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <div>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Stay on top of your assignments</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">CS 301 Final Project</p>
                      <Badge variant="destructive">Due Tomorrow</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Due Apr 16, 11:59 PM</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button size="sm" className="bg-navy-800 hover:bg-navy-900">
                      AI Help
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <FileText className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">ECON 202 Essay</p>
                      <Badge variant="outline">3 Days Left</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Due Apr 18, 5:00 PM</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button size="sm" className="bg-navy-800 hover:bg-navy-900">
                      AI Help
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assignment Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Assignment Tracker</CardTitle>
              <CardDescription>Track progress and get AI help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">CS 301 Final Project</p>
                  <Badge variant="destructive">Due Tomorrow</Badge>
                </div>
                <Progress value={75} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>75% Complete</span>
                  <span>Due Apr 16</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="default" className="bg-navy-800 hover:bg-navy-900">
                    Continue
                  </Button>
                  <Button size="sm" variant="outline">
                    AI Proofread
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">ECON 202 Essay</p>
                  <Badge variant="outline">3 Days Left</Badge>
                </div>
                <Progress value={30} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>30% Complete</span>
                  <span>Due Apr 18</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Groups */}
          <Card>
            <CardHeader>
              <CardTitle>Study Group Matcher</CardTitle>
              <CardDescription>Find study partners for your courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">CS 301 Study Group</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>5 members</span>
                      <span className="mx-1">•</span>
                      <Calendar className="h-3 w-3" />
                      <span>Meets Tuesdays</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">ECON 202 Study Group</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>3 members</span>
                      <span className="mx-1">•</span>
                      <Calendar className="h-3 w-3" />
                      <span>Meets Thursdays</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
              </div>
              <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900">
                Create Study Group
              </Button>
            </CardContent>
          </Card>

          {/* Offline Mode */}
          <Card>
            <CardHeader>
              <CardTitle>Offline Access</CardTitle>
              <CardDescription>Study without internet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="papers">
                <TabsList className="w-full">
                  <TabsTrigger value="papers" className="flex-1">
                    Papers
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="flex-1">
                    Notes
                  </TabsTrigger>
                  <TabsTrigger value="books" className="flex-1">
                    Books
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="papers" className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-amber-500" />
                      <span className="text-sm">UZ ACCT 201 - 2024</span>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      Saved
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">NUST CS 301 - 2023</span>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      Saved
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    Manage Offline Content
                  </Button>
                </TabsContent>
                <TabsContent value="notes" className="mt-4">
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">Save lecture notes for offline access</p>
                  </div>
                </TabsContent>
                <TabsContent value="books" className="mt-4">
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">Save textbooks for offline access</p>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="rounded-lg bg-slate-50 p-3 text-sm">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-slate-600" />
                  <p className="font-medium">Low-Bandwidth Mode Active</p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Optimized for slower connections. Voice answers are compressed for faster loading.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Earn While You Learn */}
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Earn While You Learn</CardTitle>
                <CardDescription>Share knowledge and earn rewards</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <Link href="/earnings">View Earnings</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium text-amber-800">New ways to earn with EduPesa</h3>
                    <p className="text-sm text-amber-700">
                      Upload verified past papers (earn 50c per 100 downloads) or create voice-note summaries ($1 per 50
                      listens). Withdraw via EcoCash, ZIPIT, or USD mobile money.
                    </p>
                  </div>
                  <Button className="bg-navy-800 hover:bg-navy-900" asChild>
                    <Link href="/earnings">Start Earning</Link>
                  </Button>
                </div>
              </div>
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

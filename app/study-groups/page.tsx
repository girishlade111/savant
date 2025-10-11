import Link from "next/link"
import { ArrowLeft, Calendar, Filter, MessageSquare, Plus, Search, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StudyGroups() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Study Group Matcher</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search study groups..." className="pl-8 w-[250px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Button className="gap-1 bg-navy-800 hover:bg-navy-900">
              <Plus className="h-4 w-4" />
              Create Study Group
            </Button>
          </div>

          <Tabs defaultValue="available">
            <TabsList>
              <TabsTrigger value="available">Available Groups</TabsTrigger>
              <TabsTrigger value="mygroups">My Groups</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>
            <TabsContent value="available" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <Users className="h-3 w-3" />
                      CS 301
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="h-3 w-3" />
                      Tuesdays, 7:00 PM
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">Data Structures Study Group</CardTitle>
                  <CardDescription>Focus on binary trees and graph algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>TK</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>+1</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        We meet weekly to work through problem sets and prepare for exams. All skill levels welcome!
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Early Birds</Badge>
                      <Badge variant="outline">In-Person</Badge>
                      <Badge variant="outline">Whiteboarding</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <MessageSquare className="h-3 w-3" />
                    Chat
                  </Button>
                  <Button variant="default" size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                    Join Group
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <Users className="h-3 w-3" />
                      ECON 202
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="h-3 w-3" />
                      Thursdays, 6:00 PM
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">Macroeconomics Study Group</CardTitle>
                  <CardDescription>Fiscal policy and economic indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>LM</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>KP</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Discussion-based group focusing on real-world economic applications and exam preparation.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Virtual</Badge>
                      <Badge variant="outline">Discussion-Based</Badge>
                      <Badge variant="outline">Night Owls</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <MessageSquare className="h-3 w-3" />
                    Chat
                  </Button>
                  <Button variant="default" size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                    Join Group
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <Users className="h-3 w-3" />
                      PSYCH 101
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="h-3 w-3" />
                      Mondays, 4:00 PM
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">Psychology Concepts Group</CardTitle>
                  <CardDescription>Memory, learning, and cognitive biases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>EL</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>SB</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>+2</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>We use flashcards and practice tests to prepare for exams. Great for visual learners!</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Hybrid</Badge>
                      <Badge variant="outline">Flashcards</Badge>
                      <Badge variant="outline">Afternoon</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <MessageSquare className="h-3 w-3" />
                    Chat
                  </Button>
                  <Button variant="default" size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                    Join Group
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="mygroups">
              <div className="mt-4 rounded-md border p-8 text-center">
                <p className="text-muted-foreground">
                  You haven't joined any study groups yet. Join a group or create your own to get started.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="recommended">
              <div className="mt-4 rounded-md border p-8 text-center">
                <p className="text-muted-foreground">
                  Based on your courses, we'll recommend study groups that match your schedule and learning style.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Virtual Study Rooms</CardTitle>
              <CardDescription>Join or create a virtual study room with video and shared whiteboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Video className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">CS 301 Room</h3>
                        <p className="text-xs text-muted-foreground">3 people active</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50">
                      Live
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 w-full">
                    Join Room
                  </Button>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Video className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Create New Room</h3>
                        <p className="text-xs text-muted-foreground">Start a study session</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" size="sm" className="mt-3 w-full bg-navy-800 hover:bg-navy-900">
                    Create Room
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

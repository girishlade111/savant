import Link from "next/link"
import { ArrowLeft, Calendar, Check, Clock, FileText, Filter, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

export default function Assignments() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Assignment Tracker</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search assignments..." className="pl-8 w-[250px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Button className="gap-1 bg-navy-800 hover:bg-navy-900">
              <Plus className="h-4 w-4" />
              Add Assignment
            </Button>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="inprogress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="destructive" className="gap-1">
                      <Clock className="h-3 w-3" />
                      Due Tomorrow
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Apr 16, 11:59 PM</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">CS 301 Final Project</CardTitle>
                  <CardDescription>Implement a balanced binary search tree</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="default" size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                    Continue Working
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />3 Days Left
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Apr 18, 5:00 PM</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">ECON 202 Essay</CardTitle>
                  <CardDescription>Analysis of fiscal policy during recessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Progress</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="default" size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                    Continue Working
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />1 Week Left
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Apr 22, 3:30 PM</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">PSYCH 101 Quiz</CardTitle>
                  <CardDescription>Memory, learning, and cognitive biases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="default" size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                    Start Studying
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="inprogress">
              <div className="mt-4 rounded-md border p-8 text-center">
                <p className="text-muted-foreground">View all assignments currently in progress</p>
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="mt-4 rounded-md border p-8 text-center">
                <p className="text-muted-foreground">View all completed assignments</p>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>AI Assignment Help</CardTitle>
              <CardDescription>Get AI assistance with your assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mt-2 font-medium">Plagiarism Check</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scan your work for accidental plagiarism before submission
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Check Now
                  </Button>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="mt-2 font-medium">Grammar & Style</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Improve your writing with AI-powered suggestions</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Proofread
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

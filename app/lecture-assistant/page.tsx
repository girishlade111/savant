import Link from "next/link"
import { ArrowLeft, Download, FileText, Lightbulb, Mic, Pause, Play, Plus, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function LectureAssistant() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Smart Lecture Assistant</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Record Lecture</CardTitle>
              <CardDescription>Record, transcribe, and highlight key concepts from your lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-slate-50 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">CS 301 - Data Structures</h3>
                    <p className="text-sm text-muted-foreground">Today, 10:30 AM - 11:45 AM</p>
                  </div>
                  <Badge variant="outline" className="gap-1">
                    <Mic className="h-3 w-3" />
                    Ready to Record
                  </Badge>
                </div>
                <div className="flex justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 shadow-md">
                    <Mic className="h-10 w-10 text-red-600" />
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <Button size="lg" variant="default" className="gap-2 bg-navy-800 hover:bg-navy-900">
                    <Play className="h-4 w-4" />
                    Start Recording
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" disabled>
                    <Pause className="h-4 w-4" />
                    Pause
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <p>Your recording will be automatically transcribed and analyzed for key concepts.</p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="recent">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="recent">Recent Lectures</TabsTrigger>
                <TabsTrigger value="all">All Lectures</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                New Folder
              </Button>
            </div>
            <TabsContent value="recent" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="gap-1">
                        <FileText className="h-3 w-3" />
                        CS 301
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                    <CardTitle className="mt-2 text-base">Binary Trees & Traversal</CardTitle>
                    <CardDescription>Apr 12, 2025 • 75 min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="rounded-md bg-amber-50 p-2 text-amber-800">
                        <div className="flex items-center gap-1">
                          <Lightbulb className="h-4 w-4" />
                          <p className="font-medium">Key Concept</p>
                        </div>
                        <p className="mt-1 text-xs">In-order traversal visits left subtree, root, then right subtree</p>
                      </div>
                      <p className="line-clamp-3 text-muted-foreground">
                        Today we covered binary trees, including their structure and common traversal methods:
                        pre-order, in-order, and post-order...
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Notes
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3 w-3" />
                      Export
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="gap-1">
                        <FileText className="h-3 w-3" />
                        ECON 202
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                    <CardTitle className="mt-2 text-base">Fiscal Policy</CardTitle>
                    <CardDescription>Apr 10, 2025 • 60 min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="rounded-md bg-amber-50 p-2 text-amber-800">
                        <div className="flex items-center gap-1">
                          <Lightbulb className="h-4 w-4" />
                          <p className="font-medium">Key Concept</p>
                        </div>
                        <p className="mt-1 text-xs">
                          Expansionary fiscal policy increases government spending to stimulate growth
                        </p>
                      </div>
                      <p className="line-clamp-3 text-muted-foreground">
                        This lecture covered how governments use taxation and spending to influence the economy,
                        particularly during recessions...
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Notes
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3 w-3" />
                      Export
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="gap-1">
                        <FileText className="h-3 w-3" />
                        PSYCH 101
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                    <CardTitle className="mt-2 text-base">Memory & Learning</CardTitle>
                    <CardDescription>Apr 8, 2025 • 50 min</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="rounded-md bg-amber-50 p-2 text-amber-800">
                        <div className="flex items-center gap-1">
                          <Lightbulb className="h-4 w-4" />
                          <p className="font-medium">Key Concept</p>
                        </div>
                        <p className="mt-1 text-xs">
                          Spaced repetition is more effective than cramming for long-term retention
                        </p>
                      </div>
                      <p className="line-clamp-3 text-muted-foreground">
                        We discussed different memory types (working, short-term, long-term) and effective learning
                        strategies based on cognitive science...
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Notes
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3 w-3" />
                      Export
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="all">
              <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">View all your recorded lectures organized by course and date</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

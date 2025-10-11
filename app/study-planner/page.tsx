import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Plus, AlarmClock, Brain, BookOpen, FileText, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function StudyPlannerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Smart Study Planner</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Your Study Schedule</CardTitle>
                <CardDescription>AI-optimized for your learning style</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <AlarmClock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Best time to study: Now!</p>
                      <p className="text-sm text-green-700">90% focus score • 2 hours available</p>
                    </div>
                    <Button className="ml-auto bg-green-600 hover:bg-green-700">Start Session</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 font-medium">Today's Study Plan (April 15, 2025)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center rounded-md bg-slate-50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-medium">CS 301 - Binary Trees</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>2:00 PM - 3:30 PM</span>
                          <Badge variant="outline" className="ml-1 bg-red-50 text-red-700">
                            High Priority
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Complete
                      </Button>
                    </div>

                    <div className="flex items-center rounded-md bg-slate-50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <FileText className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-medium">ECON 202 - Practice Questions</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>4:00 PM - 5:00 PM</span>
                          <Badge variant="outline" className="ml-1">
                            Medium Priority
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Complete
                      </Button>
                    </div>

                    <div className="flex items-center rounded-md bg-slate-50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Brain className="h-5 w-5 text-amber-600" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-medium">PSYCH 101 - Memory Techniques</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>7:00 PM - 8:00 PM</span>
                          <Badge variant="outline" className="ml-1">
                            Medium Priority
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Complete
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" className="gap-1">
                    <Calendar className="h-4 w-4" />
                    View Full Calendar
                  </Button>
                  <Button variant="outline" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Study Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Exams</CardTitle>
                <CardDescription>AI will optimize your study plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-red-100 text-red-600">
                        <span className="text-xs font-medium">APR</span>
                        <span className="text-lg font-bold">25</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">CS 301 Final Exam</p>
                        <p className="text-xs text-muted-foreground">10:00 AM • Main Hall</p>
                      </div>
                      <Badge variant="destructive">10 days</Badge>
                    </div>
                  </div>

                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-amber-100 text-amber-600">
                        <span className="text-xs font-medium">MAY</span>
                        <span className="text-lg font-bold">02</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">ECON 202 Final Exam</p>
                        <p className="text-xs text-muted-foreground">2:00 PM • Room E12</p>
                      </div>
                      <Badge variant="outline">17 days</Badge>
                    </div>
                  </div>

                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-blue-100 text-blue-600">
                        <span className="text-xs font-medium">MAY</span>
                        <span className="text-lg font-bold">10</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">PSYCH 101 Final Exam</p>
                        <p className="text-xs text-muted-foreground">9:00 AM • Room P5</p>
                      </div>
                      <Badge variant="outline">25 days</Badge>
                    </div>
                  </div>
                </div>

                <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900">
                  Add Exam Date
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Study Preferences</CardTitle>
              <CardDescription>Customize your AI study planner</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="schedule">
                <TabsList className="w-full">
                  <TabsTrigger value="schedule" className="flex-1">
                    Schedule
                  </TabsTrigger>
                  <TabsTrigger value="focus" className="flex-1">
                    Focus Times
                  </TabsTrigger>
                  <TabsTrigger value="sync" className="flex-1">
                    Calendar Sync
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="schedule" className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="studyDuration">Preferred Study Session Duration</Label>
                      <Select defaultValue="60">
                        <SelectTrigger id="studyDuration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="90">1.5 hours</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="breakDuration">Break Duration</Label>
                      <Select defaultValue="15">
                        <SelectTrigger id="breakDuration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 minutes</SelectItem>
                          <SelectItem value="10">10 minutes</SelectItem>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="20">20 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Daily Study Goal</Label>
                    <div className="flex items-center gap-2">
                      <Slider defaultValue={[4]} max={12} step={0.5} className="flex-1" />
                      <span className="w-12 text-center font-medium">4h</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="weekends">Include weekends in study plan</Label>
                      <Switch id="weekends" defaultChecked />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="focus" className="mt-4 space-y-4">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-slate-600" />
                      <p className="font-medium">AI Focus Detection</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Our AI analyzes your phone usage patterns to identify your optimal focus times.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <Label htmlFor="focusDetection">Enable AI focus detection</Label>
                      <Switch id="focusDetection" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Your Peak Focus Hours</Label>
                    <div className="rounded-md border p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-sm">Morning (8AM - 11AM)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                          <span className="text-sm">Afternoon (2PM - 4PM)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          <span className="text-sm">Evening (7PM - 9PM)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="sync" className="mt-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Google Calendar</p>
                        <p className="text-sm text-muted-foreground">Sync your study schedule with Google Calendar</p>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-navy-800 hover:bg-navy-900">Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Analytics</CardTitle>
              <CardDescription>Track your progress and focus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Settings className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="mb-1 font-medium">Analytics Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  We're building powerful analytics to help you understand your study patterns and improve your focus.
                </p>
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

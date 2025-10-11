import Link from "next/link"
import { ArrowLeft, BookOpen, Filter, MessageSquare, Plus, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function Textbooks() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Textbook & Resource Exchange</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search textbooks..." className="pl-8 w-[250px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Button className="gap-1 bg-navy-800 hover:bg-navy-900">
              <Plus className="h-4 w-4" />
              List a Textbook
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Course</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Courses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        <SelectItem value="cs301">CS 301</SelectItem>
                        <SelectItem value="econ202">ECON 202</SelectItem>
                        <SelectItem value="psych101">PSYCH 101</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Price</SelectItem>
                        <SelectItem value="under25">Under $25</SelectItem>
                        <SelectItem value="25to50">$25 - $50</SelectItem>
                        <SelectItem value="over50">Over $50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Condition</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Condition</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="likenew">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Reset Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-3">
              <Tabs defaultValue="buy">
                <TabsList className="w-full">
                  <TabsTrigger value="buy" className="flex-1">
                    Buy
                  </TabsTrigger>
                  <TabsTrigger value="rent" className="flex-1">
                    Rent
                  </TabsTrigger>
                  <TabsTrigger value="free" className="flex-1">
                    Free Resources
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="mt-4 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex h-32 w-24 items-center justify-center rounded-md bg-slate-100">
                          <BookOpen className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <Badge variant="secondary" className="mb-1">
                              CS 301
                            </Badge>
                            <h3 className="font-medium">Data Structures & Algorithms</h3>
                            <p className="text-sm text-muted-foreground">by Robert Sedgewick, Kevin Wayne</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline">Like New</Badge>
                            <p className="text-sm text-muted-foreground">Listed 2 days ago</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <p className="text-lg font-bold text-amber-600">$45</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <MessageSquare className="h-3 w-3" />
                              Chat
                            </Button>
                            <Button size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                              <ShoppingCart className="h-3 w-3" />
                              Buy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex h-32 w-24 items-center justify-center rounded-md bg-slate-100">
                          <BookOpen className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <Badge variant="secondary" className="mb-1">
                              ECON 202
                            </Badge>
                            <h3 className="font-medium">Principles of Economics</h3>
                            <p className="text-sm text-muted-foreground">by N. Gregory Mankiw</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline">Good</Badge>
                            <p className="text-sm text-muted-foreground">Listed 5 days ago</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <p className="text-lg font-bold text-amber-600">$30</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <MessageSquare className="h-3 w-3" />
                              Chat
                            </Button>
                            <Button size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                              <ShoppingCart className="h-3 w-3" />
                              Buy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex h-32 w-24 items-center justify-center rounded-md bg-slate-100">
                          <BookOpen className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <Badge variant="secondary" className="mb-1">
                              PSYCH 101
                            </Badge>
                            <h3 className="font-medium">Introduction to Psychology</h3>
                            <p className="text-sm text-muted-foreground">by David G. Myers, C. Nathan DeWall</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline">New</Badge>
                            <p className="text-sm text-muted-foreground">Listed 1 day ago</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <p className="text-lg font-bold text-amber-600">$25</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <MessageSquare className="h-3 w-3" />
                              Chat
                            </Button>
                            <Button size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                              <ShoppingCart className="h-3 w-3" />
                              Buy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="rent">
                  <div className="mt-4 rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">View textbooks available for rent</p>
                  </div>
                </TabsContent>

                <TabsContent value="free">
                  <div className="mt-4 rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">Access free study materials shared by other students</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

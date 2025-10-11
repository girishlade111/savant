import Link from "next/link"
import { ArrowLeft, ArrowUp, Download, FileText, Filter, Search, Upload, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PastPapersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Past Exam Paper Vault</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search past papers..." className="pl-8 w-[250px] md:w-[350px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Button className="gap-1 bg-navy-800 hover:bg-navy-900">
              <Upload className="h-4 w-4" />
              Upload Paper
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
                    <label className="text-sm font-medium">University</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Universities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Universities</SelectItem>
                        <SelectItem value="uz">University of Zimbabwe (UZ)</SelectItem>
                        <SelectItem value="nust">NUST</SelectItem>
                        <SelectItem value="msu">Midlands State University</SelectItem>
                        <SelectItem value="cut">Chinhoyi University of Technology</SelectItem>
                        <SelectItem value="hit">Harare Institute of Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Faculty</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Faculties" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Faculties</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Has Model Answers</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-3">
              <Tabs defaultValue="trending">
                <TabsList className="w-full">
                  <TabsTrigger value="trending" className="flex-1">
                    Trending
                  </TabsTrigger>
                  <TabsTrigger value="recent" className="flex-1">
                    Recently Added
                  </TabsTrigger>
                  <TabsTrigger value="saved" className="flex-1">
                    Saved Papers
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="trending" className="mt-4 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex h-32 w-24 items-center justify-center rounded-md bg-slate-100">
                          <FileText className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="mb-1">
                                UZ
                              </Badge>
                              <Badge variant="outline" className="mb-1 bg-green-50 text-green-700">
                                <Check className="mr-1 h-3 w-3" />
                                Verified
                              </Badge>
                            </div>
                            <h3 className="font-medium">ACCT 201 - Financial Accounting</h3>
                            <p className="text-sm text-muted-foreground">2024 Final Exam with Model Answers</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <ArrowUp className="h-3 w-3 text-green-600" />
                              <span>245 upvotes</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Download className="h-3 w-3" />
                              <span>320 downloads</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                              <AvatarFallback>JM</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">Uploaded by John M.</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <ArrowUp className="h-3 w-3" />
                              Upvote
                            </Button>
                            <Button size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                              <Download className="h-3 w-3" />
                              Download
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
                          <FileText className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="mb-1">
                                NUST
                              </Badge>
                              <Badge variant="outline" className="mb-1 bg-green-50 text-green-700">
                                <Check className="mr-1 h-3 w-3" />
                                Verified
                              </Badge>
                            </div>
                            <h3 className="font-medium">CS 301 - Data Structures & Algorithms</h3>
                            <p className="text-sm text-muted-foreground">2023 Final Exam with Model Answers</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <ArrowUp className="h-3 w-3 text-green-600" />
                              <span>189 upvotes</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Download className="h-3 w-3" />
                              <span>210 downloads</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                              <AvatarFallback>TM</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">Uploaded by Tinashe M.</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4" />
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <ArrowUp className="h-3 w-3" />
                              Upvote
                            </Button>
                            <Button size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                              <Download className="h-3 w-3" />
                              Download
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
                          <FileText className="h-10 w-10 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="mb-1">
                                MSU
                              </Badge>
                              <Badge variant="outline" className="mb-1 bg-green-50 text-green-700">
                                <Check className="mr-1 h-3 w-3" />
                                Verified
                              </Badge>
                            </div>
                            <h3 className="font-medium">ECON 202 - Macroeconomics</h3>
                            <p className="text-sm text-muted-foreground">2023 Final Exam with Model Answers</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <ArrowUp className="h-3 w-3 text-green-600" />
                              <span>156 upvotes</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Download className="h-3 w-3" />
                              <span>180 downloads</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                              <AvatarFallback>FM</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">Uploaded by Farai M.</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <Star className="h-4 w-4" />
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <ArrowUp className="h-3 w-3" />
                              Upvote
                            </Button>
                            <Button size="sm" className="gap-1 bg-navy-800 hover:bg-navy-900">
                              <Download className="h-3 w-3" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="recent">
                  <div className="mt-4 rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">View recently added past papers</p>
                  </div>
                </TabsContent>

                <TabsContent value="saved">
                  <div className="mt-4 rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">View your saved past papers for offline access</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Past Papers</CardTitle>
              <CardDescription>Share exam papers and earn rewards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                <h3 className="mb-2 font-medium">Earn by Sharing Past Papers</h3>
                <ul className="ml-5 list-disc space-y-1 text-sm">
                  <li>
                    Earn <strong>50c per 100 downloads</strong> of your uploaded past papers
                  </li>
                  <li>
                    Papers with model answers earn <strong>2x more</strong>
                  </li>
                  <li>Verified papers (checked by our team) earn more upvotes and downloads</li>
                  <li>All earnings are added to your EduPesa balance and can be withdrawn via EcoCash or ZIPIT</li>
                </ul>
              </div>
              <div className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Upload className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="mb-1 font-medium">Drag & Drop Past Papers Here</h3>
                <p className="mb-4 text-sm text-muted-foreground">Support for PDF, DOC, DOCX files up to 10MB</p>
                <Button className="bg-navy-800 hover:bg-navy-900">Browse Files</Button>
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

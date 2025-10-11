import Link from "next/link"
import { ArrowLeft, FileText, Heart, MessageSquare, Plus, Search, Share2, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ContentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Content & Articles</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search articles..." className="pl-8 w-[250px]" />
              </div>
            </div>
            <Button className="gap-1 bg-navy-800 hover:bg-navy-900">
              <Plus className="h-4 w-4" />
              Create New Article
            </Button>
          </div>

          <Tabs defaultValue="browse">
            <TabsList>
              <TabsTrigger value="browse">Browse Articles</TabsTrigger>
              <TabsTrigger value="myarticles">My Articles</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            <TabsContent value="browse" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <FileText className="h-3 w-3" />
                      CS 301
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                        <AvatarFallback>FM</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Farai M.</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-lg">How to Master Binary Trees in One Week</CardTitle>
                  <CardDescription>A comprehensive guide for CS students</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    Binary trees are fundamental data structures that every computer science student must understand.
                    This guide breaks down the concepts into simple, digestible chunks that you can master in just one
                    week of focused study...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>210</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>24</span>
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-3 w-3" />
                      Share
                    </Button>
                    <Button variant="default" size="sm" className="bg-navy-800 hover:bg-navy-900">
                      Read Article
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <FileText className="h-3 w-3" />
                      ECON 202
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                        <AvatarFallback>TM</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Tinashe M.</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-lg">Understanding Fiscal Policy in Zimbabwe</CardTitle>
                  <CardDescription>Economic analysis for local students</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    This article explores the unique challenges and opportunities of fiscal policy in Zimbabwe's
                    economic landscape. Learn how government spending and taxation have evolved over the past decade and
                    what it means for future economic development...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>45</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>8</span>
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-3 w-3" />
                      Share
                    </Button>
                    <Button variant="default" size="sm" className="bg-navy-800 hover:bg-navy-900">
                      Read Article
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <FileText className="h-3 w-3" />
                      PSYCH 101
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                        <AvatarFallback>RN</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Rumbi N.</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-lg">Memory Techniques for Exam Success</CardTitle>
                  <CardDescription>Science-backed study methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    Struggling to remember key concepts for your exams? This article covers proven memory techniques
                    based on cognitive psychology research. Learn about spaced repetition, the memory palace technique,
                    and other strategies to boost your retention...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>156</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>32</span>
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-3 w-3" />
                      Share
                    </Button>
                    <Button variant="default" size="sm" className="bg-navy-800 hover:bg-navy-900">
                      Read Article
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="myarticles" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <FileText className="h-3 w-3" />
                      CS 301
                    </Badge>
                    <Badge variant="outline" className="text-green-600">
                      Published
                    </Badge>
                  </div>
                  <CardTitle className="mt-2 text-lg">How to Ace Your Data Structures Exam</CardTitle>
                  <CardDescription>Posted Apr 10, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      A comprehensive guide to preparing for your data structures exam, with practice problems and key
                      concepts explained...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm">180 appreciations</span>
                      </div>
                      <div className="text-sm font-medium text-green-600">$1.30 earned</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit Article
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-3 w-3" />
                    Share
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
                    <Badge variant="outline" className="text-green-600">
                      Published
                    </Badge>
                  </div>
                  <CardTitle className="mt-2 text-lg">Understanding Fiscal Policy in Zimbabwe</CardTitle>
                  <CardDescription>Posted Apr 5, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      This article explores the unique challenges and opportunities of fiscal policy in Zimbabwe's
                      economic landscape...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm">45 appreciations</span>
                      </div>
                      <div className="text-sm font-medium text-amber-600">5 more to earn</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit Article
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-3 w-3" />
                    Share
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-dashed border-muted-foreground/50">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-slate-100 p-3">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mb-1 font-medium">Create New Article</h3>
                  <p className="mb-4 text-center text-sm text-muted-foreground">
                    Share your knowledge and earn from appreciations
                  </p>
                  <Button className="bg-navy-800 hover:bg-navy-900">Start Writing</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="saved">
              <div className="mt-4 rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Articles you save will appear here</p>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>How Appreciations Work</CardTitle>
              <CardDescription>Earn money from your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                <h3 className="mb-2 font-medium">Appreciation Monetization</h3>
                <ul className="ml-5 list-disc space-y-1 text-sm">
                  <li>
                    When your article reaches <strong>50+ appreciations</strong>, you start earning money
                  </li>
                  <li>
                    You earn <strong>$0.50 per 10 extra appreciations</strong> beyond the initial 50
                  </li>
                  <li>Example: 180 appreciations = $0.50 + (130/10 × $0.50) = $7.00</li>
                  <li>Earnings are added to your balance and can be withdrawn via EcoCash</li>
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border p-4 text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                    <FileText className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="font-medium">Create Quality Content</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Write helpful articles that solve student problems
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                    <Share2 className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="font-medium">Share Your Articles</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Promote your content to classmates and friends</p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                    <Wallet className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="font-medium">Earn Money</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Get paid when your content helps others</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <p>© 2025 UniPesa - Learn, Earn, Grow</p>
      </footer>
    </div>
  )
}

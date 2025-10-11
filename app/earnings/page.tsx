import Link from "next/link"
import { ArrowLeft, ArrowUpRight, FileText, Users, Wallet, Upload, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function EarningsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Earn While You Learn</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-lg border bg-slate-50 p-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-navy-900">Share Knowledge, Earn Rewards</h2>
              <p className="mt-2 text-muted-foreground">
                EduPesa rewards students who help others succeed. Create study guides, share past papers, or create
                voice-note summaries to earn while you learn.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button className="bg-navy-800 hover:bg-navy-900" asChild>
                  <Link href="/content">Create Content</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/payments">Payment Settings</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Available Balance</CardTitle>
                <CardDescription className="text-amber-100">Ready to withdraw</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">$12.50</p>
                    <p className="text-sm text-amber-100">+$1.60 this month</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button size="sm" variant="secondary" className="bg-white text-amber-600 hover:bg-amber-50">
                    Withdraw
                  </Button>
                  <Button size="sm" variant="ghost" className="border border-white/30 text-white hover:bg-white/20">
                    View History
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lifetime Earnings</CardTitle>
                <CardDescription>Total earnings since joining</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">$35.20</p>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <ArrowUpRight className="h-3 w-3" />
                      <span>+12% from last month</span>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-600"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Earnings Breakdown</CardTitle>
                <CardDescription>By source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Articles</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$18.50</p>
                      <p className="text-xs text-muted-foreground">52.5%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                        <Upload className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-sm font-medium">Past Papers</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$8.20</p>
                      <p className="text-xs text-muted-foreground">23.3%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Textbooks</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$4.00</p>
                      <p className="text-xs text-muted-foreground">11.4%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Referrals</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$4.50</p>
                      <p className="text-xs text-muted-foreground">12.8%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>New Earning Opportunities</CardTitle>
              <CardDescription>More ways to earn with EduPesa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <Upload className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="mb-1 font-medium">Past Papers</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Upload verified past papers and earn 50c per 100 downloads. Papers with model answers earn 2x more!
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/past-papers">Upload Papers</Link>
                  </Button>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      <path d="M12 2a6 6 0 0 0-6 6c0 4.4 6 10 6 10s6-5.6 6-10a6 6 0 0 0-6-6z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium">Voice Summaries</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Create voice-note summaries of lectures or topics and earn $1 per 50 listens. Great for auditory
                    learners!
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/content">Create Summaries</Link>
                  </Button>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-1 font-medium">Campus Ambassador</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Become a campus ambassador and earn 4G data bundles as bonuses when you refer 10+ active users.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                <h3 className="mb-2 font-medium">Withdrawal Options</h3>
                <ul className="ml-5 list-disc space-y-1 text-sm">
                  <li>EcoCash: Instant withdrawals to your mobile money account</li>
                  <li>ZIPIT: Bank transfers via ZIPIT (1-3 business days)</li>
                  <li>USD Mobile Money: Withdraw in USD to supported mobile wallets</li>
                  <li>Airtime: Convert earnings directly to airtime for any network</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Content</CardTitle>
              <CardDescription>Manage your articles and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="articles">
                <TabsList className="mb-4">
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="papers">Past Papers</TabsTrigger>
                  <TabsTrigger value="voice">Voice Notes</TabsTrigger>
                  <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
                </TabsList>
                <TabsContent value="articles" className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          CS 301
                        </Badge>
                        <h3 className="font-medium">How to Ace Your Data Structures Exam</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Posted Apr 10</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-red-500"
                            >
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                            <span>180 appreciations</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">$1.30 earned</p>
                        <p className="text-xs text-muted-foreground">+10 today</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900">
                    Create New Article
                  </Button>
                </TabsContent>
                <TabsContent value="papers" className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          NUST
                        </Badge>
                        <h3 className="font-medium">CS 301 - Data Structures & Algorithms (2023)</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Uploaded Apr 8</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            <span>210 downloads</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">$1.05 earned</p>
                        <p className="text-xs text-muted-foreground">+0.15 today</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900" asChild>
                    <Link href="/past-papers">Upload More Papers</Link>
                  </Button>
                </TabsContent>
                <TabsContent value="voice" className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          ECON 202
                        </Badge>
                        <h3 className="font-medium">Zimbabwe's Inflation Crisis Explained</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Recorded Apr 12</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-500"
                            >
                              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                            </svg>
                            <span>65 listens</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">$1.30 earned</p>
                        <p className="text-xs text-muted-foreground">+0.20 today</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900">
                    Create Voice Summary
                  </Button>
                </TabsContent>
                <TabsContent value="textbooks">
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">Manage your textbooks for sale or rent</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Program</CardTitle>
              <CardDescription>Invite friends and earn commissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-dashed border-amber-300 bg-amber-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Your Referral Link</p>
                    <div className="mt-1 flex items-center gap-2">
                      <code className="rounded bg-white px-2 py-1 text-xs">edupesa.app/ref/tinashe</code>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-amber-800">
                  <p>
                    Earn 10% of your friends' premium subscriptions! Refer 10+ active users to become a Campus
                    Ambassador.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Referral Stats</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-md border p-2">
                    <p className="text-lg font-bold">5</p>
                    <p className="text-xs text-muted-foreground">Total Referrals</p>
                  </div>
                  <div className="rounded-md border p-2">
                    <p className="text-lg font-bold">2</p>
                    <p className="text-xs text-muted-foreground">Premium Users</p>
                  </div>
                  <div className="rounded-md border p-2">
                    <p className="text-lg font-bold">$0.60</p>
                    <p className="text-xs text-muted-foreground">Monthly Income</p>
                  </div>
                </div>
              </div>
              <Button variant="default" className="w-full bg-navy-800 hover:bg-navy-900">
                Share Referral Link
              </Button>
            </CardContent>
          </Card>

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

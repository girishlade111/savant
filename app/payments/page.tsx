import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Phone, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">Payment Settings</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage how you receive your earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="ecocash">
                <TabsList className="mb-4">
                  <TabsTrigger value="ecocash">EcoCash</TabsTrigger>
                  <TabsTrigger value="zipit">ZIPIT</TabsTrigger>
                  <TabsTrigger value="card">Card/PayPal</TabsTrigger>
                </TabsList>
                <TabsContent value="ecocash" className="space-y-4">
                  <div className="rounded-lg border bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">EcoCash Account</p>
                        <p className="text-sm text-slate-600">Fast withdrawals to your mobile money account</p>
                      </div>
                      <Badge variant="outline" className="ml-auto gap-1 bg-green-50 text-green-600">
                        <Check className="h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">EcoCash Phone Number</Label>
                      <Input id="phone" placeholder="07X XXX XXXX" defaultValue="0771234567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Account Holder Name</Label>
                      <Input id="name" placeholder="Full Name" defaultValue="Tinashe Moyo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Preferred Currency</Label>
                      <Select defaultValue="zwd">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select Currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zwd">Zimbabwe Dollar (ZWD)</SelectItem>
                          <SelectItem value="usd">US Dollar (USD)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Currency conversion rates are updated daily</p>
                    </div>
                  </div>
                  <Button className="w-full bg-navy-800 hover:bg-navy-900">Save Changes</Button>
                </TabsContent>
                <TabsContent value="zipit" className="space-y-4">
                  <div className="rounded-lg border bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Wallet className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">ZIPIT Transfer</p>
                        <p className="text-sm text-slate-600">Bank transfers via ZIPIT</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bank">Bank Name</Label>
                      <Select>
                        <SelectTrigger id="bank">
                          <SelectValue placeholder="Select Bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cbz">CBZ Bank</SelectItem>
                          <SelectItem value="stanbic">Stanbic Bank</SelectItem>
                          <SelectItem value="fbc">FBC Bank</SelectItem>
                          <SelectItem value="steward">Steward Bank</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account">Account Number</Label>
                      <Input id="account" placeholder="Enter account number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch Code</Label>
                      <Input id="branch" placeholder="Enter branch code" />
                    </div>
                  </div>
                  <Button className="w-full bg-navy-800 hover:bg-navy-900">Save Changes</Button>
                </TabsContent>
                <TabsContent value="card" className="space-y-4">
                  <div className="rounded-lg border bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">International Payments</p>
                        <p className="text-sm text-slate-600">Receive funds via card or PayPal</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">
                      International payment options coming soon. Currently, we support EcoCash and ZIPIT for Zimbabwean
                      students.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Withdrawal Settings</CardTitle>
              <CardDescription>Configure your automatic withdrawals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="threshold">Automatic Withdrawal Threshold</Label>
                <Select defaultValue="10">
                  <SelectTrigger id="threshold">
                    <SelectValue placeholder="Select Threshold" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">$5.00 (Minimum)</SelectItem>
                    <SelectItem value="10">$10.00</SelectItem>
                    <SelectItem value="20">$20.00</SelectItem>
                    <SelectItem value="50">$50.00</SelectItem>
                    <SelectItem value="manual">Manual Withdrawals Only</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  When your balance reaches this amount, we'll automatically process a withdrawal to your primary
                  payment method
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="frequency">Withdrawal Frequency</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select Frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                <h3 className="mb-2 font-medium">Important Information</h3>
                <ul className="ml-5 list-disc space-y-1 text-sm">
                  <li>Minimum withdrawal amount is $5.00</li>
                  <li>EcoCash withdrawals are processed within 24 hours</li>
                  <li>ZIPIT transfers may take 1-3 business days</li>
                  <li>A 2% transaction fee applies to all withdrawals</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-navy-800 hover:bg-navy-900">Save Withdrawal Settings</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <p>© 2025 UniPesa - Learn, Earn, Grow</p>
      </footer>
    </div>
  )
}

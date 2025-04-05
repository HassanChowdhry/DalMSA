import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, DollarSign, Calendar, Gift } from "lucide-react"

export default function DonationsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-darkGreen text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Support Our Work</h1>
          <p className="max-w-2xl mx-auto">
            Your donations help us provide services and programs for Muslim students at Dalhousie University.
          </p>
        </div>
      </div>

      {/* Why Donate Section */}
      <section className="py-16 px-4 bg-dmsa-lightGreen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dmsa-darkGreen mb-12">Why Donate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-dmsa-green" />
                <CardTitle className="mt-4">Support Student Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Your donations help us organize religious, educational, and social events for Muslim students.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 mx-auto text-dmsa-green" />
                <CardTitle className="mt-4">Fund Ramadan Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Help us provide iftar meals and special Ramadan programs for students away from home.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Gift className="h-12 w-12 mx-auto text-dmsa-green" />
                <CardTitle className="mt-4">Improve Campus Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Your contributions help us improve prayer spaces and provide Islamic resources on campus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dmsa-darkGreen mb-12">Ways to Donate</h2>

          <Tabs defaultValue="one-time" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
            </TabsList>

            <TabsContent value="one-time">
              <Card>
                <CardHeader>
                  <CardTitle>Make a One-Time Donation</CardTitle>
                  <CardDescription>Choose an amount to donate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <Button variant="outline" className="h-16 text-lg">
                      $25
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $50
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $100
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $250
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $500
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      Other
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-dmsa-green hover:bg-dmsa-darkGreen h-12 text-lg">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="monthly">
              <Card>
                <CardHeader>
                  <CardTitle>Become a Monthly Supporter</CardTitle>
                  <CardDescription>Choose a monthly donation amount</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <Button variant="outline" className="h-16 text-lg">
                      $10/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $20/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $50/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $100/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      $200/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      Other
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-dmsa-green hover:bg-dmsa-darkGreen h-12 text-lg">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Subscribe Monthly
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Other Ways to Donate */}
      <section className="py-16 px-4 bg-dmsa-lightGreen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dmsa-darkGreen mb-12">Other Ways to Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>E-Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">You can send an e-transfer to our email address:</p>
                <p className="font-semibold text-dmsa-darkGreen">dmsa@dal.ca</p>
                <p className="text-sm text-gray-500 mt-2">Please include your name and "Donation" in the message.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>In-Person Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">You can make a donation in person at our office:</p>
                <p className="font-semibold text-dmsa-darkGreen">
                  Student Union Building, Room 315
                  <br />
                  Dalhousie University
                  <br />
                  Halifax, NS
                </p>
                <p className="text-sm text-gray-500 mt-2">Office hours: Monday-Friday, 10:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dmsa-darkGreen mb-6">Tax Information</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            The Dalhousie Muslim Student Association is a registered student organization. While we are not able to
            issue tax receipts, your donations directly support Muslim students at Dalhousie University.
          </p>
        </div>
      </section>
    </div>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCurrentPrayerTimes, getAllPrayerTimes } from "@/lib/sanity"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function PrayerTimesPage() {
  // Fetch prayer times from Sanity
  const currentPrayerTimes = await getCurrentPrayerTimes()
  const allPrayerTimes = await getAllPrayerTimes()

  // Use placeholder data if no prayer times are found
  const prayerTimes = {
    today: currentPrayerTimes || {
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      fajr: "5:30 AM",
      sunrise: "6:45 AM",
      dhuhr: "12:30 PM",
      asr: "3:45 PM",
      maghrib: "6:15 PM",
      isha: "7:30 PM",
    },
    weekly: allPrayerTimes || [
      {
        day: "Monday",
        fajr: "5:30 AM",
        sunrise: "6:45 AM",
        dhuhr: "12:30 PM",
        asr: "3:45 PM",
        maghrib: "6:15 PM",
        isha: "7:30 PM",
      },
      {
        day: "Tuesday",
        fajr: "5:31 AM",
        sunrise: "6:46 AM",
        dhuhr: "12:30 PM",
        asr: "3:44 PM",
        maghrib: "6:14 PM",
        isha: "7:29 PM",
      },
      {
        day: "Wednesday",
        fajr: "5:32 AM",
        sunrise: "6:47 AM",
        dhuhr: "12:30 PM",
        asr: "3:43 PM",
        maghrib: "6:13 PM",
        isha: "7:28 PM",
      },
      {
        day: "Thursday",
        fajr: "5:33 AM",
        sunrise: "6:48 AM",
        dhuhr: "12:30 PM",
        asr: "3:42 PM",
        maghrib: "6:12 PM",
        isha: "7:27 PM",
      },
      {
        day: "Friday",
        fajr: "5:34 AM",
        sunrise: "6:49 AM",
        dhuhr: "12:30 PM",
        asr: "3:41 PM",
        maghrib: "6:11 PM",
        isha: "7:26 PM",
      },
      {
        day: "Saturday",
        fajr: "5:35 AM",
        sunrise: "6:50 AM",
        dhuhr: "12:30 PM",
        asr: "3:40 PM",
        maghrib: "6:10 PM",
        isha: "7:25 PM",
      },
      {
        day: "Sunday",
        fajr: "5:36 AM",
        sunrise: "6:51 AM",
        dhuhr: "12:30 PM",
        asr: "3:39 PM",
        maghrib: "6:09 PM",
        isha: "7:24 PM",
      },
    ],
    campus: {
      jummah: "Friday, 1:30 PM - Student Union Building, Room 302",
      dhuhr: "Monday-Thursday, 12:30 PM - Multi-Faith Centre",
      asr: "Monday-Thursday, 3:45 PM - Multi-Faith Centre",
      maghrib: "Monday-Thursday, 6:15 PM - Multi-Faith Centre (during winter months)",
    },
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">Prayer Times</h1>
            <p className="max-w-2xl mx-auto">
              Stay updated with the daily prayer times for Halifax and on-campus prayer information.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Prayer Times Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="today" className="w-full">
            <FadeIn>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="campus">On Campus</TabsTrigger>
              </TabsList>
            </FadeIn>

            <TabsContent value="today">
              <FadeIn>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-dmsa-primary" />
                      <CardTitle>Prayer Times for {prayerTimes.today.date}</CardTitle>
                    </div>
                    <CardDescription>Halifax, Nova Scotia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <StaggerItem>
                        <div className="bg-dmsa-light p-4 rounded-lg text-center">
                          <h3 className="font-semibold text-dmsa-dark">Fajr</h3>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4 text-dmsa-primary" />
                            <p className="text-xl">{prayerTimes.today.fajr}</p>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-4 rounded-lg text-center">
                          <h3 className="font-semibold text-dmsa-dark">Sunrise</h3>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4 text-dmsa-primary" />
                            <p className="text-xl">{prayerTimes.today.sunrise}</p>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-4 rounded-lg text-center">
                          <h3 className="font-semibold text-dmsa-dark">Dhuhr</h3>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4 text-dmsa-primary" />
                            <p className="text-xl">{prayerTimes.today.dhuhr}</p>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-4 rounded-lg text-center">
                          <h3 className="font-semibold text-dmsa-dark">Asr</h3>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4 text-dmsa-primary" />
                            <p className="text-xl">{prayerTimes.today.asr}</p>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-4 rounded-lg text-center">
                          <h3 className="font-semibold text-dmsa-dark">Maghrib</h3>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4 text-dmsa-primary" />
                            <p className="text-xl">{prayerTimes.today.maghrib}</p>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-4 rounded-lg text-center">
                          <h3 className="font-semibold text-dmsa-dark">Isha</h3>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Clock className="h-4 w-4 text-dmsa-primary" />
                            <p className="text-xl">{prayerTimes.today.isha}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="weekly">
              <FadeIn>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-dmsa-primary" />
                      <CardTitle>Weekly Prayer Times</CardTitle>
                    </div>
                    <CardDescription>Halifax, Nova Scotia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-dmsa-light">
                            <th className="p-2 text-left text-dmsa-dark">Day</th>
                            <th className="p-2 text-left text-dmsa-dark">Fajr</th>
                            <th className="p-2 text-left text-dmsa-dark">Sunrise</th>
                            <th className="p-2 text-left text-dmsa-dark">Dhuhr</th>
                            <th className="p-2 text-left text-dmsa-dark">Asr</th>
                            <th className="p-2 text-left text-dmsa-dark">Maghrib</th>
                            <th className="p-2 text-left text-dmsa-dark">Isha</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prayerTimes.weekly.map((day, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="p-2 border-b">{day.day}</td>
                              <td className="p-2 border-b">{day.fajr}</td>
                              <td className="p-2 border-b">{day.sunrise}</td>
                              <td className="p-2 border-b">{day.dhuhr}</td>
                              <td className="p-2 border-b">{day.asr}</td>
                              <td className="p-2 border-b">{day.maghrib}</td>
                              <td className="p-2 border-b">{day.isha}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="campus">
              <FadeIn>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-dmsa-primary" />
                      <CardTitle>On-Campus Prayer Information</CardTitle>
                    </div>
                    <CardDescription>Dalhousie University</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StaggerContainer className="space-y-6">
                      <StaggerItem>
                        <div className="bg-dmsa-light p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-dmsa-dark mb-2 flex items-center gap-2">
                            <Badge variant="outline" className="bg-dmsa-primary text-white">
                              Jummah
                            </Badge>
                            Jummah Prayer
                          </h3>
                          <p>{prayerTimes.campus.jummah}</p>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-dmsa-dark mb-2 flex items-center gap-2">
                            <Badge variant="outline" className="bg-dmsa-primary text-white">
                              Daily
                            </Badge>
                            Dhuhr Prayer
                          </h3>
                          <p>{prayerTimes.campus.dhuhr}</p>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-dmsa-dark mb-2 flex items-center gap-2">
                            <Badge variant="outline" className="bg-dmsa-primary text-white">
                              Daily
                            </Badge>
                            Asr Prayer
                          </h3>
                          <p>{prayerTimes.campus.asr}</p>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="bg-dmsa-light p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-dmsa-dark mb-2 flex items-center gap-2">
                            <Badge variant="outline" className="bg-dmsa-primary text-white">
                              Seasonal
                            </Badge>
                            Maghrib Prayer
                          </h3>
                          <p>{prayerTimes.campus.maghrib}</p>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="p-6 border border-dmsa-primary rounded-lg mt-8">
                          <h3 className="text-xl font-semibold text-dmsa-dark mb-2">Prayer Spaces</h3>
                          <p className="mb-4">
                            The Multi-Faith Centre is located in the Student Union Building, Room 310. It is open from
                            8:00 AM to 10:00 PM daily for individual prayers.
                          </p>
                          <p>
                            Prayer mats and copies of the Quran are available at the centre. Wudu facilities are
                            available in the nearby washrooms.
                          </p>
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}


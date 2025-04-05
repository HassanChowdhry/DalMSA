import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getEvents, urlFor } from "@/lib/sanity"
import { formatDateTime } from "@/lib/date-utils"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export default async function EventsPage() {
  // Fetch events from Sanity
  const events = await getEvents()

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">Events</h1>
            <p className="max-w-2xl mx-auto">
              Join us for a variety of religious, educational, and social events throughout the year.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Events List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events && events.length > 0 ? (
              events.map((event) => (
                <StaggerItem key={event._id}>
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={
                          event.image
                            ? urlFor(event.image).width(400).height(300).url()
                            : "/placeholder.svg?height=300&width=400"
                        }
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDateTime(event.date)}
                      </CardDescription>
                      <CardDescription className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full text-dmsa-primary hover:text-dmsa-dark border-dmsa-primary hover:border-dmsa-dark"
                      >
                        <Link href={`/events/${event.slug.current}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </StaggerItem>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">No events found. Check back soon!</p>
              </div>
            )}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}


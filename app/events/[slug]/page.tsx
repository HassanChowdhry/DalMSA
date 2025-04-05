import { getEvent, urlFor } from "@/lib/sanity"
import { formatDateTime } from "@/lib/date-utils"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PortableText } from "@portabletext/react"

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug)

  if (!event) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-dmsa-darkGreen mb-6">Event Not Found</h1>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-dmsa-green hover:bg-dmsa-darkGreen">
          <Link href="/events">Back to Events</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={
              event.image
                ? urlFor(event.image).width(1920).height(1080).url()
                : "/placeholder.svg?height=1080&width=1920"
            }
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDateTime(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/events" className="flex items-center text-dmsa-green hover:text-dmsa-darkGreen mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          <div className="prose prose-lg max-w-none">
            {event.content ? <PortableText value={event.content} /> : <p>{event.description}</p>}
          </div>

          {event.registrationLink && (
            <div className="mt-12 text-center">
              <Button asChild className="bg-dmsa-green hover:bg-dmsa-darkGreen">
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  Register for this Event
                </a>
              </Button>
            </div>
          )}

          {event.organizers && event.organizers.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-dmsa-darkGreen mb-6">Event Organizers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {event.organizers.map((organizer) => (
                  <div key={organizer._id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={
                          organizer.image
                            ? urlFor(organizer.image).width(100).height(100).url()
                            : "/placeholder.svg?height=100&width=100"
                        }
                        alt={organizer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{organizer.name}</h3>
                      <p className="text-sm text-gray-600">{organizer.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


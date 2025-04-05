import { HeroSection } from "@/components/hero-section"
import { getHomePage, getFeaturedEvents, urlFor } from "@/lib/sanity"
import { formatDateTime } from "@/lib/date-utils"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PortableText } from "@portabletext/react"
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion"

export default async function Home() {
  // Fetch data from Sanity
  const homePage = await getHomePage()
  const events = await getFeaturedEvents(3)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title={homePage?.title || "DalMSA"}
        quoteText={homePage?.heroText || "وَقُل رَّبِّ زِدْنِي عِلْمًا"}
        quoteReference={homePage?.quoteReference || 'And say, "My Lord, increase me in knowledge." (20:114)'}
        imageUrl={homePage?.heroImage}
      />

      {/* About Section */}
      <section id="content-section" className="py-16 px-4 bg-dmsa-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-3xl font-bold text-dmsa-dark mb-6">
                  {homePage?.welcomeTitle || "Welcome to DalMSA"}
                </h2>
                {homePage?.welcomeContent ? (
                  <div className="text-gray-700 mb-6">
                    <PortableText value={homePage.welcomeContent} />
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700 mb-4">
                      The Dalhousie Muslim Student Association (DalMSA) is dedicated to serving the needs of Muslim
                      students at Dalhousie University and fostering a sense of community and belonging.
                    </p>
                    <p className="text-gray-700 mb-6">
                      We organize religious, educational, and social events throughout the academic year to promote
                      Islamic values and create a supportive environment for Muslim students.
                    </p>
                  </>
                )}
                <Button asChild className="bg-dmsa-primary hover:bg-dmsa-dark text-white">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={
                    homePage?.welcomeImage
                      ? urlFor(homePage.welcomeImage).width(600).height(400).url()
                      : "/placeholder.svg?height=400&width=600"
                  }
                  alt="DalMSA Community"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-dmsa-dark mb-12">Upcoming Events</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
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
                <p className="text-gray-500">No upcoming events at the moment. Check back soon!</p>
              </div>
            )}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Button asChild className="bg-dmsa-primary hover:bg-dmsa-dark text-white">
              <Link href="/events">View All Events</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="py-16 px-4 bg-dmsa-light">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dmsa-dark mb-6">{homePage?.prayerTimesTitle || "Prayer Times"}</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              {homePage?.prayerTimesContent ||
                "Stay updated with the daily prayer times for Halifax. We also offer congregational prayers on campus."}
            </p>
            <Button asChild className="bg-dmsa-primary hover:bg-dmsa-dark text-white">
              <Link href="/prayer-times">View Prayer Times</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-dmsa-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">{homePage?.ctaTitle || "Join Our Community"}</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              {homePage?.ctaContent ||
                "Become a member of DalMSA to stay connected, participate in events, and contribute to our community."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-dmsa-secondary hover:bg-dmsa-accent text-dmsa-dark font-medium">
                <Link href="/memberships">Become a Member</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/donations">Support Our Work</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}


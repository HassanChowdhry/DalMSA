import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAboutPage, urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion"

export default async function AboutPage() {
  // Fetch data from Sanity
  const aboutPage = await getAboutPage()

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">{aboutPage?.title || "About DalMSA"}</h1>
          </FadeIn>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={
                    aboutPage?.image
                      ? urlFor(aboutPage.image).width(600).height(400).url()
                      : "/placeholder.svg?height=400&width=600"
                  }
                  alt="DalMSA Community"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div>
                {aboutPage?.content ? (
                  <div className="text-gray-700 mb-6 text-lg">
                    <PortableText value={aboutPage.content} />
                  </div>
                ) : (
                  <p className="text-gray-700 mb-6 text-lg">
                    The Dalhousie Muslim Student Association (DalMSA) is a student-run organization dedicated to serving
                    the needs of Muslim students at Dalhousie University. We strive to create a welcoming and inclusive
                    environment for all students, regardless of their background or level of religious practice.
                  </p>
                )}

                <div className="bg-dmsa-light p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-dmsa-dark mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    {aboutPage?.mission ||
                      "Our mission is to provide religious, educational, and social services to Muslim students at Dalhousie University and to promote a better understanding of Islam on campus."}
                  </p>
                </div>

                <div className="bg-dmsa-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-dmsa-dark mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    {aboutPage?.vision ||
                      "Our vision is to build a strong, vibrant Muslim community at Dalhousie University that supports the spiritual, academic, and social needs of its members while fostering interfaith dialogue and understanding."}
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-dmsa-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-dmsa-dark mb-12">Our Team</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutPage?.team && aboutPage.team.length > 0
              ? aboutPage.team.map((member) => (
                  <StaggerItem key={member._id}>
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-64 w-full">
                        <Image
                          src={
                            member.image
                              ? urlFor(member.image).width(300).height(300).url()
                              : "/placeholder.svg?height=300&width=300"
                          }
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))
              : // Placeholder team members if none are found in Sanity
                [1, 2, 3, 4].map((i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-64 w-full">
                        <Image
                          src={`/placeholder.svg?height=300&width=300`}
                          alt="Team Member"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>
                          {i === 1 ? "Ahmed Khan" : i === 2 ? "Fatima Ali" : i === 3 ? "Omar Hassan" : "Aisha Rahman"}
                        </CardTitle>
                        <CardDescription>
                          {i === 1
                            ? "President"
                            : i === 2
                              ? "Vice President"
                              : i === 3
                                ? "Treasurer"
                                : "Events Coordinator"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          {i === 1
                            ? "Ahmed is a fourth-year Computer Science student who has been involved with DalMSA since his first year."
                            : i === 2
                              ? "Fatima is a third-year Biology student with a passion for community building and interfaith dialogue."
                              : i === 3
                                ? "Omar is a second-year Business student who manages the financial affairs of the association."
                                : "Aisha is a third-year Psychology student who organizes and coordinates all DalMSA events."}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}


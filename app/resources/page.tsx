import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Book, Video, LinkIcon } from "lucide-react"
import { getResources, getResourceCategories } from "@/lib/sanity"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export default async function ResourcesPage() {
  // Fetch resources from Sanity
  const resources = await getResources()
  const categories = await getResourceCategories()

  // Group resources by category
  const resourcesByCategory = {
    all: resources,
  }

  // Add each category to the resourcesByCategory object
  categories.forEach((category) => {
    resourcesByCategory[category] = resources.filter((r) => r.category === category)
  })

  // Function to get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "articles":
        return <FileText className="h-10 w-10 text-dmsa-primary" />
      case "educational":
        return <Book className="h-10 w-10 text-dmsa-primary" />
      case "videos":
        return <Video className="h-10 w-10 text-dmsa-primary" />
      default:
        return <LinkIcon className="h-10 w-10 text-dmsa-primary" />
    }
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="max-w-2xl mx-auto">
              Explore our collection of resources to learn more about Islam and support your spiritual journey.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Resources Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <FadeIn>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </FadeIn>

            {Object.entries(resourcesByCategory).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.length > 0 ? (
                    items.map((resource) => (
                      <StaggerItem key={resource._id}>
                        <Card className="h-full">
                          <CardHeader className="flex flex-row items-start gap-4">
                            {getCategoryIcon(resource.category)}
                            <div>
                              <CardTitle>{resource.title}</CardTitle>
                              <CardDescription>{resource.category}</CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">{resource.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button asChild className="w-full bg-dmsa-primary hover:bg-dmsa-dark">
                              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                View Resource
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      </StaggerItem>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-8">
                      <p className="text-gray-500">No resources found in this category. Check back soon!</p>
                    </div>
                  )}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}


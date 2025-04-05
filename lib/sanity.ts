import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

// Helper function to build image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Home page queries
export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]{
    title,
    heroImage,
    heroText,
    quoteText,
    quoteReference,
    welcomeTitle,
    welcomeContent,
    welcomeImage,
    prayerTimesTitle,
    prayerTimesContent,
    ctaTitle,
    ctaContent,
    seo
  }`)
}

// Event queries
export async function getEvents(limit?: number) {
  const limitQuery = limit ? `[0...${limit}]` : ""
  return client.fetch(`*[_type == "event"] | order(date desc) ${limitQuery} {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    image,
    description,
    featured,
    registrationLink
  }`)
}

export async function getFeaturedEvents(limit = 3) {
  return client.fetch(`*[_type == "event" && featured == true] | order(date desc) [0...${limit}] {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    image,
    description,
    registrationLink
  }`)
}

export async function getEvent(slug: string) {
  return client.fetch(
    `*[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    image,
    description,
    content,
    registrationLink,
    organizers[]->{
      _id,
      name,
      role,
      image
    }
  }`,
    { slug },
  )
}

// About page queries
export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    title,
    content,
    image,
    mission,
    vision,
    team[]->{
      _id,
      name,
      role,
      bio,
      image,
      email,
      socialMedia
    },
    seo
  }`)
}

// Resource queries
export async function getResources(category?: string) {
  const categoryFilter = category ? `&& category == "${category}"` : ""
  return client.fetch(`*[_type == "resource" ${categoryFilter}] | order(title asc) {
    _id,
    title,
    slug,
    category,
    description,
    link,
    file,
    featured,
    publishedAt
  }`)
}

export async function getResourceCategories() {
  return client.fetch(`array::unique(*[_type == "resource"].category)`)
}

export async function getFeaturedResources(limit = 6) {
  return client.fetch(`*[_type == "resource" && featured == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    category,
    description,
    link,
    file,
    publishedAt
  }`)
}

// Prayer times queries
export async function getCurrentPrayerTimes() {
  const today = new Date().toISOString().split("T")[0]
  return client.fetch(
    `*[_type == "prayerTimes" && startDate <= $today && endDate >= $today][0]{
    title,
    fajr,
    sunrise,
    dhuhr,
    asr,
    maghrib,
    isha,
    jummahTime,
    jummahLocation,
    notes
  }`,
    { today },
  )
}

export async function getAllPrayerTimes() {
  return client.fetch(`*[_type == "prayerTimes"] | order(startDate desc) {
    _id,
    title,
    startDate,
    endDate,
    fajr,
    sunrise,
    dhuhr,
    asr,
    maghrib,
    isha,
    jummahTime,
    jummahLocation,
    notes
  }`)
}


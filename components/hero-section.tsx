"use client"

import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  title: string
  quoteText: string
  quoteReference: string
  imageUrl?: any // Sanity image
  arabicCalligraphy?: any // Sanity image for Arabic calligraphy
}

export function HeroSection({ title, quoteText, quoteReference, imageUrl, arabicCalligraphy }: HeroSectionProps) {
  // Generate image URLs from Sanity
  const backgroundImageUrl = imageUrl ? urlFor(imageUrl).width(1920).url() : "/placeholder.svg?height=1080&width=1920"
  const calligraphyUrl = arabicCalligraphy ? urlFor(arabicCalligraphy).width(400).url() : "/arabic-calligraphy.svg"

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - var(--navbar-height))" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl || "/placeholder.svg"}
          alt="Dalhousie University"
          fill
          className="object-cover"
          priority
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Arabic Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <Image
            src={calligraphyUrl || "/placeholder.svg"}
            alt="Arabic Calligraphy"
            width={400}
            height={150}
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl italic mb-2 max-w-2xl"
        >
          "{quoteText}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-base mb-12"
        >
          {quoteReference}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-wider"
        >
          {title === "DMSA" ? "DalMSA" : title}
        </motion.h1>

        {/* Scroll down button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10"
        >
          <Button
            onClick={scrollToContent}
            variant="outline"
            size="icon"
            className="rounded-full border-white text-white hover:bg-white/20 hover:text-white"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}


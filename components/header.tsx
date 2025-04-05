"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/nav-link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Memberships", href: "/memberships" },
  { name: "Prayer Times", href: "/prayer-times" },
  { name: "Donations", href: "/donations" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" style={{ height: "var(--navbar-height)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 h-full" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dalhousie MSA</span>
            <div className="flex items-center">
              <Image src="/dalmsa-logo.svg" alt="DalMSA Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="ml-2 text-lg font-semibold text-dmsa-dark">DalMSA</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <nav className="flex items-center">
            <div className="flex space-x-1">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href} exact={item.href === "/"}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile menu with AnimatePresence for animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              {/* Background overlay with fade animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu panel with slide animation */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg"
              >
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <Image src="/dalmsa-logo.svg" alt="DalMSA Logo" width={32} height={32} className="h-8 w-auto" />
                    <span className="ml-2 text-lg font-semibold text-dmsa-dark">DalMSA</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="p-4">
                  <ul className="space-y-1">
                    {navigation.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname === item.href || pathname.startsWith(`${item.href}/`)

                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-md px-4 py-2 text-base font-medium transition-colors",
                              isActive
                                ? "bg-dmsa-light text-dmsa-primary"
                                : "text-gray-700 hover:bg-gray-100 hover:text-dmsa-primary",
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}


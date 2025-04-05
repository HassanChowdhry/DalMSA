"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { FileText, Book, Video, LinkIcon, Search } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const categories = [
    { name: "All Resources", href: "/resources", icon: Search },
    { name: "Articles", href: "/resources?category=articles", icon: FileText },
    { name: "Educational", href: "/resources?category=educational", icon: Book },
    { name: "Videos", href: "/resources?category=videos", icon: Video },
    { name: "Other", href: "/resources?category=other", icon: LinkIcon },
  ]

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar variant="floating" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-3">
              <Book className="h-6 w-6 text-dmsa-primary" />
              <span className="text-lg font-semibold">Resources</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Categories</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {categories.map((category) => (
                    <SidebarMenuItem key={category.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={
                          category.href === "/resources" ? pathname === "/resources" : pathname.includes(category.href)
                        }
                        tooltip={category.name}
                      >
                        <Link href={category.href}>
                          <category.icon className="h-4 w-4" />
                          <span>{category.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-3 py-2">
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DalMSA</p>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <div className="p-4 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">Resources</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}


"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  exact?: boolean
}

export function NavLink({
  href,
  children,
  className,
  activeClassName = "bg-dmsa-light text-dmsa-primary font-medium",
  exact = false,
  ...props
}: NavLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname()
  const isActive = exact 
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-sm rounded-md transition-colors",
        isActive 
          ? activeClassName 
          : "text-gray-700 hover:bg-gray-100/70 hover:text-dmsa-primary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}


import type React from "react"
export const metadata = {
  title: "DMSA Sanity Studio",
  description: "Content management for the DMSA website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


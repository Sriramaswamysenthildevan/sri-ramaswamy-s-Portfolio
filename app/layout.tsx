import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sriramaswamy | Web Developer Portfolio",
  description:
    "A professional portfolio showcasing my work and skills as a web developer specializing in AI/ML and full-stack development",
  keywords: ["portfolio", "web developer", "AI/ML", "full-stack", "react", "next.js", "python"],
  authors: [{ name: "Sriramaswamy" }],
  creator: "Sriramaswamy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sriramaswamy-portfolio.vercel.app",
    title: "Sriramaswamy | Web Developer Portfolio",
    description:
      "A professional portfolio showcasing my work and skills as a web developer specializing in AI/ML and full-stack development",
    siteName: "Sriramaswamy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sriramaswamy | Web Developer Portfolio",
    description:
      "A professional portfolio showcasing my work and skills as a web developer specializing in AI/ML and full-stack development",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen antialiased bg-black text-white`}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://appsclub.info' : 'http://localhost:3000'),
  title: "AppsClub - ENSA Agadir",
  description: "Weekly trainings, real-world projects, expert talks. Join 650+ IT students at Morocco's leading tech community.",
  keywords: ["AppsClub", "ENSA Agadir", "IT community", "programming", "tech training", "Morocco"],
  authors: [{ name: "AppsClub ENSA Agadir" }],
  openGraph: {
    title: "AppsClub - ENSA Agadir",
    description: "Weekly trainings, real-world projects, expert talks. Join 650+ IT students at Morocco's leading tech community.",
    url: "https://appsclub.info",
    siteName: "AppsClub",
    images: [
      {
        url: "/images/logo1 background.png",
        width: 512,
        height: 512,
        alt: "AppsClub ENSA Agadir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AppsClub - ENSA Agadir", 
    description: "Weekly trainings, real-world projects, expert talks. Join 650+ IT students at Morocco's leading tech community.",
    images: ["/images/logo1 background.png"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

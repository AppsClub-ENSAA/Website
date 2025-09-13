import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000'),
  title: "AppsClub",
  description: "Official website of AppsClub ENSA Agadir - Leading technology and innovation in software development",
  openGraph: {
    title: "AppsClub - ENSA Agadir",
    description: "Join 650+ IT students shaping Morocco's digital future at ENSA Agadir",
    images: [
      {
        url: "/images/logo1 background.png",
        width: 1200,
        height: 630,
        alt: "AppsClub ENSA Agadir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppsClub - ENSA Agadir", 
    description: "Join 650+ IT students shaping Morocco's digital future at ENSA Agadir",
    images: ["/images/logo1 background.png"],
  },
  icons: {
    icon: '/images/apps white.png',
    shortcut: '/images/apps white.png',
    apple: '/images/apps white.png',
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

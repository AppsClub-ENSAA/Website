import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://appsclub.info' : 'http://localhost:3000'),
  title: "AppsClub ENSA Agadir | Morocco's Leading IT Student Community",
  description: "Join 650+ IT students at AppsClub ENSA Agadir. Master programming, data science, cybersecurity & more through hands-on training programs in Morocco's top technology hub.",
  keywords: ["AppsClub", "ENSA Agadir", "IT Morocco", "Programming", "Data Science", "Cybersecurity", "Web Development", "Student Community"],
  authors: [
    { name: "AppsClub ENSA Agadir" },
    { name: "Youssef Taguejgalet", url: "https://www.linkedin.com/in/youssef-tag/" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appsclub.info",
    siteName: "AppsClub ENSA Agadir",
    title: "AppsClub ENSA Agadir | Morocco's Leading IT Student Community",
    description: "🚀 Join 650+ IT students mastering technology at Morocco's premier engineering school. Training programs in Programming, Data Science, Cybersecurity & Web Development.",
    images: [
      {
        url: "/images/logo1 background.png",
        width: 1200,
        height: 630,
        alt: "AppsClub ENSA Agadir - Morocco's Leading IT Student Community",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@appsclub_ensaa",
    title: "AppsClub ENSA Agadir | Morocco's Leading IT Student Community",
    description: "🚀 Join 650+ IT students mastering technology at Morocco's premier engineering school. Programming • Data Science • Cybersecurity • Web Development",
    images: ["/images/logo1 background.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/manifest.json',
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

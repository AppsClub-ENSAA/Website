"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { Calendar, MapPin, Search, ArrowRight, ArrowLeft, Youtube, Play } from "lucide-react"
import { activities } from "@/data/activities"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const CATEGORIES = ["all", "event", "talk"]

export default function ActivitiesListPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")

  const filtered = activities.filter((a) => {
    const matchesCategory = category === "all" || a.category === category
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q === "" ||
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      (a.location && a.location.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden pt-24">
      <AnimatedBackground />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mb-6">
          <Link
            href="/#events"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            All Activities & Events
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every event, talk, and tech session we've run to empower students and builders.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search activities by title, keyword, or venue..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                  category === c
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-750 border border-gray-700"
                }`}
              >
                {c === "all" ? "All" : `${c}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <Link href={`/activities/${item.slug}`} key={item.id} className="block group h-full">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                <CardHeader>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-950">
                    <img
                      src={item.videoId ? getThumbnailUrl(item.videoId) : item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.videoId && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-lg shadow-lg">
                        <Youtube className="h-4 w-4" />
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-gray-900/90 text-purple-300 text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                      {item.category}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mt-4 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col flex-grow">
                  <p className="text-gray-300 leading-relaxed flex-grow line-clamp-3">
                    {item.shortDescription || item.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-700 mt-auto min-h-[3rem] justify-between">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {item.location && (
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="h-4 w-4 text-purple-400" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.date && (
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 text-purple-400" />
                          <span>{item.date}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 text-sm font-semibold">
                      View details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No activities found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

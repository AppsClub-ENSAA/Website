"use client"

import type React from "react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, MapPin, Calendar, Youtube, ArrowRight, ListChecks } from "lucide-react"
import { getEvents } from "@/data/activities"

export default function Events() {
  const events = getEvents()

  const openVideo = (videoId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="events">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Event Recaps</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Highlights from our recent events and activities</p>
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 mt-6 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            View all activities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Link href={`/activities/${event.slug}`} key={event.id} className="block group h-full">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                <CardHeader>
                  <div
                    className="relative group/video cursor-pointer"
                    onClick={(e) => (event.videoId ? openVideo(event.videoId, e) : null)}
                  >
                    <img
                      src={event.videoId ? getThumbnailUrl(event.videoId) : event.coverImage}
                      alt={event.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    {event.videoId && (
                      <>
                        <div className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-lg shadow-lg">
                          <Youtube className="h-4 w-4" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 rounded-lg">
                          <Play className="h-16 w-16 text-white" />
                        </div>
                      </>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mt-4 group-hover:text-purple-400 transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col h-full">
                  <p className="text-gray-300 leading-relaxed flex-grow line-clamp-3">
                    {event.shortDescription || event.description}
                  </p>

                  {event.highlights && event.highlights.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                        <ListChecks className="h-4 w-4" /> Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {event.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-400">
                            • {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-700 mt-auto min-h-[3rem] justify-between">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {event.location && (
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="h-4 w-4 text-purple-400" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.date && (
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 text-purple-400" />
                          <span>{event.date}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 text-sm font-semibold">
                      Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

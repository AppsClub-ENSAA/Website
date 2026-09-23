"use client"

import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Youtube, Users, ArrowRight } from "lucide-react"
import { getTalks } from "@/data/activities"

export default function PastTalks() {
  const talks = getTalks()

  const openVideo = (videoId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="talks">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Past Talks</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Inspiring sessions and career guidance from industry experts and successful alumni
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {talks.map((talk) => (
            <Link href={`/activities/${talk.slug}`} key={talk.id} className="block group h-full">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                <CardHeader>
                  <div
                    className="relative group/video cursor-pointer"
                    onClick={(e) => (talk.videoId ? openVideo(talk.videoId, e) : null)}
                  >
                    <img
                      src={talk.videoId ? getThumbnailUrl(talk.videoId) : talk.coverImage}
                      alt={talk.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    {talk.videoId && (
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
                  <CardTitle className="text-xl font-bold text-white mt-4 leading-tight group-hover:text-purple-400 transition-colors">
                    {talk.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col h-full">
                  <p className="text-gray-300 leading-relaxed flex-grow line-clamp-3">
                    {talk.shortDescription || talk.description}
                  </p>

                  <div className="space-y-2 border-t border-gray-700 pt-4">
                    {talk.highlights && talk.highlights.length > 0 && (
                      <>
                        <h4 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1 mb-4">
                          {talk.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index} className="text-sm text-gray-400">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="flex justify-end items-center gap-1 text-purple-400 text-sm font-semibold">
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

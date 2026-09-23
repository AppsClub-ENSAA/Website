"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Linkedin, Github, Instagram, Mail, X, ArrowRight } from "lucide-react"
import { currentTeamMembers, TeamMember, SHOW_MEMBER_LINKEDIN } from "@/data/team"

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const getCurrentBureau = (member: TeamMember) => {
    const history = Array.isArray(member.bureauHistory) ? member.bureauHistory : []
    const current = history.find((assignment) => !assignment.toYear)
    return current?.bureau || member.department || ""
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Meet the passionate individuals driving AppsClub's mission forward
          </p>
          <div className="mb-4">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
            >
              View all members <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-sm text-gray-500">← Scroll horizontally to see all team members →</p>
        </div>

        <div className="team-scroll-container">
          <div className="flex gap-6 w-max px-2 py-2">
            {currentTeamMembers.map((member) => (
              <Card
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="team-card-portrait bg-gray-800 border-gray-700 hover:bg-gray-750 relative cursor-pointer group"
              >
                {SHOW_MEMBER_LINKEDIN && member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 left-3 z-10 text-blue-400 hover:text-blue-300 transition-colors duration-200 bg-gray-900/80 p-1.5 rounded-full"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                <div className={member.isAssistant ? "image-container-portrait-assistant" : "image-container-portrait"}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      const initials = member.name.split(" ").map((n) => n[0]).join("").substring(0, 2)
                      const svg = `data:image/svg+xml;base64,${btoa(`
                        <svg width="250" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#374151"/>
                          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="48" fill="#9CA3AF">${initials}</text>
                        </svg>
                      `)}`
                      target.src = svg
                    }}
                  />
                </div>
                <div className="text-content-portrait">
                  <div className="member-name-portrait">{member.name}</div>
                  <div className="member-role-portrait text-purple-400">{member.role}</div>
                  {member.quote && (
                    <div className="member-quote-portrait line-clamp-2">"{member.quote}"</div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center mt-2">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-purple-500/30 mb-6 shadow-lg">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 text-center">
                {selectedMember.name}
              </h3>
              <p className="text-lg text-purple-400 font-semibold mb-1 text-center">
                {selectedMember.role}
              </p>
              {getCurrentBureau(selectedMember) && (
                <p className="text-gray-400 text-sm mb-6">{getCurrentBureau(selectedMember)}</p>
              )}

              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {SHOW_MEMBER_LINKEDIN && selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {selectedMember.github && (
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-full transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {selectedMember.instagram && (
                  <a
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white p-3 rounded-full transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white p-3 rounded-full transition-all"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>

            {selectedMember.quote && (
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 mb-6">
                <p className="text-gray-300 italic text-center text-lg">"{selectedMember.quote}"</p>
              </div>
            )}

            {selectedMember.bio && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About</h4>
                <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

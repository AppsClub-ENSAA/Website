"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Trophy, Code, Database, Shield, Target, Calendar, X } from "lucide-react"

interface TrainingCell {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  yearPlan?: string
  goal?: string
  keyActivities?: string
}

const trainingCells: TrainingCell[] = [
  {
    id: "preparatory",
    title: "Preparatory Cycle Cell",
    description: "Foundation building for first-year students",
    icon: <GraduationCap className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-600",
    goal: "To support first-year students in mastering the essentials of C programming and web development, while gaining hands-on experience through projects and solving coding challenges. This cell is designed to help students succeed in their exams, while also focusing on general programming skills as beginners and giving them an early entry into the IT experience.",
    keyActivities:
      "**Intro to CS**: A five-session track covering C programming fundamentals, from coding basics and control flow to pointers, memory management, and preparation for data structures.\n\n**Intro to Web Development**: A seven-session journey through HTML, CSS, JavaScript, and SQL, applied directly in practical projects.",
  },
  {
    id: "competitive",
    title: "Competitive Programming Cell",
    description: "Algorithmic problem solving and contest preparation",
    icon: <Trophy className="h-8 w-8" />,
    gradient: "from-yellow-500 to-orange-600",
    goal: "To build a strong culture of problem-solving and algorithmic thinking that benefits students across all IT fields. This cell is open to all programming levels and welcomes the use of any programming language, making it a flexible space to grow. Members improve their skills through contests, challenges, and teamwork, preparing them for competitions and technical interviews, as well as advanced programming tasks, while fostering resilience and collaboration.",
    keyActivities:
      "**Biweekly Contest:** A series of 10 themed contests with bootcamps and live corrections on YouTube.\n\n**Top 150 LeetCode Problems:** A structured problem-solving track, with challenges published twice a week on Discord and staff support provided for guidance and corrections.\n\n**Clash of Code Tournament:** A special Ramadan tournament, held in multiple phases, featuring diverse challenge formats.",
  },
  {
    id: "development",
    title: "Development Cell",
    description: "Full-stack development and modern technologies",
    icon: <Code className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-600",
    goal: "To empower students who are passionate about software development by equipping them with the essential tools, languages, and frameworks to bring their ideas to life. As software development forms the foundation of all IT fields, this cell is designed for everyone, regardless of their study path. Members will gain both technical expertise and real-world project experience, bridging the gap between theory and practice.",
    keyActivities:
      "**Git & GitHub Bootcamp:** A 3-session program introducing Git workflow, branching, and commits, followed by collaboration on GitHub, best practices, and troubleshooting common issues. The track concludes with contributing to the official Apps Club repository.\n\n**Python Essentials Program:** A 7-session program starting with syntax, variables, and control structures, then progressing to functions, data structures, and object-oriented programming. Includes online project-based sessions for deeper practice.",
  },
  {
    id: "datascience",
    title: "Data Cell",
    description: "Data analysis, machine learning, and AI",
    icon: <Database className="h-8 w-8" />,
    gradient: "from-purple-500 to-pink-600",
    goal: "To cultivate a collaborative community of aspiring data scientists and AI practitioners, guiding members from foundational machine learning to advanced AI techniques. The Data Cell emphasizes hands-on learning, real-world projects, and teamwork, preparing members to tackle practical challenges and innovate in the data-driven world.",
    keyActivities:
      "**Machine Learning Foundations:** A 4-session program introducing core principles of supervised learning, model training, and evaluation. Concludes with a guided project on real datasets to consolidate understanding.\n\n**Advanced AI Mastery:** A two-part program covering deep learning, transfer learning, and NLP with Transformers (3 sessions each). Includes hands-on projects such as image classification with pre-trained models and text generation systems.\n\n**End-to-End AI Systems:** A 5-session program on building full AI pipelines, from data acquisition to deployment and monitoring. Culminates in a final project where members design and present a functional AI solution, with certificates awarded for successful completion.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Cell",
    description: "Information security and ethical hacking",
    icon: <Shield className="h-8 w-8" />,
    gradient: "from-red-500 to-rose-600",
    goal: "To introduce and guide students into the world of cybersecurity, helping them build knowledge, skills, and a professional network. The Cybersecurity Cell supports beginners in developing curiosity and core foundations, while enabling advanced learners to prepare for real-world challenges, certifications, and competitions. Its mission is to create a skilled, collaborative, and supportive community of security enthusiasts.",
    keyActivities:
      "**Cyber Hub Community:** An always-active online space on Discord where beginners receive guidance, learners exchange knowledge, and advanced members collaborate on projects and challenges. Includes guest workshops, Blue vs. Red Team events, quizzes, AMA sessions, and continuous knowledge sharing.\n\n**Foundations of Cybersecurity:** A mentor-led program covering essential topics such as networking basics, protocols, system fundamentals, and introductory Linux. Features hands-on labs and guided practice to build strong technical foundations.\n\n**Applied Security Skills:** An advanced program focusing on deeper networking, OS administration, and vulnerability assessment. Learners engage in labs, projects, and offensive/defensive simulations to strengthen real-world capabilities.",
  },
]

export default function TrainingCells() {
  const [selectedCell, setSelectedCell] = useState<TrainingCell | null>(null)

  const formatText = (text: string) => {
    return text.split("\n").map((line, index) => {
      // Replace **text** with bold formatting
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      return (
        <span key={index}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          {index < text.split("\n").length - 1 && <br />}
        </span>
      )
    })
  }

  const openModal = (cell: TrainingCell) => {
    setSelectedCell(cell)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setSelectedCell(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Training Cells</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized learning paths designed to master different aspects of IT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trainingCells.map((cell) => (
            <Card 
              key={cell.id}
              onClick={() => openModal(cell)}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer group h-full flex flex-col"
            >
              <CardHeader className="text-center pb-4 flex-shrink-0">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${cell.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{cell.icon}</div>
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                  {cell.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <p className="text-gray-400 text-sm text-center leading-relaxed w-full">{cell.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Modal */}
        {selectedCell && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div className="relative bg-gray-800 border border-gray-700 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto w-[calc(100%-1rem)] max-w-4xl mx-2 sm:mx-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors duration-200 bg-gray-900/80 p-2 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${selectedCell.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <div className="text-white">{selectedCell.icon}</div>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedCell.title}</h2>
                </div>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {selectedCell.goal && (
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Goal
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCell.goal}</p>
                  </div>
                )}
                {selectedCell.keyActivities && (
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Key Activities
                    </h4>
                    <div className="text-gray-300 leading-relaxed">{formatText(selectedCell.keyActivities)}</div>
                  </div>
                )}
                {!selectedCell.goal && !selectedCell.keyActivities && (
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Year Plan</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedCell.yearPlan}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

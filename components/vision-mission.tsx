import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Rocket } from "lucide-react"

export default function VisionMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Vision & Mission</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driving innovation and excellence in IT education at ENSA Agadir
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                To create a vibrant environment where ENSA Agadir IT students learn cutting-edge technologies, build
                real-world solutions, and form meaningful connections shaping their careers and Morocco's digital
                future.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">Mission 2024/2025</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  5+ high-impact weekly trainings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Real-world project development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Monthly expert-led talks/workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>A supportive, active community of 650+
                  learners
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import Header from "@/components/header"
import Hero from "@/components/hero"
import QuickStats from "@/components/quick-stats"
import VisionMission from "@/components/vision-mission"
import TrainingCells from "@/components/training-cells"
import Events from "@/components/events"
import PastTalks from "@/components/past-talks"
import Team from "@/components/team"
import Merch from "@/components/merch"
import ConnectWithUs from "@/components/connect-with-us"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import Partnerships from "@/components/partnerships"
import NavigationHandler from "@/components/navigation-handler"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <NavigationHandler />
      <AnimatedBackground />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <QuickStats />
        </section>
        <section id="vision">
          <VisionMission />
        </section>
        <section id="training">
          <TrainingCells />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="talks">
          <PastTalks />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="merch">
          <Merch />
        </section>
        <section id="partnerships">
          <Partnerships />
        </section>
        <section id="connect">
          <ConnectWithUs />
        </section>
      </main>
      <Footer />
    </div>
  )
}

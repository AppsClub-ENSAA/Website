export default function EventRecaps() {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Event Recaps</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Highlights from our recent events and activities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 1337 Benguerir Visit */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400">YouTube Video Placeholder</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">1337 Benguerir Visit</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1337 Benguerir Visit</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our members visited 1337 Benguerir to explore innovative learning methodologies and connect with fellow
                tech enthusiasts. An inspiring journey of discovery and networking.
              </p>
            </div>
          </div>

          {/* Infodays Event */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400">YouTube Video Placeholder</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Infodays Event</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Infodays Event</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our annual information days where we showcase our training cells, projects, and opportunities to new
                students. A celebration of learning and community building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

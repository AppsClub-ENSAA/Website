export default function Merch() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-gray-800 border-gray-700 rounded-2xl p-12 border">
          <div className="text-6xl mb-6 animate-bounce">👕</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="inline-block animate-pulse">Coming Soon</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Official AppsClub merch is on the way</p>
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

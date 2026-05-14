function HeroSection() {
  return (
    <div className="mt-10 bg-gradient-to-r from-purple-50 to-purple-100 rounded-[32px] px-10 py-8 flex items-center justify-between shadow-sm">

      <div className="max-w-2xl">

        <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
          Understand. Analyze. Improve.
        </h2>

        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
          EmoTrack AI analyzes multiple behavioral and physiological
          parameters to provide meaningful emotional wellness insights.
        </p>

        <button className="mt-7 bg-purple-600 hover:bg-purple-700 transition text-white px-7 py-3 rounded-2xl text-lg font-medium shadow-md">
          Start New Assessment →
        </button>

      </div>

      <div className="hidden lg:flex items-center justify-center">

        <div className="w-56 h-56 rounded-full bg-purple-200 flex items-center justify-center text-7xl">
          🧘
        </div>

      </div>

    </div>
  )
}

export default HeroSection
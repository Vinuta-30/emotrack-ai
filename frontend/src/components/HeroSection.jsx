function HeroSection() {
  return (

    <div className="bg-[#efe8ff] rounded-[32px] px-10 py-6 flex items-center justify-between overflow-hidden">

      {/* LEFT SIDE */}
      <div className="max-w-[520px]">

        <p className="text-sm text-purple-500 font-medium mb-3">
          Emotional Wellness Platform
        </p>

        <h1 className="text-[36px] leading-[44px] font-bold text-gray-800">
          Understand your emotions with AI-powered insights
        </h1>

        <p className="text-gray-500 mt-5 leading-7">
          Analyze facial expressions, voice, typing behavior,
          and pulse data to better understand your emotional wellness.
        </p>

        <button className="mt-6 bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 rounded-2xl transition font-medium shadow-sm">
          Start Assessment
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center justify-center">

        <div className="w-[200px] h-[200px] rounded-full bg-[#dccfff] flex items-center justify-center">

          <div className="text-[90px]">
            🧘
          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroSection;
function FeatureCards() {
  const cards = [
    {
      title: "Multi-Parameter Analysis",
      desc: "Combine face, voice, pulse, text behavior and questionnaire insights.",
      emoji: "🧠",
    },
    {
      title: "Privacy First",
      desc: "Your emotional data stays secure and confidential.",
      emoji: "🛡️",
    },
    {
      title: "Personalized Insights",
      desc: "AI-generated suggestions tailored to your emotional wellness.",
      emoji: "✨",
    },
    {
      title: "Track Progress",
      desc: "Monitor your stress and emotional patterns over time.",
      emoji: "📈",
    },
  ]

  return (
    <div className="mt-12">

      <h2 className="text-2xl font-bold text-gray-800">
        What’s New
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="text-4xl">
              {card.emoji}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              {card.title}
            </h3>

            <p className="mt-3 text-gray-500 leading-relaxed">
              {card.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default FeatureCards
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
  ];

  return (

    <div className="mt-8">

      <h2 className="text-[28px] font-semibold text-gray-800 mb-5">
        What’s New
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 min-h-[170px]"
          >

            <div className="text-2xl">
              {card.emoji}
            </div>

            <h3 className="mt-4 text-[18px] font-semibold text-gray-800 leading-7">
              {card.title}
            </h3>

            <p className="mt-3 text-gray-500 text-sm leading-6">
              {card.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FeatureCards;
function Recommendations() {

  const recommendations = [
    {
      title: "Practice Deep Breathing",
      desc: "Spend 5 minutes daily on deep breathing exercises to calm your mind.",
      tag: "Mind",
      emoji: "🌿",
    },

    {
      title: "Improve Sleep Quality",
      desc: "Maintain a consistent sleep schedule and avoid screen time before bed.",
      tag: "Lifestyle",
      emoji: "🌙",
    },

    {
      title: "Take Short Breaks",
      desc: "Take 5-10 minute breaks every hour to refresh your mind.",
      tag: "Work",
      emoji: "☕",
    },

    {
      title: "Stay Active",
      desc: "Engage in at least 30 minutes of physical activity daily.",
      tag: "Body",
      emoji: "🏃",
    },
  ];

  return (

    <div className="max-w-[1320px] mx-auto py-6">

      <h1 className="text-[34px] font-bold text-gray-800">
        Personalized Recommendations
      </h1>

      <p className="text-gray-500 mt-2">
        AI-generated wellness suggestions based on your emotional analysis.
      </p>

      <div className="mt-8 space-y-5">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100 flex items-start gap-5"
          >

            <div className="text-4xl">
              {item.emoji}
            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>

                <span className="bg-[#f3edff] text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                  {item.tag}
                </span>

              </div>

              <p className="mt-3 text-gray-500 leading-7">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Recommendations;
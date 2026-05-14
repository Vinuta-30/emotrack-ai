function QuickActions() {

  const actions = [
    {
      title: "Start Assessment",
      desc: "Begin your wellness analysis",
      emoji: "📝",
      color: "bg-purple-50",
    },

    {
      title: "View Results",
      desc: "Check your latest insights",
      emoji: "📊",
      color: "bg-green-50",
    },

    {
      title: "AI Recommendations",
      desc: "Personalized wellness guidance",
      emoji: "✨",
      color: "bg-blue-50",
    },

    {
      title: "Learn & Explore",
      desc: "Mental wellness resources",
      emoji: "📚",
      color: "bg-orange-50",
    },
  ]

  return (
    <div className="mt-12">

      <h2 className="text-2xl font-bold text-gray-800">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

        {actions.map((item, index) => (

          <div
            key={index}
            className={`${item.color} rounded-3xl p-6 shadow-sm hover:shadow-md transition cursor-pointer`}
          >

            <div className="text-3xl">
              {item.emoji}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-500">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default QuickActions
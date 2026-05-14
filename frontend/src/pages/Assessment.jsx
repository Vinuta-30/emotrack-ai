function Assessment() {
  return (
    <div className="flex-1 overflow-y-auto p-10 py-8 max-w-[1600px] mx-auto w-full">

      <div className="flex items-center gap-2 text-gray-500 cursor-pointer">
        ← Back
      </div>

      <h1 className="mt-6 text-4xl font-bold text-gray-800">
        Assessment in Progress
      </h1>

      <p className="mt-2 text-gray-500 text-lg">
        Complete all sections to generate your wellness insights.
      </p>

      {/* Progress Steps */}

      <div className="mt-10 flex items-center justify-between bg-white rounded-3xl p-8 shadow-sm">

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
            😊
          </div>

          <p className="mt-3 font-medium text-gray-700">
            Face
          </p>
        </div>

        <div className="h-1 flex-1 bg-gray-200 mx-4 rounded-full"></div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
            🎤
          </div>

          <p className="mt-3 font-medium text-gray-700">
            Voice
          </p>
        </div>

        <div className="h-1 flex-1 bg-gray-200 mx-4 rounded-full"></div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
            ⌨️
          </div>

          <p className="mt-3 font-medium text-gray-700">
            Questionnaire
          </p>
        </div>

        <div className="h-1 flex-1 bg-gray-200 mx-4 rounded-full"></div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
            ❤️
          </div>

          <p className="mt-3 font-medium text-gray-700">
            Pulse
          </p>
        </div>

      </div>

      {/* Question Card */}

      <div className="mt-10 bg-white rounded-3xl p-10 shadow-sm">

        <h2 className="text-2xl font-bold text-gray-800">
          Questionnaire (Analyzing Typing Behavior)
        </h2>

        <p className="mt-3 text-gray-500">
          We analyze typing behavior while you answer.
        </p>

        <div className="mt-8">

          <p className="text-lg font-semibold text-gray-700">
            How have you been feeling mentally in the past few days?
          </p>

          <textarea
            className="mt-5 w-full h-40 border border-gray-200 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            placeholder="Type your answer here..."
          ></textarea>

        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-400 text-sm">
              Typing Speed
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
              98 WPM
            </h3>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-400 text-sm">
              Error Rate
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
              3%
            </h3>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-400 text-sm">
              Backspaces
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
              18
            </h3>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-400 text-sm">
              Hesitation Time
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
              1.2s
            </h3>
          </div>

        </div>

        <button className="mt-8 bg-purple-600 hover:bg-purple-700 transition text-white px-7 py-3 rounded-2xl text-lg font-medium">
          Next Question →
        </button>

      </div>

    </div>
  )
}

export default Assessment
function ResultsPreview() {

  return (

    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* LEFT CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

        <h2 className="text-2xl font-semibold text-gray-800">
          Your Results
        </h2>

        <p className="text-gray-500 mt-2">
          Here is your emotional wellness summary.
        </p>

        <div className="mt-8 flex items-center justify-center">

          <div className="w-52 h-52 rounded-full border-[18px] border-purple-500 flex flex-col items-center justify-center">

            <h1 className="text-5xl font-bold text-gray-800">
              63%
            </h1>

            <p className="text-gray-500 mt-2">
              Moderate Stress
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT CARD */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100">

        <h2 className="text-2xl font-semibold text-gray-800">
          Parameter Contribution
        </h2>

        <p className="text-gray-500 mt-2">
          Emotional wellness indicators.
        </p>

        <div className="mt-8 space-y-6">

          <div>
            <div className="flex justify-between mb-2">
              <span>Face Emotion</span>
              <span>70%</span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-purple-500 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Voice Analysis</span>
              <span>60%</span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Typing Behavior</span>
              <span>55%</span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-pink-500 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Pulse Analysis</span>
              <span>65%</span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-orange-400 rounded-full"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ResultsPreview;
function Topbar() {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, Alex! 👋
        </h1>

        <p className="mt-2 text-gray-500 text-base">
          Take an assessment to analyze your emotional wellness.
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="bg-white p-3 rounded-full shadow-sm border border-gray-200">
          🔔
        </button>

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-200">

          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-lg">
            👩
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Alex
            </p>

            <p className="text-sm text-gray-400">
              User
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Topbar
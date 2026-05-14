import { NavLink } from "react-router-dom"

function Sidebar() {
  return (

    <div className="w-72 h-screen bg-white border-r border-gray-200 px-8 py-10 shadow-sm">

      <h1 className="text-3xl font-bold text-purple-600">
        EmoTrack AI
      </h1>

      <p className="text-gray-400 mt-2 text-sm">
        Emotional Wellness Platform
      </p>

      <div className="mt-14 space-y-8">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block text-purple-600 font-semibold text-lg"
              : "block text-gray-600 hover:text-purple-600 transition text-lg"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/assessment"
          className={({ isActive }) =>
            isActive
              ? "block text-purple-600 font-semibold text-lg"
              : "block text-gray-600 hover:text-purple-600 transition text-lg"
          }
        >
          Assessment
        </NavLink>

        <NavLink
  to="/face-analysis"
  className={({ isActive }) =>
    isActive
      ? "block text-purple-600 font-semibold text-lg"
      : "block text-gray-600 hover:text-purple-600 transition text-lg"
  }
>
  Face Analysis
</NavLink>

        <p className="text-gray-600 text-lg">
          Results
        </p>

        <p className="text-gray-600 text-lg">
          Recommendations
        </p>

        <p className="text-gray-600 text-lg">
          History
        </p>

      </div>

      <div className="mt-24 bg-purple-50 rounded-3xl p-6">
        <p className="text-purple-700 font-medium">
          Small steps today,
          better mental wellness tomorrow 💜
        </p>
      </div>

    </div>

  )
}

export default Sidebar
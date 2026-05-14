import {
  FiHome,
  FiClipboard,
  FiHeart,
  FiClock,
  FiSettings,
  FiLogOut,
  FiUser,
  FiBarChart2,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (

    <div className="w-[240px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between px-5 py-8">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="mb-10">

          <h1 className="text-2xl font-bold text-purple-600">
            EmoTrack AI
          </h1>

          <p className="text-gray-400 text-sm mt-1 leading-5">
            Emotional Wellness Platform
          </p>

        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiHome size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/assessment"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiClipboard size={18} />
            Assessment
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiHeart size={18} />
            Results
          </NavLink>

          <NavLink
            to="/recommendations"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiHeart size={18} />
            Recommendations
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiClock size={18} />
            History
          </NavLink>

          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiBarChart2 size={18} />
            Insights
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiUser size={18} />
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-[#f3edff] text-[#7c3aed]"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <FiSettings size={18} />
            Settings
          </NavLink>

        </div>
      </div>

      {/* BOTTOM */}
      <div>

        <div className="bg-[#f6f0ff] rounded-[24px] p-4 mb-5">

          <p className="text-sm text-purple-500 leading-6">
            Small steps today,
            better mental wellness tomorrow 💜
          </p>

        </div>

        <button className="flex items-center gap-3 text-gray-500 hover:text-purple-600 transition">

          <FiLogOut size={18} />
          Logout

        </button>

      </div>

    </div>
  );
}

export default Sidebar;
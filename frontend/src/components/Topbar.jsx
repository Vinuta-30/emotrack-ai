import { FiBell } from "react-icons/fi";

function Topbar() {

  return (

    <div className="flex items-center justify-between mb-8">

      {/* LEFT */}
      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Welcome back, Alex! 👋
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Take an assessment to analyze your emotional wellness.
        </p>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* BELL */}
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">

          <FiBell className="text-gray-600 text-xl" />

        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />

          <div>

            <h3 className="font-semibold text-gray-800">
              Alex
            </h3>

            <p className="text-sm text-gray-400">
              User
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;
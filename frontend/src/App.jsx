import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import Recommendations from "./pages/Recommendations";
import History from "./pages/History";
import Insights from "./pages/Insights";

function App() {

  return (

    <div className="flex min-h-screen bg-[#f8f8fc]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-8 py-6 overflow-y-auto">

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/assessment"
            element={<Assessment />}
          />

          <Route
            path="/results"
            element={<Results />}
          />

          <Route
            path="/recommendations"
            element={<Recommendations />}
          />

          <Route
            path="/history"
            element={<History />}
          />

           <Route path="/insights" element={<Insights />} />

        </Routes>
       

      </main>

    </div>

  );
}

export default App;
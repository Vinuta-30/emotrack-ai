import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import FaceAnalysis from "./pages/FaceAnalysis";

function App() {

  return (

    <div className="flex bg-[#f7f8fc] min-h-screen">

      <Sidebar />

      <div className="flex-1 overflow-y-auto p-6">

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/assessment" element={<Assessment />} />

          <Route path="/face-analysis" element={<FaceAnalysis />} />

        </Routes>

      </div>

    </div>
  );
}

export default App;
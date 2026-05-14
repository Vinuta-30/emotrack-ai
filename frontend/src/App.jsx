import { Routes, Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"

import Dashboard from "./pages/Dashboard"
import Assessment from "./pages/Assessment"
import FaceAnalysis from "./pages/FaceAnalysis"

function App() {
  return (
    <div className="flex h-screen bg-[#f5f7fb] overflow-hidden text-[15px]">

      <Sidebar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/assessment" element={<Assessment />} />

        <Route path="/face-analysis" element={<FaceAnalysis />} />

      </Routes>

    </div>
  )
}

export default App
import Topbar from "../components/Topbar"
import HeroSection from "../components/HeroSection"
import FeatureCards from "../components/FeatureCards"
import QuickActions from "../components/QuickActions"

function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-10 py-8 max-w-[1600px] mx-auto w-full ">

      <Topbar />

      <HeroSection />

      <FeatureCards />

      <QuickActions />

    </div>
  )
}

export default Dashboard
import Topbar from "../components/Topbar"
import HeroSection from "../components/HeroSection"
import FeatureCards from "../components/FeatureCards"
import QuickActions from "../components/QuickActions"

function Dashboard() {
  return (
    <div className="max-w-[1350px] mx-auto space-y-8">

  <Topbar />

  <HeroSection />

  <FeatureCards />

  <QuickActions />

</div>
  )
}

export default Dashboard
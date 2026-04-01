import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import PromoSection from "../components/home/PromoSection";
import InfoSection from "../components/home/InfoSection";
import WaveDivider from "../components/ui/WaveDivider";

export default function Home() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-18">

        <HeroSection />

        <FeaturedSection />

        <WaveDivider />

        <PromoSection />

        <InfoSection />

      </main>

    </div>
  );
}
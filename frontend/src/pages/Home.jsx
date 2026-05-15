import SEO from "../components/common/SEO";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import BlogSection from "../components/home/BlogSection";
import FeaturedSection from "../components/home/FeaturedSection";
import PromoSection from "../components/home/PromoSection";
import TestimonialSection from "../components/home/TestimonialSection";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <div className="bg-neutralBg min-h-screen font-sans text-textMain pb-20">
      <SEO title="Home" />
      <Navbar />

      <HeroSection />

      <CategorySection />

      <BlogSection />

      <FeaturedSection />

      <PromoSection />

      <TestimonialSection />

      <Footer />
    </div>
  );
}
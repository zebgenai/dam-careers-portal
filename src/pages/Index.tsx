
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import AboutProject from "@/components/AboutProject";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedJobs />
      <AboutProject />
      <Footer />
    </div>
  );
};

export default Index;

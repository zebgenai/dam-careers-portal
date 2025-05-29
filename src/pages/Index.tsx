
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import AboutProject from "@/components/AboutProject";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Mohmand Dam Job Portal</h2>
          <p className="text-gray-600">Loading opportunities for Pakistan's future...</p>
        </div>
      </div>
    );
  }

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


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/lovable-uploads/3c042cef-83f3-4792-afe9-9c77c2d0243c.png')",
          transform: "translateZ(0)"
        }}
      ></div>
      
      {/* Animated Water Waves Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-700/85 to-green-600/80">
        <div className="absolute inset-0 opacity-20">
          <div className="wave-animation"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <AnimatedSection animation="fade-in" delay={0.2}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join the <span className="text-green-200 animate-pulse">Mohmand Dam</span> Project
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.4}>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Be part of Pakistan's largest infrastructure development. Find your career opportunity in one of the nation's most significant projects.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <Search className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <User className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Create Account
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        .wave-animation {
          background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
          animation: wave 3s ease-in-out infinite;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(-100%) skewX(-15deg); }
          50% { transform: translateX(100%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/3c042cef-83f3-4792-afe9-9c77c2d0243c.png')"
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-700/85 to-green-600/80"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join the <span className="text-green-200">Mohmand Dam</span> Project
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Be part of Pakistan's largest infrastructure development. Find your career opportunity in one of the nation's most significant projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Browse Jobs
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-3">
                <User className="mr-2 h-5 w-5" />
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;

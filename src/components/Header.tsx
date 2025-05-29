
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-green-600" 
        : "bg-white shadow-sm border-b-2 border-green-600"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={cn(
              "w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center transition-transform duration-300",
              "group-hover:scale-110 group-hover:shadow-lg"
            )}>
              <Building className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800 transition-colors duration-300 group-hover:text-green-700">
                Mohmand Dam Job Portal
              </h1>
              <p className="text-sm text-gray-600">Building Pakistan's Future</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="relative text-green-700 font-medium hover:text-green-800 transition-colors duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/jobs" className="relative text-gray-600 hover:text-green-700 transition-colors duration-300 group">
              Jobs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative text-gray-600 hover:text-green-700 transition-colors duration-300 group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/auth">
              <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Login / Register
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

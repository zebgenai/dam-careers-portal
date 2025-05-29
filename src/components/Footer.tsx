
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-1"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <AnimatedSection animation="slide-up" delay={0.1}>
            <div>
              <h4 className="text-xl font-bold mb-4">Mohmand Dam Job Portal</h4>
              <p className="text-green-200">
                Connecting talented individuals with opportunities in Pakistan's largest infrastructure project.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.2}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/jobs" className="text-green-200 hover:text-white transition-all duration-300 hover:translate-x-1">Browse Jobs</Link></li>
                <li><Link to="/auth" className="text-green-200 hover:text-white transition-all duration-300 hover:translate-x-1">How to Apply</Link></li>
                <li><Link to="/about" className="text-green-200 hover:text-white transition-all duration-300 hover:translate-x-1">About Project</Link></li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.3}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/help" className="text-green-200 hover:text-white transition-all duration-300 hover:translate-x-1">Help Center</a></li>
                <li><a href="/contact" className="text-green-200 hover:text-white transition-all duration-300 hover:translate-x-1">Contact Us</a></li>
                <li><a href="/faq" className="text-green-200 hover:text-white transition-all duration-300 hover:translate-x-1">FAQ</a></li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.4}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-green-200 mb-2">📧 careers@mohmanddam.pk</p>
              <p className="text-green-200 mb-2">📞 +92-XXX-XXXXXXX</p>
              <p className="text-green-200">📍 Mohmand District, KPK</p>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-in" delay={0.6}>
          <div className="border-t border-green-700 mt-8 pt-8">
            <div className="text-center">
              <p className="text-green-200 mb-4">
                © 2025 Mohmand Dam Project. All rights reserved. | Built for the people of Pakistan 🇵🇰
              </p>
              
              {/* Developer Branding */}
              <div className="bg-green-900/50 rounded-lg p-4 backdrop-blur-sm border border-green-600/30">
                <p className="text-sm text-green-100 mb-2">
                  <span className="font-semibold">Website Designed & Developed by:</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-white text-sm font-bold">AZ</span>
                    </div>
                    <a 
                      href="https://linkedin.com/in/atifzeb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-100 hover:text-white transition-colors duration-300 font-medium"
                    >
                      Atif Zeb
                    </a>
                  </div>
                  
                  <span className="text-green-300 hidden sm:inline">&</span>
                  
                  <div className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-white text-sm font-bold">AK</span>
                    </div>
                    <a 
                      href="https://linkedin.com/in/amjidkhattak" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-100 hover:text-white transition-colors duration-300 font-medium"
                    >
                      Amjid Khattak
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;

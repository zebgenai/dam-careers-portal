
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Mohmand Dam Job Portal</h4>
            <p className="text-green-200">
              Connecting talented individuals with opportunities in Pakistan's largest infrastructure project.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-green-200 hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link to="/auth" className="text-green-200 hover:text-white transition-colors">How to Apply</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">About Project</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="text-green-200 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/contact" className="text-green-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-green-200 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-green-200 mb-2">📧 careers@mohmanddam.pk</p>
            <p className="text-green-200 mb-2">📞 +92-XXX-XXXXXXX</p>
            <p className="text-green-200">📍 Mohmand District, KPK</p>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2025 Mohmand Dam Project. All rights reserved. | Built for the people of Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

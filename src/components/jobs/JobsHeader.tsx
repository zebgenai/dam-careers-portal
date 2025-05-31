
import { Building } from "lucide-react";
import { Link } from "react-router-dom";

const JobsHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-green-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <Building className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">Mohmand Dam Job Portal</h1>
              <p className="text-sm text-gray-600">Building Pakistan's Future</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-green-700 transition-colors">Home</Link>
            <Link to="/jobs" className="text-green-700 font-medium hover:text-green-800 transition-colors">Jobs</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-700 transition-colors">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default JobsHeader;

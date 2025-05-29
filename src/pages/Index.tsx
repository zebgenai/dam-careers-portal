
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Building, FileText, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredJobs = [
    {
      id: 1,
      title: "Computer Operator",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-15",
      department: "Administration",
      description: "Seeking experienced computer operator for data management and office operations."
    },
    {
      id: 2,
      title: "Civil Engineer",
      location: "Mohmand Dam Site",
      type: "Full-time", 
      deadline: "2025-06-20",
      department: "Engineering",
      description: "Senior civil engineer required for dam construction oversight and quality control."
    },
    {
      id: 3,
      title: "Heavy Vehicle Driver",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-10",
      department: "Operations",
      description: "Experienced driver for heavy machinery and construction vehicles."
    }
  ];

  const stats = [
    { label: "Active Jobs", value: "15+", icon: FileText },
    { label: "Applications", value: "500+", icon: User },
    { label: "Departments", value: "8", icon: Building },
    { label: "Local Hires", value: "300+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
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
              <Link to="/" className="text-green-700 font-medium hover:text-green-800 transition-colors">Home</Link>
              <Link to="/jobs" className="text-gray-600 hover:text-green-700 transition-colors">Jobs</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-700 transition-colors">About</Link>
              <Link to="/auth">
                <Button className="bg-green-600 hover:bg-green-700">Login / Register</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Featured Opportunities</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities in Pakistan's most ambitious infrastructure project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="border-green-200">
                      {job.department}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-green-700 transition-colors">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      Deadline: {new Date(job.deadline).toLocaleDateString()}
                    </div>
                  </div>
                  <Link to="/auth">
                    <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">About Mohmand Dam Project</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The Mohmand Dam is a multipurpose project being constructed on River Swat in Mohmand District, 
              Khyber Pakhtunkhwa. This mega project will provide water storage, flood control, and hydroelectric 
              power generation, contributing significantly to Pakistan's energy security and water management.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Water Storage</h4>
                <p className="text-gray-600">1.293 MAF water storage capacity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Power Generation</h4>
                <p className="text-gray-600">800 MW hydroelectric power</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Irrigation</h4>
                <p className="text-gray-600">Irrigating 16,737 acres of land</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;

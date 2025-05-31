import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FeaturedJobs = () => {
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

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Featured Opportunities</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities in Pakistan's most ambitious infrastructure project
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredJobs.map((job, index) => (
            <AnimatedSection 
              key={job.id} 
              animation="slide-up" 
              delay={index * 0.15}
              className="h-full"
            >
              <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg group h-full hover:scale-105 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300">
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 transition-colors duration-300 group-hover:border-green-400">
                      {job.department}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-gray-700">
                    {job.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                      Deadline: {new Date(job.deadline).toLocaleDateString()}
                    </div>
                  </div>
                  <Link to="/jobs">
                    <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:animate-pulse">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="scale-in" delay={0.8} className="text-center mt-12">
          <Link to="/jobs">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View All Jobs
            </Button>
          </Link>
        </AnimatedSection>
      </div>

      <style>{`
        .floating-shapes {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .shape {
          position: absolute;
          background: linear-gradient(45deg, #22c55e, #16a34a);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 60px;
          height: 60px;
          top: 70%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 100px;
          height: 100px;
          top: 40%;
          left: 80%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default FeaturedJobs;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

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
  );
};

export default FeaturedJobs;

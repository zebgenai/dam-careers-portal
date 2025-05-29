
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Building, Search, Filter, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Computer Operator",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-15",
      department: "Administration",
      salary: "Rs. 35,000 - 45,000",
      experience: "2-3 years",
      description: "Seeking experienced computer operator for data management, office operations, and administrative support. Must be proficient in MS Office and basic accounting software.",
      requirements: ["Intermediate or Bachelor's degree", "2+ years computer operation experience", "MS Office proficiency", "Basic English communication"]
    },
    {
      id: 2,
      title: "Civil Engineer",
      location: "Mohmand Dam Site",
      type: "Full-time", 
      deadline: "2025-06-20",
      department: "Engineering",
      salary: "Rs. 80,000 - 120,000",
      experience: "5+ years",
      description: "Senior civil engineer required for dam construction oversight, quality control, and project management. Will supervise construction activities and ensure compliance with safety standards.",
      requirements: ["Bachelor's in Civil Engineering", "5+ years in large construction projects", "AutoCAD proficiency", "PEC registration preferred"]
    },
    {
      id: 3,
      title: "Heavy Vehicle Driver",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-10",
      department: "Operations",
      salary: "Rs. 25,000 - 35,000",
      experience: "3+ years",
      description: "Experienced driver for heavy machinery and construction vehicles. Must have valid heavy vehicle license and experience with construction equipment.",
      requirements: ["Heavy vehicle driving license", "3+ years driving experience", "Clean driving record", "Basic mechanical knowledge"]
    },
    {
      id: 4,
      title: "Electrical Technician",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-25",
      department: "Engineering",
      salary: "Rs. 45,000 - 60,000",
      experience: "3-5 years",
      description: "Electrical technician for power systems installation and maintenance. Experience with high voltage systems and industrial electrical equipment required.",
      requirements: ["Diploma in Electrical Technology", "3+ years industrial experience", "High voltage certification", "Safety training completed"]
    },
    {
      id: 5,
      title: "Security Guard",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-08",
      department: "Security",
      salary: "Rs. 20,000 - 28,000",
      experience: "1-2 years",
      description: "Security personnel for site protection and access control. Must be physically fit and available for shift work including nights and weekends.",
      requirements: ["Matric or equivalent", "Security training certificate", "Physical fitness", "No criminal record"]
    },
    {
      id: 6,
      title: "Mechanical Engineer",
      location: "Mohmand Dam Site",
      type: "Full-time",
      deadline: "2025-06-30",
      department: "Engineering",
      salary: "Rs. 70,000 - 100,000",
      experience: "4+ years",
      description: "Mechanical engineer for equipment maintenance, installation oversight, and mechanical systems design. Experience with heavy machinery and industrial equipment required.",
      requirements: ["Bachelor's in Mechanical Engineering", "4+ years industrial experience", "AutoCAD/SolidWorks proficiency", "Equipment maintenance experience"]
    }
  ];

  const departments = ["Administration", "Engineering", "Operations", "Security", "Finance"];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesType = selectedType === "all" || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-green-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Building className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">Mohmand Dam Job Portal</h1>
                <p className="text-sm text-gray-600">Building Pakistan's Future</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-green-700 transition-colors">Home</Link>
              <Link to="/jobs" className="text-green-700 font-medium hover:text-green-800 transition-colors">Jobs</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-700 transition-colors">About</Link>
              <Button className="bg-green-600 hover:bg-green-700">Login / Register</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your perfect role in Pakistan's most significant infrastructure project
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> job opportunities
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">Sort by: Latest</span>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-green-100 text-green-800">
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="border-green-200">
                            {job.department}
                          </Badge>
                          <Badge variant="secondary">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-green-600" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                        {job.salary}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-green-600" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-red-500" />
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6 flex flex-col space-y-3 lg:items-end">
                    <Button className="bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all available positions.</p>
              <Button 
                className="mt-4" 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("all");
                  setSelectedType("all");
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">Don't see the right fit?</h3>
              <p className="text-green-100 mb-6">
                Submit your CV and we'll notify you when new opportunities that match your skills become available.
              </p>
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Upload Your CV
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Jobs;


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Building, Search, Filter, Clock, DollarSign, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { jobsService, Job } from "@/services/jobsService";
import { useToast } from "@/hooks/use-toast";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(new Set());

  const { user, isAdmin } = useAuth();
  const { toast } = useToast();

  const departments = ["Administration", "Engineering", "Operations", "Security", "Finance"];

  useEffect(() => {
    loadJobs();
    if (user) {
      loadUserApplications();
    }
  }, [searchTerm, selectedDepartment, selectedType, user]);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const filters = {
        department: selectedDepartment !== "all" ? selectedDepartment : undefined,
        type: selectedType !== "all" ? selectedType : undefined,
        search: searchTerm || undefined
      };
      
      const jobsData = await jobsService.getJobs(filters);
      setJobs(jobsData || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load jobs. Please try again.",
        variant: "destructive"
      });
      console.error("Error loading jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadUserApplications = async () => {
    try {
      const applications = await jobsService.getUserApplications();
      const appliedJobIds = new Set(applications?.map(app => app.job_id) || []);
      setAppliedJobs(appliedJobIds);
    } catch (error) {
      console.error("Error loading user applications:", error);
    }
  };

  const handleApply = async (jobId: string) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to apply for jobs.",
        variant: "destructive"
      });
      return;
    }

    try {
      await jobsService.applyForJob(jobId);
      setAppliedJobs(prev => new Set([...prev, jobId]));
      toast({
        title: "Application Submitted!",
        description: "Your application has been submitted successfully."
      });
    } catch (error: any) {
      toast({
        title: "Application Failed",
        description: error.message || "Failed to submit application.",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

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
              {user ? (
                <Link to="/profile">
                  <Button className="bg-green-600 hover:bg-green-700">Profile</Button>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button className="bg-green-600 hover:bg-green-700">Login / Register</Button>
                </Link>
              )}
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
            Showing <span className="font-semibold">{jobs.length}</span> job opportunities
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">Sort by: Latest</span>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading jobs...</p>
          </div>
        )}

        {/* Job Listings */}
        {!loading && (
          <div className="space-y-6">
            {jobs.map((job) => (
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
                              {job.job_type}
                            </Badge>
                            <Badge variant="outline" className="border-green-200">
                              {job.department}
                            </Badge>
                            <Badge variant="secondary">
                              {job.experience_required}
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
                        {job.salary_range && (
                          <div className="flex items-center text-sm text-gray-500">
                            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                            {job.salary_range}
                          </div>
                        )}
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2 text-green-600" />
                          {job.experience_required}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2 text-red-500" />
                          Deadline: {formatDate(job.deadline)}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <p className="text-sm text-gray-600">{job.requirements}</p>
                      </div>
                    </div>
                    
                    <div className="lg:ml-6 flex flex-col space-y-3 lg:items-end">
                      {user ? (
                        appliedJobs.has(job.id) ? (
                          <Button disabled className="bg-gray-400">
                            Already Applied
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => handleApply(job.id)}
                            className="bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform"
                          >
                            Apply Now
                          </Button>
                        )
                      ) : (
                        <Link to="/auth">
                          <Button className="bg-green-600 hover:bg-green-700">
                            Login to Apply
                          </Button>
                        </Link>
                      )}
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && jobs.length === 0 && (
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
              {user ? (
                <Link to="/profile">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                    Upload Your CV
                  </Button>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                    Create Account
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

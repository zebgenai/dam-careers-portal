
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { jobsService, Job } from "@/services/jobsService";
import { useToast } from "@/hooks/use-toast";
import JobsHeader from "@/components/jobs/JobsHeader";
import JobsPageHeader from "@/components/jobs/JobsPageHeader";
import JobsSearchFilters from "@/components/jobs/JobsSearchFilters";
import JobsLoadingState from "@/components/jobs/JobsLoadingState";
import JobCard from "@/components/jobs/JobCard";
import JobsEmptyState from "@/components/jobs/JobsEmptyState";
import JobsCallToAction from "@/components/jobs/JobsCallToAction";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(new Set());

  const { user } = useAuth();
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

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("all");
    setSelectedType("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JobsHeader />

      <div className="container mx-auto px-4 py-8">
        <JobsPageHeader />

        <JobsSearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          departments={departments}
          jobCount={jobs.length}
        />

        {loading && <JobsLoadingState />}

        {!loading && (
          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isApplied={appliedJobs.has(job.id)}
                onApply={handleApply}
              />
            ))}
          </div>
        )}

        {!loading && jobs.length === 0 && (
          <JobsEmptyState onClearFilters={handleClearFilters} />
        )}

        <JobsCallToAction />
      </div>
    </div>
  );
};

export default Jobs;

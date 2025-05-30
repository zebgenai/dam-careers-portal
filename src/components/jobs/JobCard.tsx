
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Job } from "@/services/jobsService";
import { useAuth } from "@/hooks/useAuth";

interface JobCardProps {
  job: Job;
  isApplied: boolean;
  onApply: (jobId: string) => void;
}

const JobCard = ({ job, isApplied, onApply }: JobCardProps) => {
  const { user } = useAuth();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
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
              isApplied ? (
                <Button disabled className="bg-gray-400">
                  Already Applied
                </Button>
              ) : (
                <Button 
                  onClick={() => onApply(job.id)}
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
  );
};

export default JobCard;

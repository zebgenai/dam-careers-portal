
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileApplications = () => {
  const userApplications = [
    {
      id: 1,
      jobTitle: "Computer Operator",
      department: "Administration",
      appliedDate: "2025-05-20",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 2,
      jobTitle: "Civil Engineer",
      department: "Engineering", 
      appliedDate: "2025-05-18",
      status: "Shortlisted",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      jobTitle: "Heavy Vehicle Driver",
      department: "Operations",
      appliedDate: "2025-05-15",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Under Review":
        return <AlertCircle className="h-4 w-4" />;
      case "Shortlisted":
        return <CheckCircle className="h-4 w-4" />;
      case "Rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-green-600" />
            <span>My Applications</span>
          </div>
          <Badge className="bg-green-100 text-green-800">
            {userApplications.length} Total
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {userApplications.map((application) => (
            <Card key={application.id} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {application.jobTitle}
                    </h3>
                    <p className="text-gray-600 mb-2">{application.department}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Applied: {new Date(application.appliedDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={application.statusColor}>
                      <span className="flex items-center space-x-1">
                        {getStatusIcon(application.status)}
                        <span>{application.status}</span>
                      </span>
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {userApplications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Applications Yet</h3>
            <p className="text-gray-600 mb-4">Start applying to jobs that match your skills and interests.</p>
            <Link to="/jobs">
              <Button className="bg-green-600 hover:bg-green-700">
                Browse Jobs
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileApplications;

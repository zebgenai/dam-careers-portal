
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building, User, Mail, Phone, MapPin, FileText, Upload, 
  Download, Eye, Trash2, Calendar, Clock, CheckCircle, 
  XCircle, AlertCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

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
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link to="/" className="text-gray-600 hover:text-green-700 transition-colors">Home</Link>
              <Link to="/jobs" className="text-gray-600 hover:text-green-700 transition-colors">Jobs</Link>
              <span className="text-green-700 font-medium">Profile</span>
              <Button variant="outline" className="border-green-600 text-green-600">Logout</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Muhammad Ahmad Khan</h2>
                    <p className="text-green-100">Software Developer</p>
                    <p className="text-green-200 text-sm">Member since May 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="cv">CV Management</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-green-600" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Muhammad Ahmad" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Khan" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          defaultValue="ahmad.khan@example.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          defaultValue="+92 300 1234567"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="address"
                        defaultValue="Peshawar, Khyber Pakhtunkhwa"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Professional Summary</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your professional background and career goals..."
                      className="min-h-[100px]"
                      defaultValue="Experienced software developer with 5+ years in web development. Passionate about contributing to Pakistan's infrastructure development through technology."
                    />
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cv" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>CV Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Current CV */}
                    <div className="border-2 border-dashed border-green-200 rounded-lg p-6 bg-green-50">
                      <div className="text-center">
                        <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Current CV</h3>
                        <p className="text-gray-600 mb-4">ahmad_khan_cv.pdf (2.3 MB)</p>
                        <p className="text-sm text-gray-500 mb-4">Uploaded on May 20, 2025</p>
                        <div className="flex justify-center space-x-3">
                          <Button variant="outline" className="border-green-600 text-green-600">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button variant="outline" className="border-green-600 text-green-600">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" className="border-red-300 text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Upload New CV */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <div className="text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload New CV</h3>
                        <p className="text-gray-600 mb-4">
                          Drag and drop your CV here, or click to browse
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Supported formats: PDF, DOC, DOCX (Max size: 5MB)
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose File
                        </Button>
                      </div>
                    </div>

                    {/* CV Tips */}
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">CV Tips for Better Results</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Keep your CV updated with latest experience and skills</li>
                          <li>• Include relevant keywords from job descriptions</li>
                          <li>• Highlight achievements with specific numbers and results</li>
                          <li>• Ensure your contact information is current</li>
                          <li>• Use a professional format and keep it concise (2-3 pages max)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
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
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Email Notifications</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-gray-700">New job opportunities matching my profile</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-gray-700">Application status updates</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-700">Weekly job digest</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Privacy Settings</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-gray-700">Make my profile visible to recruiters</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-700">Allow direct messages from recruiters</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Change Password</h4>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                        <Input id="confirmNewPassword" type="password" />
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-red-600 mb-4">Danger Zone</h4>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;

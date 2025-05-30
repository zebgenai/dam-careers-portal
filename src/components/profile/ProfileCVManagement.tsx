
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Download, Eye, Trash2 } from "lucide-react";

const ProfileCVManagement = () => {
  return (
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
  );
};

export default ProfileCVManagement;

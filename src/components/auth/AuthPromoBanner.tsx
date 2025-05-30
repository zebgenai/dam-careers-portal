
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const AuthPromoBanner = () => {
  return (
    <div className="mt-8 text-center">
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-center space-x-2">
            <FileText className="h-5 w-5" />
            <span className="text-sm">Ready to apply? Upload your CV after registration!</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPromoBanner;

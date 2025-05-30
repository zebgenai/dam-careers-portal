
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const ProfileHeader = () => {
  return (
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
  );
};

export default ProfileHeader;

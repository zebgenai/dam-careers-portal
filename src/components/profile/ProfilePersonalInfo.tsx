
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin } from "lucide-react";

const ProfilePersonalInfo = () => {
  return (
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
  );
};

export default ProfilePersonalInfo;

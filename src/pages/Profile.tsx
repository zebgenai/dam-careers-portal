
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileNavigation from "@/components/profile/ProfileNavigation";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfilePersonalInfo from "@/components/profile/ProfilePersonalInfo";
import ProfileCVManagement from "@/components/profile/ProfileCVManagement";
import ProfileApplications from "@/components/profile/ProfileApplications";
import ProfileSettings from "@/components/profile/ProfileSettings";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileNavigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader />

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="cv">CV Management</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <ProfilePersonalInfo />
            </TabsContent>

            <TabsContent value="cv" className="space-y-6">
              <ProfileCVManagement />
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <ProfileApplications />
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <ProfileSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;

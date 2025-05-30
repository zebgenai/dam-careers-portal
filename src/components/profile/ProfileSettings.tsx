
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfileSettings = () => {
  return (
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
  );
};

export default ProfileSettings;

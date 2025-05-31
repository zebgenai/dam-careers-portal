
import { Card, CardContent } from "@/components/ui/card";

const JobsCallToAction = () => {
  return (
    <div className="text-center mt-12">
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardContent className="py-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
          <p className="text-green-100 mb-6">
            Browse through our available positions and apply directly with your CV. 
            No registration required - it's that simple!
          </p>
          <p className="text-green-200 text-sm">
            All applications are reviewed within 48 hours. We'll contact you if your profile matches our requirements.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobsCallToAction;

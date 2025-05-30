
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const JobsCallToAction = () => {
  const { user } = useAuth();

  return (
    <div className="text-center mt-12">
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardContent className="py-8">
          <h3 className="text-2xl font-bold mb-4">Don't see the right fit?</h3>
          <p className="text-green-100 mb-6">
            Submit your CV and we'll notify you when new opportunities that match your skills become available.
          </p>
          {user ? (
            <Link to="/profile">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Upload Your CV
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Create Account
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default JobsCallToAction;

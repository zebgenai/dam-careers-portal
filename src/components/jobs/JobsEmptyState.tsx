
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

interface JobsEmptyStateProps {
  onClearFilters: () => void;
}

const JobsEmptyState = ({ onClearFilters }: JobsEmptyStateProps) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <Search className="h-16 w-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No jobs found</h3>
        <p className="text-gray-600">Try adjusting your search criteria or browse all available positions.</p>
        <Button 
          className="mt-4" 
          variant="outline"
          onClick={onClearFilters}
        >
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobsEmptyState;

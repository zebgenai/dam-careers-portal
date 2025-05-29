
import { Card, CardContent } from "@/components/ui/card";
import { FileText, User, Building, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { label: "Active Jobs", value: "15+", icon: FileText },
    { label: "Applications", value: "500+", icon: User },
    { label: "Departments", value: "8", icon: Building },
    { label: "Local Hires", value: "300+", icon: Users }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

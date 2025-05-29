
import { Card, CardContent } from "@/components/ui/card";
import { FileText, User, Building, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const StatsSection = () => {
  const stats = [
    { label: "Active Jobs", value: "15+", icon: FileText },
    { label: "Applications", value: "500+", icon: User },
    { label: "Departments", value: "8", icon: Building },
    { label: "Local Hires", value: "300+", icon: Users }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Project Impact</h3>
          <p className="text-xl text-gray-600">Numbers that reflect our commitment to local development</p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 0.1}
              className="h-full"
            >
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <stat.icon className="text-white h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800 mb-2 transition-colors duration-300 group-hover:text-green-600">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

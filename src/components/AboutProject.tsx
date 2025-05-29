
import AnimatedSection from "./AnimatedSection";

const AboutProject = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-100 to-blue-100"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">About Mohmand Dam Project</h3>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The Mohmand Dam is a multipurpose project being constructed on River Swat in Mohmand District, 
              Khyber Pakhtunkhwa. This mega project will provide water storage, flood control, and hydroelectric 
              power generation, contributing significantly to Pakistan's energy security and water management.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection animation="scale-in" delay={0.3}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-12">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125">💧</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-600">Water Storage</h4>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">1.293 MAF water storage capacity</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in" delay={0.4}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-12">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-yellow-600">Power Generation</h4>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">800 MW hydroelectric power</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in" delay={0.5}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-12">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125">🌱</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-green-600">Irrigation</h4>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Irrigating 16,737 acres of land</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;

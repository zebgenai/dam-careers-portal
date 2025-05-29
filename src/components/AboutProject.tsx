
const AboutProject = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">About Mohmand Dam Project</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The Mohmand Dam is a multipurpose project being constructed on River Swat in Mohmand District, 
            Khyber Pakhtunkhwa. This mega project will provide water storage, flood control, and hydroelectric 
            power generation, contributing significantly to Pakistan's energy security and water management.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Water Storage</h4>
              <p className="text-gray-600">1.293 MAF water storage capacity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Power Generation</h4>
              <p className="text-gray-600">800 MW hydroelectric power</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Irrigation</h4>
              <p className="text-gray-600">Irrigating 16,737 acres of land</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Result-oriented Front-end Developer with nearly 4.5 years of experience in the FinTech/Digital Banking domain. 
              Currently working with Right Prompt Technology Solutions Pvt. Ltd., specializing in creating user-friendly interfaces 
              using modern web technologies & Previously associated with i-exceed Technology Solutions Pvt. Ltd.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Proficient in React,React Native JavaScript, HTML5, CSS3, and various modern frameworks. Successfully delivered projects 
              within tight deadlines while maintaining high standards of quality. Strong problem-solving and analytical skills 
              with excellent communication abilities.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-success">4.5+</h4>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-warning">7+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-primary">8+</h4>
                <p className="text-gray-300">Hackathon Awards</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <h4 className="text-3xl font-bold text-secondary">8.0</h4>
                <p className="text-gray-300">CGPA B.Tech</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern development workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary p-6 rounded-xl shadow-2xl">
              <div className="text-center">
                <h4 className="text-2xl font-bold">Currently at</h4>
                <p className="text-sm opacity-90">Right Prompt Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

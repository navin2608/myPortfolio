import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadResume = async () => {
    try {
      const response = await fetch("/api/resume/download");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Navin_Kumar_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.error("Failed to download resume");
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <section id="home" className="min-h-screen relative gradient-bg flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full floating-element"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white bg-opacity-5 rounded-lg floating-element" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white bg-opacity-15 rounded-full floating-element" style={{ animationDelay: "-4s" }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Hi, I'm <span className="name-gradient font-extrabold">Navin Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">Front-end Developer</p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences with 3.5+ years in FinTech. 
            Specializing in React, JavaScript, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl"
            >
              View My Work
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="mailto:msnsnavin@gmail.com" 
              className="text-3xl hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://linkedin.com/in/navin-kumar-2608/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="tel:+918344961552" 
              className="text-3xl hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-white opacity-70"></i>
      </div>
    </section>
  );
}

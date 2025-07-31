import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect bg-gray-900/95" : "glass-effect"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Navin Kumar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="hover:text-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="hover:text-accent transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="hover:text-accent transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left hover:text-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left hover:text-accent transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left hover:text-accent transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

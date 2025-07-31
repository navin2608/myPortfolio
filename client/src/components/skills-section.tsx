import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React & JavaScript", percentage: 95 },
  { name: "HTML5 & CSS3", percentage: 98 },
  { name: "Tailwind CSS & Bootstrap", percentage: 90 },
  { name: "Git & Version Control", percentage: 85 },
  { name: "Oracle DB & SQL", percentage: 80 },
  { name: "CI/CD & DevOps", percentage: 75 }
];

const technologies = [
  { name: "React", icon: "fab fa-react", color: "text-accent" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "text-warning" },
  { name: "HTML5", icon: "fab fa-html5", color: "text-danger" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-primary" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-secondary" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-success" }
];

const awards = [
  {
    title: "TechGig Code Gladiators 2023",
    description: "Finalist - National Level Coding Competition",
    color: "warning"
  },
  {
    title: "SBI-Azure Hackathon 2022",
    description: "Finalist - Banking Technology Innovation",
    color: "primary"
  },
  {
    title: "Kore-AI Chatbot Hackathon",
    description: "15th Position out of 2400 participants",
    color: "accent"
  },
  {
    title: "Alibaba Global AI Hackathon",
    description: "8th Position out of 2500 participants",
    color: "success"
  }
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-accent mb-6">Technical Proficiency</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-accent">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`skill-bar h-full relative rounded-full ${
                        isVisible ? "animate" : ""
                      }`}
                      style={{ 
                        "--skill-width": `${skill.percentage}%`,
                        animationDelay: `${index * 200}ms`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technology Stack */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-accent mb-6">Technology Stack</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="bg-gray-700 p-6 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300 group"
                >
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-3 group-hover:scale-110 transform transition-transform`}></i>
                  <h4 className="font-semibold">{tech.name}</h4>
                </div>
              ))}
            </div>
            
            {/* Awards & Achievements */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-accent mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r from-${award.color}/20 to-${award.color}/5 border-l-4 border-${award.color} p-4 rounded`}
                  >
                    <h4 className={`font-semibold text-${award.color}`}>{award.title}</h4>
                    <p className="text-gray-300 text-sm">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

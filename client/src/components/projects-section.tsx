import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Consumer Retail Banking",
    category: "banking",
    description: "Developed and implemented new features and submodules for retail banking application with emphasis on code quality and user experience.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Appzillon"],
    client: "Indian Bank, Kotak, UNO",
    status: "React"
  },
  {
    id: 2,
    title: "Retail & Admin Application",
    category: "admin",
    description: "Worked independently on administration application, spearheading customization and implementing advanced features for banking operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["jQuery", "C3/D3 Charts", "SQL", "Firebase", "OpenShift"],
    client: "Independent Development",
    status: "Admin"
  },
  {
    id: 3,
    title: "Consumer Onboarding",
    category: "onboarding",
    description: "Led end-to-end development of Customer Onboarding product from scratch, managing entire flow and ensuring seamless user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Node.js", "Oracle DB", "Jenkins", "GitLab"],
    client: "From Scratch Development",
    status: "Full-Stack"
  },
  {
    id: 4,
    title: "Mobile Banking Platform",
    category: "banking",
    description: "Developing responsive mobile and web banking applications with seamless integration, focusing on user experience and performance.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React Native", "Responsive", "PWA", "API Integration"],
    client: "Cross-Platform",
    status: "Mobile"
  },
  {
    id: 5,
    title: "Chatbot Integration",
    category: "banking",
    description: "Integrated third-party chatbot solutions for enhanced customer support, including deployment automation and performance monitoring.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Chatbot API", "WebSocket", "OpenShift", "Real-time"],
    client: "AI Integration",
    status: "AI"
  },
  {
    id: 6,
    title: "Quality Assurance",
    category: "admin",
    description: "Implemented comprehensive testing frameworks and code quality standards, achieving 20% improvement in code quality and 50% reduction in bugs.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["SonarQube", "Unit Testing", "Code Review", "CI/CD"],
    client: "Quality Standards",
    status: "Testing"
  }
];

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "banking", label: "Banking Apps" },
  { value: "admin", label: "Admin Panels" },
  { value: "onboarding", label: "Onboarding" }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "React": "bg-success",
      "Admin": "bg-warning text-black",
      "Full-Stack": "bg-accent",
      "Mobile": "bg-primary",
      "AI": "bg-secondary",
      "Testing": "bg-danger"
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  activeFilter === option.value
                    ? "bg-primary text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-primary hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-gray-800 rounded-2xl overflow-hidden shadow-2xl animate-fadeIn"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <Badge className={`text-xs px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <i className="fas fa-users mr-1"></i>
                    {project.client}
                  </div>
                  <button className="text-accent hover:text-white transition-colors duration-300">
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

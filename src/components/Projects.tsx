import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Web Apps", "Mobile", "Design"];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      longDescription: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard. Implemented responsive design and optimized for performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/placeholder-project1.jpg",
      images: ["/placeholder-project1.jpg", "/placeholder-project1-2.jpg", "/placeholder-project1-3.jpg"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Web Apps"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      longDescription: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Socket.io, and PostgreSQL.",
      technologies: ["React", "Socket.io", "PostgreSQL", "Express", "Material-UI"],
      image: "/placeholder-project2.jpg",
      images: ["/placeholder-project2.jpg", "/placeholder-project2-2.jpg"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Web Apps"
    },
    {
      id: 3,
      title: "Mobile Weather App",
      description: "React Native weather app with location-based forecasts",
      longDescription: "A React Native weather application providing location-based forecasts, interactive maps, and weather alerts. Features include offline caching and push notifications.",
      technologies: ["React Native", "API Integration", "Redux", "Maps"],
      image: "/placeholder-project3.jpg",
      images: ["/placeholder-project3.jpg"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Mobile"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Complete brand identity and website design",
      longDescription: "Comprehensive brand identity design including logo, color palette, typography, and website design. Created for a tech startup focusing on sustainable solutions.",
      technologies: ["Figma", "Adobe Creative Suite", "Prototyping"],
      image: "/placeholder-project4.jpg",
      images: ["/placeholder-project4.jpg", "/placeholder-project4-2.jpg"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Design"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="section-padding bg-surface-variant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A collection of projects that showcase my skills in web development, 
            mobile applications, and design. Each project represents a unique challenge 
            and solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-accent"
                  : "bg-surface text-text-secondary hover:bg-primary/10 hover:text-text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="card-elevated rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary">
                      Project Image
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-text-accent rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-muted text-text-secondary rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-text-accent font-medium group-hover:underline">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                {selectedProject?.id === project.id && (
                  <div className="space-y-6">
                    {/* Image Gallery */}
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                        <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary">
                          Project Image {currentImageIndex + 1}
                        </div>
                        
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Image Indicators */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex justify-center gap-2 mt-4">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-heading font-bold text-text-primary">
                        {selectedProject.title}
                      </h3>
                      
                      <p className="text-text-secondary leading-relaxed">
                        {selectedProject.longDescription}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm font-medium bg-primary/10 text-text-accent rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
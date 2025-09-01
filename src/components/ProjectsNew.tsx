import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Smartphone, Globe, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  category: "website" | "mobile";
  featured?: boolean;
}

interface TechLogo {
  name: string;
  icon: string;
  color: string;
}

const ProjectsNew = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "website" | "mobile">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const techLogos: TechLogo[] = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "React Native", icon: "📱", color: "text-blue-600" },
    { name: "Vue.js", icon: "🟢", color: "text-green-500" },
    { name: "Angular", icon: "🅰️", color: "text-red-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "TypeScript", icon: "🔷", color: "text-blue-600" },
    { name: "JavaScript", icon: "🟡", color: "text-yellow-500" },
    { name: "Swift", icon: "🍎", color: "text-orange-500" },
    { name: "Kotlin", icon: "🤖", color: "text-purple-500" },
    { name: "Flutter", icon: "🦋", color: "text-blue-400" },
    { name: "Firebase", icon: "🔥", color: "text-orange-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI",
      longDescription: "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, real-time notifications, and a responsive admin dashboard. Implemented with microservices architecture for scalability.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Stripe", "Redis"],
      image: "/placeholder-ecommerce.jpg",
      images: ["/placeholder-ecommerce.jpg", "/placeholder-ecommerce-2.jpg", "/placeholder-ecommerce-3.jpg"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
      category: "website",
      featured: true
    },
    {
      id: 2,
      title: "TaskFlow Mobile App",
      description: "Cross-platform productivity app with real-time sync",
      longDescription: "A powerful task management mobile application built with React Native. Features offline-first architecture, real-time synchronization, push notifications, biometric authentication, and collaborative workspaces. Available on both iOS and Android.",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux", "Push Notifications"],
      image: "/placeholder-mobile-app.jpg",
      images: ["/placeholder-mobile-app.jpg", "/placeholder-mobile-app-2.jpg", "/placeholder-mobile-app-3.jpg"],
      githubUrl: "https://github.com/username/taskflow",
      appStoreUrl: "https://apps.apple.com/app/taskflow",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.taskflow",
      category: "mobile",
      featured: true
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      longDescription: "A sophisticated analytics dashboard for business intelligence. Built with Vue.js and D3.js for interactive data visualization, featuring real-time updates, custom report generation, and multi-tenant architecture.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      image: "/placeholder-dashboard.jpg",
      images: ["/placeholder-dashboard.jpg", "/placeholder-dashboard-2.jpg"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/username/analytics",
      category: "website"
    },
    {
      id: 4,
      title: "FitTracker iOS App",
      description: "Native iOS fitness tracking application",
      longDescription: "A native iOS fitness application built with Swift and SwiftUI. Integrates with HealthKit, features workout tracking, progress analytics, social challenges, and Apple Watch compatibility.",
      technologies: ["Swift", "SwiftUI", "HealthKit", "Core Data", "CloudKit"],
      image: "/placeholder-fitness.jpg",
      images: ["/placeholder-fitness.jpg", "/placeholder-fitness-2.jpg", "/placeholder-fitness-3.jpg"],
      githubUrl: "https://github.com/username/fittracker",
      appStoreUrl: "https://apps.apple.com/app/fittracker",
      category: "mobile"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern developer portfolio with CMS",
      longDescription: "A modern, responsive portfolio website built with Next.js and headless CMS. Features include blog functionality, project showcase, contact forms, and SEO optimization.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "Vercel"],
      image: "/placeholder-portfolio.jpg",
      images: ["/placeholder-portfolio.jpg", "/placeholder-portfolio-2.jpg"],
      liveUrl: "https://developer-portfolio.com",
      githubUrl: "https://github.com/username/portfolio",
      category: "website"
    },
    {
      id: 6,
      title: "WeatherApp Flutter",
      description: "Cross-platform weather application",
      longDescription: "A beautiful weather application built with Flutter. Features include location-based forecasts, weather maps, severe weather alerts, and offline caching for recently viewed locations.",
      technologies: ["Flutter", "Dart", "Weather API", "Maps", "SQLite"],
      image: "/placeholder-weather.jpg",
      images: ["/placeholder-weather.jpg", "/placeholder-weather-2.jpg"],
      githubUrl: "https://github.com/username/weather-app",
      appStoreUrl: "https://apps.apple.com/app/weatherapp",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.weatherapp",
      category: "mobile"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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

  const getTechLogo = (techName: string) => {
    return techLogos.find(logo => logo.name === techName) || { name: techName, icon: "⚡", color: "text-primary" };
  };

  return (
    <section id="projects" className="section-padding bg-surface-variant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A showcase of web applications and mobile apps I've built using modern technologies. 
            Each project demonstrates different aspects of full-stack development and mobile app creation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: "all", label: "All Projects", icon: <Globe size={16} /> },
            { key: "website", label: "Web Apps", icon: <Globe size={16} /> },
            { key: "mobile", label: "Mobile Apps", icon: <Smartphone size={16} /> }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key as any)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-accent"
                  : "bg-surface text-text-secondary hover:bg-primary/10 hover:text-text-accent"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {selectedCategory === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8 text-center">
              🌟 Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {featuredProjects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="card-elevated rounded-2xl overflow-hidden cursor-pointer group relative"
                      onClick={() => {
                        setSelectedProject(project);
                        setCurrentImageIndex(0);
                      }}
                    >
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>

                      {/* Project Image */}
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                        <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary">
                          {project.category === "mobile" ? <Smartphone size={48} /> : <Globe size={48} />}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {project.category === "mobile" ? 
                            <Smartphone size={16} className="text-primary" /> : 
                            <Globe size={16} className="text-primary" />
                          }
                          <span className="text-xs font-medium text-text-accent uppercase tracking-wide">
                            {project.category === "mobile" ? "Mobile App" : "Web Application"}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech, index) => {
                            const techLogo = getTechLogo(tech);
                            return (
                              <span
                                key={index}
                                className={`px-3 py-1 text-xs font-medium bg-primary/10 text-text-accent rounded-full flex items-center gap-1`}
                              >
                                <span>{techLogo.icon}</span>
                                {tech}
                              </span>
                            );
                          })}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium bg-muted text-text-secondary rounded-full">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-text-accent font-medium group-hover:underline">
                            {project.category === "mobile" ? "Explore App" : "View Details"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    {selectedProject?.id === project.id && (
                      <div className="space-y-6">
                        {/* Image Gallery */}
                        <div className="relative">
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                            <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary">
                              {selectedProject.category === "mobile" ? 
                                <Smartphone size={64} /> : 
                                <Globe size={64} />
                              }
                              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                                Screenshot {currentImageIndex + 1}
                              </div>
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
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            {selectedProject.category === "mobile" ? 
                              <Smartphone size={24} className="text-primary" /> : 
                              <Globe size={24} className="text-primary" />
                            }
                            <h3 className="text-3xl font-heading font-bold text-text-primary">
                              {selectedProject.title}
                            </h3>
                          </div>
                          
                          <p className="text-text-secondary leading-relaxed text-lg">
                            {selectedProject.longDescription}
                          </p>

                          {/* Technologies Used */}
                          <div>
                            <h4 className="font-heading font-semibold text-text-primary mb-4 text-lg">
                              🛠️ Technologies Used
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {selectedProject.technologies.map((tech, index) => {
                                const techLogo = getTechLogo(tech);
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 p-3 bg-surface rounded-lg border border-border hover:shadow-custom-md transition-all"
                                  >
                                    <span className="text-lg">{techLogo.icon}</span>
                                    <span className="font-medium text-text-primary text-sm">{tech}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-4 pt-4">
                            {selectedProject.liveUrl && (
                              <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-2"
                              >
                                <ExternalLink size={16} />
                                Live Demo
                              </a>
                            )}
                            
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary flex items-center gap-2"
                            >
                              <Github size={16} />
                              View Code
                            </a>

                            {selectedProject.appStoreUrl && (
                              <a
                                href={selectedProject.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center gap-2"
                              >
                                <Download size={16} />
                                App Store
                              </a>
                            )}

                            {selectedProject.playStoreUrl && (
                              <a
                                href={selectedProject.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center gap-2"
                              >
                                <Download size={16} />
                                Google Play
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(p => selectedCategory !== "all" || !p.featured).map((project) => (
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
                      {project.category === "mobile" ? <Smartphone size={32} /> : <Globe size={32} />}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {project.category === "mobile" ? 
                        <Smartphone size={14} className="text-primary" /> : 
                        <Globe size={14} className="text-primary" />
                      }
                      <span className="text-xs font-medium text-text-accent uppercase tracking-wide">
                        {project.category === "mobile" ? "Mobile App" : "Web App"}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 group-hover:text-text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => {
                        const techLogo = getTechLogo(tech);
                        return (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-primary/10 text-text-accent rounded-full flex items-center gap-1"
                          >
                            <span className="text-xs">{techLogo.icon}</span>
                            {tech}
                          </span>
                        );
                      })}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-muted text-text-secondary rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-text-accent font-medium group-hover:underline">
                        {project.category === "mobile" ? "Explore App" : "View Details"}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                {/* Same dialog content as featured projects */}
                {selectedProject?.id === project.id && (
                  <div className="space-y-6">
                    {/* Image Gallery */}
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                        <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary">
                          {selectedProject.category === "mobile" ?
                            <Smartphone size={64} /> :
                            <Globe size={64} />
                          }
                          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                            Screenshot {currentImageIndex + 1}
                          </div>
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
                              className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-primary" : "bg-muted"
                                }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        {selectedProject.category === "mobile" ?
                          <Smartphone size={24} className="text-primary" /> :
                          <Globe size={24} className="text-primary" />
                        }
                        <h3 className="text-3xl font-heading font-bold text-text-primary">
                          {selectedProject.title}
                        </h3>
                      </div>

                      <p className="text-text-secondary leading-relaxed text-lg">
                        {selectedProject.longDescription}
                      </p>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary mb-4 text-lg">
                          🛠️ Technologies Used
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {selectedProject.technologies.map((tech, index) => {
                            const techLogo = getTechLogo(tech);
                            return (
                              <div
                                key={index}
                                className="flex items-center gap-2 p-3 bg-surface rounded-lg border border-border hover:shadow-custom-md transition-all"
                              >
                                <span className="text-lg">{techLogo.icon}</span>
                                <span className="font-medium text-text-primary text-sm">{tech}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}

                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                        </a>

                        {selectedProject.appStoreUrl && (
                          <a
                            href={selectedProject.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                          >
                            <Download size={16} />
                            App Store
                          </a>
                        )}

                        {selectedProject.playStoreUrl && (
                          <a
                            href={selectedProject.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                          >
                            <Download size={16} />
                            Google Play
                          </a>
                        )}
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

export default ProjectsNew;

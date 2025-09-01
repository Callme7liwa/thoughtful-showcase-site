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
    { name: "Google Maps API", icon: "🗺️", color: "text-green-500" },
    { name: "Cloudinary", icon: "☁️", color: "text-blue-500" },
    { name: "Express.js", icon: "🚀", color: "text-gray-600" },
  ];

  const projects: Project[] = [
    {
      id: 8,
      title: "Microservices Task Management System",
      description: "Full-stack task management application with .NET microservices and 3D interface",
      longDescription: "Developed a comprehensive task management application to explore .NET microservices architecture and advanced frontend technologies. The project features a distributed backend built with .NET Core microservices, demonstrating scalable service communication, data persistence, and API gateway patterns. The frontend showcases innovative 3D user interface elements using Three.js, creating an engaging and interactive user experience for task visualization and management. This project served as a technical exploration of modern development practices, combining enterprise-grade backend architecture with cutting-edge frontend animation techniques.",
      technologies: [".NET Core", "C#", "Three.js", "React", "Docker", "PostgreSQL"],
      image: "/images/tasks/1.jpg",
      images: Array.from({length: 6}, (_, i) => `/images/tasks/${i + 1}.jpg`),
      githubUrl: "https://github.com/username/microservices-task-manager",
      liveUrl: "https://3d-task-manager.com",
      category: "website",
      featured: false
    },
    {
      id: 7,
      title: "Enterprise Project Management Platform",
      description: "Comprehensive web-based solution for project planning and team collaboration",
      longDescription: "Designed and developed a comprehensive web-based project management application for an enterprise client, delivering a centralized solution for project planning, team collaboration, and progress tracking. The platform streamlined project workflows, enhanced cross-functional communication, and provided real-time visibility into project status and deliverables. Conducted stakeholder interviews and requirements gathering to understand specific business needs, resulting in an intuitive user interface optimized for diverse user roles and measurable improvements in team productivity.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Socket.io", "JWT", "Docker", "Redis"],
      image: "images/projects/project_1.png",
      images: Array.from({length: 8}, (_, i) => `/images/projects/project_${i + 1}.png`),
      githubUrl: "https://github.com/username/enterprise-project-management",
      liveUrl: "https://enterprise-pm-platform.com",
      category: "website",
      featured: false
    },

    {
      id: 9,
      title: "Peer-to-Peer Package Delivery Platform",
      description: "Mobile marketplace connecting package senders with travelers for cost-effective delivery",
      longDescription: "Developed an innovative mobile application that creates a peer-to-peer marketplace for package delivery services. The platform connects individuals who need to send packages with travelers heading to the same destinations, enabling cost-effective and efficient delivery solutions. The application features secure user verification, real-time tracking, integrated payment processing, and comprehensive safety protocols. Built with a focus on trust and security, the platform includes user ratings, identity verification, and insurance integration to ensure safe transactions. This solution addresses the growing demand for flexible, community-driven logistics while providing travelers with opportunities to monetize their journeys.",
      technologies: ["Flutter", "Spring Boot", "MySQL", "Stripe", "Google Maps API", "JWT", "Socket.io"],
      image: "/images/deliver/1.jpg",
      images: Array.from({length: 10}, (_, i) => `/images/deliver/${i + 1}.jpg`),
      githubUrl: "https://github.com/username/p2p-delivery-platform",
      appStoreUrl: "https://apps.apple.com/app/peer-delivery",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.peerdelivery",
      category: "mobile",
      featured: false
    },
    {
      id: 6,
      title: "Moroccan Cultural Heritage Platform",
      description: "Interactive web platform for cultural preservation and tourism",
      longDescription: "Developed an interactive web platform dedicated to preserving and promoting Morocco's cultural treasures. Collaborated closely with cultural heritage experts to create an educational experience for global visitors, featuring historical sites, museums, and cultural events through immersive photos, videos, and detailed descriptions. The platform included practical travel planning tools to enhance visitor experiences and contributed to cultural preservation efforts while promoting Moroccan cultural tourism worldwide.",
      technologies: ["Laravel", "Javascript", "Mysql"],
      image: "/images/patrimoin/patri_1.png",
      images: Array.from({length: 16}, (_, i) => `/images/patrimoin/patri_${i + 1}.png`),
      githubUrl: "https://github.com/username/moroccan-heritage-platform",
      liveUrl: "https://moroccan-heritage-platform.com",
      category: "website",
      featured: false
    },
    {
      id: 10,
      title: "Advanced Audio Streaming Platform",
      description: "Full-stack streaming platform with integrated marketing analytics and targeted advertising",
      longDescription: "Developed an enhanced iteration of an audio streaming platform, incorporating advanced marketing capabilities and data analytics. The platform features comprehensive user analytics, customizable branding options, and sophisticated targeted advertising systems. Built with a modern tech stack including React.js for dynamic frontend experiences, Spring Boot for robust backend services, and MongoDB for scalable data management. The project demonstrates continuous learning and adaptation to emerging web technologies, integrating complex features such as real-time user behavior tracking, personalized content recommendations, and revenue optimization through strategic ad placement. This ongoing development project showcases commitment to staying current with industry trends while delivering enterprise-grade streaming solutions.",
      technologies: ["React.js", "Spring Boot", "MongoDB"],
      image: "/images/rap/rap_6.jpeg",
      images: Array.from({length: 11}, (_, i) => `/images/rap/rap_${i + 1}.jpeg`),
      githubUrl: "https://github.com/username/advanced-audio-streaming",
      liveUrl: "https://advanced-streaming-platform.com",
      category: "website",
      featured: false
    },
    {
      id: 11,
      title: "School Management Information System",
      description: "Comprehensive web-based platform for academic administration and student tracking",
      longDescription: "Designed and developed a comprehensive school management system that centralizes student data, teacher information, grade management, and attendance tracking. The platform streamlined academic processes, enhanced communication between students and educators, and provided real-time insights into student progress and performance. Collaborated extensively with school administrators to conduct requirements analysis and ensure the solution addressed specific institutional needs. The system features role-based access control, automated reporting capabilities, parent-student portals, and integrated communication tools. This solution significantly improved administrative efficiency while providing educators with better tools for student monitoring and engagement.",
      technologies: ["React js", "Spring Boot", "Express.js", "MySQL", "JWT", "PDF Generation", "Email Integration"],
      image: "/images/school/image_3.png",
      images: Array.from({length: 8}, (_, i) => `/images/school/image_${i + 1}.png`),
      githubUrl: "https://github.com/username/school-management-system",
      liveUrl: "https://school-management-demo.com",
      category: "website",
      featured: false
    },

    {
      id: 12,
      title: "Smart Baby Monitoring System",
      description: "IoT-enabled infant monitoring platform with machine learning behavioral analysis",
      longDescription: "Currently developing an advanced baby monitoring system that integrates Android mobile development, machine learning algorithms, and Internet of Things technologies. The system utilizes motion and temperature sensors to continuously monitor infant behavior patterns and environmental conditions, providing real-time alerts to parents through a dedicated mobile application. The project incorporates machine learning models for behavioral pattern recognition, enabling the system to distinguish between normal sleep movements and potential concerns. This comprehensive solution combines hardware sensor integration, cloud-based data processing, and intuitive mobile interfaces to enhance infant safety and provide parents with peace of mind through intelligent monitoring capabilities.",
      technologies: ["Android Studio", "Java", "TensorFlow Lite", "IoT Sensors", "Firebase", "Machine Learning", "Bluetooth", "Real-time Analytics"],
      image: "/images/baby/baby_1.png",
      images: Array.from({length: 6}, (_, i) => `/images/baby/baby_${i + 1}.png`),
      githubUrl: "https://github.com/username/smart-baby-monitor",
      category: "mobile",
      featured: false
    },

    {
      id: 13,
      title: "Street Football Community Platform",
      description: "Mobile marketplace connecting street football teams and individual players",
      longDescription: "Developed a comprehensive mobile application designed to unite the street football community by connecting teams with players and facilitating match organization. The platform streamlines the process of finding opponents for teams while providing individual players with easy access to join local teams. Key features include team-initiated match requests, team recruitment postings, and player registration systems. The application incorporates geolocation services to connect nearby players and teams, real-time messaging for coordination, and reputation systems to build trust within the community. This dynamic platform transforms the organization of street football matches and strengthens the grassroots football community through improved connectivity and simplified team management.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Push Notifications", "Geolocation", "Real-time Chat", "User Authentication"],
      image: "/images/foot/foot_1.jpeg",
      images: Array.from({length: 11}, (_, i) => `/images/foot/foot_${i + 1}.jpeg`),
      githubUrl: "https://github.com/username/street-football-community",
      appStoreUrl: "https://apps.apple.com/app/street-football",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.streetfootball",
      category: "mobile",
      featured: false
    },
    {
      id: 14,
      title: "Zinooo - Moroccan E-Commerce Platform",
      description: "Localized e-commerce solution tailored for Moroccan market with GraphQL architecture",
      longDescription: "Developed Zinooo, a comprehensive e-commerce web application specifically designed for Moroccan customers and market needs. Built with modern technologies including Spring Boot for robust backend services, Angular for dynamic frontend experiences, and GraphQL for efficient data querying. The platform incorporates Moroccan-specific features such as local payment methods, Arabic/French language support, regional shipping options, and culturally relevant product categories. The application addresses unique challenges of the Moroccan e-commerce market including mobile-first design for prevalent smartphone usage, integration with local banking systems, and support for traditional commerce practices alongside digital innovation.",
      technologies: ["Spring Boot", "Angular", "GraphQL", "Java", "TypeScript", "PostgreSQL", "JWT", "Payment Gateways"],
      image: "/images/zinoo/zinoo_1.png",
      images: Array.from({length: 6}, (_, i) => `/images/zinoo/zinoo_${i + 1}.png`),
      githubUrl: "https://github.com/username/zinooo-ecommerce",
      liveUrl: "https://zinooo.ma",
      category: "website",
      featured: false
    },
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
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback vers icône en cas d'erreur
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback icon */}
                        <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary" style={{display: 'none'}}>
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
                            <img 
                              src={selectedProject.images[currentImageIndex]} 
                              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.log(`Failed to load: ${selectedProject.images[currentImageIndex]}`);
                                // Fallback vers icône
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            {/* Fallback icon */}
                            <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center text-text-secondary" style={{display: 'none'}}>
                              {selectedProject.category === "mobile" ? 
                                <Smartphone size={64} /> : 
                                <Globe size={64} />
                              }
                            </div>
                            
                            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                              Screenshot {currentImageIndex + 1}
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
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-muted flex items-center justify-center text-text-secondary" style={{display: 'none'}}>
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
                {selectedProject?.id === project.id && (
                  <div className="space-y-6">
                    {/* Image Gallery - Same as above */}
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                        <img 
                          src={selectedProject.images[currentImageIndex]} 
                          alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.log(`Failed to load: ${selectedProject.images[currentImageIndex]}`);
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center text-text-secondary" style={{display: 'none'}}>
                          {selectedProject.category === "mobile" ?
                            <Smartphone size={64} /> :
                            <Globe size={64} />
                          }
                        </div>
                        
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                          Screenshot {currentImageIndex + 1}
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
                              className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-primary" : "bg-muted"}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Rest of the dialog content remains the same */}
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
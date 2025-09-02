import { Briefcase, Calendar, MapPin, ExternalLink, Image } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "freelance";
  description: string;
  achievements: string[];
  technologies?: string[];
  current?: boolean;
  images?: string[];
}

interface TechLogo {
  name: string;
  icon: string;
  color: string;
}

const Experience = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  
  const techLogos: TechLogo[] = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "TypeScript", icon: "🔷", color: "text-blue-600" },
    { name: "JavaScript", icon: "🟡", color: "text-yellow-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "Spring Boot", icon: "🚀", color: "text-green-600" },
    { name: "Angular", icon: "🅰️", color: "text-red-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
    { name: "Docker", icon: "🐋", color: "text-blue-600" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: ".NET Core", icon: "🔵", color: "text-purple-600" },
    { name: "GitHub Actions", icon: "🔄", color: "text-gray-700" },
    { name: "Kubernetes", icon: "⚙️", color: "text-blue-600" },
    { name: "Terraform", icon: "🏗️", color: "text-purple-600" },
    { name: "Laravel", icon: "🎯", color: "text-red-500" },
    { name: "MySQL", icon: "🗄️", color: "text-blue-600" },
    { name: "Redux", icon: "🔄", color: "text-purple-600" },
    { name: "SonarQube", icon: "📊", color: "text-blue-500" },
    { name: "HTML5", icon: "🌐", color: "text-orange-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-500" },
    { name: "Ansible", icon: "🔧", color: "text-red-600" },
    { name: "GitLab CI", icon: "🦊", color: "text-orange-600" },
    { name: "Nautobot", icon: "🌐", color: "text-blue-500" },
    { name: "Nornir", icon: "🔗", color: "text-green-500" },
    { name: "Netmiko", icon: "📡", color: "text-blue-400" },
    { name: "Sphinx", icon: "📖", color: "text-yellow-600" },
    { name: "Logstash", icon: "📊", color: "text-yellow-500" },
    { name: "Canopsis", icon: "📈", color: "text-purple-500" },
    { name: "BeautifulSoup", icon: "🍲", color: "text-yellow-600" },
    { name: "Scrapy", icon: "🕷️", color: "text-red-500" },
    { name: "Selenium", icon: "🤖", color: "text-green-500" },
    { name: "n8n", icon: "🔗", color: "text-purple-500" },
    { name: "Slack API", icon: "💬", color: "text-purple-600" },
    { name: "WhatsApp Business API", icon: "📱", color: "text-green-600" },
    { name: "Webhooks", icon: "🔗", color: "text-blue-500" },
    { name: "Excel API", icon: "📊", color: "text-green-600" },
    { name: "Pandas", icon: "🐼", color: "text-blue-600" },
    { name: "FastAPI", icon: "⚡", color: "text-teal-500" },
  ];


  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: "Network DevOps Engineer",
      company: "Orange Connectivity & Workspace Services (OCWs)",
      location: "France",
      period: "September 2024 - Present",
      type: "contract",
      current: true,
      description: "Working on I3T infogérance contract, participating in NetDevOps deployment and automation project for Arista equipment using Intent-Based Networking stack. Contributing to network infrastructure automation, monitoring, and L3 support for DDI and Load Balancing services.",
      achievements: [
        // "Participated in NetDevOps deployment and automation of Arista equipment using Nautobot/Ansible-AWX/CVP stack with Intent-Based Networking",
        // "Implemented CI/CD pipelines with GitLab for building Docker images and generating Sphinx documentation for Python code and JSON schemas",
        // "Developed scripting and automation solutions using Nornir for multiple network devices including Riverbed Steelhead, Radware Alteon, and Cisco IOS/NXOS",
        // "Created custom Netmiko driver for Radware Alteon and developed dedicated monitoring scripts for EfficientIP SolidServer with API reverse engineering",
        // "Provided L3 support for DDI and Load Balancing services including TACACS+ activation studies and incident resolution",
        // "Collaborated on Canopsis hypervisor installation and integration, configured Logstash for monitoring infrastructure",
        // "Created comprehensive documentation including tools documentation, operational procedures, and onboarding materials for new team members",
        // "Implemented SAFe-compliant organization and documentation for improved project tracking and knowledge sharing"
      ],
      technologies: ["Python", "Ansible", "Docker", "GitLab CI", "Nautobot", "Nornir", "Netmiko", "Sphinx", "Logstash", "Canopsis"],
      images: []
    },
    {
      id: 1.5,
      position: "Data Scraping & Automation Engineer",
      company: "Freelance Project",
      location: "Remote",
      period: "July 2024 - August 2024",
      type: "freelance",
      current: false,
      description: "Developed comprehensive web scraping solution for automated data collection from multiple websites with intelligent archiving system based on last-update timestamps. Built scalable architecture for continuous monitoring and data preservation.",
      achievements: [
        "Designed and implemented intelligent web scraping system for multiple target websites with automated scheduling",
        "Created timestamp-based archiving system that only saves data when source websites have been updated",
        "Implemented robust error handling and retry mechanisms to ensure reliable data collection",
        "Built data validation and cleaning pipeline to ensure data quality and consistency",
        "Developed monitoring dashboard to track scraping performance, success rates, and data freshness",
        "Optimized scraping performance using parallel processing and intelligent rate limiting",
        "Created comprehensive logging system for debugging and audit trails",
        "Implemented data backup and recovery mechanisms for critical information"
      ],
      technologies: ["Python", "BeautifulSoup", "Scrapy", "Selenium", "MongoDB", "PostgreSQL", "Docker", "GitHub Actions"],
      images: []
    },
    {
      id: 2,
      position: "Software Engineer",
      company: "General Electric Vernova",
      location: "France",
      period: "March 2024 - August 2024",
      type: "full-time",
      current: false,
      description: "Led DevOps transformation and modernization of legacy systems in the energy sector. Designed and deployed enterprise-grade Kubernetes infrastructure while spearheading CI/CD improvements across multiple development teams.",
      achievements: [
        "Designed and deployed full K3s Kubernetes cluster on RockyLinux, building reliable development environment from ground up",
        "Led DevOps transformation reducing deployment failures by 60% and accelerating release cycles",
        "Established Git Flow branching strategy enhancing collaboration among 7+ developers",
        "Developed reusable CI/CD workflow templates adopted across 10+ repositories",
        "Integrated automated security scans, proactively eliminating critical vulnerabilities pre-release",
        "Modernized legacy SAP integration service by decomposing monolith into 3 microservices",
        "Implemented centralized infrastructure monitoring with real-time alerts for critical server resources"
      ],
      technologies: ["Kubernetes", "GitHub Actions", "Terraform", "Spring Boot", "Docker", "SAP", "SonarQube"],
      images: []
    },
    {
      id: 2,
      position: "Software Engineer",
      company: "ELR12",
      location: "Morocco",
      period: "May 2022 - Sept 2022",
      type: "full-time",
      description: "Developed comprehensive web-based project management application providing centralized solution for planning, collaboration, and project tracking. Full-cycle development from requirements analysis to deployment.",
      achievements: [
        "Conducted complete requirements analysis and database design",
        "Designed and developed user-friendly interface reducing training overhead",
        "Implemented comprehensive project tracking and collaboration features",
        "Containerized application with Docker and deployed on Kubernetes infrastructure",
        "Performed thorough unit testing ensuring application reliability"
      ],
      technologies: ["React", "Redux", "Spring Boot", "MongoDB", "Docker", "Kubernetes", "SonarQube"],
      images: []
    },
    {
      id: 3,
      position: "Web Developer",
      company: "Laboratory of Intelligent Systems and Applications",
      location: "Morocco",
      period: "April 2021 - Sept 2021",
      type: "internship",
      description: "Developed web application for digitizing Moroccan cultural heritage, creating public platform for users to explore historical sites and buildings. Translated non-technical specifications into technical requirements.",
      achievements: [
        "Successfully digitized Moroccan cultural heritage into accessible web platform",
        "Translated non-technical specifications into comprehensive technical requirements",
        "Designed UI prototypes based on client feedback and stakeholder input",
        "Created detailed technical and user documentation",
        "Successfully deployed application on client servers with full functionality"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Laravel", "MySQL", "Figma", "UML"],
      images: []
    }
  ];

  const getTypeColor = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-100 text-green-800 border-green-200";
      case "part-time":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "contract":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "internship":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "freelance":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTechLogo = (techName: string) => {
    return techLogos.find(logo => logo.name === techName) || { name: techName, icon: "⚡", color: "text-primary" };
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A journey through my professional development, showcasing the roles and projects that have shaped my expertise in software development and engineering.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors text-lg"
                        >
                          {experience.company}
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-blue-600 font-semibold text-lg">{experience.company}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getTypeColor(experience.type)}`}>
                      {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                    </span>
                    {experience.current && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full border bg-blue-50 text-blue-600 border-blue-200">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {experience.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-base">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                {experience.technologies && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-base">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => {
                        const techLogo = getTechLogo(tech);
                        return (
                          <span
                            key={techIndex}
                            className="px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-lg flex items-center gap-2 border border-blue-200 hover:bg-blue-100 transition-colors"
                          >
                            <span className="text-base">{techLogo.icon}</span>
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* View Images Button */}
                {experience.images && experience.images.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setSelectedImages(experience.images)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                    >
                      <Image size={16} />
                      View Project Images ({experience.images.length})
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImages && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Project Images
                  </h3>
                  <button
                    onClick={() => setSelectedImages(null)}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors text-xl"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedImages.map((imageSrc, index) => (
                    <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={imageSrc} 
                        alt={`Project image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400" style={{display: 'none'}}>
                        <Image size={48} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in working together or learning more about my experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <Briefcase size={16} />
            Let's Discuss Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { useState } from "react";

interface Technology {
  name: string;
  icon: string;
  category: string;
  experience: string;
  description: string;
}

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const technologies: Technology[] = [
    // Frontend
    { name: "React", icon: "⚛️", category: "frontend", experience: "3+ years", description: "Building dynamic UIs and SPAs" },
    { name: "Angular", icon: "🅰️", category: "frontend", experience: "2+ years", description: "Enterprise-scale applications" },
    { name: "TypeScript", icon: "🔷", category: "frontend", experience: "3+ years", description: "Type-safe development" },
    { name: "JavaScript", icon: "🟡", category: "frontend", experience: "4+ years", description: "Modern ES6+ features" },
    { name: "HTML5", icon: "🌐", category: "frontend", experience: "4+ years", description: "Semantic markup" },
    { name: "CSS3", icon: "🎨", category: "frontend", experience: "4+ years", description: "Advanced styling & animations" },
    { name: "Redux", icon: "🔄", category: "frontend", experience: "2+ years", description: "State management" },

    // Backend
    { name: "Spring Boot", icon: "🚀", category: "backend", experience: "3+ years", description: "Java enterprise applications" },
    { name: "Node.js", icon: "🟢", category: "backend", experience: "2+ years", description: "Server-side JavaScript" },
    { name: "Python", icon: "🐍", category: "backend", experience: "3+ years", description: "Scripting and automation" },
    { name: "Laravel", icon: "🎯", category: "backend", experience: "2+ years", description: "PHP web framework" },
    { name: ".NET Core", icon: "🔵", category: "backend", experience: "2+ years", description: "Microsoft development platform" },
    { name: "REST APIs", icon: "🔗", category: "backend", experience: "3+ years", description: "RESTful service design" },

    // Database
    { name: "PostgreSQL", icon: "🐘", category: "database", experience: "2+ years", description: "Advanced relational database" },
    { name: "MongoDB", icon: "🍃", category: "database", experience: "3+ years", description: "NoSQL document storage" },
    { name: "MySQL", icon: "🗄️", category: "database", experience: "3+ years", description: "Traditional RDBMS" },
    { name: "EfficientIP SolidServer", icon: "🌐", category: "database", experience: "1+ year", description: "DDI management system" },

    // DevOps & Infrastructure
    { name: "Kubernetes", icon: "⚙️", category: "devops", experience: "2+ years", description: "Container orchestration" },
    { name: "Docker", icon: "🐋", category: "devops", experience: "3+ years", description: "Containerization technology" },
    { name: "Terraform", icon: "🏗️", category: "devops", experience: "2+ years", description: "Infrastructure as Code" },
    { name: "GitHub Actions", icon: "🔄", category: "devops", experience: "2+ years", description: "CI/CD automation" },
    { name: "GitLab CI", icon: "🦊", category: "devops", experience: "1+ year", description: "GitLab CI/CD pipelines" },
    { name: "Ansible", icon: "🔧", category: "devops", experience: "1+ year", description: "Configuration management" },
    { name: "AWS", icon: "☁️", category: "devops", experience: "2+ years", description: "Cloud infrastructure" },

    // Network & Automation
    { name: "Nautobot", icon: "🌐", category: "network", experience: "1+ year", description: "Network automation platform" },
    { name: "Nornir", icon: "🔗", category: "network", experience: "1+ year", description: "Python automation framework" },
    { name: "Netmiko", icon: "📡", category: "network", experience: "1+ year", description: "Multi-vendor network automation" },
    { name: "Cisco IOS/NXOS", icon: "📊", category: "network", experience: "1+ year", description: "Network device management" },
    { name: "Arista CVP", icon: "🖧", category: "network", experience: "1+ year", description: "CloudVision Platform" },

    // Tools & Monitoring
    { name: "SonarQube", icon: "📊", category: "tools", experience: "2+ years", description: "Code quality analysis" },
    { name: "Git", icon: "📝", category: "tools", experience: "4+ years", description: "Version control" },
    { name: "GitHub", icon: "🐙", category: "tools", experience: "4+ years", description: "Code collaboration" },
    { name: "Figma", icon: "🎨", category: "tools", experience: "3+ years", description: "UI/UX design" },
    { name: "UML", icon: "📐", category: "tools", experience: "3+ years", description: "System modeling" },
    { name: "Sphinx", icon: "📖", category: "tools", experience: "1+ year", description: "Documentation generator" },
    { name: "Logstash", icon: "📊", category: "tools", experience: "1+ year", description: "Log processing pipeline" },
    { name: "Canopsis", icon: "📈", category: "tools", experience: "1+ year", description: "Event correlation platform" },
  ];

  const categories = [
    { key: "all", label: "All Technologies", icon: "🚀" },
    { key: "frontend", label: "Frontend", icon: "🖥️" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "database", label: "Database", icon: "🗄️" },
    { key: "devops", label: "DevOps & Cloud", icon: "☁️" },
    { key: "network", label: "Network & Automation", icon: "🌐" },
    { key: "tools", label: "Tools & Monitoring", icon: "🛠️" },
  ];

  const filteredTechnologies = selectedCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getExperienceColor = (experience: string) => {
    const years = parseInt(experience);
    if (years >= 4) return "text-green-600";
    if (years >= 3) return "text-blue-600";
    if (years >= 2) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A comprehensive toolkit spanning full-stack development, DevOps, network automation, and infrastructure management. 
            Built through years of hands-on experience in enterprise environments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Tech Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <span className={`text-xs font-medium ${getExperienceColor(tech.experience)}`}>
                    {tech.experience}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {tech.description}
              </p>

              {/* Category Tag */}
              <div>
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full capitalize border border-blue-200">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {technologies.filter(t => t.category === "frontend").length}+
            </div>
            <div className="text-gray-600 text-sm">Frontend Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {technologies.filter(t => t.category === "backend").length}+
            </div>
            <div className="text-gray-600 text-sm">Backend Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {technologies.filter(t => t.category === "devops").length}+
            </div>
            <div className="text-gray-600 text-sm">DevOps & Cloud Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {technologies.filter(t => parseInt(t.experience) >= 3).length}+
            </div>
            <div className="text-gray-600 text-sm">3+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
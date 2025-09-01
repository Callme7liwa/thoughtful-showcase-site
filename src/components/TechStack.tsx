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
    { name: "React", icon: "⚛️", category: "frontend", experience: "4+ years", description: "Building dynamic UIs and SPAs" },
    { name: "Vue.js", icon: "🟢", category: "frontend", experience: "3+ years", description: "Progressive web applications" },
    { name: "Angular", icon: "🅰️", category: "frontend", experience: "2+ years", description: "Enterprise-scale applications" },
    { name: "TypeScript", icon: "🔷", category: "frontend", experience: "4+ years", description: "Type-safe development" },
    { name: "JavaScript", icon: "🟡", category: "frontend", experience: "5+ years", description: "Modern ES6+ features" },
    { name: "HTML5", icon: "🌐", category: "frontend", experience: "5+ years", description: "Semantic markup" },
    { name: "CSS3", icon: "🎨", category: "frontend", experience: "5+ years", description: "Advanced styling & animations" },
    { name: "Tailwind CSS", icon: "💨", category: "frontend", experience: "3+ years", description: "Utility-first CSS framework" },

    // Backend
    { name: "Node.js", icon: "🟢", category: "backend", experience: "4+ years", description: "Server-side JavaScript" },
    { name: "Python", icon: "🐍", category: "backend", experience: "3+ years", description: "Django, FastAPI development" },
    { name: "PHP", icon: "🐘", category: "backend", experience: "3+ years", description: "Laravel, Symfony frameworks" },
    { name: "Express.js", icon: "⚡", category: "backend", experience: "4+ years", description: "REST API development" },
    { name: "GraphQL", icon: "📊", category: "backend", experience: "2+ years", description: "Efficient data querying" },
    { name: "REST APIs", icon: "🔗", category: "backend", experience: "4+ years", description: "RESTful service design" },

    // Mobile
    { name: "React Native", icon: "📱", category: "mobile", experience: "3+ years", description: "Cross-platform mobile apps" },
    { name: "Flutter", icon: "🦋", category: "mobile", experience: "2+ years", description: "Beautiful native apps" },
    { name: "Swift", icon: "🍎", category: "mobile", experience: "2+ years", description: "Native iOS development" },
    { name: "Kotlin", icon: "🤖", category: "mobile", experience: "2+ years", description: "Native Android development" },
    { name: "Expo", icon: "⚡", category: "mobile", experience: "3+ years", description: "Rapid mobile development" },

    // Database
    { name: "PostgreSQL", icon: "🐘", category: "database", experience: "4+ years", description: "Relational database design" },
    { name: "MongoDB", icon: "🍃", category: "database", experience: "3+ years", description: "NoSQL document storage" },
    { name: "Firebase", icon: "🔥", category: "database", experience: "3+ years", description: "Real-time database & auth" },
    { name: "Redis", icon: "🔴", category: "database", experience: "2+ years", description: "Caching & session storage" },
    { name: "MySQL", icon: "🗄️", category: "database", experience: "4+ years", description: "Traditional RDBMS" },

    // Cloud & DevOps
    { name: "AWS", icon: "☁️", category: "cloud", experience: "3+ years", description: "Cloud infrastructure" },
    { name: "Docker", icon: "🐳", category: "cloud", experience: "3+ years", description: "Containerization" },
    { name: "Kubernetes", icon: "⚙️", category: "cloud", experience: "2+ years", description: "Container orchestration" },
    { name: "Vercel", icon: "▲", category: "cloud", experience: "3+ years", description: "Frontend deployment" },
    { name: "Netlify", icon: "🌐", category: "cloud", experience: "3+ years", description: "JAMstack hosting" },
    { name: "CI/CD", icon: "🔄", category: "cloud", experience: "3+ years", description: "Automated deployment" },

    // Tools
    { name: "Git", icon: "📝", category: "tools", experience: "5+ years", description: "Version control" },
    { name: "GitHub", icon: "🐙", category: "tools", experience: "5+ years", description: "Code collaboration" },
    { name: "VS Code", icon: "💻", category: "tools", experience: "5+ years", description: "Primary development environment" },
    { name: "Figma", icon: "🎨", category: "tools", experience: "4+ years", description: "UI/UX design" },
    { name: "Postman", icon: "📮", category: "tools", experience: "4+ years", description: "API testing" },
    { name: "Jest", icon: "🧪", category: "tools", experience: "3+ years", description: "JavaScript testing" },
  ];

  const categories = [
    { key: "all", label: "All Technologies", icon: "🚀" },
    { key: "frontend", label: "Frontend", icon: "🖥️" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "mobile", label: "Mobile", icon: "📱" },
    { key: "database", label: "Database", icon: "🗄️" },
    { key: "cloud", label: "Cloud & DevOps", icon: "☁️" },
    { key: "tools", label: "Tools", icon: "🛠️" },
  ];

  const filteredTechnologies = selectedCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getExperienceColor = (experience: string) => {
    const years = parseInt(experience);
    if (years >= 4) return "text-accent";
    if (years >= 3) return "text-primary";
    return "text-secondary";
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A comprehensive toolkit spanning frontend, backend, mobile development, and cloud technologies. 
            Built through years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-accent"
                  : "bg-surface text-text-secondary hover:bg-primary/10 hover:text-text-accent border border-border"
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
              className="card-elevated rounded-xl p-6 hover:shadow-custom-lg transition-all duration-300 group fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Tech Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary group-hover:text-text-accent transition-colors">
                    {tech.name}
                  </h3>
                  <span className={`text-xs font-medium ${getExperienceColor(tech.experience)}`}>
                    {tech.experience}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {tech.description}
              </p>

              {/* Category Tag */}
              <div className="mt-4">
                <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-text-accent rounded-full capitalize">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-text-primary mb-2">
              {technologies.filter(t => t.category === "frontend").length}+
            </div>
            <div className="text-text-secondary text-sm">Frontend Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-text-primary mb-2">
              {technologies.filter(t => t.category === "backend").length}+
            </div>
            <div className="text-text-secondary text-sm">Backend Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-text-primary mb-2">
              {technologies.filter(t => t.category === "mobile").length}+
            </div>
            <div className="text-text-secondary text-sm">Mobile Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-text-primary mb-2">
              {technologies.filter(t => parseInt(t.experience) >= 4).length}+
            </div>
            <div className="text-text-secondary text-sm">4+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
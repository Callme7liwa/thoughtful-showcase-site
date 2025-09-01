import { Code, Palette, Database, Cloud, Smartphone, Globe } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      color: "text-primary",
      skills: [
        { name: "React", level: 95, category: "frontend" },
        { name: "TypeScript", level: 90, category: "frontend" },
        { name: "Next.js", level: 85, category: "frontend" },
        { name: "Tailwind CSS", level: 90, category: "frontend" },
        { name: "Vue.js", level: 75, category: "frontend" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 90, category: "backend" },
        { name: "Python", level: 85, category: "backend" },
        { name: "PostgreSQL", level: 80, category: "backend" },
        { name: "MongoDB", level: 85, category: "backend" },
        { name: "GraphQL", level: 75, category: "backend" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      color: "text-secondary",
      skills: [
        { name: "AWS", level: 85, category: "cloud" },
        { name: "Docker", level: 80, category: "cloud" },
        { name: "Kubernetes", level: 70, category: "cloud" },
        { name: "CI/CD", level: 85, category: "cloud" },
        { name: "Terraform", level: 65, category: "cloud" },
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette size={24} />,
      color: "text-primary",
      skills: [
        { name: "Figma", level: 90, category: "design" },
        { name: "Adobe Creative Suite", level: 80, category: "design" },
        { name: "User Research", level: 85, category: "design" },
        { name: "Prototyping", level: 90, category: "design" },
        { name: "Wireframing", level: 85, category: "design" },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      color: "text-accent",
      skills: [
        { name: "React Native", level: 80, category: "mobile" },
        { name: "Flutter", level: 70, category: "mobile" },
        { name: "iOS Development", level: 65, category: "mobile" },
        { name: "Android Development", level: 70, category: "mobile" },
        { name: "Mobile UI/UX", level: 85, category: "mobile" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Globe size={24} />,
      color: "text-secondary",
      skills: [
        { name: "Git", level: 95, category: "tools" },
        { name: "Agile/Scrum", level: 90, category: "tools" },
        { name: "Jest/Testing", level: 85, category: "tools" },
        { name: "Webpack", level: 75, category: "tools" },
        { name: "Performance Optimization", level: 80, category: "tools" },
      ]
    }
  ];

  return (
    <section className="section-padding bg-surface-variant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience, 
            continuous learning, and working on diverse projects across the full stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="card-elevated rounded-2xl p-8 fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-primary/10 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-text-primary text-sm">
                        {skill.name}
                      </span>
                      <span className="text-text-secondary text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-text-primary text-center mb-8">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", 
              "Figma", "MongoDB", "PostgreSQL", "Next.js", "Tailwind", "Vue.js",
              "GraphQL", "Redux", "Express", "Git"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="aspect-square bg-surface rounded-xl flex items-center justify-center text-center p-4 hover:shadow-custom-md transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div>
                  <div className="w-8 h-8 bg-muted rounded mx-auto mb-2"></div>
                  <span className="text-xs font-medium text-text-secondary">
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
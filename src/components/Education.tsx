import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";

interface EducationItem {
  id: number;
  type: "degree" | "certification" | "course";
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  logo?: string;
  credentialUrl?: string;
  skills?: string[];
}

const Education = () => {

  const educationData: EducationItem[] = [
    {
      id: 1,
      type: "degree",
      title: "Dual Degree: Software Engineering & Computer Systems",
      institution: "Higher Institute of Computer Science, Modeling, and Applications (ISIMA)",
      location: "France",
      period: "2022 - 2024",
      description: "International dual degree program focusing on advanced software engineering practices and computer systems architecture. Gained experience in enterprise-level software development and system design.",
      skills: ["Software Engineering", "System Architecture", "Enterprise Development", "Software Design Patterns", "System Integration", "Project Management"]
    },
    {
      id: 2,
      type: "degree",
      title: "Dual Degree: Data Science & IoT Engineering",
      institution: "National School of Computer Science and Systems Analysis (ENSIAS)",
      location: "Rabat, Morocco",
      period: "2021 - 2024",
      description: "Advanced engineering program combining data science methodologies with Internet of Things technologies. Ranked Top 5 in promotion. Developed expertise in machine learning, big data analytics, and connected systems.",
      skills: ["Data Science", "Machine Learning", "IoT Systems", "Big Data Analytics", "Python", "Sensor Networks", "Cloud Computing"]
    },
    {
      id: 3,
      type: "degree",
      title: "Bachelor in Computer Science",
      institution: "Faculty of Sciences and Techniques (FST)",
      location: "Morocco",
      period: "2020 - 2021",
      description: "Bachelor's degree in Computer Science building upon DEUST foundation. Ranked 1st in promotion. Specialized in software development and computer systems.",
      skills: ["Programming", "Software Development", "Computer Systems", "Algorithms", "Database Management"]
    },
    {
      id: 4,
      type: "degree",
      title: "DEUST in Mathematics, Computer Science & Physics",
      institution: "Faculty of Sciences and Techniques (FST)",
      location: "Morocco",
      period: "2018 - 2020",
      description: "Two-year university diploma in fundamental sciences with focus on mathematics, computer science, and physics. Built strong analytical and problem-solving foundation.",
      skills: ["Mathematics", "Physics", "Computer Science Fundamentals", "Analytical Thinking", "Problem Solving"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "degree":
        return "🎓";
      case "certification":
        return "📜";
      case "course":
        return "📚";
      default:
        return "📋";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "degree":
        return "bg-primary/10 text-primary";
      case "certification":
        return "bg-accent/10 text-accent";
      case "course":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-muted text-text-secondary";
    }
  };

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Continuous learning through formal education, professional certifications, 
            and specialized training in web development, mobile app development, and modern technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={item.id} className="relative fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-surface hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="md:ml-16">
                    <div className="card-elevated rounded-2xl p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{getIcon(item.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(item.type)}`}>
                                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                              </span>
                              {item.credentialUrl && (
                                <a
                                  href={item.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-text-accent hover:text-primary transition-colors"
                                  aria-label="View credential"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                              {item.title}
                            </h3>
                            <div className="space-y-1 text-sm text-text-secondary">
                              <div className="flex items-center gap-2">
                                <Award size={14} />
                                <span className="font-medium">{item.institution}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span>{item.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Skills */}
                      {item.skills && (
                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-3">
                            Key Skills & Topics
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 text-xs font-medium bg-surface-variant text-text-secondary rounded-full border border-border"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">5+</div>
            <p className="text-text-secondary">Professional Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">200+</div>
            <p className="text-text-secondary">Hours of Specialized Training</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">Ongoing</div>
            <p className="text-text-secondary">Continuous Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
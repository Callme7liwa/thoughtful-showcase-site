import { Download, Coffee, Music, Camera, Gamepad2 } from "lucide-react";

const About = () => {
  const interests = [
    { icon: <Coffee size={20} />, label: "Coffee Enthusiast" },
    { icon: <Music size={20} />, label: "Music" },
    { icon: <Camera size={20} />, label: "Photography" },
    { icon: <Gamepad2 size={20} />, label: "Gaming" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}/CV.pdf`;
    link.download = "CV.pdf";
    link.click();
  };

  const values = [
    {
      title: "Infrastructure Excellence",
      description: "I believe in building robust, scalable infrastructure that serves as a solid foundation for applications. Every deployment pipeline and monitoring system I design prioritizes reliability and performance."
    },
    {
      title: "Automation First",
      description: "Manual processes are opportunities for automation. I'm passionate about creating intelligent systems that reduce human error, increase efficiency, and allow teams to focus on innovation rather than repetitive tasks."
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, especially in DevOps and network automation. I embrace this challenge by constantly exploring new tools, frameworks, and methodologies to stay at the forefront of the field."
    },
    {
      title: "Collaborative Problem-Solving",
      description: "The best solutions emerge from diverse perspectives. I thrive in environments where knowledge is shared across development, operations, and network teams to solve complex technical challenges together."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="w-full h-full flex items-center justify-center text-text-secondary">
                  <img src={`${import.meta.env.BASE_URL}/images/pdp.jpg`} alt="Profile" className="object-cover w-full h-full" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header */}
            <div className="space-y-4 slide-up">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                A versatile engineer bridging software development, DevOps, and network automation
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-text-secondary leading-relaxed fade-in">
              <p>
                With over 4 years of experience spanning full-stack development to network automation, 
                I've evolved from building web applications to architecting enterprise infrastructure 
                solutions. My journey began with software engineering, developing comprehensive 
                applications using modern frameworks like React, Spring Boot, and various databases.
              </p>
              
              <p>
                Currently at Orange Connectivity & Workspace Services, I specialize in NetDevOps 
                automation, working with Intent-Based Networking stacks and managing complex network 
                infrastructures. My experience includes deploying Kubernetes clusters, implementing 
                CI/CD pipelines, and automating network device management using tools like Ansible, 
                Nautobot, and custom Python scripts.
              </p>
              
              <p>
                I'm passionate about transforming manual processes into automated, reliable systems. 
                Whether it's reducing deployment failures by 60% through DevOps transformation or 
                creating monitoring solutions for critical infrastructure, I approach each challenge 
                with a focus on scalability and reliability.
              </p>
            </div>

            {/* Interests */}
            <div className="fade-in">
              <h3 className="font-heading font-semibold text-text-primary mb-4">
                When I'm Not Coding
              </h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={interest.label}
                    className="flex items-center gap-3 px-4 py-2 bg-surface rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="text-text-accent">{interest.icon}</span>
                    <span className="text-sm font-medium text-text-secondary">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in">
              <button onClick={handleDownload} className="btn-primary flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </button>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">
              What Drives Me
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These core principles guide my approach to engineering and infrastructure development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card-surface rounded-2xl p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-heading font-semibold text-text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
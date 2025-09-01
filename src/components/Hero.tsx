import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Introduction */}
          <div className="space-y-6 fade-in">
            <div className="space-y-4">
              <p className="text-sm font-medium text-text-accent uppercase tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-text-primary leading-tight">
                Alex <span className="text-gradient">Johnson</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-heading font-light text-text-secondary">
                Web & Mobile App Developer
              </h2>
            </div>
            
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Building scalable web applications and intuitive mobile apps with modern technologies. 
              Specialized in React, React Native, Node.js, and cloud-native solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleScrollToProjects}
                className="btn-primary flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={16} />
              </button>
              <button className="btn-secondary">
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <p className="text-sm text-text-secondary">Connect with me:</p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-text-accent transition-colors hover:scale-110 transition-transform"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-text-accent transition-colors hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:alex@example.com"
                  className="p-2 text-text-secondary hover:text-text-accent transition-colors hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollToProjects}
          className="p-2 text-text-secondary hover:text-text-accent transition-colors"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
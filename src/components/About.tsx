import { Download, Coffee, Music, Camera, Gamepad2 } from "lucide-react";

const About = () => {
  const interests = [
    { icon: <Coffee size={20} />, label: "Coffee Enthusiast" },
    { icon: <Music size={20} />, label: "Music Production" },
    { icon: <Camera size={20} />, label: "Photography" },
    { icon: <Gamepad2 size={20} />, label: "Gaming" },
  ];

  const values = [
    {
      title: "User-Centric Design",
      description: "Every line of code I write starts with the user experience in mind. I believe great software should be intuitive, accessible, and delightful to use."
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I embrace that challenge. I'm constantly exploring new frameworks, methodologies, and best practices to stay ahead."
    },
    {
      title: "Collaborative Spirit",
      description: "The best solutions emerge from diverse perspectives. I thrive in team environments where ideas are shared, challenged, and refined together."
    },
    {
      title: "Quality & Performance",
      description: "I'm passionate about writing clean, efficient code that not only works well but also performs optimally and maintains well over time."
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
                  Professional Photo
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
                A passionate developer who bridges the gap between design and technology
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-text-secondary leading-relaxed fade-in">
              <p>
                With over 5 years of experience in full-stack development, I've had the 
                privilege of working with startups and established companies to bring 
                digital products to life. My journey began with a Computer Science degree, 
                but it was the intersection of technology and human experience that truly 
                captured my passion.
              </p>
              
              <p>
                I specialize in creating seamless user experiences through thoughtful 
                design and robust engineering. Whether it's architecting scalable backend 
                systems, crafting responsive frontends, or conducting user research, 
                I approach each project with curiosity and attention to detail.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new coffee shops, 
                experimenting with music production, or capturing moments through 
                photography. I believe these creative pursuits enrich my approach 
                to problem-solving in development.
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
              <button className="btn-primary flex items-center gap-2">
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
              These core values guide my approach to development and collaboration
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
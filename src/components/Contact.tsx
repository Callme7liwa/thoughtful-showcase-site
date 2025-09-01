import { Mail, Phone, MapPin, Github, Linkedin, Twitter, SunMediumIcon } from "lucide-react";

const Contact = () => {

  const MediumIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 1043.63 592.71">
      <path d="M588.67 296.35c0 163.72-131.7 296.35-294.34 296.35S0 460.07 0 296.35 131.7 0 294.33 0s294.34 132.63 294.34 296.35zM920.43 296.35c0 154.18-65.85 279.16-147.1 279.16s-147.09-124.98-147.09-279.16S692.08 17.19 773.33 17.19s147.1 124.98 147.1 279.16zM1043.63 296.35c0 139.5-23.15 252.67-51.69 252.67s-51.7-113.17-51.7-252.67 23.15-252.67 51.7-252.67 51.69 113.17 51.69 252.67z"/>
    </svg>
  );
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "ayoubseddiki132@gmail.com",
      href: "mailto:ayoubseddiki132@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+33 7 63 19 02 35",
      href: "tel:+33763190235"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "France",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/Callme7liwa",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/seddiki--ayoub/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      href: "https://x.com/callme7liwa",
      color: "hover:text-blue-400"
    },
    {
      icon: <MediumIcon />,
      label: "Medium",
      href: "https://medium.com/@ayoubseddiki132",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-surface-variant">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Have a project in mind or want to discuss opportunities in DevOps, network automation, or software development? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center fade-in">
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                Get in Touch
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects in infrastructure automation, 
                or just having a conversation about the latest in DevOps and network technologies.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex flex-col items-center text-center p-6 bg-surface rounded-xl hover:shadow-custom-sm transition-all fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                    {info.icon}
                  </div>
                  <p className="font-medium text-text-primary text-sm mb-2">
                    {info.label}
                  </p>
                  {info.href !== "#" ? (
                    <a 
                      href={info.href}
                      className="text-text-secondary hover:text-text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-text-secondary">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center fade-in">
              <h4 className="font-heading font-semibold text-text-primary mb-6">
                Connect on Social Media
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-surface rounded-xl text-text-secondary transition-all hover:shadow-custom-sm hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8 fade-in">
              <div className="card-elevated rounded-2xl p-8">
                <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
                  Ready to Work Together?
                </h4>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                  Whether you need help with DevOps transformation, network automation, 
                  or full-stack development, I'm here to help turn your ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:ayoubseddiki132@gmail.com"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Mail size={16} />
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/seddiki--ayoub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
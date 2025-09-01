import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" }
    ],
    "Projects": [
      { label: "E-Commerce Platform", href: "#projects" },
      { label: "Task Management App", href: "#projects" },
      { label: "Mobile Weather App", href: "#projects" },
      { label: "Brand Identity Design", href: "#projects" }
    ],
    "Connect": [
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "Email", href: "mailto:alex@example.com", external: true }
    ]
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-text-primary text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-primary hover:bg-primary-hover rounded-full shadow-accent transition-all hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-heading font-semibold mb-4">
              Alex Johnson
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Full Stack Developer & UI/UX Designer passionate about creating 
              beautiful, functional digital experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={!link.external ? (e) => handleLinkClick(e, link.href) : undefined}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Callme7liwa", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/seddiki--ayoub/", external: true },
    { label: "Email", href: "mailto:ayoubseddiki132@gmail.com", external: true },
    { label: "Medium", href: "https://medium.com/@ayoubseddiki132", external: true },
  ];

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

      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              SEDDIKI Ayoub
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              DevOps Engineer & Software Developer specializing in network automation, 
              infrastructure, and full-stack development.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} SEDDIKI Ayoub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
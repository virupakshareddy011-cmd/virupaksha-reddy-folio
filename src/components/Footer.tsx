import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/virupaksha-reddy',
      icon: Github,
      hoverColor: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/virupaksha-reddy',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      href: 'mailto:Virupakshareddy299@gmail.com',
      icon: Mail,
      hoverColor: 'hover:text-secondary'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">
                Virupaksha Reddy
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI & ML Enthusiast passionate about creating innovative solutions 
                through machine learning, cloud computing, and software development.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground ${social.hoverColor} hover:scale-110 hover:shadow-glow transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-muted-foreground">Email</p>
                  <a 
                    href="mailto:Virupakshareddy299@gmail.com"
                    className="text-primary hover:text-primary-glow transition-colors"
                  >
                    Virupakshareddy299@gmail.com
                  </a>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+919481886589"
                    className="text-primary hover:text-primary-glow transition-colors"
                  >
                    +91 9481886589
                  </a>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Location</p>
                  <p className="text-foreground">Ballari, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Virupaksha Reddy. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors text-sm font-medium group"
            >
              <span>Back to Top</span>
              <div className="w-4 h-4 rounded-full border-2 border-current group-hover:animate-bounce">
                <div className="w-full h-full rounded-full border border-current transform rotate-45 translate-x-px -translate-y-px"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
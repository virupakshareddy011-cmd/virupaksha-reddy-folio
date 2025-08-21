import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI & ML Enthusiast | Problem Solver | Cloud Learner';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="AI and ML abstract background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-secondary-glow rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-foreground mb-2">Hello, I'm</span>
            <span className="block gradient-text">Virupaksha Reddy</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium min-h-8">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
          Currently pursuing Bachelor's in AI & ML with hands-on experience in cloud computing and full-stack development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow border-0 px-8 py-3"
            onClick={() => window.open('https://docs.google.com/document/d/11xtXx0VEJ7njgaswLysq4ivHbN0cngsy/edit?usp=sharing&ouid=117609929054762025161&rtpof=true&sd=true', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="border-primary/30 hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300 px-8 py-3"
            onClick={scrollToAbout}
          >
            Learn More About Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:Virupakshareddy299@gmail.com"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover-glow"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/virupaksha-reddy-39327631a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover-glow"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/virupaksha-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover-glow"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
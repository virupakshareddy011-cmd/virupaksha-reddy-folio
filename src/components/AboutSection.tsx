import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Brain, Users } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      label: 'AI & ML Focus',
      description: 'Specialized in machine learning algorithms and neural networks'
    },
    {
      icon: Cloud,
      label: 'Cloud Computing',
      description: 'Hands-on experience with AWS and Google Cloud Platform'
    },
    {
      icon: Code,
      label: 'Full-Stack Development',
      description: 'Proficient in Python, C/C++, and modern web technologies'
    },
    {
      icon: Users,
      label: 'Team Collaboration',
      description: 'Strong communication and project management skills'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging technology to create innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 leading-relaxed mb-6">
                  I'm a dedicated <strong className="text-primary">AI & ML enthusiast</strong> currently pursuing my 
                  Bachelor's degree in Artificial Intelligence and Machine Learning at Ballari Institute of Technology 
                  and Management. My journey in technology is driven by a passion for solving complex problems through 
                  innovative solutions.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  With hands-on experience in UAV coordination projects, cloud computing (AWS & Google Cloud), 
                  and comprehensive AI/ML expertise, I've developed and deployed various projects that demonstrate 
                  my technical capabilities and real-world problem-solving approach.
                </p>
                
                <p className="text-foreground/90 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technological advancements. 
                  My goal is to contribute to meaningful projects that make a positive impact while growing as a 
                  professional in the field of artificial intelligence and machine learning.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.label}
                  className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-gradient-hero group-hover:shadow-glow transition-all duration-300">
                        <highlight.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {highlight.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
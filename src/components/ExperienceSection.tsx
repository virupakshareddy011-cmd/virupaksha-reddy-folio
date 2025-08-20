import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
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

  // Placeholder experiences - can be updated when real experience is gained
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Company",
      location: "Location TBD",
      duration: "Summer 2024",
      type: "Internship",
      status: "Seeking",
      description: "Looking for opportunities to apply AI/ML skills in real-world projects, collaborate with experienced teams, and contribute to innovative solutions.",
      skills: ["Python", "Machine Learning", "Cloud Computing", "Team Collaboration"],
      isPlaceholder: true
    },
    {
      title: "ML Engineer Intern",
      company: "AI/ML Company",
      location: "Location TBD", 
      duration: "2024-2025",
      type: "Internship",
      status: "Open to Opportunities",
      description: "Interested in roles involving machine learning model development, data analysis, and deployment of AI solutions at scale.",
      skills: ["TensorFlow", "PyTorch", "Data Science", "Model Deployment"],
      isPlaceholder: true
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and internship opportunities
            </p>
          </div>

          {/* Current Status */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="p-6 rounded-xl bg-gradient-secondary/10 border border-secondary/20 max-w-2xl mx-auto">
              <Briefcase className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Currently Seeking Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                I'm actively looking for internships and entry-level positions where I can apply my AI/ML skills, 
                contribute to meaningful projects, and learn from experienced professionals.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                  Available for Internships
                </Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Open to Remote Work
                </Badge>
                <Badge variant="outline" className="bg-orange-500/10 text-orange-600 border-orange-500/30">
                  Flexible Start Date
                </Badge>
              </div>
            </div>
          </div>

          {/* Placeholder Experiences */}
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card
                key={`${experience.title}-${index}`}
                className={`group overflow-hidden bg-card/30 backdrop-blur-sm border-border/30 border-dashed hover:bg-card/50 hover:border-primary/20 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{animationDelay: `${0.3 + 0.1 * index}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-muted/50 border border-muted">
                        <Building className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-muted-foreground">
                          {experience.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mt-1">{experience.company}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="bg-muted/20 text-muted-foreground border-muted/50"
                    >
                      {experience.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium text-muted-foreground mb-2 text-sm">Target Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-muted/10 text-muted-foreground border-muted/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="p-8 rounded-xl bg-gradient-hero/10 border border-primary/20">
              <h4 className="text-xl font-semibold text-foreground mb-2">Ready to Contribute</h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm excited to bring my passion for AI/ML and problem-solving skills to your team. 
                Let's discuss how I can contribute to your organization's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:Virupakshareddy299@gmail.com?subject=Internship Opportunity"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Contact for Opportunities
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
                >
                  View Contact Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
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

  const certifications = [
    {
      title: "AI with Python",
      issuer: "IBM/Coursera",
      date: "2023",
      status: "Completed",
      description: "Comprehensive course covering machine learning algorithms, neural networks, and Python implementation of AI solutions.",
      skills: ["Python", "Machine Learning", "Neural Networks", "TensorFlow"],
      credentialUrl: "https://coursera.org/verify/ai-python-cert",
      logo: "🤖"
    },
    {
      title: "Data Structures and Algorithms with Python",
      issuer: "Stanford Online",
      date: "2023",
      status: "Completed", 
      description: "Advanced course on data structures, algorithm design, and optimization techniques using Python.",
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
      credentialUrl: "https://stanford.edu/verify/dsa-python",
      logo: "🐍"
    },
    {
      title: "Google Cloud Fundamentals",
      issuer: "Google Cloud",
      date: "2024",
      status: "Completed",
      description: "Foundation course covering Google Cloud Platform services, architecture, and best practices.",
      skills: ["Google Cloud", "Cloud Architecture", "Compute Engine", "Cloud Storage"],
      credentialUrl: "https://cloud.google.com/verify/gcp-fundamentals",
      logo: "☁️"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Completed",
      description: "Entry-level certification covering AWS cloud concepts, services, security, and pricing.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Cloud Security"],
      credentialUrl: "https://aws.amazon.com/verify/cloud-practitioner",
      logo: "🚀"
    }
  ];

  const upcomingCertifications = [
    {
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      expectedDate: "Q2 2024",
      status: "In Progress"
    },
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services", 
      expectedDate: "Q3 2024",
      status: "Planned"
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-gradient-subtle" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          {/* Completed Certifications */}
          <div className="mb-16">
            <h3 className={`text-2xl font-semibold mb-8 text-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              Completed Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{cert.logo}</div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {cert.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{cert.date}</span>
                            <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(cert.credentialUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Skills Gained:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-primary/5 text-primary border-primary/20 text-xs"
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
          </div>

          {/* Upcoming Certifications */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 text-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              Upcoming Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingCertifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className={`group overflow-hidden bg-card/30 backdrop-blur-sm border-border/30 border-dashed hover:bg-card/50 hover:border-secondary/30 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{animationDelay: `${0.7 + 0.1 * index}s`}}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                          <Award className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-foreground">
                            {cert.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{cert.expectedDate}</span>
                            <Badge 
                              variant="outline" 
                              className={`${
                                cert.status === 'In Progress' 
                                  ? 'bg-secondary/20 text-secondary border-secondary/30' 
                                  : 'bg-muted/50 text-muted-foreground border-muted'
                              }`}
                            >
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
            <div className="p-8 rounded-xl bg-gradient-hero/10 border border-primary/20">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                I believe in continuous professional development and staying updated with the latest industry standards and technologies.
              </p>
              <Button
                className="bg-gradient-hero hover:opacity-90"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss My Qualifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
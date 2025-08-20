import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Users, Database, Brain, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "AirSync - Real-Time Dual Drone Coordination",
      description: "Ongoing cutting-edge project focused on real-time distance-constrained coordination between dual drones for autonomous navigation and synchronized operations.",
      role: "Lead Developer & Research Engineer",
      contributions: [
        "Real-time communication protocol design between dual drones",
        "Distance constraint algorithms for safe coordination",
        "Machine learning models for predictive path planning",
        "Autonomous navigation system development",
        "Performance optimization for real-time operations"
      ],
      technologies: ["Python", "ROS", "OpenCV", "TensorFlow", "C++", "MQTT", "GPS Navigation"],
      impact: "Developing next-generation UAV coordination technology with potential applications in surveillance, delivery, and rescue operations",
      github: "https://github.com/virupaksha-reddy/airsync",
      demo: "#",
      icon: Brain,
      featured: true,
      status: "Ongoing"
    },
    {
      title: "Patient Queue and Doctor Appointment Management System",
      description: "Comprehensive healthcare management system that streamlines patient appointments, queue management, and doctor schedules using intelligent algorithms.",
      role: "Full-Stack Developer",
      contributions: [
        "Data collection and preprocessing for patient flow analysis",
        "Backend API development using Python/FastAPI",
        "Frontend development with React and modern UI components",
        "Machine learning integration for predictive scheduling",
        "Database design and optimization"
      ],
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning", "HTML/CSS", "JavaScript"],
      impact: "Reduced patient waiting time by 40% and improved appointment scheduling efficiency by 60%",
      github: "https://github.com/virupaksha-reddy/patient-management",
      demo: "https://patient-management-demo.vercel.app",
      icon: Users,
      featured: true,
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-subtle" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects and contributions to innovative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group overflow-hidden border-border/50 hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300 ${
                  project.featured ? 'bg-gradient-card' : 'bg-card/50 backdrop-blur-sm'
                } ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{animationDelay: `${0.2 * index}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-hero group-hover:shadow-glow transition-all duration-300">
                        <project.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                          <div className="flex items-center gap-2 mt-1">
                            {project.featured && (
                              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                                Featured
                              </Badge>
                            )}
                            {project.status && (
                              <Badge 
                                variant="outline" 
                                className={`${
                                  project.status === 'Ongoing' 
                                    ? 'bg-orange-500/20 text-orange-600 border-orange-500/30' 
                                    : 'bg-green-500/20 text-green-600 border-green-500/30'
                                }`}
                              >
                                {project.status}
                              </Badge>
                            )}
                          </div>
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {project.role}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                    <h4 className="font-semibold text-success mb-2">Impact & Results:</h4>
                    <p className="text-success/80 text-sm">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing potential collaborations?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/virupaksha-reddy', '_blank')}
                className="hover:bg-primary/5"
              >
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </Button>
              <Button
                className="bg-gradient-hero hover:opacity-90"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Monitor className="mr-2 h-4 w-4" />
                Let's Collaborate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
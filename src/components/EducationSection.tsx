import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
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

  const education = {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    institution: "Ballari Institute of Technology and Management",
    location: "Ballari, Karnataka",
    duration: "2022 - 2026",
    cgpa: "6.75",
    status: "Currently Pursuing",
    highlights: [
      "Specialized in machine learning algorithms and neural networks",
      "Hands-on experience with Python, TensorFlow, and PyTorch",
      "Cloud computing certification courses completed",
      "Active participation in AI/ML research projects",
      "Strong foundation in data structures and algorithms"
    ],
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Data Structures & Algorithms",
      "Cloud Computing",
      "Database Management Systems",
      "Software Engineering"
    ]
  };

  return (
    <section id="education" className="py-20 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey in AI & ML
            </p>
          </div>

          {/* Education Card */}
          <Card className={`overflow-hidden bg-gradient-card border-border/50 hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-hero shadow-glow">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl lg:text-2xl mb-2 text-foreground">
                    {education.degree}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-medium">{education.institution}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{education.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 mb-2">
                    {education.status}
                  </Badge>
                  <div className="text-2xl font-bold text-primary">
                    {education.cgpa}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    CGPA
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Key Highlights */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h4>
                <div className="grid gap-3">
                  {education.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Relevant Coursework</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {education.courses.map((course, index) => (
                    <div
                      key={course}
                      className="p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200 text-center"
                    >
                      <span className="text-sm font-medium text-primary">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Achievements */}
              <div className="p-6 rounded-lg bg-gradient-secondary/10 border border-secondary/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">Academic Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  My academic journey is focused on building a strong foundation in artificial intelligence and machine learning. 
                  I'm particularly interested in the practical applications of AI in healthcare, cloud computing, and software development. 
                  Through coursework and hands-on projects, I've developed skills in algorithm design, data analysis, and system optimization.
                </p>
              </div>

              {/* Future Goals */}
              <div className="p-6 rounded-lg bg-success/5 border border-success/20">
                <h4 className="text-lg font-semibold text-success mb-3">Academic Goals</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span className="text-success/80 text-sm">Complete final year project on AI in healthcare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span className="text-success/80 text-sm">Achieve CGPA above 7.5 by graduation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span className="text-success/80 text-sm">Pursue advanced certifications in cloud computing</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
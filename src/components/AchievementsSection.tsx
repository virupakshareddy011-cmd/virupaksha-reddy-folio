import { useEffect, useRef, useState } from 'react';
import { Trophy, Star, Target, Zap, Award, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AchievementsSection = () => {
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

  // Placeholder achievements - can be updated with real achievements
  const achievements = [
    {
      title: "AI/ML Hackathon Participation",
      description: "Planning to participate in major AI/ML hackathons to showcase problem-solving skills and innovative thinking.",
      icon: Trophy,
      category: "Hackathons",
      status: "Upcoming",
      color: "text-yellow-600"
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to open-source AI/ML projects to give back to the community and collaborate with developers worldwide.",
      icon: Star,
      category: "Open Source",
      status: "In Progress",
      color: "text-blue-600"
    },
    {
      title: "Technical Paper Publication",
      description: "Working on research paper about dual drone coordination systems for academic publication.",
      icon: Award,
      category: "Research",
      status: "In Development",
      color: "text-purple-600"
    },
    {
      title: "Cloud Computing Certifications",
      description: "Achieved AWS Cloud Practitioner and Google Cloud Fundamentals certifications.",
      icon: Medal,
      category: "Certifications",
      status: "Completed",
      color: "text-green-600"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "5+", icon: Target },
    { label: "Technologies Learned", value: "15+", icon: Zap },
    { label: "Certifications Earned", value: "4", icon: Award },
    { label: "Years of Learning", value: "3+", icon: Star }
  ];

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-gradient-subtle" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Achievements & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones, accomplishments, and ongoing initiatives in my journey
            </p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-hero w-fit mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{animationDelay: `${0.3 + 0.1 * index}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-hero group-hover:shadow-glow transition-all duration-300`}>
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {achievement.title}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`${
                            achievement.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-600 border-green-500/30'
                              : achievement.status === 'In Progress'
                              ? 'bg-blue-500/20 text-blue-600 border-blue-500/30'
                              : 'bg-orange-500/20 text-orange-600 border-orange-500/30'
                          }`}
                        >
                          {achievement.status}
                        </Badge>
                      </div>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 mb-3">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Goals */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.7s'}}>
            <Card className="overflow-hidden bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-center text-foreground">Future Goals & Aspirations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Short-term Goals (2024-2025)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">Secure meaningful internship in AI/ML field</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">Complete AirSync drone coordination project</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">Participate in major hackathons and competitions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Long-term Vision (2025+)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">Become a recognized AI/ML engineer</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">Contribute to breakthrough AI research</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">Lead innovative projects that solve real-world problems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
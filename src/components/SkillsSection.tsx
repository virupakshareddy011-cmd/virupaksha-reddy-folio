import { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Palette, Brain, Users, Lightbulb, MessageSquare } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          const skills = ['Python', 'Machine Learning', 'Cloud Computing', 'C/C++', 'UI/UX Design'];
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skill]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'Python', level: 90, icon: Code, color: 'bg-yellow-500' },
    { name: 'Machine Learning', level: 85, icon: Brain, color: 'bg-purple-500' },
    { name: 'Cloud Computing', level: 75, icon: Cloud, color: 'bg-blue-500' },
    { name: 'C/C++', level: 80, icon: Database, color: 'bg-red-500' },
    { name: 'UI/UX Design', level: 70, icon: Palette, color: 'bg-pink-500' },
  ];

  const softSkills = [
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Communication', icon: MessageSquare },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical proficiencies and soft skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Technical Skills */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-hero">
                          <skill.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-foreground font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-hero transition-all duration-1000 ease-out ${
                          animatedSkills.includes(skill.name) ? '' : 'w-0'
                        }`}
                        style={{
                          width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-gradient-secondary group-hover:shadow-glow transition-all duration-300">
                          <skill.icon className="h-6 w-6 text-secondary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Skills Cloud */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-card border border-border/30">
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
                    'AWS', 'Google Cloud', 'Docker', 'Git', 'MongoDB', 'PostgreSQL',
                    'React', 'Node.js', 'FastAPI', 'Flask'
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
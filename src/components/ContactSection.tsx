import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ad9a60a0-ebd7-499d-930e-385511e805a6',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
          variant: "default",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Virupakshareddy299@gmail.com',
      href: 'mailto:Virupakshareddy299@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9481886589',
      href: 'tel:+919481886589'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ballari, Karnataka, India',
      href: 'https://maps.google.com/?q=Ballari,Karnataka,India'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities? Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                  Whether you're looking for an AI/ML enthusiast for your team or want to explore how we can work 
                  together on cutting-edge solutions, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card
                    key={contact.label}
                    className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-card hover-lift transition-all duration-300 cursor-pointer"
                    onClick={() => window.open(contact.href, contact.href.startsWith('http') ? '_blank' : '_self')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-hero group-hover:shadow-glow transition-all duration-300">
                          <contact.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </h4>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <div className="p-6 rounded-xl bg-gradient-secondary/10 border border-secondary/20">
                <h4 className="text-lg font-semibold text-foreground mb-3">Quick Response Guarantee</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  I typically respond to all messages within 24 hours. For urgent inquiries, 
                  feel free to reach out directly via phone or email.
                </p>
                <div className="flex items-center space-x-2 text-secondary">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Usually responds within a few hours</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <Card className="overflow-hidden bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-background/50 border-border/50 focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-background/50 border-border/50 focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50 focus:border-primary min-h-32 resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-hero hover:opacity-90 border-0 py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
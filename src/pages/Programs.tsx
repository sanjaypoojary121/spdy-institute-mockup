import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Brain, Award, Monitor, Microscope, Briefcase, Download, ExternalLink, Calendar, Clock, Users, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

const iconMap = {
  GraduationCap,
  Brain,
  Award,
  Monitor,
  Microscope,
  Briefcase,
};

interface ProgramCategory {
  id: string;
  name: string;
  description: string;
  icon_name: string;
  brochure_url: string | null;
}

const Programs = () => {
  const [categories, setCategories] = useState<ProgramCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('program_categories')
        .select('*')
        .order('created_at');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching program categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadBrochure = (category: string) => {
    // Placeholder for brochure download
    console.log(`Downloading brochure for ${category}`);
  };

  const admissionSteps = [
    {
      step: '1',
      title: 'Research Programs',
      description: 'Explore our diverse range of programs and find the perfect fit for your career goals.',
    },
    {
      step: '2',
      title: 'Meet Requirements',
      description: 'Review admission requirements and prepare necessary documents.',
    },
    {
      step: '3',
      title: 'Apply Online',
      description: 'Submit your application through our secure online portal.',
    },
    {
      step: '4',
      title: 'Assessment',
      description: 'Complete entrance exams, interviews, or portfolio reviews as required.',
    },
    {
      step: '5',
      title: 'Start Your Journey',
      description: 'Receive your acceptance letter and begin your educational journey.',
    },
  ];

  const programHighlights = [
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Average 15:1 student-to-faculty ratio for personalized attention',
    },
    {
      icon: BookOpen,
      title: 'Industry-Relevant Curriculum',
      description: 'Programs designed with input from industry leaders',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Multiple start dates and scheduling options available',
    },
    {
      icon: ExternalLink,
      title: 'Global Partnerships',
      description: 'Exchange programs with 50+ international institutions',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading programs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Explore Our Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Discover world-class education opportunities designed to shape your future and unlock your potential.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 animate-fade-in">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of programs designed to meet diverse learning needs and career aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon_name as keyof typeof iconMap] || GraduationCap;
              
              return (
                <Card key={category.id} className="card-elegant border-0 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col h-full">
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {category.description}
                    </p>
                    <div className="space-y-3">
                      <Button 
                        className="w-full btn-primary"
                        onClick={() => handleDownloadBrochure(category.name)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Brochure
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/courses">
                          View Available Courses
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our programs are designed with student success in mind, offering unparalleled support and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <Card key={index} className="card-elegant border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined admission process makes it easy to begin your educational journey with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-primary/20 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Career Outcomes</h2>
            <p className="text-xl mb-12 opacity-90">
              Our graduates are in high demand across industries worldwide. Join our network of successful alumni.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">$75K</div>
                <div className="text-sm opacity-90">Average Starting Salary</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Industry Partners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Countries Represented</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link to="/auth">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
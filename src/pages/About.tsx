import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Globe, Target, Heart, Lightbulb, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from academics to student support.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through honesty, transparency, and ethical behavior in all our interactions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to solve tomorrow\'s challenges.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster an inclusive environment where diversity is celebrated and everyone belongs.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We prepare students to be responsible global citizens and leaders.',
    },
    {
      icon: Award,
      title: 'Achievement',
      description: 'We celebrate success and support every student in reaching their full potential.',
    },
  ];

  const milestones = [
    { year: '2010', event: 'SPDY Institute founded with 100 students' },
    { year: '2013', event: 'First international partnerships established' },
    { year: '2016', event: 'State-of-the-art research facilities opened' },
    { year: '2019', event: 'Reached 10,000 alumni milestone' },
    { year: '2021', event: 'Launched online learning platform' },
    { year: '2024', event: '15,000+ students enrolled across 100+ programs' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About SPDY Institute
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
              Empowering minds and shaping futures through innovative education, 
              cutting-edge research, and global collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
            
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SPDY Institute was founded in 2010 with a bold vision: to create an educational institution 
                  that would redefine the boundaries of learning and innovation. What started as a small 
                  college with just 100 students has grown into a prestigious institution that serves over 
                  15,000 students from around the world.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to excellence extends beyond traditional academics. We believe in fostering 
                  critical thinking, creativity, and leadership skills that prepare our students for the 
                  challenges of tomorrow. Through state-of-the-art facilities, world-class faculty, and 
                  innovative teaching methods, we create an environment where students can thrive and 
                  reach their full potential.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, SPDY Institute stands as a beacon of educational excellence, recognized globally 
                  for its contributions to research, innovation, and community development. Our alumni 
                  network spans across continents, with graduates making significant impacts in technology, 
                  business, healthcare, and various other fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the culture of our institution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped SPDY Institute into the institution it is today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 card-elegant border-0">
                    <CardContent className="p-6">
                      <p className="text-lg">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SPDY Institute by Numbers</h2>
            <p className="text-xl opacity-90">Our achievements speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-lg opacity-90">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Academic Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Employment Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25,000+</div>
              <div className="text-lg opacity-90">Alumni Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community of learners, innovators, and leaders who are shaping the future. 
            Your journey with SPDY Institute starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4" asChild>
              <Link to="/auth">
                Apply for Admission
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link to="/virtual-tour">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
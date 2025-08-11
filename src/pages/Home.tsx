import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Globe, ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import ChatbotWidget from '@/components/ChatbotWidget';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'World-Class Education',
      description: 'Comprehensive curriculum designed by industry experts and academic leaders.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from renowned professors and industry professionals.',
    },
    {
      icon: Award,
      title: 'Excellence Awards',
      description: 'Recognized for academic excellence and innovative teaching methods.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with students and opportunities worldwide.',
    },
  ];

  const stats = [
    { number: '15,000+', label: 'Students' },
    { number: '500+', label: 'Faculty' },
    { number: '100+', label: 'Programs' },
    { number: '95%', label: 'Placement Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Empowering Minds,
            <br />
            <span className="text-accent">Shaping Futures</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Join SPDY Institute and unlock your potential with world-class education, 
            cutting-edge research, and endless opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Explore Programs
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Virtual Tour
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SPDY Institute?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide an exceptional educational experience that prepares students for success in an ever-evolving world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Tomorrow's Leaders Today
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SPDY Institute has been at the forefront of educational excellence for over a decade. 
                We combine traditional academic rigor with innovative teaching methods to create an 
                environment where students thrive.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to holistic development ensures that graduates are not just academically 
                prepared, but also equipped with the leadership skills and ethical foundation needed 
                to make a positive impact in the world.
              </p>
              <Link to="/about">
                <Button className="btn-primary">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-elegant border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Represented</div>
                </CardContent>
              </Card>
              <Card className="card-elegant border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Industry Partners</div>
                </CardContent>
              </Card>
              <Card className="card-elegant border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Student Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="card-elegant border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Placeholder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI Assistant Coming Soon!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get instant answers to your questions about admissions, courses, campus life, and more 
                with our intelligent AI chatbot. Available 24/7 to help you on your educational journey.
              </p>
              <div className="bg-white/50 rounded-lg p-4 border-2 border-dashed border-primary/30">
                <p className="text-sm text-muted-foreground italic">
                  Chatbot Integration Placeholder - Ready for implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have chosen SPDY Institute to transform their future. 
            Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Home;
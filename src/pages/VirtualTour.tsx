import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, MapPin, Clock, Users, Book, Wifi, Coffee, Car, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualTour = () => {
  const campusLocations = [
    {
      name: 'Academic Building',
      description: 'State-of-the-art classrooms and lecture halls equipped with modern technology.',
      icon: Book,
      features: ['Smart Boards', 'Audio/Visual Equipment', 'Climate Control', 'Flexible Seating'],
    },
    {
      name: 'Library & Research Center',
      description: 'Extensive collection of books, journals, and digital resources with quiet study spaces.',
      icon: Book,
      features: ['Digital Archives', 'Study Rooms', '24/7 Access', 'Research Assistance'],
    },
    {
      name: 'Student Union',
      description: 'Hub of student life with dining options, recreation areas, and meeting spaces.',
      icon: Users,
      features: ['Food Court', 'Recreation Room', 'Event Spaces', 'Student Services'],
    },
    {
      name: 'Sports Complex',
      description: 'Comprehensive fitness and sports facilities for all athletic interests.',
      icon: Heart,
      features: ['Gymnasium', 'Swimming Pool', 'Fitness Center', 'Outdoor Fields'],
    },
    {
      name: 'Technology Labs',
      description: 'Cutting-edge laboratories for engineering, computer science, and research.',
      icon: Wifi,
      features: ['Computer Labs', 'Engineering Workshops', 'Research Equipment', 'Maker Space'],
    },
    {
      name: 'Student Housing',
      description: 'Comfortable and secure accommodation options for students.',
      icon: Shield,
      features: ['Single & Shared Rooms', '24/7 Security', 'Common Areas', 'High-Speed Internet'],
    },
  ];

  const virtualTourSections = [
    {
      title: 'Campus Overview',
      duration: '3:45',
      description: 'Get a bird\'s eye view of our beautiful 150-acre campus',
      thumbnail: '/placeholder.svg',
    },
    {
      title: 'Academic Facilities',
      duration: '5:20',
      description: 'Explore our modern classrooms, laboratories, and research centers',
      thumbnail: '/placeholder.svg',
    },
    {
      title: 'Student Life',
      duration: '4:15',
      description: 'Discover dormitories, dining halls, and recreational facilities',
      thumbnail: '/placeholder.svg',
    },
    {
      title: 'Sports & Recreation',
      duration: '3:30',
      description: 'Tour our comprehensive sports complex and fitness facilities',
      thumbnail: '/placeholder.svg',
    },
  ];

  const studentTestimonials = [
    {
      name: 'Sarah Johnson',
      program: 'Computer Science, Class of 2024',
      quote: 'The campus facilities are incredible. The tech labs have everything you need for hands-on learning.',
      image: '/placeholder.svg',
    },
    {
      name: 'Michael Chen',
      program: 'Business Administration, Class of 2023',
      quote: 'Living on campus has been amazing. The community feel and support system is unmatched.',
      image: '/placeholder.svg',
    },
    {
      name: 'Emily Rodriguez',
      program: 'Engineering, Class of 2025',
      quote: 'The research opportunities and modern equipment make this place perfect for innovation.',
      image: '/placeholder.svg',
    },
  ];

  const campusAmenities = [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Coffee, label: 'Multiple Cafeterias' },
    { icon: Car, label: 'Parking Available' },
    { icon: Shield, label: '24/7 Security' },
    { icon: Book, label: 'Digital Library' },
    { icon: Heart, label: 'Health Center' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Virtual Campus Tour
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Explore our world-class campus from anywhere in the world. Experience SPDY Institute like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Start 360° Tour
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Schedule Campus Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Virtual Tour Video */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elegant border-0 overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Campus Overview Video</h3>
                    <p className="text-muted-foreground">Click to start the virtual tour experience</p>
                    <Badge variant="secondary" className="mt-2">
                      <Clock className="w-3 h-3 mr-1" />
                      15 minutes
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Welcome to SPDY Institute</h3>
                <p className="text-muted-foreground mb-4">
                  Take a comprehensive tour of our campus facilities, from state-of-the-art laboratories to comfortable living spaces. 
                  Our virtual tour provides an immersive 360-degree experience that lets you explore every corner of our beautiful campus.
                </p>
                <div className="flex flex-wrap gap-2">
                  {campusAmenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1">
                      <amenity.icon className="w-3 h-3" />
                      {amenity.label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Sections */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Section</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take focused tours of specific areas that interest you most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {virtualTourSections.map((section, index) => (
              <Card key={index} className="card-elegant border-0 overflow-hidden cursor-pointer group">
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/50 text-white">
                    <Clock className="w-3 h-3 mr-1" />
                    {section.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive facilities designed to support your academic and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusLocations.map((location, index) => (
              <Card key={index} className="card-elegant border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {location.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear what our students say about campus life at SPDY Institute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Campus Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Campus Map</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navigate our campus with our detailed interactive map.
            </p>
          </div>

          <Card className="card-elegant border-0 overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Campus Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Click on different areas to explore facilities and get directions
                  </p>
                  <Button className="btn-primary">
                    Open Interactive Map
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Campus Life?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nothing beats experiencing our campus in person. Schedule a visit or apply to become part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/auth">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;
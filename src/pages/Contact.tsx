import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Campus Address',
      details: ['123 Education Street', 'Knowledge City, KC 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['Main: +1 (555) 123-4567', 'Admissions: +1 (555) 123-4568', 'Emergency: +1 (555) 123-4569'],
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@spdyinstitute.edu', 'admissions@spdyinstitute.edu', 'support@spdyinstitute.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  const departments = [
    { name: 'Admissions Office', phone: '+1 (555) 123-4568', email: 'admissions@spdyinstitute.edu' },
    { name: 'Student Services', phone: '+1 (555) 123-4570', email: 'students@spdyinstitute.edu' },
    { name: 'Faculty Relations', phone: '+1 (555) 123-4571', email: 'faculty@spdyinstitute.edu' },
    { name: 'IT Support', phone: '+1 (555) 123-4572', email: 'itsupport@spdyinstitute.edu' },
    { name: 'Library Services', phone: '+1 (555) 123-4573', email: 'library@spdyinstitute.edu' },
    { name: 'Career Services', phone: '+1 (555) 123-4574', email: 'careers@spdyinstitute.edu' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
              We're here to help you with any questions about admissions, programs, 
              campus life, or anything else you'd like to know about SPDY Institute.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-elegant border-0">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full btn-primary">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-elegant border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <Card className="card-elegant border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us on Campus</h2>
            <p className="text-xl text-muted-foreground">
              Our beautiful campus is conveniently located in the heart of Knowledge City
            </p>
          </div>
          
          <Card className="card-elegant border-0 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Interactive Campus Map</h3>
                <p className="text-muted-foreground mb-4">
                  Google Maps integration placeholder - Ready for implementation
                </p>
                <Button className="btn-primary">
                  View in Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Department Contacts</h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with specific departments for specialized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="card-elegant border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{dept.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Emergency Contact</h3>
            <p className="mb-4">For campus emergencies, call:</p>
            <div className="text-2xl font-bold">+1 (555) 123-4569</div>
            <p className="text-sm mt-2 opacity-90">Available 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Contact', href: '/contact' },
  ];

  const courses = [
    'Computer Science',
    'Engineering',
    'Business Management',
    'Data Science',
    'Artificial Intelligence',
    'Cybersecurity',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SPDY Institute</h3>
                <p className="text-sm opacity-90">Empowering Minds, Shaping Futures</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              A premier educational institution dedicated to providing world-class education 
              and fostering innovation, critical thinking, and leadership skills.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors cursor-pointer">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>123 Education Street</p>
                  <p>Knowledge City, KC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-90" />
                <span className="text-sm opacity-90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-90" />
                <span className="text-sm opacity-90">info@spdyinstitute.edu</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-90">
            © 2024 SPDY Institute. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-90">
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Privacy Policy</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Terms of Service</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Admissions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
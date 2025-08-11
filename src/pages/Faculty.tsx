import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, BookOpen, Award, Users, ChevronRight } from 'lucide-react';

import faculty1 from '@/assets/faculty-1.jpg';
import faculty2 from '@/assets/faculty-2.jpg';
import faculty3 from '@/assets/faculty-3.jpg';
import faculty4 from '@/assets/faculty-4.jpg';
import faculty5 from '@/assets/faculty-5.jpg';
import faculty6 from '@/assets/faculty-6.jpg';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Michael Anderson',
      title: 'Professor of Computer Science',
      department: 'Computer Science & Engineering',
      image: faculty1,
      qualifications: ['Ph.D. Computer Science - MIT', 'M.S. Artificial Intelligence - Stanford'],
      specialization: 'Artificial Intelligence, Machine Learning, Data Science',
      experience: '15+ years',
      publications: '120+ publications',
      awards: ['Excellence in Teaching Award 2023', 'Research Innovation Award 2022'],
      email: 'm.anderson@spdyinstitute.edu',
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      title: 'Dean of Business School',
      department: 'Business Administration',
      image: faculty2,
      qualifications: ['Ph.D. Business Administration - Harvard', 'MBA Strategy - Wharton'],
      specialization: 'Strategic Management, Entrepreneurship, Leadership',
      experience: '20+ years',
      publications: '85+ publications',
      awards: ['Dean of the Year 2023', 'Outstanding Faculty Award 2021'],
      email: 's.johnson@spdyinstitute.edu',
    },
    {
      id: 3,
      name: 'Dr. Robert Chen',
      title: 'Professor of Mechanical Engineering',
      department: 'Mechanical Engineering',
      image: faculty3,
      qualifications: ['Ph.D. Mechanical Engineering - Caltech', 'M.S. Robotics - CMU'],
      specialization: 'Robotics, Automation, Sustainable Engineering',
      experience: '18+ years',
      publications: '95+ publications',
      awards: ['Innovation in Engineering Award 2023', 'Faculty Research Award 2020'],
      email: 'r.chen@spdyinstitute.edu',
    },
    {
      id: 4,
      name: 'Dr. Emily Rodriguez',
      title: 'Associate Professor of Data Science',
      department: 'Data Science & Analytics',
      image: faculty4,
      qualifications: ['Ph.D. Statistics - UC Berkeley', 'M.S. Data Science - NYU'],
      specialization: 'Big Data Analytics, Statistical Modeling, Predictive Analytics',
      experience: '12+ years',
      publications: '70+ publications',
      awards: ['Young Faculty Excellence Award 2022', 'Best Paper Award 2021'],
      email: 'e.rodriguez@spdyinstitute.edu',
    },
    {
      id: 5,
      name: 'Dr. David Wilson',
      title: 'Professor of Cybersecurity',
      department: 'Computer Science & Engineering',
      image: faculty5,
      qualifications: ['Ph.D. Computer Security - Georgia Tech', 'M.S. Cryptography - MIT'],
      specialization: 'Network Security, Ethical Hacking, Cryptography',
      experience: '16+ years',
      publications: '110+ publications',
      awards: ['Cybersecurity Excellence Award 2023', 'Industry Collaboration Award 2022'],
      email: 'd.wilson@spdyinstitute.edu',
    },
    {
      id: 6,
      name: 'Dr. Lisa Thompson',
      title: 'Professor of Digital Marketing',
      department: 'Business Administration',
      image: faculty6,
      qualifications: ['Ph.D. Marketing - Northwestern', 'MBA Digital Strategy - INSEAD'],
      specialization: 'Digital Marketing, Social Media Strategy, Consumer Behavior',
      experience: '14+ years',
      publications: '60+ publications',
      awards: ['Marketing Educator of the Year 2023', 'Digital Innovation Award 2021'],
      email: 'l.thompson@spdyinstitute.edu',
    },
  ];

  const departments = [
    'All Departments',
    'Computer Science & Engineering',
    'Business Administration',
    'Mechanical Engineering',
    'Data Science & Analytics',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Meet Our Faculty
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
              Learn from world-renowned experts, researchers, and industry leaders who are 
              passionate about education and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-8 h-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">2000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Research Publications</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">150+</span>
              </div>
              <p className="text-sm text-muted-foreground">Awards & Honors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-primary">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">PhD Qualified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Badge 
                  key={dept} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {dept}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {facultyMembers.length} faculty members
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.id} className="card-elegant border-0 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
                    <p className="text-primary font-medium mb-2">{faculty.title}</p>
                    <Badge variant="secondary" className="text-xs">
                      {faculty.department}
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Specialization:</h4>
                      <p className="text-sm text-muted-foreground">{faculty.specialization}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium">Experience:</span>
                        <br />
                        <span className="text-muted-foreground">{faculty.experience}</span>
                      </div>
                      <div>
                        <span className="font-medium">Publications:</span>
                        <br />
                        <span className="text-muted-foreground">{faculty.publications}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-1">Recent Awards:</h4>
                      <div className="space-y-1">
                        {faculty.awards.slice(0, 2).map((award, index) => (
                          <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="btn-primary">
                      View Profile
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Excellence Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Academia</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our faculty brings together the perfect blend of academic excellence and real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Research Leaders</h3>
                <p className="text-muted-foreground">
                  Our faculty are published researchers contributing to cutting-edge discoveries 
                  in their respective fields.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Veterans</h3>
                <p className="text-muted-foreground">
                  Many of our professors bring decades of industry experience, bridging 
                  theory with practical application.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Award Winners</h3>
                <p className="text-muted-foreground">
                  Our faculty regularly receive recognition for their teaching excellence 
                  and research contributions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn from the Best
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join SPDY Institute and learn from faculty who are not just teachers, 
            but mentors, researchers, and industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Meet Our Faculty
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
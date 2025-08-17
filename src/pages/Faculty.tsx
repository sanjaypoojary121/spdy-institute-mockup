import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, BookOpen, Award, Users, ChevronRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface FacultyMember {
  id: string;
  name: string;
  department: string;
  bio: string;
  photo_url: string | null;
}

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const { data, error } = await supabase
          .from('faculty')
          .select('*')
          .order('name');
        
        if (error) throw error;
        setFacultyMembers(data || []);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

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
              {loading ? 'Loading...' : `Showing ${facultyMembers.length} faculty members`}
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.map((faculty) => (
                <Card key={faculty.id} className="card-elegant border-0 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={faculty.photo_url || '/placeholder.svg'}
                      alt={faculty.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {faculty.department}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Bio:</h4>
                        <p className="text-sm text-muted-foreground">{faculty.bio}</p>
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
          )}
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
-- Create contacts table for contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  duration TEXT NOT NULL,
  fees TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create faculty table  
CREATE TABLE public.faculty (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  department TEXT NOT NULL,
  bio TEXT NOT NULL,
  photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;

-- Contacts policies - only authenticated users can insert, admins can view
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts" 
ON public.contacts 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Courses policies - public read, authenticated write
CREATE POLICY "Anyone can view courses" 
ON public.courses 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage courses" 
ON public.courses 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Faculty policies - public read, authenticated write
CREATE POLICY "Anyone can view faculty" 
ON public.faculty 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage faculty" 
ON public.faculty 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faculty_updated_at
  BEFORE UPDATE ON public.faculty
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.courses (name, description, duration, fees) VALUES
('Web Development Fundamentals', 'Learn HTML, CSS, JavaScript and modern web development practices', '12 weeks', '$1,200'),
('Data Science with Python', 'Comprehensive course covering Python, pandas, machine learning and data visualization', '16 weeks', '$1,800'),
('Mobile App Development', 'Build iOS and Android apps using React Native and Flutter', '14 weeks', '$1,500'),
('Digital Marketing Essentials', 'Master social media marketing, SEO, content marketing and analytics', '8 weeks', '$800'),
('UI/UX Design Bootcamp', 'Learn user interface and user experience design with industry-standard tools', '10 weeks', '$1,000'),
('Cybersecurity Fundamentals', 'Introduction to information security, ethical hacking and network security', '12 weeks', '$1,400');

INSERT INTO public.faculty (name, department, bio, photo_url) VALUES
('Dr. Sarah Johnson', 'Computer Science', 'Ph.D. in Computer Science with 15 years of industry experience in software development and web technologies.', '/src/assets/faculty-1.jpg'),
('Prof. Michael Chen', 'Data Science', 'Former Google data scientist with expertise in machine learning, AI, and big data analytics.', '/src/assets/faculty-2.jpg'),
('Dr. Emily Rodriguez', 'Mobile Development', 'Mobile app development expert with published apps having over 1M downloads combined.', '/src/assets/faculty-3.jpg'),
('James Wilson', 'Digital Marketing', 'Digital marketing strategist who has helped 100+ businesses grow their online presence.', '/src/assets/faculty-4.jpg'),
('Lisa Thompson', 'UI/UX Design', 'Award-winning designer with experience at top tech companies and design agencies.', '/src/assets/faculty-5.jpg'),
('Dr. Robert Kumar', 'Cybersecurity', 'Cybersecurity consultant and researcher with 20+ years of experience in information security.', '/src/assets/faculty-6.jpg');
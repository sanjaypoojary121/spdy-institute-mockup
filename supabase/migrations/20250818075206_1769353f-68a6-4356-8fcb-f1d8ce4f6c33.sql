-- Create storage bucket for brochures and documents
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Create RLS policies for document storage
CREATE POLICY "Anyone can view documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'documents');

CREATE POLICY "Authenticated users can upload documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'documents' AND auth.uid() IS NOT NULL);

-- Create news/events table for dynamic content
CREATE TABLE public.news_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  event_date TIMESTAMP WITH TIME ZONE,
  category TEXT NOT NULL DEFAULT 'news', -- 'news' or 'event'
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;

-- Create policies for news/events
CREATE POLICY "Anyone can view news and events" 
ON public.news_events 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage news and events" 
ON public.news_events 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_news_events_updated_at
BEFORE UPDATE ON public.news_events
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample news and events data
INSERT INTO public.news_events (title, content, image_url, event_date, category, is_featured) VALUES
('SPDY Institute Wins Excellence Award 2024', 'SPDY Institute has been recognized as the "Institute of Excellence" by the National Education Board for our innovative teaching methodologies and outstanding student outcomes.', NULL, '2024-01-15 10:00:00', 'news', true),
('Virtual Open House - January 2024', 'Join us for our monthly virtual open house where prospective students can explore our campus, meet faculty, and learn about our programs.', NULL, '2024-01-25 14:00:00', 'event', true),
('New AI & Data Science Program Launch', 'We are excited to announce the launch of our new Master''s program in Artificial Intelligence and Data Science, starting Fall 2024.', NULL, '2024-02-01 09:00:00', 'news', false),
('Industry Partnership with Tech Giants', 'SPDY Institute has partnered with leading technology companies to provide internships and job opportunities for our students.', NULL, '2024-01-20 11:00:00', 'news', false),
('Annual Science Fair 2024', 'Our annual science fair showcasing student innovations and research projects. Open to public viewing.', NULL, '2024-03-15 10:00:00', 'event', false),
('Scholarship Applications Open', 'Merit-based scholarships for the upcoming academic year are now open. Applications due by March 30th.', NULL, '2024-02-10 08:00:00', 'news', true);

-- Add program categories table for explore programs page
CREATE TABLE public.program_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  brochure_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.program_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for program categories
CREATE POLICY "Anyone can view program categories" 
ON public.program_categories 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage program categories" 
ON public.program_categories 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_program_categories_updated_at
BEFORE UPDATE ON public.program_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample program categories
INSERT INTO public.program_categories (name, description, icon_name, brochure_url) VALUES
('Undergraduate Programs', 'Comprehensive bachelor''s degree programs across various disciplines including Engineering, Business, Liberal Arts, and Sciences.', 'GraduationCap', NULL),
('Graduate Programs', 'Advanced master''s and doctoral programs designed for career advancement and research excellence.', 'Brain', NULL),
('Certificate Programs', 'Short-term professional development courses and industry certifications.', 'Award', NULL),
('Online Learning', 'Flexible online programs that maintain the same quality as our on-campus offerings.', 'Monitor', NULL),
('Research Programs', 'Cutting-edge research opportunities across all departments with world-class facilities.', 'Microscope', NULL),
('Executive Education', 'Leadership and management programs for working professionals and executives.', 'Briefcase', NULL);
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Calendar, Clock, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface NewsEvent {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  event_date: string | null;
  category: string;
  is_featured: boolean;
  created_at: string;
}

const NewsCarousel = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsEvents();
  }, []);

  useEffect(() => {
    if (newsEvents.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === newsEvents.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [newsEvents.length]);

  const fetchNewsEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('news_events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setNewsEvents(data || []);
    } catch (error) {
      console.error('Error fetching news and events:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === newsEvents.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? newsEvents.length - 1 : currentIndex - 1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="relative h-96 bg-muted rounded-lg animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-muted-foreground">Loading news...</p>
          </div>
        </div>
      </div>
    );
  }

  if (newsEvents.length === 0) {
    return (
      <Card className="card-elegant border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No News Available</h3>
          <p className="text-muted-foreground">Check back later for updates and announcements.</p>
        </CardContent>
      </Card>
    );
  }

  const currentItem = newsEvents[currentIndex];

  return (
    <div className="relative">
      <Card className="card-elegant border-0 overflow-hidden">
        <div className="relative h-96">
          {/* Background Image or Gradient */}
          <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {currentItem.category === 'event' ? (
                    <>
                      <Calendar className="w-3 h-3 mr-1" />
                      Event
                    </>
                  ) : (
                    <>
                      <Star className="w-3 h-3 mr-1" />
                      News
                    </>
                  )}
                </Badge>
                {currentItem.is_featured && (
                  <Badge variant="secondary" className="bg-accent/90 text-white">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 line-clamp-2">
                {currentItem.title}
              </h3>
              
              <p className="text-lg opacity-90 line-clamp-3 mb-4">
                {currentItem.content}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm opacity-75">
                <Clock className="w-4 h-4 mr-1" />
                {currentItem.event_date ? 
                  formatDate(currentItem.event_date) : 
                  formatDate(currentItem.created_at)
                }
              </div>
              
              <Button variant="secondary" size="sm">
                Read More
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {newsEvents.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-muted-foreground/30'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Quick Links to Other News */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsEvents.slice(0, 3).map((item, index) => {
          if (index === currentIndex) return null;
          
          return (
            <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.event_date ? 
                        formatDate(item.event_date) : 
                        formatDate(item.created_at)
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCarousel;
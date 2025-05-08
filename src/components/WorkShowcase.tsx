
import React, { useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/assets/classroom-learning.jpg",
    title: "One-on-One Learning",
    description: "Personalized attention tailored to each student's unique learning needs"
  },
  {
    image: "/assets/students-interactive-session.jpg",
    title: "Interactive Sessions",
    description: "Engaging learning experiences with real-time problem solving"
  },
  {
    image: "/assets/student-chalkboard.jpg",
    title: "Advanced Technology",
    description: "Using modern tools to enhance the learning experience"
  },
  {
    image: "/assets/students-group-study.jpg",
    title: "Focused Learning",
    description: "Creating the perfect environment for academic growth"
  }
];

const WorkShowcase: React.FC = React.memo(() => {
  const handleBookClass = useCallback(() => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  }, []);

  const handleWatchVideo = useCallback(() => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Impact in Action
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          Take a look at how we're transforming education through personalized learning
        </p>
        
        <div className="relative px-12 mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback in case image fails to load
                          e.currentTarget.src = "/assets/placeholder.svg";
                        }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-gradechamp-blue">{slide.title}</h3>
                      <p className="text-gray-600">{slide.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button onClick={handleBookClass} className="btn-primary">
            Book a Free Class
          </Button>
          <Button 
            variant="outline" 
            onClick={handleWatchVideo} 
            className="border-2 border-gradechamp-blue rounded-full text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white transition-colors shadow-sm text-lg inline-flex items-center"
          >
            <Play className="mr-2 h-4 w-4" />
            See How It Works
          </Button>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t border-gray-200 p-4 z-50">
        <Button onClick={handleBookClass} className="btn-primary w-full">Book a Free Class</Button>
      </div>
    </section>
  );
});

export default WorkShowcase;

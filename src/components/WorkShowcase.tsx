
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "One-on-One Learning",
    description: "Personalized attention tailored to each student's unique learning needs"
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Interactive Sessions",
    description: "Engaging learning experiences with real-time problem solving"
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Advanced Technology",
    description: "Using modern tools to enhance the learning experience"
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Focused Learning",
    description: "Creating the perfect environment for academic growth"
  }
];

const WorkShowcase: React.FC = () => {
  const handleBookClass = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  };

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

        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">See How It Works</h3>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="How GradeChamp Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t border-gray-200 p-4 z-50">
        <Button onClick={handleBookClass} className="btn-primary w-full">Book a Free Class</Button>
      </div>
    </section>
  );
};

export default WorkShowcase;

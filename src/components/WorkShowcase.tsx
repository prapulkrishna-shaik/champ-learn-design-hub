
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "photo-1581091226825-a6a2a5aee158", // woman studying with laptop
    title: "One-on-One Learning",
    description: "Personalized attention tailored to each student's unique learning needs"
  },
  {
    image: "photo-1461749280684-dccba630e2f6", // chemistry lab setup
    title: "Chemistry Lab Sessions",
    description: "Practical experiments and hands-on learning experiences"
  },
  {
    image: "photo-1488590528505-98d2b5aba04b", // laptop with calculations
    title: "Mathematics Excellence",
    description: "Building strong foundations in mathematical concepts"
  },
  {
    image: "photo-1486312338219-ce68d2c6f44d", // student studying online
    title: "Science Discovery",
    description: "Exploring scientific concepts through interactive learning"
  },
  {
    image: "photo-1519389950473-47ba0277781c", // group study session
    title: "Group Study Sessions",
    description: "Collaborative learning that enhances understanding"
  },
  {
    image: "photo-1498050108023-c5249f4df085", // digital learning setup
    title: "Digital Learning",
    description: "Modern educational tools to enhance learning experience"
  }
];

const WorkShowcase: React.FC = () => {
  const handleBookClass = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  };
  
  const renderSlide = (slide: Slide, index: number) => (
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
      <div className="card h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={`https://source.unsplash.com/${slide.image}`}
            alt={slide.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-xl font-semibold mb-2 text-gradechamp-blue">{slide.title}</h3>
          <p className="text-gray-600">{slide.description}</p>
        </div>
      </div>
    </CarouselItem>
  );

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Impact in Action
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          Take a look at how we're transforming education through personalized learning
        </p>
        
        <div className="relative px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map(renderSlide)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      
      {/* Sticky CTA Button (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t border-gray-200 p-4 z-50">
        <Button onClick={handleBookClass} className="btn-primary w-full">Book a Free Class</Button>
      </div>
    </section>
  );
};

export default WorkShowcase;

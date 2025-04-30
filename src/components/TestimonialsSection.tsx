import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rebecca Thompson",
    role: "Parent of 7th Grader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "GradeChamp has transformed our evenings from homework battles to productive learning. My son now approaches math with confidence instead of dread."
  },
  {
    name: "Jason Miller",
    role: "Parent of 10th Grader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "The personal connection my daughter has with her GradeChamp tutor has made all the difference. Her grades have improved, but more importantly, she's excited about learning again."
  },
  {
    name: "Mia Chen",
    role: "8th Grade Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "I used to be too embarrassed to ask questions in class. With GradeChamp, I can ask anything without feeling judged, and now I'm one of the top students in science!"
  },
  {
    name: "Raj Patel",
    role: "Parent of 6th Grader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The personalized attention at GradeChamp has helped my son develop study habits that will serve him throughout his academic journey. Worth every penny."
  }
];

const stats = [
  { number: "95%", text: "Student satisfaction" },
  { number: "2000+", text: "Tutoring hours delivered" },
  { number: "87%", text: "Students improved by at least one grade" },
  { number: "4.8/5", text: "Average tutor rating" }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from parents and students about how GradeChamp has transformed their learning experience.
          </p>
        </div>
        
        <div className="mb-16">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <div className="card bg-white relative p-8">
                    <div className="absolute -top-4 -left-4 text-6xl text-gradechamp-blue opacity-30">"</div>
                    <p className="text-gray-600 mb-6 relative z-10 text-lg">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-gradechamp-blue mb-1">{stat.number}</h3>
              <p className="text-gray-600 text-sm">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

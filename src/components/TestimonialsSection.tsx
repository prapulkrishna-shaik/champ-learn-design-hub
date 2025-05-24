import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Sharma",
    role: "Parent of 7th Grader",
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jvvgb1h7fraaj32hdexvtw4e%2F1747901151_img_3.webp?st=2025-05-24T08%3A34%3A19Z&se=2025-05-30T09%3A34%3A19Z&sks=b&skt=2025-05-24T08%3A34%3A19Z&ske=2025-05-30T09%3A34%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=kbcp55nz3z6iFSziawx4lYwNDwMpTaWdPDBa%2BMYurSY%3D&az=oaivgprodscus",
    quote: "GradeChamp has transformed our evenings from homework battles to productive learning. My son now approaches math with confidence instead of dread.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of 5th Grader",
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jvrwg16afy0vctyvzhs27sr0%2F1747813170_img_3.webp?st=2025-05-24T09%3A09%3A28Z&se=2025-05-30T10%3A09%3A28Z&sks=b&skt=2025-05-24T09%3A09%3A28Z&ske=2025-05-30T10%3A09%3A28Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CocTjhYXeRhX5921TL3j44Ouo8%2FTXD%2FldECV8yvZf0w%3D&az=oaivgprodscus",
    quote: "The personal connection my daughter has with her GradeChamp tutor has made all the difference. Her grades have improved, but more importantly, she's excited about learning again.",
    rating: 5
  },
  {
    name: "Ananya Singh",
    role: "8th Grade Student",
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jvrbjmthfjsrarf6v3y08j00%2F1747795430_img_0.webp?st=2025-05-24T08%3A33%3A13Z&se=2025-05-30T09%3A33%3A13Z&sks=b&skt=2025-05-24T08%3A33%3A13Z&ske=2025-05-30T09%3A33%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=P1WfWKjIhsCElC%2FvtI6YvDnS6hP1utnxkwaQNiv%2FzSY%3D&az=oaivgprodscus",
    quote: "I used to be too embarrassed to ask questions in class. With GradeChamp, I can ask anything without feeling judged, and now I'm one of the top students in science!",
    rating: 4
  },
  {
    name: "Vikram Malhotra",
    role: "Parent of 3th Grader",
    image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jv6qvp2sf9rvzdkwqxw0adzn%2F1747204324_img_2.webp?st=2025-05-24T08%3A34%3A22Z&se=2025-05-30T09%3A34%3A22Z&sks=b&skt=2025-05-24T08%3A34%3A22Z&ske=2025-05-30T09%3A34%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=NiEBBY6ockd3dXkfZt4czQK2amgtabPr%2FDTNRolu5Is%3D&az=oaivgprodscus",
    quote: "The personalized attention at GradeChamp has helped my son develop study habits that will serve him throughout his academic journey. Worth every penny.",
    rating: 5
  }
];

const stats = [
  { number: "95%", text: "Student satisfaction" },
  { number: "2000+", text: "Tutoring hours delivered" },
  { number: "87%", text: "Students improved by at least one grade" },
  { number: "4.8/5", text: "Average tutor rating" }
];

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="content-wrapper">
        <div className="text-center mb-12">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from parents and students about how GradeChamp has transformed their learning experience.
          </p>
        </div>
        
        <div className="mb-16">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 relative">
                    <Quote className="absolute top-6 left-6 text-6xl text-gradechamp-softpurple opacity-50" />
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="mx-auto md:mx-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-24 h-24 rounded-full object-cover border-4 border-gradechamp-softpurple/30"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-600 mb-4 text-lg relative z-10 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                            <p className="text-sm text-gradechamp-darkpurple">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
              <CarouselNext className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100 hover:border-gradechamp-purple/20 transition-all">
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialsSection);

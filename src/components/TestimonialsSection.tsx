
import React from 'react';

const testimonials = [
  {
    name: "Rebecca Thompson",
    role: "Parent of 7th Grader",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "GradeChamp has been transformational for my son. His math grades improved from C to A within just two months of tutoring!"
  },
  {
    name: "Jason Miller",
    role: "Parent of 10th Grader",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "What impressed me most was how the tutor adapted their teaching style to match my daughter's learning pace. Very personalized approach!"
  },
  {
    name: "Mia Chen",
    role: "8th Grade Student",
    image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    quote: "I used to hate science but my GradeChamp tutor makes it so fun and interesting. Now it's my favorite subject!"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradechamp-green/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students & Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the students we've helped and their parents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white relative">
              <div className="absolute -top-4 -left-4 text-6xl text-gradechamp-blue opacity-30">"</div>
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

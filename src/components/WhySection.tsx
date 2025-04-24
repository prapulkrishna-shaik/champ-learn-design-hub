
import React from 'react';
import { BookOpen, Users, Check, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-gradechamp-blue" />,
    title: "Personalized Learning",
    description: "Custom study plans tailored to your child's learning style, pace, and academic goals."
  },
  {
    icon: <Users className="h-8 w-8 text-gradechamp-blue" />,
    title: "Qualified Tutors",
    description: "Our tutors are subject matter experts with degrees from top universities and teaching experience."
  },
  {
    icon: <Check className="h-8 w-8 text-gradechamp-blue" />,
    title: "Guaranteed Results",
    description: "We track progress meticulously and adjust teaching methods to ensure academic improvement."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-gradechamp-blue" />,
    title: "Regular Feedback",
    description: "Detailed feedback after each session and monthly progress reports for parents."
  }
];

const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GradeChamp?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine personalized attention, expert tutors, and engaging teaching methods to help students thrive academically.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card bg-white hover:bg-gradechamp-blue/5 transition-colors"
            >
              <div className="bg-gradechamp-green/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

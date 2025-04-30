import React from 'react';
import { BookUser } from "lucide-react";

const tutors = [
  {
    name: "Emily Johnson",
    subjects: "Mathematics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Emily believes in making math approachable through real-world examples. Her students say she turns math anxiety into math confidence.",
    philosophy: "Learning happens when students feel safe to make mistakes."
  },
  {
    name: "David Chen",
    subjects: "Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "David makes complex scientific concepts tangible through hands-on experiments and everyday examples.",
    philosophy: "Curiosity is the foundation of all scientific discovery."
  },
  {
    name: "Sarah Williams",
    subjects: "English Literature",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Sarah helps students find their voice through writing and builds confidence in even the most reluctant readers.",
    philosophy: "Every student has a unique voice waiting to be discovered."
  },
  {
    name: "Michael Rodriguez",
    subjects: "Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Michael transforms coding from intimidating to exciting by focusing on creative projects that students care about.",
    philosophy: "Technology should be a tool for creativity, not just consumption."
  }
];

const TutorsSection = () => {
  return (
    <section id="tutors" className="section-padding bg-gradechamp-green/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Tutors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our tutors are not just subject experts but mentors who connect personally with students, understanding their unique learning needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tutor, index) => (
            <div key={index} className="card bg-white flex flex-col items-center text-center">
              <div className="mb-4">
                <img 
                  src={tutor.image} 
                  alt={tutor.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-gradechamp-blue/20"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{tutor.name}</h3>
              <div className="bg-gradechamp-green/20 text-gray-700 rounded-full px-3 py-1 text-sm mb-3 inline-flex items-center">
                <BookUser className="h-3 w-3 mr-1" />
                {tutor.subjects}
              </div>
              <p className="text-gray-600 text-sm mb-3">{tutor.bio}</p>
              <div className="mt-auto pt-3 border-t border-gray-100 w-full">
                <p className="text-sm italic text-gradechamp-blue">"{tutor.philosophy}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All our tutors undergo rigorous selection, background checks, and training in both academic expertise and mentorship skills.
          </p>
          <a href="#" className="text-gradechamp-blue hover:underline font-medium inline-flex items-center">
            View All Tutors
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;

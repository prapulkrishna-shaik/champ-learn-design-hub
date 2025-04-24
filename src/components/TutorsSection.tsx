
import React from 'react';
import { BookUser } from "lucide-react";

const tutors = [
  {
    name: "Emily Johnson",
    subjects: "Mathematics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    bio: "Emily has a Master's in Mathematics Education and 5+ years of teaching experience.",
    rating: 4.9
  },
  {
    name: "David Chen",
    subjects: "Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    bio: "David holds a PhD in Physics and specializes in making complex concepts simple.",
    rating: 4.8
  },
  {
    name: "Sarah Williams",
    subjects: "English Literature",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    bio: "Sarah is a published author with a degree in English Literature from Oxford.",
    rating: 4.9
  },
  {
    name: "Michael Rodriguez",
    subjects: "Computer Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    bio: "Michael is a software engineer who loves teaching coding to young minds.",
    rating: 4.7
  }
];

const TutorsSection = () => {
  return (
    <section id="tutors" className="section-padding bg-gradechamp-blue/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Tutors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our tutors are not just academically brilliant but also passionate about teaching and mentoring young students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tutor, index) => (
            <div key={index} className="card bg-white flex flex-col items-center text-center">
              <div className="mb-4 relative">
                <img 
                  src={tutor.image} 
                  alt={tutor.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-gradechamp-blue/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradechamp-yellow text-gray-800 rounded-full px-2 py-1 text-sm font-bold flex items-center">
                  ★ {tutor.rating}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{tutor.name}</h3>
              <div className="bg-gradechamp-green/20 text-gray-700 rounded-full px-3 py-1 text-sm mb-3 inline-flex items-center">
                <BookUser className="h-3 w-3 mr-1" />
                {tutor.subjects}
              </div>
              <p className="text-gray-600 text-sm">{tutor.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All our tutors undergo rigorous vetting, background checks, and training before joining our platform.
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

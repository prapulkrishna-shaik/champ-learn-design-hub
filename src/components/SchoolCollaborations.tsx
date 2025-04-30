import React from 'react';
import { School } from "lucide-react";

const schools = [
  {
    name: "Delhi Public School",
    location: "New Delhi",
    students: "250+ students enrolled",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    name: "Ryan International",
    location: "Mumbai",
    students: "180+ students enrolled",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    name: "St. Xavier's School",
    location: "Bangalore",
    students: "200+ students enrolled",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    name: "DAV Public School",
    location: "Chennai",
    students: "150+ students enrolled",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const SchoolCollaborations = () => {
  return (
    <section className="section-padding bg-gradechamp-softpurple/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Schools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            GradeChamp partners with leading CBSE and State Board schools to enhance student learning outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                <img 
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{school.name}</h3>
              <p className="text-gray-600 text-center mb-1">{school.location}</p>
              <p className="text-gradechamp-blue text-sm text-center">{school.students}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolCollaborations;

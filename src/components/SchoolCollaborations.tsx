
import React from 'react';
import { School } from "lucide-react";

const schools = [
  {
    name: "Greenwood High School",
    location: "New York",
    students: "250+ students enrolled"
  },
  {
    name: "Riverside Academy",
    location: "California",
    students: "180+ students enrolled"
  },
  {
    name: "Excellence International",
    location: "Texas",
    students: "200+ students enrolled"
  },
  {
    name: "Summit Education Center",
    location: "Florida",
    students: "150+ students enrolled"
  }
];

const SchoolCollaborations = () => {
  return (
    <section className="section-padding bg-gradechamp-green/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partner Schools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with leading educational institutions to provide quality tutoring services to their students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schools.map((school, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradechamp-blue/10 p-3 rounded-full">
                  <School className="h-8 w-8 text-gradechamp-blue" />
                </div>
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


import React from 'react';
import { School } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="section-padding bg-gradechamp-softpurple/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Schools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            GradeChamp partners with schools to bring personalized mentorship into classrooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Are you a school administrator interested in partnering with us?</p>
          <Button variant="outline" className="border-2 border-gradechamp-blue rounded-full text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white transition-colors">
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolCollaborations;

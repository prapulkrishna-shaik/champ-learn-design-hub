
import React from 'react';
import { cn } from "@/lib/utils";

const subjects = [
  {
    name: "Mathematics",
    icon: "📐",
    color: "bg-gradechamp-blue/10 border-gradechamp-blue",
    description: "Algebra, Geometry, Arithmetic, and more",
    classes: "Classes 5-10"
  },
  {
    name: "Science",
    icon: "🧪",
    color: "bg-gradechamp-green/20 border-green-500",
    description: "Physics, Chemistry, Biology, and Environmental Science",
    classes: "Classes 5-10"
  },
  {
    name: "English",
    icon: "📝",
    color: "bg-gradechamp-peach/20 border-orange-500",
    description: "Grammar, Literature, Reading Comprehension, and Writing",
    classes: "Classes 5-10"
  },
  {
    name: "Social Studies",
    icon: "🌎",
    color: "bg-gradechamp-softpurple/20 border-purple-500",
    description: "History, Geography, Civics, and Economics",
    classes: "Classes 5-10"
  },
  {
    name: "Computer Science",
    icon: "💻",
    color: "bg-gradechamp-softpink/20 border-pink-500",
    description: "Coding, Digital Literacy, and Problem Solving",
    classes: "Classes 5-10"
  },
  {
    name: "Foreign Languages",
    icon: "🗣️",
    color: "bg-gradechamp-yellow/20 border-yellow-500",
    description: "Spanish, French, German, and Mandarin",
    classes: "Classes 5-10"
  },
];

const SubjectsSection = () => {
  return (
    <section id="subjects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subjects We Teach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum covers all major subjects with specialized tutors for each area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-2xl p-6 border-2 transition-transform hover:-translate-y-1",
                subject.color
              )}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{subject.icon}</span>
                <div>
                  <h3 className="font-bold text-xl">{subject.name}</h3>
                  <p className="text-sm text-gray-500">{subject.classes}</p>
                </div>
              </div>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;

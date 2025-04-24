
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const subjects = [
  {
    name: "Mathematics",
    icon: "📐",
    color: "bg-gradechamp-blue/10 border-gradechamp-blue",
    description: "Building problem-solving skills and confidence in numbers",
    outcomes: "From fear of numbers to math champions",
    classes: "Classes 5-10"
  },
  {
    name: "Science",
    icon: "🧪",
    color: "bg-gradechamp-green/20 border-green-500",
    description: "Exploring concepts through experiments and real-world applications",
    outcomes: "Turning curiosity into deep understanding",
    classes: "Classes 5-10"
  },
  {
    name: "English",
    icon: "📝",
    color: "bg-gradechamp-peach/20 border-orange-500",
    description: "Developing confident communication and critical thinking skills",
    outcomes: "From shy readers to articulate communicators",
    classes: "Classes 5-10"
  },
  {
    name: "Social Studies",
    icon: "🌎",
    color: "bg-gradechamp-softpurple/20 border-purple-500",
    description: "Making history and geography engaging through storytelling",
    outcomes: "Building global awareness and perspective",
    classes: "Classes 5-10"
  },
  {
    name: "Computer Science",
    icon: "💻",
    color: "bg-gradechamp-softpink/20 border-pink-500",
    description: "Learning coding and digital literacy with practical projects",
    outcomes: "From tech users to confident creators",
    classes: "Classes 5-10"
  },
  {
    name: "Foreign Languages",
    icon: "🗣️",
    color: "bg-gradechamp-yellow/20 border-yellow-500",
    description: "Mastering new languages through conversation and culture",
    outcomes: "Opening doors to global opportunities",
    classes: "Classes 5-10"
  },
];

const SubjectsSection = () => {
  return (
    <section id="subjects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subjects & Grade Levels</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum covers all major subjects with specialized mentors for each area,
            focusing on building both academic excellence and confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card 
              key={index}
              className={cn(
                "rounded-2xl p-4 border-2 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer",
                subject.color
              )}
            >
              <CardHeader className="p-4">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{subject.icon}</span>
                  <div>
                    <h3 className="font-bold text-xl">{subject.name}</h3>
                    <p className="text-sm text-gray-500">{subject.classes}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 mb-3">{subject.description}</p>
                <div className="bg-gradechamp-blue/5 rounded-lg p-2 mt-2">
                  <p className="text-sm font-medium text-gradechamp-blue">
                    <span className="font-bold">Outcome:</span> {subject.outcomes}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;

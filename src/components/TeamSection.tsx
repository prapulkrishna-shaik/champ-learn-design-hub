
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { teamMembers } from '@/data/teamData';

const TeamSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our experienced educators are dedicated to helping students achieve their academic goals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-gradechamp-blue font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gradechamp-green/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm py-1 px-3 rounded-full mb-6 border border-gradechamp-blue/20">
              <GraduationCap className="text-gradechamp-blue mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Personalized Learning for Grades 5-10</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Empowering Young Minds, <br />
              <span className="text-gradechamp-blue">One Class at a Time</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Expert tutors, personalized learning plans, and a supportive environment to help your child excel in school and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg">Book Your First Class</Button>
              <Button variant="outline" className="border-2 border-gradechamp-blue rounded-full text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white transition-colors shadow-sm text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="badge bg-gradechamp-yellow text-gray-700">
                500+ Happy Students
              </div>
              <div className="badge bg-gradechamp-green text-gray-700">
                Expert Tutors
              </div>
              <div className="badge bg-gradechamp-peach text-gray-700">
                100% Satisfaction
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl rotate-3 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Students learning together" 
                className="rounded-xl h-72 w-auto object-cover"
              />
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl rotate-[-3deg] absolute top-10 right-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Student studying" 
                className="rounded-xl h-60 w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

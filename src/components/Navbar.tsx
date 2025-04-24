
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gradechamp-blue font-heading">Grade<span className="text-gradechamp-lightblue">Champ</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Why Us</a>
            <a href="#subjects" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Subjects</a>
            <a href="#tutors" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Our Tutors</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Testimonials</a>
            <Button className="btn-primary">Book Your First Class</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#why" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Why Us</a>
            <a href="#subjects" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Subjects</a>
            <a href="#tutors" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Our Tutors</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Testimonials</a>
            <div className="px-3 py-2">
              <Button className="btn-primary w-full">Book Your First Class</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gradechamp-blue font-heading">Grade<span className="text-gradechamp-lightblue">Champ</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Why Us</a>
            <a href="#subjects" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Subjects</a>
            <a href="#tutors" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Our Tutors</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Success Stories</a>
            <Button variant="outline" className="border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <Button className="btn-primary">Book a Free Class</Button>
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
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Success Stories</a>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors mb-2">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
              <Button className="btn-primary w-full">Book a Free Class</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';

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

  const handleBookClass = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform', '_blank');
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gradechamp-blue font-heading">Grade<span className="text-gradechamp-lightblue">Champ</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-gradechamp-blue transition-colors">About Us</Link>
            <Link to="/curriculum" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Curriculum</Link>
            <Link to="/approach" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Our Approach</Link>
            <Link to="/#tutors" className="text-gray-700 hover:text-gradechamp-blue transition-colors">Our Tutors</Link>
            <Button variant="outline" className="border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <Button onClick={handleBookClass} className="btn-primary">Book a Free Class</Button>
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
            <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">About Us</Link>
            <Link to="/curriculum" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Curriculum</Link>
            <Link to="/approach" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Our Approach</Link>
            <Link to="/#tutors" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Our Tutors</Link>
            <div className="px-3 py-2">
              <Button onClick={handleBookClass} className="btn-primary w-full mb-2">Book a Free Class</Button>
              <Button variant="outline" className="w-full border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Button } from "@/components/ui/button";
import { School, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">GradeChamp</h3>
            <p className="text-gray-600 mb-4">
              Expert online tutoring for CBSE and State Board students in grades 4-10, specializing in Mathematics, Science, and Chemistry.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-gradechamp-blue transition-colors">About Us</a></li>
              <li><a href="/curriculum" className="hover:text-gradechamp-blue transition-colors">Curriculum</a></li>
              <li><a href="/approach" className="hover:text-gradechamp-blue transition-colors">Our Approach</a></li>
              <li><a href="#tutors" className="hover:text-gradechamp-blue transition-colors">Our Tutors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Subjects</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/curriculum#mathematics" className="hover:text-gradechamp-blue transition-colors">Mathematics</a></li>
              <li><a href="/curriculum#science" className="hover:text-gradechamp-blue transition-colors">Science</a></li>
              <li><a href="/curriculum#chemistry" className="hover:text-gradechamp-blue transition-colors">Chemistry</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gradechamp-blue" />
                <a href="mailto:info@gradechamp.com">info@gradechamp.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gradechamp-blue" />
                <a href="tel:+91-800-123-4567">+91-800-123-4567</a>
              </li>
            </ul>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <School className="h-5 w-5 text-gradechamp-blue mr-2" />
                <h5 className="text-gray-800 font-bold">For Schools</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Partner with GradeChamp to bring personalized learning to your students.
              </p>
              <Button variant="outline" size="sm" className="w-full border border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} GradeChamp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

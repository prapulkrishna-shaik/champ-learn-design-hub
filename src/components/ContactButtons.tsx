
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactButtons = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Book a free consultation or get in touch with us directly. We're here to answer all your questions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="card flex flex-col items-center justify-center bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-green-500"></div>
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Chat with Us</h3>
            <p className="text-gray-600 mb-6 text-center">
              Get quick answers to your questions via WhatsApp
            </p>
            <Button className="btn-primary inline-flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" 
                alt="WhatsApp" 
                className="h-5 w-5 mr-2"
              />
              <span>WhatsApp Chat</span>
            </Button>
          </div>
          
          <div className="card flex flex-col items-center justify-center bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradechamp-blue"></div>
            <div className="bg-gradechamp-blue/10 p-3 rounded-full mb-4">
              <svg className="h-8 w-8 text-gradechamp-blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path>
                <polyline points="9 11 12 14 15 11"></polyline>
                <line x1="12" y1="4" x2="12" y2="14"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Video Consultation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Schedule a free video consultation with our academic advisors
            </p>
            <Button className="btn-primary inline-flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1200px-Google_Meet_icon_%282020%29.svg.png" 
                alt="Google Meet" 
                className="h-5 w-5 mr-2"
              />
              <span>Book Google Meet</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Sticky CTA Button (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t border-gray-200 p-4 z-50">
        <Button className="btn-primary w-full">Book a Free Class</Button>
      </div>
    </section>
  );
};

export default ContactButtons;


import React from 'react';
import { Button } from "@/components/ui/button";

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
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" 
              alt="WhatsApp" 
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Chat with Us</h3>
            <p className="text-gray-600 mb-6 text-center">
              Get quick answers to your questions via WhatsApp
            </p>
            <Button className="btn-primary">
              <span>WhatsApp Chat</span>
            </Button>
          </div>
          
          <div className="card flex flex-col items-center justify-center bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradechamp-blue"></div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1200px-Google_Meet_icon_%282020%29.svg.png" 
              alt="Google Meet" 
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Video Consultation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Schedule a free video consultation with our academic advisors
            </p>
            <Button className="btn-primary">
              <span>Book Google Meet</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactButtons;

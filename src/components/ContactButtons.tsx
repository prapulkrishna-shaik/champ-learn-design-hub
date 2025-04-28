
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactButtons = () => {
  const handleBookClass = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform', '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Book a free consultation or contact us directly. Our academic advisors are here to help.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <Button onClick={handleBookClass} className="btn-primary flex-1">
            Book a Free Class
          </Button>
          <Button variant="outline" className="flex-1 border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors">
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactButtons;

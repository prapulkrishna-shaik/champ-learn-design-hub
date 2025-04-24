
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import SubjectsSection from '@/components/SubjectsSection';
import TutorsSection from '@/components/TutorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactButtons from '@/components/ContactButtons';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <SubjectsSection />
        <TutorsSection />
        <TestimonialsSection />
        <ContactButtons />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

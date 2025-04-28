
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

const Teams = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Teams;

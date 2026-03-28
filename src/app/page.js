
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MediaSection from '@/components/MediaSection';
import Navbar from '@/components/Navbar';
import NewsUpdates from '@/components/NewsUpdates';
import QuickLinks from '@/components/Quicklinks';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <NewsUpdates/>
   <MediaSection/>
   <QuickLinks/>
   <Footer/>
    </div>
  );
}

export default page;

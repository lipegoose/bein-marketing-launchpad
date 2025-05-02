
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import FeatureList from '../components/FeatureList';
import Testimonials from '../components/Testimonials';
import PricingTable from '../components/PricingTable';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <FeatureList />
      <Testimonials />
      <PricingTable />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CashFlowCalculator from './components/CashFlowCalculator';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <CashFlowCalculator />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default App;
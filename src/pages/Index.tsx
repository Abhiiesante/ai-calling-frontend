
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import NoCodeBuilderSection from '../components/NoCodeBuilderSection';
import VoiceDemoSection from '../components/VoiceDemoSection';
import LiveAICallSection from '../components/LiveAICallSection';
import UseCaseSection from '../components/UseCaseSection';
import DemoSection from '../components/DemoSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import IntegrationsSection from '../components/IntegrationsSection';
import WhitelabelSection from '../components/WhitelabelSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <NoCodeBuilderSection />
      <VoiceDemoSection />
      <LiveAICallSection />
      <UseCaseSection />
      <DemoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <WhitelabelSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

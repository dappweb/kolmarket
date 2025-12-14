import React from 'react';
import Hero from '../components/Hero';
import CoreArchitecture from '../components/CoreArchitecture';
import MarketAnalysis from '../components/MarketAnalysis';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="KOLMarket - The Future of Digital Life Economy"
        description="Mint your influence into digital assets and embodied AI agents. Join the revolution of the Creator Economy on Solana."
      />
      <Hero />
      <CoreArchitecture />
      <MarketAnalysis />
    </>
  );
};

export default HomePage;
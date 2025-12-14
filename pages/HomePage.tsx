import React from 'react';
import Hero from '../components/Hero';
import CoreArchitecture from '../components/CoreArchitecture';
import MarketAnalysis from '../components/MarketAnalysis';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CoreArchitecture />
      <MarketAnalysis />
    </>
  );
};

export default HomePage;
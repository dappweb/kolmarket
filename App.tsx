import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MarketAnalysis from './components/MarketAnalysis';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <MarketAnalysis />
        <Tokenomics />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
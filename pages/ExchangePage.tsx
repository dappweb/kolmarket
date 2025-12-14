import React from 'react';
import InfluenceMarket from '../components/InfluenceMarket';
import SEO from '../components/SEO';

const ExchangePage: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-dark-bg min-h-screen">
      <SEO 
        title="Influence Exchange - Trade Creator Tokens"
        description="Trade high-potential creator tokens (KOLs) on Solana. Real-time charts, order books, and AI-powered sentiment analysis."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">影响力资产交易市场</h1>
        <InfluenceMarket />
      </div>
    </div>
  );
};

export default ExchangePage;
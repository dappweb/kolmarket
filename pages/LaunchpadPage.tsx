import React from 'react';
import TokenLaunchpad from '../components/TokenLaunchpad';
import SEO from '../components/SEO';

const LaunchpadPage: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-dark-bg min-h-screen">
      <SEO 
        title="Launchpad - Mint Your Influence Asset"
        description="Connect your social accounts, get AI valuation, and launch your personal token on Solana in minutes."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">影响力资产发行 (Launchpad)</h1>
        <TokenLaunchpad />
      </div>
    </div>
  );
};

export default LaunchpadPage;
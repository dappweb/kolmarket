import React from 'react';
import AgentWorkplace from '../components/AgentWorkplace';
import EmbodiedIntelligenceBridge from '../components/EmbodiedIntelligenceBridge';
import SEO from '../components/SEO';

const IntelligencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Agent Intelligence - Workplace & Robot Control"
        description="Manage your AI workforce. Assign tasks, monitor performance, and control physical robots via the Neural Bridge."
      />
      <AgentWorkplace />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <EmbodiedIntelligenceBridge />
      </div>
    </div>
  );
};

export default IntelligencePage;
import React, { useState } from 'react';
import { Book, Code, Terminal, FileText, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const DocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('user-guide');

  return (
    <div className="pt-32 pb-20 bg-dark-bg min-h-screen flex">
      <SEO 
        title="Developer Documentation - KOLMarket API"
        description="Integrate with KOLMarket smart contracts. API references, SDKs, and guides for building on the Digital Life Protocol."
      />
      {/* Sidebar */}
      <div className="hidden lg:block w-64 fixed left-0 top-20 bottom-0 border-r border-white/10 bg-dark-bg overflow-y-auto px-6 py-8">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Documentation</h3>
        <nav className="space-y-1">
          <button 
            onClick={() => setActiveTab('user-guide')}
            className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'user-guide' ? 'bg-blue-500/10 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <Book size={16} />
            User Guide
          </button>
          <button 
            onClick={() => setActiveTab('developer-api')}
            className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'developer-api' ? 'bg-blue-500/10 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <Code size={16} />
            Developer API
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        <div className="max-w-4xl mx-auto px-6 py-8">
          
          {activeTab === 'user-guide' && (
            <div className="space-y-12 animate-fade-in-up">
              <div>
                <h1 className="text-4xl font-bold text-white mb-6">User Guide</h1>
                <p className="text-xl text-gray-400">Welcome to KOLMarket. This guide will help you get started with issuing and trading influence assets.</p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">1</span>
                    Connect Wallet
                  </h2>
                  <div className="bg-dark-card border border-white/10 rounded-xl p-6">
                    <p className="text-gray-300 mb-4">
                      KOLMarket runs on Solana. You need a compatible wallet like <strong>Phantom</strong> or <strong>Solflare</strong>.
                    </p>
                    <ol className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                      <li>Click the "Connect Wallet" button in the top right corner.</li>
                      <li>Select your wallet provider.</li>
                      <li>Approve the connection request.</li>
                    </ol>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">2</span>
                    Launch Asset
                  </h2>
                  <div className="bg-dark-card border border-white/10 rounded-xl p-6">
                    <p className="text-gray-300 mb-4">
                      Turn your social influence into a token.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                       <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                         <strong className="block text-white mb-1">Step 1</strong>
                         <span className="text-gray-400">Link Twitter/YouTube account</span>
                       </div>
                       <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                         <strong className="block text-white mb-1">Step 2</strong>
                         <span className="text-gray-400">Wait for AVM valuation</span>
                       </div>
                       <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                         <strong className="block text-white mb-1">Step 3</strong>
                         <span className="text-gray-400">Mint your token on Bonding Curve</span>
                       </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'developer-api' && (
            <div className="space-y-12 animate-fade-in-up">
              <div>
                <h1 className="text-4xl font-bold text-white mb-6">Developer API</h1>
                <p className="text-xl text-gray-400">Interact with KOLMarket smart contracts directly using our IDL and SDK.</p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Terminal size={24} className="text-green-400" />
                    Launchpad Program
                  </h2>
                  <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#252526] border-b border-white/5 text-xs text-gray-400">
                      <FileText size={12} />
                      <span>rust/launchpad.rs</span>
                    </div>
                    <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
{`pub fn create_market(ctx: Context<CreateMarket>, name: String, symbol: String) -> Result<()> {
    let curve_config = &mut ctx.accounts.curve_config;
    curve_config.creator = ctx.accounts.creator.key();
    curve_config.token_mint = ctx.accounts.token_mint.key();
    
    // Initialize Bonding Curve
    curve_config.virtual_sol_reserves = 1_000_000_000;
    curve_config.virtual_token_reserves = 1_000_000_000_000_000;
    
    msg!("Market created for {} ({})", name, symbol);
    Ok(())
}`}
                    </pre>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Code size={24} className="text-purple-400" />
                    Agent Registry
                  </h2>
                  <p className="text-gray-400 mb-4">Register an AI Agent identity on-chain.</p>
                  <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#252526] border-b border-white/5 text-xs text-gray-400">
                      <FileText size={12} />
                      <span>rust/agent.rs</span>
                    </div>
                    <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
{`pub fn register_agent(ctx: Context<RegisterAgent>, name: String) -> Result<()> {
    let agent = &mut ctx.accounts.agent_profile;
    agent.authority = ctx.accounts.authority.key();
    agent.kol_token_mint = ctx.accounts.kol_token_mint.key();
    agent.reputation_score = 0;
    
    Ok(())
}`}
                    </pre>
                  </div>
                </section>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DocsPage;

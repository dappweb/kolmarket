
import React, { useState } from 'react';
import { Hammer, Music, Smile, MessageSquare, Zap, Lock, Users, Star } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';

interface Skill {
  id: string;
  name: string;
  type: 'motion' | 'voice' | 'expression' | 'logic';
  description: string;
  mintPrice: number; // KMT
  subscriptionPrice: number; // Creator Token / Month
  mintersShare: number; // Percentage
  mintedCount: number;
  maxMint: number;
  status: 'available' | 'funding' | 'live';
}

const SkillForge: React.FC = () => {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState<'motion' | 'voice' | 'expression'>('motion');

  const skills: Skill[] = [
    {
      id: 'dance_01',
      name: 'Signature Moonwalk',
      type: 'motion',
      description: 'A precise replication of the classic moonwalk dance move, optimized for Tesla Optimus balance.',
      mintPrice: 5000,
      subscriptionPrice: 50,
      mintersShare: 20,
      mintedCount: 3500,
      maxMint: 5000,
      status: 'funding'
    },
    {
      id: 'voice_01',
      name: 'Cyberpunk Narrative Pack',
      type: 'voice',
      description: 'A deep, synthesized voice pack with futuristic slang and intonation.',
      mintPrice: 2000,
      subscriptionPrice: 20,
      mintersShare: 15,
      mintedCount: 2000,
      maxMint: 2000,
      status: 'live'
    },
    {
      id: 'expr_01',
      name: 'Empathic Listener Micro-expressions',
      type: 'expression',
      description: 'Subtle facial motor adjustments to convey deep empathy and active listening.',
      mintPrice: 8000,
      subscriptionPrice: 80,
      mintersShare: 25,
      mintedCount: 1200,
      maxMint: 8000,
      status: 'funding'
    }
  ];

  return (
    <div className="bg-dark-card border border-white/10 rounded-3xl p-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Hammer className="text-orange-500" />
            Robot Skill Forge (技能铸造工坊)
          </h2>
          <p className="text-gray-400 mt-2">
            Fans collaborate to mint new capabilities for physical robots. Become a co-creator and earn revenue share.
          </p>
        </div>
        
        <div className="flex bg-black/30 p-1 rounded-xl">
            {['motion', 'voice', 'expression'].map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                        activeTab === tab 
                        ? 'bg-orange-500 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.filter(s => s.type === activeTab).map(skill => (
            <div key={skill.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all group relative overflow-hidden">
                {skill.status === 'live' && (
                    <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                        LIVE ON MARKET
                    </div>
                )}
                
                <div className="mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3 text-orange-500">
                        {skill.type === 'motion' && <Zap size={24} />}
                        {skill.type === 'voice' && <Music size={24} />}
                        {skill.type === 'expression' && <Smile size={24} />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                    <p className="text-sm text-gray-400 min-h-[40px]">{skill.description}</p>
                </div>

                {/* Progress Bar for Funding */}
                <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Funding Progress</span>
                        <span className="text-orange-400 font-mono">
                            {Math.round((skill.mintedCount / skill.maxMint) * 100)}%
                        </span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000"
                            style={{ width: `${(skill.mintedCount / skill.maxMint) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                        <span>{skill.mintedCount} KMT</span>
                        <span>Goal: {skill.maxMint} KMT</span>
                    </div>
                </div>

                <div className="space-y-3 border-t border-white/5 pt-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 flex items-center gap-1">
                            <Users size={14} /> Minters Share
                        </span>
                        <span className="text-green-400 font-bold">{skill.mintersShare}%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 flex items-center gap-1">
                            <Star size={14} /> Sub Price
                        </span>
                        <span className="text-white font-mono">{skill.subscriptionPrice} Token/mo</span>
                    </div>
                </div>

                <button 
                    disabled={skill.status === 'live'}
                    className={`w-full mt-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                        skill.status === 'live'
                        ? 'bg-white/10 text-gray-500 cursor-not-allowed'
                        : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                    }`}
                >
                    {skill.status === 'live' ? 'Minting Completed' : (
                        <>
                            <Hammer size={18} />
                            Mint for {skill.mintPrice / 100} KMT
                        </>
                    )}
                </button>
            </div>
        ))}
        
        {/* Placeholder for new proposal */}
        <div className="border border-white/10 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="text-gray-500 group-hover:text-white" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-400 group-hover:text-white mb-2">Propose New Skill</h3>
            <p className="text-sm text-gray-500">Have a cool idea? Propose a new behavior or voice pack for the community to fund.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillForge;

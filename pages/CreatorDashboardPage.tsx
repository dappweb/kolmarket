
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  Wallet, 
  Settings, 
  BarChart2, 
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import SEO from '../components/SEO';

const CreatorDashboardPage: React.FC = () => {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard
  const stats = [
    { label: 'Total Value Locked', value: '$1,245,300', change: '+12.5%', isPositive: true, icon: Lock },
    { label: 'Token Price', value: '$4.25', change: '+5.2%', isPositive: true, icon: TrendingUp },
    { label: 'Holders', value: '3,450', change: '+124', isPositive: true, icon: Users },
    { label: 'Revenue (30d)', value: '$45,200', change: '-2.1%', isPositive: false, icon: DollarSign },
  ];

  if (!connected) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Please connect wallet to view dashboard</h2>
          <p className="text-gray-400">Access your creator analytics, asset management, and settings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-bg">
      <SEO 
        title="Creator Dashboard - Manage Your Digital Assets"
        description="Monitor your token performance, manage robot skills, and track revenue streams."
      />
      
      <div className="flex h-[calc(100vh-100px)]">
        {/* Sidebar */}
        <div className="w-64 border-r border-white/10 bg-black/20 hidden lg:block p-6">
          <div className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'analytics', label: 'Analytics', icon: BarChart2 },
              { id: 'assets', label: 'Asset Management', icon: Wallet },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Welcome back, @Creator</h1>
                <p className="text-gray-400 text-sm">Here's what's happening with your digital assets today.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  System Operational
                </span>
              </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-card border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400">
                      <stat.icon size={20} />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Content Area based on Tab */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 min-h-[400px]">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Revenue Breakdown</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 h-64 bg-black/20 rounded-xl border border-white/5 p-4 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Mock Chart Visualization */}
                        <div className="flex items-end gap-2 h-32 w-full px-8 justify-between">
                            {[40, 65, 55, 80, 45, 90, 70, 85, 60, 75, 95, 100].map((h, i) => (
                                <div key={i} className="w-full bg-blue-500/20 hover:bg-blue-500/40 rounded-t transition-all" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-8 text-[10px] text-gray-500">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-400">Top Revenue Sources</h4>
                        <div className="space-y-3">
                            {[
                                { name: 'Token Minting Fees', val: '45%', color: 'bg-blue-500' },
                                { name: 'Skill Subscriptions', val: '30%', color: 'bg-purple-500' },
                                { name: 'Trading Royalties', val: '25%', color: 'bg-green-500' }
                            ].map((item) => (
                                <div key={item.name}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-gray-300">{item.name}</span>
                                        <span className="text-white font-bold">{item.val}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color}`} style={{ width: item.val }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'assets' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Manage Assets</h3>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
                        + Mint New Asset
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 text-sm border-b border-white/10">
                                <th className="pb-4 font-medium">Asset Name</th>
                                <th className="pb-4 font-medium">Type</th>
                                <th className="pb-4 font-medium">Supply</th>
                                <th className="pb-4 font-medium">Price</th>
                                <th className="pb-4 font-medium">Status</th>
                                <th className="pb-4 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { name: 'KOL Token', type: 'Token', supply: '10M', price: '$4.25', status: 'Active' },
                                { name: 'Genesis Soul NFT', type: 'NFT', supply: '1/1', price: '-', status: 'Locked' },
                                { name: 'Moonwalk Skill', type: 'Skill', supply: '5000', price: '50 KMT', status: 'Funding' },
                            ].map((asset, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 text-white font-medium">{asset.name}</td>
                                    <td className="py-4 text-gray-400">{asset.type}</td>
                                    <td className="py-4 text-gray-400">{asset.supply}</td>
                                    <td className="py-4 text-white font-mono">{asset.price}</td>
                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded text-xs ${
                                            asset.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                                            asset.status === 'Funding' ? 'bg-orange-500/20 text-orange-400' :
                                            'bg-gray-500/20 text-gray-400'
                                        }`}>
                                            {asset.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-right">
                                        <button className="text-blue-400 hover:text-white text-xs">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for icon usage
const Lock = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

export default CreatorDashboardPage;

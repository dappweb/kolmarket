import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Flame, RefreshCw, Zap, Shield, TrendingUp } from 'lucide-react';

const WhitepaperPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 bg-dark-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            <Shield size={16} />
            <span>KMT Tokenomics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('whitepaper.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('whitepaper.subtitle')}
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1: Intro */}
          <div className="bg-dark-card border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('whitepaper.intro')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                 <div className="text-gray-400 text-sm mb-1">Total Supply</div>
                 <div className="text-2xl font-mono font-bold text-white">1,000,000,000 KMT</div>
               </div>
               <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                 <div className="text-gray-400 text-sm mb-1">Network</div>
                 <div className="text-2xl font-bold text-blue-400">Solana</div>
               </div>
            </div>
          </div>

          {/* Section 2: Burn Mechanism */}
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Flame size={120} />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Flame className="text-orange-500" />
              {t('whitepaper.burn_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {t('whitepaper.burn_desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <RefreshCw className="text-green-400 mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Protocol Revenue</h3>
                <p className="text-sm text-gray-400">Fees from Agent tasks and Asset trading are collected in the Treasury.</p>
              </div>
              <div className="hidden md:flex items-center justify-center text-gray-600">
                <TrendingUp size={32} />
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <Flame className="text-red-500 mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Buyback & Burn</h3>
                <p className="text-sm text-gray-400">Smart contracts automatically buy KMT from the market and burn it.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Solana Advantage */}
          <div className="bg-dark-card border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="text-purple-500" />
              {t('whitepaper.solana_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('whitepaper.solana_desc')}
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-gray-400">High Throughput: 65,000+ TPS</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-gray-400">Low Latency: ~400ms Block Time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span className="text-gray-400">Low Cost: ~$0.00025 per transaction</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Flame, RefreshCw, Zap, Shield, TrendingUp, Users, Cpu, Coins, Lock } from 'lucide-react';
import SEO from '../components/SEO';

const WhitepaperPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 bg-dark-bg min-h-screen">
      <SEO 
        title="Whitepaper - KMT Tokenomics & Ecosystem"
        description="Deep dive into the KOLMarket economic model, deflationary mechanisms, and the future of embodied AI on Solana."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            <Shield size={16} />
            <span>KMT Tokenomics & Ecosystem</span>
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
          
          {/* Section 0: Executive Summary of Business Model */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">全链路价值生态 (Ecosystem Overview)</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 mt-1">
                        <Users size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">1. 创作者 (KOL) 发行</h3>
                        <p className="text-gray-400 text-sm">
                            KOL 将其社交影响力资产化，在 Solana 链上发行个人代币。通过 AVM 模型进行 AI 估值，确保资产价值锚定真实影响力。
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400 mt-1">
                        <Cpu size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">2. 数字生命铸造 (Digital Life Foundry)</h3>
                        <p className="text-gray-400 text-sm">
                            基于 KOL 数据训练 AI Agent。粉丝通过支付 KMT 参与“共建铸造”，成为创世股东 (Genesis Partners)，永久享有该 Agent 5% 的运营收益分红。
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg text-orange-400 mt-1">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">3. 具身智能技能市场 (Skill Forge)</h3>
                        <p className="text-gray-400 text-sm">
                            社区众筹开发物理机器人的动作与语音技能包。技能铸造者获得销售分成，终端用户通过订阅（Subscription）付费使用这些技能，打通虚拟与现实的经济闭环。
                        </p>
                    </div>
                </div>
            </div>
          </div>

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

          {/* Section 4: KMT Tokenomics */}
          <div className="bg-dark-card border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Coins className="text-yellow-500" /> KMT 代币经济模型 (Tokenomics)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">代币分配 (Allocation)</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">社区与生态激励 (Community)</span>
                            <span className="text-white font-mono font-bold">40%</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">国库储备 (Treasury)</span>
                            <span className="text-white font-mono font-bold">20%</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">团队与顾问 (Team)</span>
                            <span className="text-white font-mono font-bold">15%</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">早期投资者 (Investors)</span>
                            <span className="text-white font-mono font-bold">15%</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">流动性池 (Liquidity)</span>
                            <span className="text-white font-mono font-bold">10%</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">代币效用 (Utility)</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-lg h-fit text-blue-400"><Lock size={18}/></div>
                            <div>
                                <h4 className="text-white font-medium">质押分红 (Staking)</h4>
                                <p className="text-sm text-gray-400">质押 KMT 获得平台交易手续费分成与具身技能市场销售分红。</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="bg-purple-500/20 p-2 rounded-lg h-fit text-purple-400"><Cpu size={18}/></div>
                            <div>
                                <h4 className="text-white font-medium">铸造支付 (Minting)</h4>
                                <p className="text-sm text-gray-400">KMT 是铸造数字生命 (Agent) 和物理技能 (Skill) 的唯一支付代币。</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="bg-green-500/20 p-2 rounded-lg h-fit text-green-400"><TrendingUp size={18}/></div>
                            <div>
                                <h4 className="text-white font-medium">治理权 (Governance)</h4>
                                <p className="text-sm text-gray-400">持有者可对平台关键参数（如手续费率、销毁比例）进行投票。</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">通缩飞轮 (Deflationary Flywheel)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    KOLMarket 协议将平台收入（Agent 任务佣金、技能订阅费、资产交易税）的 <strong className="text-white">30%</strong> 用于自动回购 KMT 并销毁。
                    随着具身智能机器人服务的普及，KMT 的流通量将持续减少，实现长期价值增值。
                </p>
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

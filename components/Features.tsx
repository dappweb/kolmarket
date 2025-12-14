import React from 'react';
import { Network, Bot, HandMetal, ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">三大核心支柱</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            我们不仅仅是在创造资产，更是在构建一个完整的数字生命经济闭环体系。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-dark-card rounded-3xl p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Network className="text-blue-400 h-9 w-9" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">影响力市场</h3>
              <p className="text-xs font-bold text-blue-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">价值发现层</p>
              
              <ul className="space-y-4 text-gray-400 flex-grow">
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">影响力代币:</strong> 基于 AVM (自动估值模型) 发行，代表 KOL 未来增长潜力。</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">动态价格发现:</strong> 基于实时影响力指数的自动化做市。</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">社交化交易:</strong> 深度集成的社区讨论与策略分享。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-dark-card rounded-3xl p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] lg:-translate-y-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Bot className="text-purple-400 h-9 w-9" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">数字生命铸造厂</h3>
              <p className="text-xs font-bold text-purple-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">价值与行动力创造层</p>
              
              <ul className="space-y-4 text-gray-400 flex-grow">
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-purple-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">DLT (数字生命代币):</strong> 基于 ERC-721/1155 的股权化 NFT 资产。</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-purple-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">AVM 模型训练:</strong> 注入个性化知识体系与自主决策逻辑。</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-purple-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">数据隐私:</strong> 采用联邦学习技术保护 KOL 核心数据资产。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-dark-card rounded-3xl p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <HandMetal className="text-yellow-400 h-9 w-9" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">智能体行动网关</h3>
              <p className="text-xs font-bold text-yellow-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">价值实现层</p>
              
              <ul className="space-y-4 text-gray-400 flex-grow">
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">数字任务广场:</strong> 全自动化的任务接单、报价与交付系统。</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">具身智能之桥:</strong> 通过开放协议控制物理实体（机器人/IoT）。</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">RWA 结算:</strong> 任务收益自动转化为现实世界的资产与法币。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
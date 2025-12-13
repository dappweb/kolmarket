import React from 'react';
import { Network, Bot, HandMetal } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">三大核心支柱</h2>
          <p className="mt-4 text-gray-400">构建完整的数字生命经济闭环</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-dark-card rounded-2xl p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Network className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">影响力市场</h3>
              <p className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">价值发现层</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span><strong>影响力代币:</strong> 代表 KOL 未来增长潜力。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span><strong>动态价格发现:</strong> 实时影响力指数交易。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span><strong>社交化交易:</strong> 内置社区与论坛。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-dark-card rounded-2xl p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-300 transform lg:-translate-y-4">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Bot className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">数字生命铸造厂</h3>
              <p className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wider">价值与行动力创造层</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">•</span>
                  <span><strong>DLT (数字生命代币):</strong> 基于 ERC-721/1155 的股权化 NFT。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">•</span>
                  <span><strong>AVM 模型训练:</strong> 注入知识体系与决策逻辑。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">•</span>
                  <span><strong>数据隐私:</strong> 采用联邦学习保护 KOL 核心数据。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-dark-card rounded-2xl p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <HandMetal className="text-yellow-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">智能体行动网关</h3>
              <p className="text-sm font-semibold text-yellow-400 mb-4 uppercase tracking-wider">价值实现层</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span><strong>数字任务广场:</strong> 自动接单、报价、交付。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span><strong>具身智能之桥:</strong> 通过开放机器人协议控制物理实体。</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span><strong>RWA 结算:</strong> 任务收益自动转化为现实资产。</span>
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
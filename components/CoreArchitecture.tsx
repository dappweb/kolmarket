import React from 'react';
import { Network, Bot, HandMetal, ArrowRight, Database, Coins, Cpu } from 'lucide-react';

const CoreArchitecture: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-dark-bg relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            <Network size={16} />
            <span>Ecosystem Architecture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">经济闭环与核心架构</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            构建“创造-交易-应用”的完整数字生命经济循环系统。
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-yellow-500/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Pillar 1: Creation */}
            <div className="bg-dark-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <Database className="text-purple-400 h-8 w-8" />
              </div>
              <div className="text-center lg:text-left">
                <div className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-2">Pillar I</div>
                <h3 className="text-2xl font-bold text-white mb-4">数字生命铸造厂</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  通过 AI 深度学习与大数据分析，将社交影响力转化为可编程的智能数字资产。
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>全平台社交数据聚合清洗</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>AVM 影响力价值评估模型</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>个性化 AI Agent 训练</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Exchange */}
            <div className="bg-dark-card p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <Coins className="text-blue-400 h-8 w-8" />
              </div>
              <div className="text-center lg:text-left">
                <div className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Pillar II</div>
                <h3 className="text-2xl font-bold text-white mb-4">价值交换网络</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  提供高流动性的交易市场，通过供需博弈实时发现数字生命的真实价值。
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>AMM + 订单薄混合交易引擎</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>影响力指数衍生品合约</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>粉丝持仓分红与权益机制</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Utility */}
            <div className="bg-dark-card p-8 rounded-3xl border border-white/5 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <Cpu className="text-yellow-400 h-8 w-8" />
              </div>
              <div className="text-center lg:text-left">
                <div className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Pillar III</div>
                <h3 className="text-2xl font-bold text-white mb-4">智能体应用层</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  释放数字生命的生产力，执行现实世界的商业任务并创造实际收益。
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <span>去中心化任务接单广场</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <span>具身智能硬件控制协议</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <span>RWA 收益回购销毁</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow Indicators (Mobile Only) */}
        <div className="flex lg:hidden justify-center gap-4 mt-8 text-gray-600">
          <ArrowRight className="rotate-90" />
          <ArrowRight className="rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default CoreArchitecture;
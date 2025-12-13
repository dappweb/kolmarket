import React from 'react';
import { ArrowRight, Cpu, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Next Gen Digital Economy
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="block">影响力资产化</span>
          <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-transparent bg-clip-text mt-2">
            数字生命铸造
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          融合 AI 与区块链，打破物理束缚。我们铸造具备持续学习、自主进化及独立经济行动能力的“数字生命”，赋予其可行动的物理化身。
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
            加入 "创世 100" 计划 <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-transparent border border-gray-600 text-white font-medium text-lg hover:bg-white/10 transition-colors">
            阅读白皮书
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
            <Globe className="text-blue-400 mb-4 h-8 w-8" />
            <h3 className="text-lg font-semibold text-white">影响力代币化</h3>
            <p className="text-sm text-gray-400 mt-2">将 KOL 影响力转化为可交易、可增值的数字资产 (Token)。</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
            <Cpu className="text-purple-400 mb-4 h-8 w-8" />
            <h3 className="text-lg font-semibold text-white">AVM 自主价值模型</h3>
            <p className="text-sm text-gray-400 mt-2">基于 AI 的进化引擎，让数字生命具备独立决策能力。</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
            <Zap className="text-yellow-400 mb-4 h-8 w-8" />
            <h3 className="text-lg font-semibold text-white">具身智能网关</h3>
            <p className="text-sm text-gray-400 mt-2">连接物理机器人，实现从数字指令到现实劳动的转化。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight, Cpu, Globe, Zap, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="vision" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#0f172a]">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[100px]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Next Gen Digital Economy
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="block mb-2 drop-shadow-lg">影响力资产化</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text pb-2">
            数字生命铸造
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          融合 <span className="text-white font-semibold">AI</span> 与 <span className="text-white font-semibold">区块链</span>，打破物理束缚。
          <br className="hidden md:block" />
          我们铸造具备持续学习、自主进化及独立经济行动能力的“数字生命”。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button onClick={() => navigate('/exchange')} className="group px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1">
            立即开始交易 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => navigate('/launchpad')} className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
            <Zap size={18} className="fill-current" />
            发行影响力代币
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="group flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="p-3 bg-blue-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="text-blue-400 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">影响力代币化</h3>
            <p className="text-sm text-gray-400">将 KOL 影响力转化为可交易、可增值的数字资产 (Token)。</p>
          </div>
          
          <div className="group flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="p-3 bg-purple-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="text-purple-400 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AVM 自主价值模型</h3>
            <p className="text-sm text-gray-400">基于 AI 的进化引擎，让数字生命具备独立决策能力。</p>
          </div>
          
          <div className="group flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
            <div className="p-3 bg-yellow-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-yellow-400 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">具身智能网关</h3>
            <p className="text-sm text-gray-400">连接物理机器人，实现从数字指令到现实劳动的转化。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
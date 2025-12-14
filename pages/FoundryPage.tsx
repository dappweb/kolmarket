import React from 'react';
import { Bot, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const FoundryPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-8">
          <Bot size={16} />
          <span>Digital Life Foundry</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">数字生命铸造厂</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
          不仅仅是 NFT，而是具备自主意识、可进化的 AI 数字分身。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 transition-all group">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Cpu className="text-purple-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">1. 注入灵魂 (AI Training)</h3>
            <p className="text-gray-400 mb-6">
              上传您的社交媒体历史数据、语音样本和行为模式，训练您的专属数字双胞胎。
            </p>
            <button className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              开始训练 <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Sparkles className="text-blue-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">2. 铸造 DLT 资产</h3>
            <p className="text-gray-400 mb-6">
              将训练好的 AI 模型铸造为 DLT (Digital Life Token)，确权并赋予其链上身份。
            </p>
            <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              连接钱包铸造 <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:border-yellow-500/50 transition-all group">
            <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Bot className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">3. 激活行动力</h3>
            <p className="text-gray-400 mb-6">
              配置智能体的工作权限（Twitter 发帖、回复邮件等），让它开始为您赚取收益。
            </p>
            <button className="text-yellow-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              前往工作台 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundryPage;
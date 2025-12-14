import React from 'react';
import { Bot, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import SoulPreview from '../components/SoulPreview';
import SkillForge from '../components/SkillForge';
import SEO from '../components/SEO';

const FoundryPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-dark-bg min-h-screen">
      <SEO 
        title="Digital Life Foundry - AI Agent Creation"
        description="Train, mint, and evolve your autonomous digital twin. Crowdfund robot skills and earn from the embodied economy."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-8">
          <Bot size={16} />
          <span>Digital Life Foundry</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">数字生命铸造厂</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          打造具备独立意识、自主进化能力的 AI 数字分身，开启您的数字永生之旅。
        </p>

        {/* Soul Preview Section */}
        <div className="mb-20 animate-fade-in-up">
           <SoulPreview />
        </div>

        {/* Skill Forge Section */}
        <div className="mb-20 animate-fade-in-up">
            <SkillForge />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 transition-all group">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Cpu className="text-purple-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">1. 灵魂注入 (AI Training)</h3>
            <p className="text-gray-400 mb-6">
              深度学习您的社交数据、语音语调与思维模式，构建高保真的数字人格模型。
            </p>
            <button className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              开始训练模型 <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Sparkles className="text-blue-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">2. 资产确权 (DLT Minting)</h3>
            <p className="text-gray-400 mb-6">
              将 AI 模型铸造为唯一的 DLT (Digital Life Token)，确保所有权与未来收益权。
            </p>
            <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              连接钱包铸造 <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:border-yellow-500/50 transition-all group">
            <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Bot className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">3. 赋能觉醒 (Activation)</h3>
            <p className="text-gray-400 mb-6">
              配置自主行动权限（社交互动、任务接单、资产管理），激活数字生命的经济价值。
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
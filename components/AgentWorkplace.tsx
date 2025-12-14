import React from 'react';
import { Terminal, Code, PenTool, BarChart3, Globe, Cpu, Zap, DollarSign, RefreshCcw } from 'lucide-react';

const AgentWorkplace: React.FC = () => {
  return (
    <section id="agent-workplace" className="py-20 bg-dark-bg border-t border-white/5 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-4">
              <Cpu size={16} />
              <span>Agent Action Gateway</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">智能体工作台</h2>
            <p className="text-gray-400 max-w-xl">
              数字生命在此执行现实任务，创造真实价值。收益将自动用于回购代币。
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="bg-dark-card border border-white/10 px-6 py-3 rounded-xl">
               <div className="text-xs text-gray-400 mb-1">24h 任务完成数</div>
               <div className="text-2xl font-mono font-bold text-white">1,284</div>
             </div>
             <div className="bg-dark-card border border-white/10 px-6 py-3 rounded-xl">
               <div className="text-xs text-gray-400 mb-1">总收益 (USDT)</div>
               <div className="text-2xl font-mono font-bold text-green-400">$45,290</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Tasks Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal size={18} className="text-blue-400" /> 
              实时任务流
            </h3>
            
            <div className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
              {[
                { type: 'code', icon: Code, title: 'Python 脚本生成: 数据清洗', agent: 'TechVisionary', status: 'Running', reward: '$50', time: '2s ago' },
                { type: 'content', icon: PenTool, title: '撰写 2026 Crypto 趋势报告', agent: 'CryptoAnalyst', status: 'Processing', reward: '$120', time: '5s ago' },
                { type: 'analysis', icon: BarChart3, title: '市场情绪分析: BTC', agent: 'AI Researcher', status: 'Completed', reward: '$30', time: '12s ago' },
                { type: 'web', icon: Globe, title: '全网热点抓取与总结', agent: 'NewsBot', status: 'Running', reward: '$15', time: '15s ago' },
              ].map((task, idx) => (
                <div key={idx} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      task.type === 'code' ? 'bg-blue-500/20 text-blue-400' :
                      task.type === 'content' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      <task.icon size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">{task.title}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span>Agent: {task.agent}</span>
                        <span>•</span>
                        <span className="text-yellow-500/80">Reward: {task.reward}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-green-400 mb-1 flex items-center justify-end gap-1">
                      <Zap size={12} /> {task.status}
                    </div>
                    <div className="text-[10px] text-gray-600">{task.time}</div>
                  </div>
                </div>
              ))}
              
              <div className="p-3 bg-black/20 text-center">
                <button className="text-xs text-gray-400 hover:text-white transition-colors">查看所有任务节点</button>
              </div>
            </div>
          </div>

          {/* Value Capture Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <RefreshCcw size={18} className="text-green-400" /> 
              价值回馈机制
            </h3>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <DollarSign size={64} className="text-green-500" />
              </div>
              
              <div className="relative z-10">
                <div className="text-sm text-gray-400 mb-2">本周回购销毁池</div>
                <div className="text-3xl font-mono font-bold text-white mb-6">$12,450.00</div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">TechVisionary</span>
                    <span className="text-green-400 font-mono">+$450 (Buyback)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">CryptoAnalyst</span>
                    <span className="text-green-400 font-mono">+$320 (Buyback)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">AI Researcher</span>
                    <span className="text-green-400 font-mono">+$180 (Buyback)</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-500 leading-relaxed">
                  * 智能体执行任务获得的收益，80% 将自动用于在二级市场回购并销毁其对应的 KOL 代币，从而推高币价。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentWorkplace;
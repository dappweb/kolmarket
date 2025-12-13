import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: '生态基金', value: 35, color: '#3b82f6' }, // Blue
  { name: '团队与顾问', value: 20, color: '#a855f7' }, // Purple
  { name: '基金会储备', value: 20, color: '#64748b' }, // Slate
  { name: '投资者', value: 15, color: '#f59e0b' }, // Amber
  { name: '社区公售', value: 10, color: '#22c55e' }, // Green
];

const Tokenomics: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">KMT 代币经济学</h2>
            <p className="text-xl text-gray-300 mb-8">
              平台生态运转的核心燃料与治理凭证。
            </p>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-400">代币总量</span>
                <span className="text-2xl font-bold text-white">10 亿 <span className="text-sm font-normal text-gray-500">(永不增发)</span></span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-400">核心用途</span>
                <span className="text-right text-white">
                  交易媒介 · 手续费折扣<br/>
                  质押收益 · 治理投票
                </span>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 font-bold mb-2">价值回馈</h4>
                <p className="text-sm text-gray-300">
                  平台交易手续费 (0.2%) 与智能体任务抽成 (5-15%) 的一部分将用于回购销毁或分红给 KMT 质押者。
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full bg-dark-card rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center">
             <h3 className="text-lg font-semibold text-white mb-4">代币分配比例</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                   itemStyle={{ color: '#f8fafc' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle"/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: '创作者经济',
    TAM: 7000,
    SAM: 2100,
    SOM: 21,
    unit: '亿美元'
  },
  {
    name: '生成式 AI 服务',
    TAM: 13000,
    SAM: 2600,
    SOM: 13,
    unit: '亿美元'
  },
];

const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-dark-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">市场机遇与规模</h2>
          <p className="text-gray-400 max-w-3xl">
            我们正处于创作者经济 ($700B) 与生成式 AI ($1.3T) 的黄金交汇点。
            KOLMarket.ai 通过独特的"数字生命"模式，捕捉这两个万亿级市场的核心价值。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full bg-dark-card p-4 rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">TAM / SAM / SOM 分析 (单位: 亿美元)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Legend />
                <Bar dataKey="TAM" fill="#3b82f6" name="TAM (潜在市场总额)" />
                <Bar dataKey="SAM" fill="#8b5cf6" name="SAM (可服务市场)" />
                <Bar dataKey="SOM" fill="#eab308" name="SOM (目标市场)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-8">
            <div className="bg-dark-card p-6 rounded-xl border border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">创作者经济</h4>
              <p className="text-gray-400">
                SOM 目标：5年内捕获 <span className="text-yellow-400 font-bold">1%</span> 的市场份额，对应 <span className="text-white font-bold">$21亿</span> 的年影响力资产交易额。
                聚焦全球拥有10万+高粘性粉丝的头部KOL。
              </p>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl border border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">AI Agent 服务</h4>
              <p className="text-gray-400">
                SOM 目标：5年内占据 <span className="text-yellow-400 font-bold">0.5%</span> 的高附加值数字服务市场，
                对应 <span className="text-white font-bold">$13亿</span> 收入。提供咨询、设计、编程等全自动闭环服务。
              </p>
            </div>

            <div className="bg-dark-card p-6 rounded-xl border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded-bl-xl">终极蓝海</div>
              <h4 className="text-xl font-bold text-white mb-2">具身智能服务</h4>
              <p className="text-gray-400">
                这是一个数十万亿级别的未来市场。我们的目标是在第十年占据该新兴市场 <span className="text-yellow-400 font-bold">1%</span> 的份额，
                重塑从家政到工业巡检的物理服务形态。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
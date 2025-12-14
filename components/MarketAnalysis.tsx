import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Bot, Briefcase } from 'lucide-react';

const MarketAnalysis: React.FC = () => {
  const { t } = useTranslation();

  const data = [
    {
      name: t('market_analysis.creator_economy_title'),
      TAM: 7000,
      SAM: 2100,
      SOM: 21,
    },
    {
      name: t('market_analysis.ai_service_title'),
      TAM: 13000,
      SAM: 2600,
      SOM: 13,
    },
  ];

  return (
    <section id="market" className="py-24 bg-dark-bg relative">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            <TrendingUp size={16} />
            <span>{t('market_analysis.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('market_analysis.title')}</h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            <Trans i18nKey="market_analysis.desc">
              我们正处于创作者经济 (<span className="text-white font-semibold">$700B</span>) 与生成式 AI (<span className="text-white font-semibold">$1.3T</span>) 的黄金交汇点。
              <br className="hidden md:block" />
              KOLMarket.ai 通过独特的"数字生命"模式，捕捉这两个万亿级市场的核心价值。
            </Trans>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] w-full bg-dark-card/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-lg font-semibold text-white mb-8 text-center flex items-center justify-center gap-2">
              <TrendingUp className="text-blue-500" size={20} />
              {t('market_analysis.chart_title')}
            </h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                barSize={40}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                  itemStyle={{ color: '#f8fafc', padding: '4px 0' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="TAM" fill="#3b82f6" name={t('market_analysis.tam')} radius={[4, 4, 0, 0]} animationDuration={1500} />
                <Bar dataKey="SAM" fill="#8b5cf6" name={t('market_analysis.sam')} radius={[4, 4, 0, 0]} animationDuration={1500} animationBegin={200} />
                <Bar dataKey="SOM" fill="#eab308" name={t('market_analysis.som')} radius={[4, 4, 0, 0]} animationDuration={1500} animationBegin={400} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('market_analysis.creator_economy_title')}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {t('market_analysis.creator_economy_desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Bot className="text-purple-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('market_analysis.ai_service_title')}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {t('market_analysis.ai_service_desc')}
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 group relative overflow-hidden">
               <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-bl from-yellow-500/20 to-transparent text-yellow-500 text-xs font-bold rounded-bl-2xl border-b border-l border-yellow-500/10">
                 终极蓝海
               </div>
               <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="text-yellow-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">具身智能服务</h4>
                  <p className="text-gray-400 leading-relaxed">
                    这是一个数十万亿级别的未来市场。我们的目标是在第十年占据该新兴市场 <span className="text-yellow-400 font-bold">1%</span> 的份额，
                    重塑从家政到工业巡检的物理服务形态。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
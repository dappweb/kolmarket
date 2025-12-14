import React from 'react';
import { Terminal, Cpu, Zap, DollarSign, RefreshCcw, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AGENT_TASKS, BUYBACK_LOGS, WORKPLACE_STATS } from '../src/data/mockData';

const AgentWorkplace: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="agent-workplace" className="py-20 bg-dark-bg border-t border-white/5 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-4">
              <Cpu size={16} />
              <span>{t('agent_workplace.badge')}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{t('agent_workplace.title')}</h2>
            <p className="text-gray-400 max-w-xl">
              {t('agent_workplace.desc')}
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="bg-dark-card border border-white/10 px-6 py-3 rounded-xl">
               <div className="text-xs text-gray-400 mb-1">{t('agent_workplace.stats.tasks_24h')}</div>
               <div className="text-2xl font-mono font-bold text-white">{WORKPLACE_STATS.tasks24h}</div>
             </div>
             <div className="bg-dark-card border border-white/10 px-6 py-3 rounded-xl">
               <div className="text-xs text-gray-400 mb-1">{t('agent_workplace.stats.total_value')}</div>
               <div className="text-2xl font-mono font-bold text-green-400">{WORKPLACE_STATS.totalValue}</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Tasks Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal size={18} className="text-blue-400" /> 
              {t('agent_workplace.tasks.title')}
            </h3>
            
            <div className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
              {AGENT_TASKS.map((task, idx) => (
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
                      <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">{t(task.titleKey)}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span>{t('agent_workplace.tasks.agent')}: {task.agent}</span>
                        <span>•</span>
                        <span className="text-yellow-500/80">{t('agent_workplace.tasks.reward')}: {task.reward}</span>
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
                <button className="text-xs text-gray-400 hover:text-white transition-colors">{t('agent_workplace.tasks.view_all')}</button>
              </div>
            </div>
          </div>

          {/* Value Capture Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <RefreshCcw size={18} className="text-green-400" /> 
              {t('agent_workplace.value.title')}
            </h3>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <DollarSign size={64} className="text-green-500" />
              </div>
              
              <div className="relative z-10">
                <div className="text-sm text-gray-400 mb-2">{t('agent_workplace.value.pool_title')}</div>
                <div className="text-3xl font-mono font-bold text-white mb-6">{WORKPLACE_STATS.poolValue}</div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">{t('agent_workplace.value.buyback_log')}</span>
                  </div>
                  {BUYBACK_LOGS.map((log, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                       <div className="flex items-center gap-2">
                         <span className="text-blue-400 font-mono">{log.tx}</span>
                         <span className="text-gray-500">{log.time}</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <span className="text-white font-bold">{log.amount}</span>
                         <span className="text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">{t('agent_workplace.value.burn')}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <button className="text-xs text-green-400 hover:text-green-300 flex items-center justify-center gap-1">
                    {t('agent_workplace.value.view_contract')} <Globe size={10} />
                  </button>
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
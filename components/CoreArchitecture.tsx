import React from 'react';
import { useTranslation } from 'react-i18next';
import { Network, Bot, HandMetal, ArrowRight, Database, Coins, Cpu } from 'lucide-react';

const CoreArchitecture: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-20 bg-dark-bg relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            <Network size={16} />
            <span>{t('core_architecture.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('core_architecture.title')}</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            {t('core_architecture.desc')}
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
                <h3 className="text-2xl font-bold text-white mb-4">{t('core_architecture.pillar_1_title')}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  {t('core_architecture.pillar_1_desc')}
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>{t('core_architecture.pillar_1_point_1')}</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>{t('core_architecture.pillar_1_point_2')}</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>{t('core_architecture.pillar_1_point_3')}</span>
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
                <h3 className="text-2xl font-bold text-white mb-4">{t('core_architecture.pillar_2_title')}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  {t('core_architecture.pillar_2_desc')}
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>{t('core_architecture.pillar_2_point_1')}</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>{t('core_architecture.pillar_2_point_2')}</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>{t('core_architecture.pillar_2_point_3')}</span>
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
                <h3 className="text-2xl font-bold text-white mb-4">{t('core_architecture.pillar_3_title')}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  {t('core_architecture.pillar_3_desc')}
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <span>{t('core_architecture.pillar_3_point_1')}</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <span>{t('core_architecture.pillar_3_point_2')}</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <span>{t('core_architecture.pillar_3_point_3')}</span>
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
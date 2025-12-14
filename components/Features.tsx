import React from 'react';
import { useTranslation } from 'react-i18next';
import { Network, Bot, HandMetal, ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="features" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t('features.title')}</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            {t('features.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-dark-card rounded-3xl p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Network className="text-blue-400 h-9 w-9" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{t('features.layer1_title')}</h3>
              <p className="text-xs font-bold text-blue-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">{t('features.layer1_badge')}</p>
              
              <ul className="space-y-4 text-gray-400 flex-grow">
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer1_item1_title')}:</strong> {t('features.layer1_item1_desc')}</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer1_item2_title')}:</strong> {t('features.layer1_item2_desc')}</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer1_item3_title')}:</strong> {t('features.layer1_item3_desc')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-dark-card rounded-3xl p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] lg:-translate-y-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Bot className="text-purple-400 h-9 w-9" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{t('features.layer2_title')}</h3>
              <p className="text-xs font-bold text-purple-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">{t('features.layer2_badge')}</p>
              
              <ul className="space-y-4 text-gray-400 flex-grow">
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-purple-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer2_item1_title')}:</strong> {t('features.layer2_item1_desc')}</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-purple-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer2_item2_title')}:</strong> {t('features.layer2_item2_desc')}</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-purple-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer2_item3_title')}:</strong> {t('features.layer2_item3_desc')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-dark-card rounded-3xl p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <HandMetal className="text-yellow-400 h-9 w-9" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{t('features.layer3_title')}</h3>
              <p className="text-xs font-bold text-yellow-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-4">{t('features.layer3_badge')}</p>
              
              <ul className="space-y-4 text-gray-400 flex-grow">
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer3_item1_title')}:</strong> {t('features.layer3_item1_desc')}</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer3_item2_title')}:</strong> {t('features.layer3_item2_desc')}</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="mr-3 text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-200">{t('features.layer3_item3_title')}:</strong> {t('features.layer3_item3_desc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

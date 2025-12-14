import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Cpu, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="vision" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#0f172a]">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[100px]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          {t('hero.badge')}
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
          <span className="block mb-2 drop-shadow-lg">{t('hero.title_1')}</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text pb-2">
            {t('hero.title_2')}
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
          {t('hero.desc')}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => navigate('/launchpad')} className="group px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1">
            {t('hero.cta_launch')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => navigate('/exchange')} className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
            <Zap size={18} className="fill-current" />
            {t('hero.cta_explore')}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} className="group flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="p-3 bg-blue-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="text-blue-400 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('hero.feature_1_title')}</h3>
            <p className="text-sm text-gray-400">{t('hero.feature_1_desc')}</p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="group flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-colors duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="p-3 bg-purple-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="text-purple-400 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('hero.feature_2_title')}</h3>
            <p className="text-sm text-gray-400">{t('hero.feature_2_desc')}</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="group flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-colors duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div className="p-3 bg-green-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-green-400 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('hero.feature_3_title')}</h3>
            <p className="text-sm text-gray-400">{t('hero.feature_3_desc')}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
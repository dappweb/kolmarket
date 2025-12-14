import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.launchpad'), href: '/launchpad' },
    { label: t('nav.exchange'), href: '/exchange' },
    { label: t('nav.foundry'), href: '/foundry' },
    { label: t('nav.intelligence'), href: '/intelligence' },
    { label: t('nav.dashboard'), href: '/dashboard' },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'jp', label: '日本語' },
    { code: 'kr', label: '한국어' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-yellow-500 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-black text-xl">C</span>
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white">COGITO</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-yellow-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-500"
                    />
                  )}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2"
                >
                  <Globe size={18} />
                  <span className="uppercase text-sm">{i18n.language}</span>
                </button>
                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-32 bg-dark-card border border-white/10 rounded-lg shadow-xl overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 ${i18n.language === lang.code ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="transform scale-90">
                 <WalletMultiButton className="!bg-gradient-to-r !from-yellow-500 !to-orange-500 !text-black !font-bold !rounded-full !hover:opacity-90 !transition-opacity !text-sm !h-10" />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-card border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-yellow-500 bg-white/5' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center gap-2 px-3 py-2 border-t border-white/10 mt-2">
                 <Globe size={18} className="text-gray-400" />
                 {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => changeLanguage(lang.code)}
                     className={`px-2 py-1 text-sm rounded ${i18n.language === lang.code ? 'bg-yellow-500/20 text-yellow-500' : 'text-gray-400'}`}
                   >
                     {lang.label}
                   </button>
                 ))}
              </div>

              <div className="mt-4 px-3">
                <WalletMultiButton className="!w-full !justify-center !bg-yellow-500 !text-black !font-bold !rounded-md" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

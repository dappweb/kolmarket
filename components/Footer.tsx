import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="bg-yellow-500 p-1 rounded">
                <span className="font-bold text-black text-lg">K</span>
              </div>
            <span className="text-2xl font-bold text-white">KOLMarket.ai</span>
          </div>
          <div className="flex gap-6">
            <a href="mailto:contact@kolmarket.ai" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
              <Mail size={18} />
              contact@kolmarket.ai
            </a>
            <div className="text-gray-400 flex items-center gap-2">
              <MessageCircle size={18} />
              Wechat: QQ137655747
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2025 KOLMarket.ai. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
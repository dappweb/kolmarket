import React from 'react';
import { Flag, Rocket, Server, Users } from 'lucide-react';

const roadmapData = [
  {
    date: 'Q1 2026',
    title: 'Alpha 内测',
    desc: '核心交易引擎上线，首批内测用户邀请。',
    icon: <Server size={20} />,
    status: 'upcoming'
  },
  {
    date: 'Q2 2026',
    title: '公测与 "创世 100"',
    desc: '平台公开发布，全球100位顶级KOL入驻，KMT TGE。',
    icon: <Users size={20} />,
    status: 'upcoming'
  },
  {
    date: 'Q4 2026',
    title: '数字生命铸造厂',
    desc: '开放 DLT 铸造，AVM 模型正式投入使用。',
    icon: <Rocket size={20} />,
    status: 'future'
  },
  {
    date: 'Q2 2028',
    title: '开放机器人协议 V1.0',
    desc: '与首批机器人硬件公司达成战略合作，打通具身智能。',
    icon: <Flag size={20} />,
    status: 'future'
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-dark-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">产品路线图</h2>
          <p className="mt-4 text-gray-400">迈向具身智能与开放生态的征程</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <div className={`bg-dark-bg p-6 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-colors ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-bold mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-dark-card border-4 border-dark-bg flex items-center justify-center z-10 hidden md:flex shadow-lg shadow-black">
                  <div className="text-yellow-500">{item.icon}</div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
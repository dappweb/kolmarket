import React from 'react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'Nathan L.',
    role: 'Co-Founder & CEO',
    description: '"Cryptonauts" 主持人 (10w+粉丝)，采访过 Vitalik 等百余位创始人。负责愿景与全球品牌。',
    image: 'https://picsum.photos/id/1005/400/400'
  },
  {
    name: 'Wade Zhang',
    role: 'Co-Founder & CTO',
    description: 'Metakina RWA 平台 CEO，10年+区块链与 RWA 开发经验。负责技术架构与合规。',
    image: 'https://picsum.photos/id/1012/400/400'
  },
  {
    name: 'Di Moon Zhang',
    role: 'Co-Founder & CDO',
    description: '前 MTV 签约导演，YouTube 百万播放创作者。负责 AI 驱动的内容生态与创意。',
    image: 'https://picsum.photos/id/1025/400/400'
  },
  {
    name: 'Justin Wu',
    role: 'CMO',
    description: 'DCENTRAL 创始人，资深 Web3 营销专家。负责全球市场增长。',
    image: 'https://picsum.photos/id/1062/400/400'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">核心团队</h2>
          <p className="mt-4 text-gray-400">顶尖且稀缺的跨界团队，拥有 Web3、AI 与全球市场深厚基因</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-yellow-500 text-sm font-semibold">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
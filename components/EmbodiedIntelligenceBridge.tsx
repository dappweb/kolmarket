
import React, { useState } from 'react';
import { Cpu, Wifi, Activity, Battery, Video, Radio, Command, Globe, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const EmbodiedIntelligenceBridge: React.FC = () => {
  const [activeRobot, setActiveRobot] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');

  const robots = [
    { id: 'optimus', name: 'Tesla Optimus Gen 2', status: 'Online', battery: 85, region: 'North America' },
    { id: 'figure', name: 'Figure 01', status: 'Standby', battery: 92, region: 'Europe' },
    { id: 'unitree', name: 'Unitree H1', status: 'Online', battery: 78, region: 'Asia Pacific' }
  ];

  const handleConnect = (id: string) => {
    setActiveRobot(id);
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 2000);
  };

  const installedSkills = [
      { id: 'dance_01', name: 'Signature Moonwalk', type: 'Motion', active: true },
      { id: 'voice_01', name: 'Cyberpunk Narrative', type: 'Voice', active: false },
  ];

  return (
    <div className="bg-dark-card border border-white/10 rounded-2xl p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Bot className="text-blue-400" />
            具身智能服务桥 (Embodied Intelligence Bridge)
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            将数字生命意识注入物理世界的人形机器人载体，服务全球客户。
          </p>
        </div>
        <div className="flex items-center gap-2">
            <span className={`flex h-3 w-3 relative ${connectionStatus === 'connected' ? '' : 'hidden'}`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono text-gray-300 uppercase">
                {connectionStatus === 'connected' ? 'Neural Link Active' : 'Bridge Standby'}
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Robot Selector - Mobile Optimized */}
        <div className="space-y-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 gap-4 lg:gap-0 lg:space-y-4 snap-x">
          <h4 className="hidden lg:block text-sm font-medium text-gray-400 uppercase tracking-wider">可用载体节点</h4>
          {robots.map((robot) => (
            <div 
              key={robot.id}
              onClick={() => handleConnect(robot.id)}
              className={`flex-shrink-0 w-[280px] lg:w-auto snap-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                activeRobot === robot.id 
                  ? 'bg-blue-500/20 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-white">{robot.name}</span>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  {robot.status}
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Battery size={12} /> {robot.battery}%
                </div>
                <div className="flex items-center gap-1">
                  <Globe size={12} /> {robot.region}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry & Control - Mobile Optimized */}
        <div className="lg:col-span-2 bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden min-h-[400px]">
          {connectionStatus === 'connected' ? (
            <div className="h-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <div className="bg-dark-bg p-3 rounded-lg border border-white/10 w-32 md:w-48 flex-shrink-0">
                            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Activity size={12}/> 运动延迟</div>
                            <div className="text-xl font-mono text-green-400">12ms</div>
                        </div>
                        <div className="bg-dark-bg p-3 rounded-lg border border-white/10 w-32 md:w-48 flex-shrink-0">
                            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Wifi size={12}/> 带宽占用</div>
                            <div className="text-xl font-mono text-blue-400">450 MB/s</div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 border border-red-500/30 transition-colors flex items-center justify-center gap-2">
                            <Command size={18} /> <span className="md:hidden">紧急制动</span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 bg-gradient-to-b from-blue-900/10 to-transparent rounded-lg border border-white/5 relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-64 h-64 border border-blue-500/30 rounded-full animate-ping"></div>
                        <div className="w-48 h-48 border border-blue-500/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    <div className="text-center relative z-10">
                        <Video size={48} className="mx-auto text-blue-400 mb-4 opacity-80" />
                        <h3 className="text-lg font-bold text-white">第一人称视觉流 (FPV)</h3>
                        <p className="text-sm text-gray-400">正在传输 {activeRobot ? robots.find(r => r.id === activeRobot)?.name : ''} 的视觉信号...</p>
                        <div className="mt-4 flex justify-center gap-2">
                            <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">Object Recognition: Active</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">SLAM: Active</span>
                        </div>
                    </div>

                    {/* Skill Subscription Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider">已订阅技能 (Subscribed Skills)</h4>
                            <span className="text-[10px] text-green-400">Subscription Active</span>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
                            {installedSkills.map(skill => (
                                <div key={skill.id} className={`flex-shrink-0 px-3 py-2 rounded-lg border text-xs flex items-center gap-2 ${skill.active ? 'bg-blue-500/20 border-blue-500/50 text-white' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${skill.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                                    <span>{skill.name}</span>
                                    {skill.active ? (
                                        <button className="text-[10px] bg-white/10 px-1.5 rounded hover:bg-white/20">Deactivate</button>
                                    ) : (
                                        <button className="text-[10px] bg-green-500/20 text-green-400 px-1.5 rounded hover:bg-green-500/30">Activate</button>
                                    )}
                                </div>
                            ))}
                            <div className="flex-shrink-0 px-3 py-2 rounded-lg border border-white/10 border-dashed text-xs text-gray-500 flex items-center gap-1 hover:text-white hover:border-white/30 cursor-pointer">
                                + Subscribe New
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <Radio size={48} className="mb-4 opacity-20" />
                <p>请选择一个物理载体以建立神经连接</p>
                {connectionStatus === 'connecting' && (
                    <div className="mt-4 text-blue-400 flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        正在握手协议...
                    </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmbodiedIntelligenceBridge;

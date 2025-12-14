import React, { useState, useEffect } from 'react';
import { Bot, Play, Pause, RefreshCw, Cpu, Activity, Download } from 'lucide-react';

const SoulPreview: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentAction, setCurrentAction] = useState('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '> Initializing Soul Protocol v1.0...',
    '> Loading Personality Matrix (Llama-3-8B-KOL)... OK',
    '> Syncing Voice Pattern (ElevenLabs)... OK',
    '> Calibrating Motor Control (VLA Model)... OK',
    '> Soul Injection Ready.'
  ]);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        // Simulate log updates
        const actions = [
          'Processing visual input...',
          'Generating emotional response...',
          'Adjusting servo torque...',
          'Memory retrieval: context_id_9921'
        ];
        const randomLog = actions[Math.floor(Math.random() * actions.length)];
        setTerminalLogs(prev => [...prev.slice(-4), `> ${randomLog}`]);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <div className="w-full bg-dark-card border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row h-[600px]">
      {/* Left: 3D Visualization Area (Mock) */}
      <div className="lg:w-2/3 bg-gradient-to-b from-gray-900 to-black relative flex items-center justify-center overflow-hidden">
        {/* Grid Floor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(200px)_scale(2)] pointer-events-none"></div>
        
        {/* Robot Figure (CSS Representation) */}
        <div className={`relative transition-transform duration-700 ${isAnimating ? 'animate-pulse-slow' : ''}`}>
          {/* Head */}
          <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl border border-white/20 relative mx-auto mb-2 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <div className="absolute inset-2 bg-black rounded-xl flex items-center justify-center overflow-hidden">
              <div className="flex gap-2">
                <div className={`w-3 h-3 rounded-full bg-blue-400 ${isAnimating ? 'animate-blink' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full bg-blue-400 ${isAnimating ? 'animate-blink' : ''}`} style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
          {/* Body */}
          <div className="w-40 h-56 bg-gradient-to-br from-gray-800 to-black rounded-3xl border border-white/10 relative flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
               <Cpu className="text-blue-400 animate-spin-slow" size={32} />
             </div>
          </div>
          {/* Arms (Simplified) */}
          <div className={`absolute top-28 -left-12 w-10 h-40 bg-gray-800 rounded-full border border-white/10 origin-top transition-transform duration-1000 ${currentAction === 'wave' ? 'rotate-[150deg]' : 'rotate-12'}`}></div>
          <div className="absolute top-28 -right-12 w-10 h-40 bg-gray-800 rounded-full border border-white/10 origin-top -rotate-12"></div>
        </div>

        {/* Overlay UI */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs text-green-400 font-mono">
          <Activity size={12} className="animate-pulse" />
          SYSTEM ONLINE
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
           <button 
             onClick={() => setCurrentAction('idle')}
             className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all ${currentAction === 'idle' ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
           >
             待机 (Idle)
           </button>
           <button 
             onClick={() => setCurrentAction('wave')}
             className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all ${currentAction === 'wave' ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
           >
             挥手 (Wave)
           </button>
           <button 
             onClick={() => setCurrentAction('talk')}
             className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all ${currentAction === 'talk' ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
           >
             对话 (Talk)
           </button>
        </div>
      </div>

      {/* Right: Control Panel */}
      <div className="lg:w-1/3 bg-black/50 p-6 flex flex-col border-l border-white/5">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
            <Bot className="text-purple-400" /> Soul Injection
          </h3>
          <p className="text-sm text-gray-400">数字生命协议 (KSP-721) 配置面板</p>
        </div>

        {/* Configuration */}
        <div className="space-y-6 flex-grow">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Personality Model</label>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm text-white flex justify-between items-center">
              <span>Llama-3-8B-KOL-v1</span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Voice Engine</label>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm text-white flex justify-between items-center">
              <span>ElevenLabs (Cloned)</span>
              <div className="flex gap-1">
                <span className="w-1 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Terminal Output</label>
            <div className="bg-black rounded-lg p-3 font-mono text-xs text-green-500/80 h-32 overflow-y-auto border border-white/10">
              {terminalLogs.map((log, i) => (
                <div key={i} className="mb-1">{log}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 group">
            <Download size={18} />
            下载灵魂数据包 (.json)
          </button>
          <p className="text-[10px] text-gray-500 text-center mt-3">
            兼容 Unitree H1 / Tesla Optimus / Figure 01
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoulPreview;

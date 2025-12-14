import React, { useState } from 'react';
import { Youtube, Instagram, Twitter, CheckCircle, Lock, ArrowRight, BarChart3, Coins, Rocket, Loader2, Users } from 'lucide-react';
import { LaunchPhase, SocialAccount, TokenConfig } from '../types';

const TokenLaunchpad: React.FC = () => {
  const [phase, setPhase] = useState<LaunchPhase>(1);
  const [loading, setLoading] = useState(false);
  
  const [accounts, setAccounts] = useState<SocialAccount[]>([
    { platform: 'youtube', handle: '', connected: false, followers: 0, engagementRate: 0 },
    { platform: 'twitter', handle: '', connected: false, followers: 0, engagementRate: 0 },
    { platform: 'instagram', handle: '', connected: false, followers: 0, engagementRate: 0 },
  ]);

  const [valuation, setValuation] = useState<number>(0);
  const [tokenConfig, setTokenConfig] = useState<TokenConfig>({
    name: '',
    symbol: '',
    supply: 100000000,
    price: 0.01,
  });

  // Phase 1: Connect Accounts
  const handleConnect = (platform: string) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAccounts(prev => prev.map(acc => {
        if (acc.platform === platform) {
          // Mock data generation
          const mockFollowers = Math.floor(Math.random() * 500000) + 50000;
          const mockEngagement = Number((Math.random() * 5 + 1).toFixed(2));
          return {
            ...acc,
            connected: true,
            handle: `@${platform}_user`,
            followers: mockFollowers,
            engagementRate: mockEngagement
          };
        }
        return acc;
      }));
      setLoading(false);
    }, 1500);
  };

  // Phase 2: AVM Valuation
  const calculateValuation = () => {
    setLoading(true);
    setTimeout(() => {
      const totalScore = accounts.reduce((acc, curr) => {
        if (curr.connected) {
          return acc + (curr.followers * curr.engagementRate);
        }
        return acc;
      }, 0);
      
      // Simple mock formula: Score * Multiplier
      const mockValuation = Math.floor(totalScore * 0.5); 
      setValuation(mockValuation);
      
      // Auto-fill token price based on valuation
      setTokenConfig(prev => ({
        ...prev,
        price: Number((mockValuation / prev.supply).toFixed(4))
      }));
      
      setPhase(3);
      setLoading(false);
    }, 2000);
  };

  // Phase 3: Issue Token
  const handleIssueToken = () => {
    setLoading(true);
    setTimeout(() => {
      setPhase(4);
      setLoading(false);
    }, 2500);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  };

  return (
    <section id="launchpad" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            <Rocket size={16} />
            <span>Creator Launchpad</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">影响力资产发行控制台</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            只需三步，将您的社交影响力转化为可交易的数字资产。
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10"></div>
          <div className={`absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 -z-10 transition-all duration-500`} 
               style={{ width: `${((phase - 1) / 3) * 100}%` }}></div>

          {[
            { id: 1, label: '绑定平台', icon: Users },
            { id: 2, label: 'AVM 估值', icon: BarChart3 },
            { id: 3, label: '发行资产', icon: Coins },
            { id: 4, label: '完成', icon: CheckCircle }
          ].map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-2 bg-dark-bg px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${phase >= step.id 
                  ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'bg-dark-card border-gray-600 text-gray-500'}`}>
                {phase > step.id ? <CheckCircle size={20} /> : <step.icon size={20} />}
              </div>
              <span className={`text-xs font-medium ${phase >= step.id ? 'text-white' : 'text-gray-500'}`}>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Main Card Area */}
        <div className="bg-dark-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[400px]">
          
          {/* Phase 1: Connect Platforms */}
          {phase === 1 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">聚合您的社交影响力</h3>
                <p className="text-gray-400">我们将通过安全 API 读取您的公开数据，并通过 AVM 模型评估市场价值。</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {accounts.map((acc) => (
                  <div key={acc.platform} className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${acc.connected ? 'bg-blue-500/10 border-blue-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        acc.platform === 'youtube' ? 'bg-red-500/20 text-red-500' :
                        acc.platform === 'twitter' ? 'bg-blue-400/20 text-blue-400' :
                        'bg-pink-500/20 text-pink-500'
                      }`}>
                        {acc.platform === 'youtube' && <Youtube size={24} />}
                        {acc.platform === 'twitter' && <Twitter size={24} />}
                        {acc.platform === 'instagram' && <Instagram size={24} />}
                      </div>
                      <div>
                        <div className="text-white font-medium capitalize">{acc.platform}</div>
                        <div className="text-sm text-gray-400">
                          {acc.connected ? (
                            <span className="flex items-center gap-2 text-green-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                              已连接: {acc.handle}
                            </span>
                          ) : '未连接'}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleConnect(acc.platform)}
                      disabled={acc.connected || loading}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        acc.connected 
                          ? 'bg-transparent text-gray-500 cursor-default' 
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {loading && !acc.connected ? <Loader2 className="animate-spin" size={16} /> : acc.connected ? '已授权' : '连接'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setPhase(2)}
                  disabled={!accounts.some(a => a.connected)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  开始估值 <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Phase 2: AVM Valuation */}
          {phase === 2 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">AVM 智能估值中...</h3>
                <p className="text-gray-400">基于多维度数据的 AI 价值模型分析</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accounts.filter(a => a.connected).map(acc => (
                  <div key={acc.platform} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                    <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">{acc.platform}</div>
                    <div className="text-2xl font-bold text-white mb-1">{formatNumber(acc.followers)}</div>
                    <div className="text-sm text-blue-400">粉丝数量</div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="text-xl font-bold text-white">{acc.engagementRate}%</div>
                      <div className="text-xs text-gray-500">互动率</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 animate-pulse-slow"></div>
                <h4 className="text-lg text-gray-300 mb-2 relative z-10">预计市场初始市值 (Market Cap)</h4>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 relative z-10">
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="animate-spin" /> 计算中...
                    </span>
                  ) : (
                    formatCurrency(valuation || 1500000) // Fallback for display before calculation finishes
                  )}
                </div>
                {!loading && (
                   <div className="text-sm text-gray-400 relative z-10">
                    *估值基于 KOLMarket AVM V1.0 算法模型，置信度 98.5%
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={calculateValuation}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
                >
                  {loading ? '分析中...' : '确认估值并前往发行'} <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Phase 3: Token Config */}
          {phase === 3 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">配置您的影响力代币</h3>
                <p className="text-gray-400">定义代币参数，准备启动 TGE (Token Generation Event)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">代币名称</label>
                    <input 
                      type="text" 
                      value={tokenConfig.name}
                      onChange={(e) => setTokenConfig({...tokenConfig, name: e.target.value})}
                      placeholder="e.g., Elon Musk AI"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">代币符号 (Ticker)</label>
                    <input 
                      type="text" 
                      value={tokenConfig.symbol}
                      onChange={(e) => setTokenConfig({...tokenConfig, symbol: e.target.value.toUpperCase()})}
                      placeholder="e.g., EMAI"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">总供应量</label>
                    <input 
                      type="number" 
                      value={tokenConfig.supply}
                      disabled
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">初始发行价 (基于估值)</label>
                    <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-green-400 font-mono">
                      ${tokenConfig.price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex items-start gap-3">
                <Lock className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-yellow-200/80">
                  <strong className="text-yellow-500 block mb-1">锁仓机制说明</strong>
                  创作者代币将遵循 12 个月的线性释放期。前 3 个月为锁定期，随后每月释放 10%。这确保了长期价值绑定。
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleIssueToken}
                  disabled={!tokenConfig.name || !tokenConfig.symbol || loading}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Rocket size={20} />}
                  {loading ? '合约部署中...' : '立即铸造数字生命'}
                </button>
              </div>
            </div>
          )}

          {/* Phase 4: Success */}
          {phase === 4 && (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="text-green-500 w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">发行成功!</h3>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                恭喜！您的数字生命资产 <strong className="text-white">${tokenConfig.symbol}</strong> 已成功部署至区块链网络。
                交易对已在 KOLMarket DEX 建立。
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 max-w-md mx-auto border border-white/10 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">合约地址</span>
                  <span className="text-blue-400 font-mono text-sm">0x71C...9A21</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">初始市值</span>
                  <span className="text-white font-mono">{formatCurrency(valuation)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">流动性池</span>
                  <span className="text-green-400">已添加 (100% Locked)</span>
                </div>
              </div>

              <button
                onClick={() => {
                   setPhase(1);
                   setAccounts(prev => prev.map(a => ({...a, connected: false})));
                   setValuation(0);
                   setTokenConfig({name: '', symbol: '', supply: 100000000, price: 0.01});
                }}
                className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                返回控制台
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TokenLaunchpad;
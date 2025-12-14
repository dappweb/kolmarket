import React, { useState } from 'react';
import { Youtube, Instagram, Twitter, CheckCircle, Lock, ArrowRight, BarChart3, Coins, Rocket, Loader2, Users, Brain, X, Wallet } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import toast from 'react-hot-toast';
import { useTranslation, Trans } from 'react-i18next';
import { LaunchPhase, SocialAccount, TokenConfig, ProjectCategory } from '../types';
import { analyzeInfluence, ValuationResponse } from '../src/services/valuation';
import { bindCreatorSoul } from '../src/services/soul_binding';
import { verifySocialAccount, saveAccounts, getStoredAccounts, clearAccounts } from '../src/services/social';
import { generateDigitalLifePrompt, formatPromptForContract } from '../src/services/prompt_generator';

const TokenLaunchpad: React.FC = () => {
  const { t } = useTranslation();
  const { connected } = useWallet();
  const [phase, setPhase] = useState<LaunchPhase>(1);
  const [loading, setLoading] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState<string | null>(null);
  const [handleInput, setHandleInput] = useState('');

  // Initial accounts state (try loading from storage first)
  const [accounts, setAccounts] = useState<SocialAccount[]>(() => {
    const stored = getStoredAccounts();
    if (stored) return stored;
    return [
      { platform: 'youtube', handle: '', connected: false, followers: 0, engagementRate: 0 },
      { platform: 'twitter', handle: '', connected: false, followers: 0, engagementRate: 0 },
      { platform: 'instagram', handle: '', connected: false, followers: 0, engagementRate: 0 },
    ];
  });

  // Save to storage whenever accounts change
  React.useEffect(() => {
    if (accounts.some(a => a.connected)) {
        saveAccounts(accounts);
    }
  }, [accounts]);

  const [valuation, setValuation] = useState<number>(0);
  const [aiAnalysis, setAiAnalysis] = useState<ValuationResponse | null>(null);
  const [soulMint, setSoulMint] = useState<string | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [tokenConfig, setTokenConfig] = useState<TokenConfig>({
    name: '',
    symbol: '',
    supply: 100000000,
    price: 0.01,
    category: 'Other'
  });

  // Phase 1: Connect Accounts
  const openConnectModal = (platform: string) => {
    setCurrentPlatform(platform);
    setHandleInput('');
    setIsModalOpen(true);
  };

  const handleConnect = async () => {
    if (!currentPlatform || !handleInput) return;

    setLoading(true);
    setIsModalOpen(false); // Close modal immediately to show loading on card

    try {
        const verifiedAccount = await verifySocialAccount(currentPlatform, handleInput);
        
        setAccounts(prev => prev.map(acc => {
            if (acc.platform === currentPlatform) {
                return { ...acc, ...verifiedAccount };
            }
            return acc;
        }));
        toast.success(`Successfully connected ${currentPlatform}!`);
    } catch (error) {
        toast.error("Verification failed. Please check the handle.");
    } finally {
        setLoading(false);
        setCurrentPlatform(null);
    }
  };

  const handleDisconnect = (platform: string) => {
      // toast.custom used for confirmation dialog could be an advanced usage, 
      // but for now we stick to window.confirm or we could use a custom modal.
      // Keeping window.confirm for simplicity as per previous implementation, but adding a success toast after.
      if(!window.confirm(`Are you sure you want to disconnect ${platform}?`)) return;
      
      setAccounts(prev => {
          const newAccounts = prev.map(acc => {
              if (acc.platform === platform) {
                  return { ...acc, connected: false, handle: '', followers: 0, engagementRate: 0 };
              }
              return acc;
          });
          
          // If no accounts connected, clear storage
          if (!newAccounts.some(a => a.connected)) {
              clearAccounts();
          } else {
              saveAccounts(newAccounts);
          }
          return newAccounts;
      });
      toast.success(`${platform} disconnected.`);
  };

  // Phase 2: AVM Valuation
  const calculateValuation = async () => {
    setLoading(true);
    
    // Find connected accounts
    const connectedAccounts = accounts.filter(a => a.connected);
    const mainAccount = connectedAccounts[0]; // Use the first one for main valuation context

    if (mainAccount) {
        try {
            // Call AI Service
            const result = await analyzeInfluence({
                kolName: mainAccount.handle || "Unknown",
                platform: mainAccount.platform,
                followers: connectedAccounts.reduce((acc, curr) => acc + curr.followers, 0), // Aggregate followers
                engagementRate: mainAccount.engagementRate // Use main account engagement
            });
            
            setAiAnalysis(result);
            setValuation(result.marketCap);
            
            // Generate Digital Life Prompt
            const prompt = generateDigitalLifePrompt({
                name: mainAccount.handle || "Unknown",
                accounts: accounts,
                valuation: result
            });
            setGeneratedPrompt(formatPromptForContract(prompt));

            // Auto-fill token price based on valuation
            setTokenConfig(prev => ({
                ...prev,
                price: Number((result.marketCap / prev.supply).toFixed(4))
            }));
            
            setPhase(3);
            toast.success("AI Valuation Complete! Digital Life Protocol Generated.");
        } catch (e) {
            console.error("Valuation failed", e);
            toast.error("AI Valuation Service Unavailable.");
        }
    }
    setLoading(false);
  };

  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const MINT_FEE_KMT = 1000; // Fixed fee for simplicity for now

  // Phase 3: Issue Token
  const handleIssueToken = () => {
    setLoading(true);
    // Simulate payment and minting
    setTimeout(() => {
      setPhase(4);
      setLoading(false);
      toast.success("Token Issued & Digital Life Minted Successfully!", { duration: 5000 });
    }, 2500);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  };

  const handleBindSoul = async () => {
    try {
      // @ts-ignore wallet provider
      const provider = window.solana
      if (!provider?.publicKey) {
        return toast.error('请先连接钱包')
      }
      const { Connection, Transaction, PublicKey } = await import('@solana/web3.js')
      const connection = new Connection('https://api.devnet.solana.com')
      const res = await bindCreatorSoul(connection, new PublicKey(provider.publicKey.toBase58()), async (tx: Transaction) => {
        tx.feePayer = provider.publicKey
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        const signed = await provider.signTransaction(tx)
        const sig = await connection.sendRawTransaction(signed.serialize(), { skipPreflight: true })
        await connection.confirmTransaction(sig, 'confirmed')
        return sig
      })
      setSoulMint(res.soulMint.toBase58())
      toast.success(`Soul 绑定成功: ${res.soulMint.toBase58()}`)
    } catch (e) {
      console.error(e)
      toast.error('Soul 绑定失败')
    }
  }

  return (
    <section id="launchpad" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            <Rocket size={16} />
            <span>{t('launchpad.title')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('launchpad.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('launchpad.subtitle')}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10"></div>
          <div className={`absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 -z-10 transition-all duration-500`} 
               style={{ width: `${((phase - 1) / 3) * 100}%` }}></div>

          {[
            { id: 1, label: t('launchpad.steps.connect'), icon: Users },
            { id: 2, label: t('launchpad.steps.valuation'), icon: BarChart3 },
            { id: 3, label: t('launchpad.steps.issue'), icon: Coins },
            { id: 4, label: t('launchpad.steps.finish'), icon: CheckCircle }
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
                <h3 className="text-2xl font-bold text-white mb-2">{t('launchpad.phase1.title')}</h3>
                <p className="text-gray-400">{t('launchpad.phase1.desc')}</p>
              </div>
            
            {!connected ? (
                <div className="flex flex-col items-center justify-center py-12 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 text-yellow-500">
                        <Wallet size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{t('launchpad.phase1.connect_wallet_title')}</h4>
                    <p className="text-gray-400 mb-6 text-center max-w-sm">
                        {t('launchpad.phase1.connect_wallet_desc')}
                    </p>
                    <WalletMultiButton className="!bg-gradient-to-r !from-yellow-500 !to-orange-600 !rounded-full !font-bold hover:!shadow-lg !transition-all" />
                </div>
            ) : (
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
                              {t('launchpad.phase1.connected')}: {acc.handle}
                            </span>
                          ) : t('launchpad.phase1.not_connected')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button
                          onClick={() => openConnectModal(acc.platform)}
                          disabled={acc.connected || loading}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            acc.connected 
                              ? 'bg-transparent text-gray-500 hidden' 
                              : 'bg-white text-black hover:bg-gray-200'
                          }`}
                        >
                          {loading && !acc.connected ? <Loader2 className="animate-spin" size={16} /> : t('launchpad.phase1.connect_btn')}
                        </button>
                        
                        {acc.connected && (
                            <button 
                                onClick={() => handleDisconnect(acc.platform)}
                                className="px-4 py-2 rounded-lg text-sm font-medium border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-all"
                            >
                                {t('launchpad.phase1.disconnect_btn')}
                            </button>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {connected && (
              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={handleBindSoul}
                  className="px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  {soulMint ? `Soul 已绑定 (${soulMint.slice(0,4)}...${soulMint.slice(-4)})` : '绑定 Soul'}
                </button>
                <button
                  onClick={() => setPhase(2)}
                  disabled={!accounts.some(a => a.connected)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  {t('launchpad.phase1.start_valuation')} <ArrowRight size={20} />
                </button>
              </div>
             )}
            </div>
          )}

          {/* Phase 2: AVM Valuation */}
          {phase === 2 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{t('launchpad.phase2.analyzing')}</h3>
                <p className="text-gray-400">{t('launchpad.phase2.analyzing_desc')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accounts.filter(a => a.connected).map(acc => (
                  <div key={acc.platform} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                    <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">{acc.platform}</div>
                    <div className="text-2xl font-bold text-white mb-1">{formatNumber(acc.followers)}</div>
                    <div className="text-sm text-blue-400">{t('launchpad.phase2.followers')}</div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="text-xl font-bold text-white">{acc.engagementRate}%</div>
                      <div className="text-xs text-gray-500">{t('launchpad.phase2.engagement')}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 animate-pulse-slow"></div>
                <h4 className="text-lg text-gray-300 mb-2 relative z-10">{t('launchpad.phase2.est_market_cap')}</h4>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 relative z-10">
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="animate-spin" /> {t('launchpad.phase2.calculating')}
                    </span>
                  ) : (
                    formatCurrency(valuation || 1500000) // Fallback for display before calculation finishes
                  )}
                </div>
                {!loading && (
                   <div className="text-sm text-gray-400 relative z-10">
                    {t('launchpad.phase2.confidence')}
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={calculateValuation}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
                >
                  {loading ? t('launchpad.phase2.analyzing') : t('launchpad.phase2.confirm_btn')} <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Phase 3: Token Config */}
          {phase === 3 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{t('launchpad.phase3.title')}</h3>
                <p className="text-gray-400">{t('launchpad.phase3.desc')}</p>
              </div>

              {aiAnalysis && (
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Brain size={64} className="text-purple-500" />
                    </div>
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                        <Brain size={18} /> {t('launchpad.phase3.ai_report')}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {aiAnalysis.reasoning}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        <div className="bg-dark-bg/50 px-3 py-1.5 rounded-lg border border-white/10">
                            <span className="text-gray-500 mr-2">{t('launchpad.phase3.avm_score')}</span>
                            <span className="text-white font-bold">{aiAnalysis.score}/100</span>
                        </div>
                        <div className="bg-dark-bg/50 px-3 py-1.5 rounded-lg border border-white/10">
                            <span className="text-gray-500 mr-2">{t('launchpad.phase3.suggested_cap')}</span>
                            <span className="text-green-400 font-bold font-mono">{formatCurrency(aiAnalysis.marketCap)}</span>
                        </div>
                    </div>
                    
                    {generatedPrompt && (
                        <div className="mt-4 pt-4 border-t border-purple-500/20">
                            <h5 className="text-xs font-bold text-purple-300 mb-2 flex items-center gap-2">
                                <Lock size={12} /> {t('launchpad.phase3.llm_prompt')}
                            </h5>
                            <div className="bg-black/50 p-3 rounded-lg border border-white/5 font-mono text-[10px] text-gray-400 break-all h-20 overflow-y-auto custom-scrollbar">
                                {generatedPrompt}
                            </div>
                            <div className="text-[10px] text-gray-500 mt-1">
                                {t('launchpad.phase3.prompt_note')}
                            </div>
                        </div>
                    )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t('launchpad.phase3.category')}</label>
                  <div className="flex flex-wrap gap-2">
                    {['Gaming', 'DeFi', 'Social', 'AI', 'Music', 'Art', 'Other'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setTokenConfig({...tokenConfig, category: cat as ProjectCategory})}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          tokenConfig.category === cat 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {t(`categories.${cat.toLowerCase()}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">{t('launchpad.phase3.token_name')}</label>
                    <input 
                      type="text" 
                      value={tokenConfig.name}
                      onChange={(e) => setTokenConfig({...tokenConfig, name: e.target.value})}
                      placeholder="e.g., Elon Musk AI"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">{t('launchpad.phase3.token_symbol')}</label>
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
                    <label className="block text-sm font-medium text-gray-400 mb-1">{t('launchpad.phase3.total_supply')}</label>
                    <input 
                      type="number" 
                      value={tokenConfig.supply}
                      disabled
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">{t('launchpad.phase3.initial_price')}</label>
                    <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-green-400 font-mono">
                      ${tokenConfig.price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex items-start gap-3">
                <Lock className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-yellow-200/80">
                  <strong className="text-yellow-500 block mb-1">{t('launchpad.phase3.lockup_title')}</strong>
                  {t('launchpad.phase3.lockup_desc')}
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                     <Coins className="text-blue-400" size={20} /> {t('launchpad.phase3.crowd_minting')}
                 </h4>
                 <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                     <div className="text-sm text-gray-400 flex-1">
                         <p className="mb-2">{t('launchpad.phase3.crowd_desc1')}</p>
                         <p className="text-blue-300 bg-blue-500/10 inline-block px-2 py-1 rounded mb-2">
                            {t('launchpad.phase3.crowd_desc2')}
                         </p>
                         <p>{t('launchpad.phase3.current_fee')} <strong className="text-white">{MINT_FEE_KMT} KMT</strong></p>
                     </div>
                     
                     <div className="flex flex-col gap-2 w-full md:w-auto">
                        <div className="flex items-center gap-2 bg-black/30 rounded-lg p-1 border border-white/10">
                             <input 
                                type="number" 
                                value={paymentAmount}
                                onChange={(e) => setPaymentAmount(Number(e.target.value))}
                                placeholder={t('launchpad.phase3.input_amount')}
                                className="bg-transparent text-white px-3 py-2 w-32 focus:outline-none text-right"
                             />
                             <span className="text-gray-500 pr-3 text-sm">KMT</span>
                        </div>
                        <button className="text-xs text-blue-400 hover:text-blue-300 underline text-right">
                            {t('launchpad.phase3.balance')} 5,420 KMT
                        </button>
                     </div>
                 </div>
                 
                 {paymentAmount > 0 && paymentAmount < MINT_FEE_KMT && (
                     <div className="mt-3 text-xs text-red-400 text-right">
                         <Trans i18nKey="launchpad.phase3.need_more" values={{ amount: MINT_FEE_KMT - paymentAmount }}>
                            还需 {{ amount: MINT_FEE_KMT - paymentAmount }} KMT 才能完成铸造
                         </Trans>
                     </div>
                 )}
                 {paymentAmount >= MINT_FEE_KMT && (
                     <div className="mt-3 text-xs text-green-400 text-right flex items-center justify-end gap-1">
                         <CheckCircle size={12} /> {t('launchpad.phase3.fee_sufficient')}
                     </div>
                 )}
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleIssueToken}
                  disabled={!tokenConfig.name || !tokenConfig.symbol || loading || paymentAmount < MINT_FEE_KMT}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Rocket size={20} />}
                  {loading ? t('launchpad.phase3.deploying') : t('launchpad.phase3.issue_btn')}
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
              <h3 className="text-3xl font-bold text-white mb-4">{t('launchpad.phase4.success')}</h3>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                <Trans i18nKey="launchpad.phase4.success_desc" values={{ symbol: tokenConfig.symbol }}>
                    恭喜！您的数字生命资产 <strong className="text-white">${tokenConfig.symbol}</strong> 已成功部署至区块链网络。
                    交易对已在 KOLMarket DEX 建立。
                </Trans>
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 max-w-md mx-auto border border-white/10 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">{t('launchpad.phase4.contract_addr')}</span>
                  <span className="text-blue-400 font-mono text-sm">0x71C...9A21</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">{t('launchpad.phase4.init_market_cap')}</span>
                  <span className="text-white font-mono">{formatCurrency(valuation)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">{t('launchpad.phase4.liquidity_pool')}</span>
                  <span className="text-green-400">{t('launchpad.phase4.liquidity_added')}</span>
                </div>
              </div>

              <button
                onClick={() => {
                   setPhase(1);
                   setAccounts(prev => prev.map(a => ({...a, connected: false})));
                   setValuation(0);
                   setTokenConfig({name: '', symbol: '', supply: 100000000, price: 0.01, category: 'Other'});
                }}
                className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                {t('launchpad.phase4.back_btn')}
              </button>
            </div>
          )}

          {/* Connect Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <div className="bg-dark-card border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative animate-scale-in">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                    
                    <h3 className="text-xl font-bold text-white mb-2 capitalize">
                        {t('launchpad.modal.verify_title', { platform: currentPlatform })}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                        {t('launchpad.modal.verify_desc')}
                    </p>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                {t('launchpad.modal.handle_label', { platform: currentPlatform })}
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                                <input 
                                    type="text" 
                                    value={handleInput}
                                    onChange={(e) => setHandleInput(e.target.value.replace(/^@/, ''))}
                                    placeholder="username"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    autoFocus
                                    onKeyDown={(e) => e.key === 'Enter' && handleConnect()}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                {t('launchpad.modal.verify_note')}
                            </p>
                        </div>
                        
                        <div className="pt-2">
                            <button
                                onClick={handleConnect}
                                disabled={!handleInput.trim()}
                                className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {t('launchpad.modal.verify_btn')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TokenLaunchpad;

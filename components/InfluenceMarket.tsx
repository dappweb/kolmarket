import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Info, Search, Wallet, Clock, BarChart2, ArrowUpRight, ArrowDownRight, Brain, Loader } from 'lucide-react';
import { Platform, ProjectCategory } from '../types';
import { TradingChart } from './TradingChart';
import { analyzeInfluence, ValuationResponse } from '../src/services/valuation';

interface MarketItem {
  id: string;
  kolName: string;
  avatar: string;
  platform: Platform;
  category: ProjectCategory;
  tokenSymbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  avmScore: number;
  volume24h: number;
}

interface PortfolioItem {
  tokenSymbol: string;
  amount: number;
}

interface OrderBookItem {
  price: number;
  amount: number;
  total: number;
  type: 'ask' | 'bid';
}

const mockMarketData: MarketItem[] = [
  // Gaming
  { id: '1', kolName: 'TechVisionary', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100', platform: 'youtube', category: 'Gaming', tokenSymbol: 'TECH', price: 4.25, change24h: 12.5, marketCap: 42500000, avmScore: 94.5, volume24h: 1200000 },
  { id: '5', kolName: 'GamingPro', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&h=100', platform: 'youtube', category: 'Gaming', tokenSymbol: 'GAME', price: 2.10, change24h: -0.5, marketCap: 21000000, avmScore: 89.5, volume24h: 890000 },
  { id: '6', kolName: 'PixelMaster', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100', platform: 'twitch', category: 'Gaming', tokenSymbol: 'PIXEL', price: 0.85, change24h: 3.2, marketCap: 8500000, avmScore: 85.0, volume24h: 320000 },
  { id: '7', kolName: 'RetroGamer', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&h=100', platform: 'youtube', category: 'Gaming', tokenSymbol: 'RETRO', price: 1.20, change24h: -1.5, marketCap: 12000000, avmScore: 82.5, volume24h: 450000 },

  // DeFi
  { id: '2', kolName: 'CryptoAnalyst', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'DeFi', tokenSymbol: 'COIN', price: 1.85, change24h: -2.3, marketCap: 18500000, avmScore: 88.2, volume24h: 450000 },
  { id: '8', kolName: 'YieldHunter', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'DeFi', tokenSymbol: 'YIELD', price: 15.50, change24h: 5.4, marketCap: 155000000, avmScore: 92.0, volume24h: 2100000 },
  { id: '9', kolName: 'ChainWhale', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'DeFi', tokenSymbol: 'WHALE', price: 42.00, change24h: 1.2, marketCap: 420000000, avmScore: 96.5, volume24h: 5500000 },
  
  // Social
  { id: '3', kolName: 'LifeStyleGuru', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100', platform: 'instagram', category: 'Social', tokenSymbol: 'LIFE', price: 0.95, change24h: 5.8, marketCap: 9500000, avmScore: 82.1, volume24h: 120000 },
  { id: '10', kolName: 'FashionIcon', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100', platform: 'instagram', category: 'Social', tokenSymbol: 'CHIC', price: 2.50, change24h: 8.9, marketCap: 25000000, avmScore: 90.5, volume24h: 890000 },
  { id: '11', kolName: 'TravelBlogger', avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=100&h=100', platform: 'instagram', category: 'Social', tokenSymbol: 'TRVL', price: 1.15, change24h: 2.1, marketCap: 11500000, avmScore: 84.0, volume24h: 230000 },

  // AI
  { id: '4', kolName: 'AI Researcher', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'AI', tokenSymbol: 'AGI', price: 12.40, change24h: 24.5, marketCap: 124000000, avmScore: 98.9, volume24h: 5600000 },
  { id: '12', kolName: 'NeuralNet', avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'AI', tokenSymbol: 'BRAIN', price: 8.80, change24h: 15.2, marketCap: 88000000, avmScore: 95.5, volume24h: 3400000 },
  { id: '13', kolName: 'DataScientist', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'AI', tokenSymbol: 'DATA', price: 5.60, change24h: 6.7, marketCap: 56000000, avmScore: 93.0, volume24h: 1800000 },

  // Music
  { id: '14', kolName: 'BeatMaker', avatar: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=100&h=100', platform: 'youtube', category: 'Music', tokenSymbol: 'BEAT', price: 3.30, change24h: 4.5, marketCap: 33000000, avmScore: 87.5, volume24h: 670000 },
  { id: '15', kolName: 'VocalStar', avatar: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&w=100&h=100', platform: 'tiktok', category: 'Music', tokenSymbol: 'VOICE', price: 2.90, change24h: -1.2, marketCap: 29000000, avmScore: 86.0, volume24h: 540000 },
  { id: '16', kolName: 'DJMix', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100', platform: 'youtube', category: 'Music', tokenSymbol: 'MIX', price: 1.75, change24h: 8.8, marketCap: 17500000, avmScore: 85.5, volume24h: 410000 },

  // Art
  { id: '17', kolName: 'DigitalArtist', avatar: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=100&h=100', platform: 'instagram', category: 'Art', tokenSymbol: 'ART', price: 6.50, change24h: 18.2, marketCap: 65000000, avmScore: 91.5, volume24h: 1500000 },
  { id: '18', kolName: '3DModeler', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'Art', tokenSymbol: 'MESH', price: 4.10, change24h: 3.5, marketCap: 41000000, avmScore: 89.0, volume24h: 890000 },
  { id: '19', kolName: 'PixelArtist', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100', platform: 'twitter', category: 'Art', tokenSymbol: '8BIT', price: 2.25, change24h: -4.1, marketCap: 22500000, avmScore: 83.5, volume24h: 320000 },
  { id: '20', kolName: 'ConceptArt', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100', platform: 'artstation', category: 'Art', tokenSymbol: 'CNCPT', price: 5.75, change24h: 9.4, marketCap: 57500000, avmScore: 92.5, volume24h: 1100000 },
];

// Mock Candlestick Data Generator
const generateCandleData = (basePrice: number) => {
  let price = basePrice;
  const now = Math.floor(Date.now() / 1000);
  return Array.from({ length: 100 }, (_, i) => {
    const open = price;
    const close = price * (1 + (Math.random() - 0.5) * 0.05);
    const high = Math.max(open, close) * (1 + Math.random() * 0.02);
    const low = Math.min(open, close) * (1 - Math.random() * 0.02);
    price = close;
    return {
      time: now - (100 - i) * 3600, // Hourly candles
      open,
      high,
      low,
      close,
    };
  });
};

// Mock Order Book Generator
const generateOrderBook = (basePrice: number): OrderBookItem[] => {
  const asks = Array.from({ length: 5 }, (_, i) => ({
    price: basePrice * (1 + (i + 1) * 0.005),
    amount: Math.floor(Math.random() * 1000),
    total: 0,
    type: 'ask' as const
  })).reverse();
  
  const bids = Array.from({ length: 5 }, (_, i) => ({
    price: basePrice * (1 - (i + 1) * 0.005),
    amount: Math.floor(Math.random() * 1000),
    total: 0,
    type: 'bid' as const
  }));

  return [...asks, ...bids];
};

const InfluenceMarket: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<MarketItem>(mockMarketData[0]);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [chartData, setChartData] = useState<any[]>([]);
  const [orderBook, setOrderBook] = useState<OrderBookItem[]>([]);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState<string>('');
  const [usdtBalance, setUsdtBalance] = useState<number>(10000);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [timeframe, setTimeframe] = useState('1H');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<ValuationResponse | null>(null);

  useEffect(() => {
    setChartData(generateCandleData(selectedToken.price));
    setOrderBook(generateOrderBook(selectedToken.price));
    setAiAnalysis(null); // Reset analysis on token change
  }, [selectedToken]);

  const handleAiAnalysis = async () => {
    setIsAnalyzing(true);
    try {
        const result = await analyzeInfluence({
            kolName: selectedToken.kolName,
            platform: selectedToken.platform,
            followers: selectedToken.marketCap / 10, // Mock followers count derivation
            engagementRate: 5.5 // Mock engagement rate
        });
        setAiAnalysis(result);
    } catch (e) {
        console.error("AI Analysis failed", e);
    } finally {
        setIsAnalyzing(false);
    }
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  
  const handleExecuteTrade = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return;

    if (tradeType === 'buy') {
      const totalCost = numAmount * selectedToken.price;
      if (totalCost > usdtBalance) return alert('Insufficient Balance');
      setUsdtBalance(prev => prev - totalCost);
      setPortfolio(prev => {
        const existing = prev.find(p => p.tokenSymbol === selectedToken.tokenSymbol);
        return existing 
          ? prev.map(p => p.tokenSymbol === selectedToken.tokenSymbol ? { ...p, amount: p.amount + numAmount } : p)
          : [...prev, { tokenSymbol: selectedToken.tokenSymbol, amount: numAmount }];
      });
    } else {
      const holding = portfolio.find(p => p.tokenSymbol === selectedToken.tokenSymbol);
      if (!holding || holding.amount < numAmount) return alert('Insufficient Holdings');
      setUsdtBalance(prev => prev + (numAmount * selectedToken.price));
      setPortfolio(prev => prev.map(p => p.tokenSymbol === selectedToken.tokenSymbol ? { ...p, amount: p.amount - numAmount } : p).filter(p => p.amount > 0));
    }
    setAmount('');
  };

  const currentHolding = portfolio.find(p => p.tokenSymbol === selectedToken.tokenSymbol)?.amount || 0;
  
  const filteredTokens = mockMarketData.filter(token => selectedCategory === 'All' || token.category === selectedCategory);

  return (
    <section id="market" className="py-12 bg-dark-bg border-t border-white/5 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Balance & Selector */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['All', 'Gaming', 'DeFi', 'Social', 'AI', 'Music', 'Art', 'Other'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat as any)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                            selectedCategory === cat
                                ? 'bg-blue-500 text-white'
                                : 'bg-dark-card border border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4 bg-dark-card p-2 rounded-xl border border-white/5 overflow-x-auto w-full md:w-auto">
                {filteredTokens.map(token => (
                <button
                    key={token.id}
                    onClick={() => setSelectedToken(token)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all min-w-fit ${
                    selectedToken.id === token.id 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <img src={token.avatar} className="w-5 h-5 rounded-full" />
                    <span className="font-bold text-sm">{token.tokenSymbol}</span>
                </button>
                ))}
            </div>
          </div>

          <div className="flex items-center gap-3 bg-dark-card px-4 py-2 rounded-xl border border-white/5">
             <Wallet size={16} className="text-yellow-500" />
             <div className="flex flex-col items-end leading-none">
               <span className="text-[10px] text-gray-400">WALLET BALANCE</span>
               <span className="text-sm font-mono font-bold text-white">{formatCurrency(usdtBalance)}</span>
             </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[800px]">
          
          {/* Left Column: Chart Area (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Ticker Info Header */}
            <div className="bg-dark-card p-6 rounded-2xl border border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 relative">
                   <img src={selectedToken.avatar} className="w-full h-full rounded-full border-2 border-white/10" />
                   <div className="absolute -bottom-1 -right-1 bg-dark-bg p-0.5 rounded-full">
                     {selectedToken.platform === 'youtube' && <div className="w-4 h-4 bg-red-500 rounded-full" />}
                     {selectedToken.platform === 'twitter' && <div className="w-4 h-4 bg-blue-400 rounded-full" />}
                   </div>
                 </div>
                 <div>
                   <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                     {selectedToken.tokenSymbol} <span className="text-gray-500 text-sm">/ USDT</span>
                   </h2>
                   <div className="flex items-center gap-2 mt-1">
                        <div className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                            AVM Score: {aiAnalysis ? aiAnalysis.score : selectedToken.avmScore}
                        </div>
                        <button 
                            onClick={handleAiAnalysis}
                            disabled={isAnalyzing}
                            className="flex items-center gap-1 text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                        >
                            {isAnalyzing ? <Loader size={12} className="animate-spin" /> : <Brain size={12} />}
                            {isAnalyzing ? 'Analyzing...' : 'AI Valuation'}
                        </button>
                   </div>
                   {aiAnalysis && (
                        <div className="absolute top-20 left-0 z-50 mt-2 p-4 bg-gray-900 border border-purple-500/50 rounded-xl shadow-2xl w-80 text-left backdrop-blur-md">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-purple-400 font-bold text-sm flex items-center gap-2">
                                    <Brain size={14} /> Cloudflare AI Analysis
                                </h4>
                                <button onClick={() => setAiAnalysis(null)} className="text-gray-500 hover:text-white">×</button>
                            </div>
                            <p className="text-xs text-gray-300 leading-relaxed mb-3">
                                {aiAnalysis.reasoning}
                            </p>
                            <div className="flex justify-between items-center text-xs border-t border-white/10 pt-2">
                                <span className="text-gray-500">Est. Market Cap</span>
                                <span className="text-white font-mono">{formatCurrency(aiAnalysis.marketCap)}</span>
                            </div>
                        </div>
                   )}
                 </div>
              </div>

              <div className="flex gap-8">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Last Price</div>
                  <div className={`text-xl font-mono font-bold ${selectedToken.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatCurrency(selectedToken.price)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">24h Change</div>
                  <div className={`text-xl font-mono font-bold flex items-center ${selectedToken.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {selectedToken.change24h >= 0 ? <TrendingUp size={16} className="mr-1"/> : <TrendingDown size={16} className="mr-1"/>}
                    {Math.abs(selectedToken.change24h)}%
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-gray-500 mb-1">24h Volume</div>
                  <div className="text-xl font-mono font-bold text-white">
                    {new Intl.NumberFormat('en-US', { notation: "compact" }).format(selectedToken.volume24h)}
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="flex-1 bg-dark-card rounded-2xl border border-white/5 p-4 flex flex-col relative overflow-hidden">
               {/* Timeframe Selector */}
               <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                 {['15m', '1H', '4H', '1D', '1W'].map(tf => (
                   <button 
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${timeframe === tf ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                   >
                     {tf}
                   </button>
                 ))}
                 <div className="flex-1"></div>
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                   <BarChart2 size={14} />
                   TradingView Mode
                 </div>
               </div>

               {/* Chart */}
               <div className="flex-1 w-full h-full min-h-0">
                 <TradingChart data={chartData} />
               </div>
            </div>
          </div>

          {/* Right Column: Order Book & Trade Form (Span 1) */}
          <div className="flex flex-col gap-6">
            
            {/* Order Book */}
            <div className="bg-dark-card rounded-2xl border border-white/5 p-4 flex-1 flex flex-col min-h-[300px]">
              <h3 className="text-sm font-bold text-white mb-4 flex justify-between">
                <span>Order Book</span>
                <span className="text-gray-500 text-xs font-normal">Spread: 0.1%</span>
              </h3>
              
              <div className="flex text-xs text-gray-500 mb-2 px-2">
                <div className="w-1/3 text-left">Price</div>
                <div className="w-1/3 text-right">Amount</div>
                <div className="w-1/3 text-right">Total</div>
              </div>

              <div className="flex-1 overflow-hidden space-y-0.5 font-mono text-xs">
                {/* Asks (Sells) - Red */}
                {orderBook.filter(o => o.type === 'ask').map((item, i) => (
                  <div key={`ask-${i}`} className="flex px-2 py-0.5 hover:bg-white/5 relative group cursor-pointer">
                    <div className="absolute right-0 top-0 h-full bg-red-500/10 z-0" style={{width: `${Math.random() * 100}%`}}></div>
                    <div className="w-1/3 text-left text-red-400 relative z-10">{item.price.toFixed(2)}</div>
                    <div className="w-1/3 text-right text-gray-300 relative z-10">{item.amount}</div>
                    <div className="w-1/3 text-right text-gray-500 relative z-10">{(item.price * item.amount / 1000).toFixed(1)}k</div>
                  </div>
                ))}
                
                <div className="py-3 border-y border-white/5 my-2 text-center">
                   <span className={`text-lg font-bold ${selectedToken.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                     {selectedToken.price.toFixed(2)}
                   </span>
                   <ArrowUpRight size={12} className="inline ml-1 text-green-400" />
                </div>

                {/* Bids (Buys) - Green */}
                {orderBook.filter(o => o.type === 'bid').map((item, i) => (
                  <div key={`bid-${i}`} className="flex px-2 py-0.5 hover:bg-white/5 relative group cursor-pointer">
                    <div className="absolute right-0 top-0 h-full bg-green-500/10 z-0" style={{width: `${Math.random() * 100}%`}}></div>
                    <div className="w-1/3 text-left text-green-400 relative z-10">{item.price.toFixed(2)}</div>
                    <div className="w-1/3 text-right text-gray-300 relative z-10">{item.amount}</div>
                    <div className="w-1/3 text-right text-gray-500 relative z-10">{(item.price * item.amount / 1000).toFixed(1)}k</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade Form */}
            <div className="bg-dark-card rounded-2xl border border-white/5 p-4">
               <div className="flex bg-dark-bg rounded-lg p-1 mb-4">
                 <button 
                   onClick={() => setTradeType('buy')}
                   className={`flex-1 py-2 rounded text-sm font-bold transition-all ${tradeType === 'buy' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                 >
                   Buy
                 </button>
                 <button 
                   onClick={() => setTradeType('sell')}
                   className={`flex-1 py-2 rounded text-sm font-bold transition-all ${tradeType === 'sell' ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-white'}`}
                 >
                   Sell
                 </button>
               </div>

               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-xs text-gray-400 mb-1">
                     <span>Avail</span>
                     <span>{tradeType === 'buy' ? `${formatCurrency(usdtBalance)}` : `${currentHolding} ${selectedToken.tokenSymbol}`}</span>
                   </div>
                   <div className="relative">
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Price</div>
                     <input 
                       type="text" 
                       value={selectedToken.price}
                       disabled
                       className="w-full bg-dark-bg border border-white/10 rounded-lg py-2 pl-12 pr-3 text-right text-white font-mono text-sm"
                     />
                   </div>
                 </div>

                 <div>
                   <div className="relative">
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Amount</div>
                     <input 
                       type="number" 
                       value={amount}
                       onChange={(e) => setAmount(e.target.value)}
                       placeholder="0.00"
                       className="w-full bg-dark-bg border border-white/10 rounded-lg py-2 pl-16 pr-3 text-right text-white font-mono text-sm focus:border-blue-500 outline-none"
                     />
                   </div>
                 </div>

                 {/* Percentages */}
                 <div className="flex gap-2">
                   {[0.25, 0.5, 0.75, 1].map(pct => (
                     <button 
                       key={pct}
                       onClick={() => {
                         if (tradeType === 'buy') {
                           setAmount(((usdtBalance * pct) / selectedToken.price).toFixed(2));
                         } else {
                           setAmount((currentHolding * pct).toFixed(2));
                         }
                       }}
                       className="flex-1 py-1 bg-white/5 rounded text-[10px] text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                     >
                       {pct * 100}%
                     </button>
                   ))}
                 </div>

                 <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                   <span className="text-xs text-gray-400">Total</span>
                   <span className="text-sm font-bold text-white">
                     {formatCurrency(parseFloat(amount || '0') * selectedToken.price)}
                   </span>
                 </div>

                 <button 
                   onClick={handleExecuteTrade}
                   className={`w-full py-3 rounded-lg font-bold text-sm transition-all hover:brightness-110 active:scale-95
                     ${tradeType === 'buy' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                 >
                   {tradeType === 'buy' ? `Buy ${selectedToken.tokenSymbol}` : `Sell ${selectedToken.tokenSymbol}`}
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluenceMarket;
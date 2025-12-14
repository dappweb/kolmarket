import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfluenceMarket from '../components/InfluenceMarket';
import SEO from '../components/SEO';
import PriceChart from '../src/components/Trading/PriceChart';
import SwapInterface from '../src/components/Trading/SwapInterface';
import { UTCTimestamp } from 'lightweight-charts';

// Mock Data Generator
const generateMockData = () => {
  const data = [];
  let time = (Date.now() / 1000) as UTCTimestamp;
  let price = 0.0045;
  
  for (let i = 0; i < 100; i++) {
    time = (time - 3600) as UTCTimestamp; // Go back 1 hour
    const open = price;
    const high = price * (1 + Math.random() * 0.05);
    const low = price * (1 - Math.random() * 0.05);
    const close = (open + high + low) / 3;
    price = close;
    
    data.unshift({ time, open, high, low, close });
  }
  return data;
};

const ExchangePage: React.FC = () => {
  const location = useLocation();
  const [selectedToken, setSelectedToken] = useState({ symbol: 'KOL', name: 'KOL Market Token', balance: 1000 });
  const [chartData, setChartData] = useState(generateMockData());

  useEffect(() => {
    // If navigated from Launchpad with state
    if (location.state?.token) {
      setSelectedToken({ 
        symbol: location.state.token.symbol, 
        name: location.state.token.name,
        balance: 0 
      });
    }
  }, [location]);

  return (
    <div className="pt-24 pb-20 bg-dark-bg min-h-screen">
      <SEO 
        title={`Trade ${selectedToken.symbol} - KOLMarket Exchange`}
        description={`Trade ${selectedToken.name} on KOLMarket. View real-time charts and swap tokens instantly.`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Token Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black text-lg">
            {selectedToken.symbol[0]}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              {selectedToken.name} <span className="text-gray-500 text-lg">/ SOL</span>
            </h1>
            <div className="flex gap-4 text-sm text-gray-400">
              <span className="text-green-400 font-bold text-lg">$0.0045</span>
              <span className="text-green-400">+5.23%</span>
              <span>24h Vol: $124,500</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Chart */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800 rounded-xl border border-white/10 p-4 shadow-xl overflow-hidden">
               <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                 <div className="flex gap-4 text-sm font-medium text-gray-400">
                   <button className="text-yellow-500 border-b-2 border-yellow-500 pb-2 -mb-2.5">Price</button>
                   <button className="hover:text-white transition-colors">Depth</button>
                 </div>
                 <div className="flex gap-2 text-xs">
                   <button className="px-2 py-1 rounded hover:bg-white/10 text-gray-400">1H</button>
                   <button className="px-2 py-1 rounded bg-white/10 text-white">4H</button>
                   <button className="px-2 py-1 rounded hover:bg-white/10 text-gray-400">1D</button>
                   <button className="px-2 py-1 rounded hover:bg-white/10 text-gray-400">1W</button>
                 </div>
               </div>
               <PriceChart data={chartData} />
            </div>
            
            {/* Market List (Existing Component) */}
            <div className="bg-gray-800 rounded-xl border border-white/10 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Market Overview</h3>
              <InfluenceMarket />
            </div>
          </div>

          {/* Right Column: Swap */}
          <div className="lg:col-span-1">
             <div className="sticky top-24">
               <SwapInterface tokenSymbol={selectedToken.symbol} tokenBalance={selectedToken.balance} />
               
               {/* Recent Trades Mock */}
               <div className="mt-6 bg-gray-800 rounded-xl border border-white/10 p-4">
                 <h3 className="text-white font-bold mb-3 text-sm">Recent Trades</h3>
                 <div className="space-y-2 text-sm">
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="flex justify-between">
                       <span className={Math.random() > 0.5 ? 'text-green-400' : 'text-red-400'}>
                         {Math.random() > 0.5 ? 'Buy' : 'Sell'}
                       </span>
                       <span className="text-white">{(Math.random() * 1000).toFixed(2)} {selectedToken.symbol}</span>
                       <span className="text-gray-400">1 min ago</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
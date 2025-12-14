import React, { useState } from 'react';
import { ArrowDown, Settings, RefreshCw } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface SwapInterfaceProps {
  tokenSymbol: string;
  tokenBalance: number;
}

const SwapInterface: React.FC<SwapInterfaceProps> = ({ tokenSymbol, tokenBalance }) => {
  const { connected } = useWallet();
  const [fromAmount, setFromAmount] = useState<string>('');
  const [toAmount, setToAmount] = useState<string>('');
  const [direction, setDirection] = useState<'buy' | 'sell'>('buy'); // buy: SOL -> Token, sell: Token -> SOL
  
  const SOL_PRICE = 145.5; // Mock SOL price
  const TOKEN_PRICE = 0.0045; // Mock Token price

  const handleFromChange = (val: string) => {
    setFromAmount(val);
    if (!val) {
      setToAmount('');
      return;
    }
    const amount = parseFloat(val);
    if (isNaN(amount)) return;

    if (direction === 'buy') {
      // SOL -> Token
      setToAmount(((amount * SOL_PRICE) / TOKEN_PRICE).toFixed(2));
    } else {
      // Token -> SOL
      setToAmount(((amount * TOKEN_PRICE) / SOL_PRICE).toFixed(4));
    }
  };

  const switchDirection = () => {
    setDirection(prev => prev === 'buy' ? 'sell' : 'buy');
    setFromAmount(toAmount);
    handleFromChange(toAmount); // Recalculate based on new direction logic
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 border border-white/10 shadow-xl max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold text-lg">Swap</h3>
        <div className="flex gap-2 text-gray-400">
          <RefreshCw size={18} className="cursor-pointer hover:text-white" />
          <Settings size={18} className="cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* From Input */}
      <div className="bg-gray-900 rounded-lg p-3 mb-2">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>You pay</span>
          <span>Balance: {direction === 'buy' ? '2.5 SOL' : `${tokenBalance} ${tokenSymbol}`}</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => handleFromChange(e.target.value)}
            placeholder="0.00"
            className="bg-transparent text-white text-2xl font-bold outline-none w-full"
          />
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full border border-white/10">
            {direction === 'buy' ? (
              <>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="font-bold text-white">SOL</span>
              </>
            ) : (
              <>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
                <span className="font-bold text-white">{tokenSymbol}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Switcher */}
      <div className="flex justify-center -my-3 relative z-10">
        <button 
          onClick={switchDirection}
          className="bg-gray-700 p-2 rounded-full border-4 border-gray-800 hover:bg-gray-600 transition-colors"
        >
          <ArrowDown size={16} className="text-white" />
        </button>
      </div>

      {/* To Input */}
      <div className="bg-gray-900 rounded-lg p-3 mt-2 mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>You receive</span>
          <span>Balance: {direction === 'buy' ? `${tokenBalance} ${tokenSymbol}` : '2.5 SOL'}</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            value={toAmount}
            readOnly
            placeholder="0.00"
            className="bg-transparent text-white text-2xl font-bold outline-none w-full"
          />
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full border border-white/10">
             {direction === 'buy' ? (
              <>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
                <span className="font-bold text-white">{tokenSymbol}</span>
              </>
            ) : (
              <>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="font-bold text-white">SOL</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Price Info */}
      <div className="flex justify-between text-sm text-gray-400 mb-4 px-2">
        <span>Rate</span>
        <span>1 {tokenSymbol} ≈ 0.00003 SOL</span>
      </div>

      {/* Action Button */}
      {!connected ? (
        <WalletMultiButton className="!w-full !justify-center !bg-yellow-500 !text-black !font-bold !rounded-lg" />
      ) : (
        <button className="w-full py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
          {direction === 'buy' ? 'Buy' : 'Sell'} {tokenSymbol}
        </button>
      )}
    </div>
  );
};

export default SwapInterface;

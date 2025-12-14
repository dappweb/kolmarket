// Simulation of the Rust Smart Contract Logic in TypeScript
// This allows the frontend to demonstrate the Bonding Curve mechanics 
// without needing a deployed custom contract on Devnet.

export interface MarketState {
  virtualSolReserves: bigint;
  virtualTokenReserves: bigint;
  realSolReserves: bigint;
  k: bigint; // Constant Product
  totalSupply: bigint;
}

// Helper to serialize BigInt for JSON storage
const serializeState = (state: MarketState) => {
  return JSON.stringify(state, (_, v) => typeof v === 'bigint' ? v.toString() + 'n' : v);
};

// Helper to deserialize BigInt from JSON storage
const deserializeState = (json: string): MarketState | null => {
  try {
    return JSON.parse(json, (_, v) => {
      if (typeof v === 'string' && v.endsWith('n')) {
        return BigInt(v.slice(0, -1));
      }
      return v;
    });
  } catch (e) {
    return null;
  }
};

// Initial Configuration matching lib.rs
const INITIAL_VIRTUAL_SOL = BigInt(30 * 1_000_000_000); // 30 SOL initial virtual liquidity (higher for lower slippage)
const INITIAL_SUPPLY = BigInt(1_000_000_000 * 1_000_000); // 1B tokens (6 decimals)
const INITIAL_VIRTUAL_TOKEN = INITIAL_SUPPLY; // All supply in virtual pool initially

// In-memory state store (mocking on-chain account storage)
// In a real app, this would be fetched from Solana account data
const marketStates: Record<string, MarketState> = {};

// Load persisted states on module init
try {
  const stored = localStorage.getItem('kolmarket_bonding_curves');
  if (stored) {
    const parsed = JSON.parse(stored);
    Object.keys(parsed).forEach(key => {
      // Deserialize each market state
      const stateStr = parsed[key];
      // If it was stored as a stringified object with 'n' suffix values
      // We might need a custom parser if we stored it as a string
      // But let's assume we store the whole map as a string, and inside are stringified states?
      // Simpler approach: Store the whole map, and use the reviver.
    });
  }
} catch (e) {
  console.warn("Failed to load bonding curve states", e);
}

// Re-implement load/save with a cleaner approach
const STORAGE_KEY = 'kolmarket_bonding_curves_v1';

const saveStates = () => {
  const serialized: Record<string, any> = {};
  Object.entries(marketStates).forEach(([key, state]) => {
    serialized[key] = {
      virtualSolReserves: state.virtualSolReserves.toString(),
      virtualTokenReserves: state.virtualTokenReserves.toString(),
      realSolReserves: state.realSolReserves.toString(),
      k: state.k.toString(),
      totalSupply: state.totalSupply.toString()
    };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
};

const loadStates = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    Object.entries(parsed).forEach(([key, val]: [string, any]) => {
      marketStates[key] = {
        virtualSolReserves: BigInt(val.virtualSolReserves),
        virtualTokenReserves: BigInt(val.virtualTokenReserves),
        realSolReserves: BigInt(val.realSolReserves),
        k: BigInt(val.k),
        totalSupply: BigInt(val.totalSupply)
      };
    });
  } catch (e) {
    console.error("Failed to load market states", e);
  }
};

// Initialize loading
loadStates();

export const getOrCreateMarket = (tokenSymbol: string): MarketState => {
  if (!marketStates[tokenSymbol]) {
    marketStates[tokenSymbol] = {
      virtualSolReserves: INITIAL_VIRTUAL_SOL,
      virtualTokenReserves: INITIAL_VIRTUAL_TOKEN,
      realSolReserves: BigInt(0),
      k: INITIAL_VIRTUAL_SOL * INITIAL_VIRTUAL_TOKEN,
      totalSupply: INITIAL_SUPPLY
    };
    saveStates();
  }
  return marketStates[tokenSymbol];
};

export const calculateBuyOutput = (tokenSymbol: string, solAmountIn: number): { tokenOut: number, priceImpact: number, newPrice: number } => {
  const state = getOrCreateMarket(tokenSymbol);
  const solInLamports = BigInt(Math.floor(solAmountIn * 1_000_000_000));
  
  // k = x * y
  // y_new = k / (x + dx)
  // dy = y - y_new
  
  const newSolReserves = state.virtualSolReserves + solInLamports;
  const newTokenReserves = state.k / newSolReserves;
  const tokenOutRaw = state.virtualTokenReserves - newTokenReserves;
  
  const tokenOut = Number(tokenOutRaw) / 1_000_000;
  
  // Calculate Price Impact
  const oldPrice = Number(state.virtualSolReserves) / Number(state.virtualTokenReserves);
  const newPrice = Number(newSolReserves) / Number(newTokenReserves);
  const priceImpact = ((newPrice - oldPrice) / oldPrice) * 100;

  return { tokenOut, priceImpact, newPrice };
};

export const calculateSellOutput = (tokenSymbol: string, tokenAmountIn: number): { solOut: number, priceImpact: number, newPrice: number } => {
  const state = getOrCreateMarket(tokenSymbol);
  const tokenInRaw = BigInt(Math.floor(tokenAmountIn * 1_000_000));
  
  // x_new = k / (y + dy)
  // dx = x - x_new
  
  const newTokenReserves = state.virtualTokenReserves + tokenInRaw;
  const newSolReserves = state.k / newTokenReserves;
  const solOutLamports = state.virtualSolReserves - newSolReserves;
  
  const solOut = Number(solOutLamports) / 1_000_000_000;

  // Calculate Price Impact
  const oldPrice = Number(state.virtualSolReserves) / Number(state.virtualTokenReserves);
  const newPrice = Number(newSolReserves) / Number(newTokenReserves);
  const priceImpact = ((oldPrice - newPrice) / oldPrice) * 100; // Price drops on sell

  return { solOut, priceImpact, newPrice };
};

// Execute trade (updates state)
export const executeSwap = (tokenSymbol: string, direction: 'buy' | 'sell', amountIn: number) => {
  const state = getOrCreateMarket(tokenSymbol);
  
  if (direction === 'buy') {
     const solInLamports = BigInt(Math.floor(amountIn * 1_000_000_000));
     const newSolReserves = state.virtualSolReserves + solInLamports;
     const newTokenReserves = state.k / newSolReserves;
     
     state.virtualSolReserves = newSolReserves;
     state.virtualTokenReserves = newTokenReserves;
     state.realSolReserves += solInLamports;
  } else {
     const tokenInRaw = BigInt(Math.floor(amountIn * 1_000_000));
     const newTokenReserves = state.virtualTokenReserves + tokenInRaw;
     const newSolReserves = state.k / newTokenReserves;
     const solOutLamports = state.virtualSolReserves - newSolReserves;
     
     state.virtualTokenReserves = newTokenReserves;
     state.virtualSolReserves = newSolReserves;
     state.realSolReserves -= solOutLamports;
  }
  
  saveStates();
  return state;
};

export const getCurrentPrice = (tokenSymbol: string): number => {
    const state = getOrCreateMarket(tokenSymbol);
    // Price in SOL per Token
    // P = SolReserves / TokenReserves
    return Number(state.virtualSolReserves) / Number(state.virtualTokenReserves); // Returns SOL per Token (e.g. 0.00003)
};

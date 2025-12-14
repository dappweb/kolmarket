
export interface ValuationRequest {
  kolName: string;
  platform: string;
  followers: number;
  engagementRate: number;
  recentContent?: string;
}

export interface ValuationResponse {
  score: number;
  reasoning: string;
  marketCap: number;
}

// In a real scenario, this URL would be your deployed Cloudflare Worker URL
// e.g., "https://kol-valuation.your-subdomain.workers.dev"
const WORKER_URL = process.env.VITE_CLOUDFLARE_WORKER_URL || "https://mock-worker.local";

export const analyzeInfluence = async (data: ValuationRequest): Promise<ValuationResponse> => {
  // Check if we are in a production-like environment with a real worker URL
  if (WORKER_URL && WORKER_URL !== "https://mock-worker.local") {
    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error("Error calling Cloudflare Worker:", error);
      // Fallback to simulation if call fails
      return simulateValuation(data);
    }
  } else {
    // Simulate AI delay and response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(simulateValuation(data));
      }, 1500);
    });
  }
};

// Simulation logic (mimics what the Llama-3 model would do)
const simulateValuation = (data: ValuationRequest): ValuationResponse => {
  const baseScore = 50;
  const followerBonus = Math.min(data.followers / 100000, 30); // Max 30 pts for followers
  const engagementBonus = Math.min(data.engagementRate * 5, 20); // Max 20 pts for engagement
  
  const score = Math.min(Math.round(baseScore + followerBonus + engagementBonus), 99);
  
  const marketCap = data.followers * (10 + Math.random() * 5);

  return {
    score,
    reasoning: `Cloudflare AI Analysis (Simulation): High engagement on ${data.platform} indicates strong community trust. Growth potential is significant given current content trends.`,
    marketCap
  };
};


export interface KOLProfile {
  name: string;
  accounts: SocialAccount[];
  valuation: ValuationResponse;
}

export interface DigitalLifePrompt {
  system_prompt: string;
  personality_config: {
    tone: string;
    topics: string[];
    interaction_style: string;
    catchphrases: string[];
  };
  knowledge_base: {
    domain: string;
    expertise_level: string;
    key_achievements: string[];
  };
  evolution_rules: {
    learning_rate: number;
    memory_retention: number;
    adaptability: number;
  };
  embodied_config?: {
    robot_compatibility: string[]; // e.g., ["Optimus Gen 2", "Figure 01"]
    locomotion_style: string;
    voice_synthesis: {
        pitch: number;
        speed: number;
        accent: string;
    };
    visual_processing_priority: string[];
  };
}

export const generateDigitalLifePrompt = (profile: KOLProfile): DigitalLifePrompt => {
  const mainAccount = profile.accounts.find(a => a.connected) || profile.accounts[0];
  const totalFollowers = profile.accounts.reduce((acc, curr) => acc + (curr.connected ? curr.followers : 0), 0);
  const avgEngagement = profile.accounts.reduce((acc, curr) => acc + (curr.connected ? curr.engagementRate : 0), 0) / Math.max(profile.accounts.filter(a => a.connected).length, 1);

  // Derive personality traits from platform and metrics
  let tone = "Professional and Insightful";
  let interactionStyle = "Analytical";
  let locomotionStyle = "Confident and Precise";
  
  if (mainAccount.platform === 'youtube') {
    tone = "Engaging and Storytelling";
    interactionStyle = "Visual and Descriptive";
    locomotionStyle = "Expressive and Dynamic";
  } else if (mainAccount.platform === 'twitter') {
    tone = "Concise and Witty";
    interactionStyle = "Responsive and Direct";
    locomotionStyle = "Efficient and Quick";
  } else if (mainAccount.platform === 'instagram') {
    tone = "Visual and Lifestyle-focused";
    interactionStyle = "Casual and Friendly";
    locomotionStyle = "Graceful and Approachable";
  }

  // Determine expertise level based on valuation/score
  const expertiseLevel = profile.valuation.score > 90 ? "Grandmaster" : profile.valuation.score > 80 ? "Expert" : "Influencer";

  return {
    system_prompt: `You are the Digital Twin of ${mainAccount.handle}, a ${expertiseLevel} in the Creator Economy. Your existence is anchored on the Solana blockchain. You interact with fans, manage assets, and evolve based on community engagement.`,
    personality_config: {
      tone,
      topics: ["Crypto", "Lifestyle", "Tech", "Investing"], // In a real app, this would come from content analysis
      interaction_style: interactionStyle,
      catchphrases: [`Welcome to the future of ${mainAccount.handle}`, "Let's build value together"]
    },
    knowledge_base: {
      domain: mainAccount.platform === 'twitter' ? 'Crypto & Tech' : 'Entertainment & Lifestyle',
      expertise_level: expertiseLevel,
      key_achievements: [
        `Amassed ${totalFollowers} followers across platforms`,
        `Achieved top ${100 - profile.valuation.score}% AVM ranking`,
        `Minted on KOLMarket Launchpad`
      ]
    },
    evolution_rules: {
      learning_rate: Math.min(avgEngagement / 10, 1.0), // Higher engagement -> faster learning
      memory_retention: 0.95,
      adaptability: profile.valuation.score / 100
    },
    embodied_config: {
        robot_compatibility: ["Tesla Optimus Gen 2", "Figure 01", "Unitree H1"],
        locomotion_style: locomotionStyle,
        voice_synthesis: {
            pitch: mainAccount.platform === 'youtube' ? 1.0 : 0.9,
            speed: 1.1,
            accent: "Neutral Global"
        },
        visual_processing_priority: ["Facial Expression Recognition", "Crowd Dynamics", "Object Interaction"]
    }
  };
};

export const formatPromptForContract = (prompt: DigitalLifePrompt): string => {
  // Serialize the prompt object into a compact JSON string suitable for on-chain storage (or IPFS hash)
  return JSON.stringify(prompt);
};


import { SocialAccount } from '../../types';

// Mock database for persistence (in reality, this would be a backend DB)
const STORAGE_KEY = 'kolmarket_social_accounts';

export const getStoredAccounts = (): SocialAccount[] | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const saveAccounts = (accounts: SocialAccount[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
};

export const clearAccounts = () => {
  localStorage.removeItem(STORAGE_KEY);
};

// Simulate OAuth flow / API verification
export const verifySocialAccount = async (
  platform: string, 
  handle: string
): Promise<Partial<SocialAccount>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate verification logic
      // In a real app, this would call your backend which calls Twitter/YouTube API
      
      if (handle.toLowerCase() === 'error') {
        reject(new Error('Verification failed: User not found'));
        return;
      }

      // Deterministic mock data based on handle
      const seed = handle.length;
      const mockFollowers = (seed * 15000) + 50000; 
      const mockEngagement = Number(((seed % 5) + 1.5).toFixed(2));

      resolve({
        platform,
        handle: handle.startsWith('@') ? handle : `@${handle}`,
        connected: true,
        followers: mockFollowers,
        engagementRate: mockEngagement
      });
    }, 1500); // 1.5s delay to mimic network request
  });
};

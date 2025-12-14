import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
}

export interface StatData {
  name: string;
  value: number;
  fullValue?: string;
  description?: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

// Token Launchpad Types
export type Platform = 'youtube' | 'twitter' | 'instagram';

export interface SocialAccount {
  platform: Platform;
  handle: string;
  connected: boolean;
  followers: number;
  engagementRate: number;
}

export interface TokenConfig {
  name: string;
  symbol: string;
  supply: number;
  price: number;
}

export type LaunchPhase = 1 | 2 | 3 | 4; // 1: Bind, 2: Valuation, 3: Issue, 4: Success

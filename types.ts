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
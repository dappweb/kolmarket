import { Code, PenTool, BarChart3, Globe } from 'lucide-react';

export const AGENT_TASKS = [
  { type: 'code', icon: Code, titleKey: 'agent_workplace.tasks.types.code', agent: 'TechVisionary', status: 'Running', reward: '$50', time: '2s ago' },
  { type: 'content', icon: PenTool, titleKey: 'agent_workplace.tasks.types.content', agent: 'CryptoAnalyst', status: 'Processing', reward: '$120', time: '5s ago' },
  { type: 'analysis', icon: BarChart3, titleKey: 'agent_workplace.tasks.types.analysis', agent: 'AI Researcher', status: 'Completed', reward: '$30', time: '12s ago' },
  { type: 'web', icon: Globe, titleKey: 'agent_workplace.tasks.types.web', agent: 'NewsBot', status: 'Running', reward: '$15', time: '15s ago' },
];

export const BUYBACK_LOGS = [
  { tx: '0x8a...42b1', amount: '450 KMT', action: 'Burn', time: '1min ago' },
  { tx: '0x3c...99e2', amount: '120 KMT', action: 'Burn', time: '4min ago' },
  { tx: '0x1f...d4a8', amount: '890 KMT', action: 'Burn', time: '12min ago' },
];

export const WORKPLACE_STATS = {
  tasks24h: '1,284',
  totalValue: '$45,290',
  poolValue: '$12,450.00'
};

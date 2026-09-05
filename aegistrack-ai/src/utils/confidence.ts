export type ConfidenceTier = 'HIGH' | 'GOOD' | 'REVIEW' | 'UNCERTAIN';

export function getConfidenceLevel(confidence: number): ConfidenceTier {
  if (confidence >= 90) return 'HIGH';
  if (confidence >= 70) return 'GOOD';
  if (confidence >= 50) return 'REVIEW';
  return 'UNCERTAIN';
}

export function getConfidenceLabel(confidence: number): string {
  const tier = getConfidenceLevel(confidence);
  switch (tier) {
    case 'HIGH':
      return 'HIGH CONFIDENCE';
    case 'GOOD':
      return 'ROBUST CONFIDENCE';
    case 'REVIEW':
      return 'HUMAN REVIEW RECOMMENDED';
    case 'UNCERTAIN':
      return 'INSUFFICIENT EVIDENCE';
  }
}

export function getConfidenceColor(confidence: number) {
  if (confidence >= 90) {
    return {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      hex: '#10b981',
    };
  }
  if (confidence >= 70) {
    return {
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      hex: '#06b6d4',
    };
  }
  if (confidence >= 50) {
    return {
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      hex: '#f59e0b',
    };
  }
  return {
    text: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    hex: '#ef4444',
  };
}

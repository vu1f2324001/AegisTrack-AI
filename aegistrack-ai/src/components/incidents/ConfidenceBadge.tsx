import React from 'react';
import { getConfidenceColor } from '../../utils/confidence';

interface ConfidenceBadgeProps {
  confidence: number;
  showPercent?: boolean;
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({
  confidence,
  showPercent = true,
}) => {
  const { text, bg, border } = getConfidenceColor(confidence);

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-bold border ${bg} ${text} ${border}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {showPercent ? `${confidence}%` : confidence >= 90 ? 'HIGH' : confidence >= 50 ? 'REVIEW' : 'LOW'}
    </span>
  );
};

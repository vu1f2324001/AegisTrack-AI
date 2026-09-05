import React from 'react';
import { getConfidenceColor, getConfidenceLabel } from '../../utils/confidence';

interface ConfidenceScoreProps {
  score: number;
}

export const ConfidenceScore: React.FC<ConfidenceScoreProps> = ({ score }) => {
  const { text, bg, border } = getConfidenceColor(score);
  const label = getConfidenceLabel(score);

  return (
    <div className={`p-4 rounded-md border ${border} ${bg} flex items-center justify-between`}>
      <div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">
          OVERALL EVIDENCE CONFIDENCE
        </span>
        <span className="text-xs font-mono font-bold text-slate-200 mt-0.5 block">{label}</span>
      </div>
      <div className={`text-3xl font-mono font-bold tracking-tight ${text}`}>{score}%</div>
    </div>
  );
};

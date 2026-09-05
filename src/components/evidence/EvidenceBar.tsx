import React from 'react';
import { ProgressBar } from '../ui/ProgressBar';

interface EvidenceBarProps {
  label: string;
  score: number;
  weight?: string;
  notes?: string;
}

export const EvidenceBar: React.FC<EvidenceBarProps> = ({ label, score, weight, notes }) => {
  return (
    <div className="space-y-1 font-mono text-xs">
      <div className="flex justify-between items-center text-slate-300">
        <span className="font-semibold uppercase tracking-wider">{label}</span>
        <div className="flex items-center gap-2">
          {weight && <span className="text-[10px] text-slate-400">WT: {weight}</span>}
          <span
            className={`font-bold ${
              score >= 90
                ? 'text-emerald-400'
                : score >= 70
                ? 'text-cyan-400'
                : score >= 50
                ? 'text-amber-400'
                : 'text-rose-400'
            }`}
          >
            {score}%
          </span>
        </div>
      </div>
      <ProgressBar value={score} />
      {notes && <p className="text-[10px] text-slate-400">{notes}</p>}
    </div>
  );
};

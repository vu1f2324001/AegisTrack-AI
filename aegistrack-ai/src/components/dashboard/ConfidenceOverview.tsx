import React from 'react';
import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';

interface ConfidenceOverviewProps {
  avgConfidence: number;
  conflictsCount: number;
}

export const ConfidenceOverview: React.FC<ConfidenceOverviewProps> = ({
  avgConfidence,
  conflictsCount,
}) => {
  return (
    <Card
      header={
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-mono font-bold text-slate-300 uppercase">
            Confidence & Conflict Baseline
          </span>
          <span className="text-[10px] font-mono text-cyan-400">REALTIME MODEL METRICS</span>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-slate-400">Session Mean Confidence:</span>
            <span className="text-emerald-400 font-bold">{avgConfidence}%</span>
          </div>
          <ProgressBar value={avgConfidence} />
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
          <span className="text-slate-400">Evidence Conflicts Active:</span>
          <span
            className={`font-bold px-2 py-0.5 rounded ${
              conflictsCount > 0 ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-300'
            }`}
          >
            {conflictsCount} Unresolved
          </span>
        </div>
      </div>
    </Card>
  );
};

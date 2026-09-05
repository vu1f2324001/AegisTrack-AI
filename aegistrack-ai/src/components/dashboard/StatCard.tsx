import React from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  accent?: 'red' | 'green' | 'amber' | 'cyan' | 'slate';
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  icon,
  accent = 'slate',
}) => {
  const accentBorder = {
    red: 'border-l-4 border-l-rose-500',
    green: 'border-l-4 border-l-emerald-500',
    amber: 'border-l-4 border-l-amber-500',
    cyan: 'border-l-4 border-l-cyan-500',
    slate: 'border-l-4 border-l-slate-600',
  }[accent];

  return (
    <Card className={`${accentBorder} p-4 bg-[#0d1117] hover:bg-[#111722] transition-colors`}>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            {label}
          </span>
          <div className="text-2xl font-bold font-mono text-slate-100 mt-1 tracking-tight">
            {value}
          </div>
          {subtext && <p className="text-[11px] text-slate-400 mt-1 font-mono">{subtext}</p>}
        </div>
        {icon && <div className="text-slate-500 p-1.5 bg-slate-800/40 rounded">{icon}</div>}
      </div>
    </Card>
  );
};

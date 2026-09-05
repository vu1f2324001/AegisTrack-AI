import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface EvidenceConflictProps {
  conflicts: string[];
}

export const EvidenceConflict: React.FC<EvidenceConflictProps> = ({ conflicts }) => {
  if (!conflicts || conflicts.length === 0) return null;

  return (
    <div className="p-4 rounded-md border border-amber-500/40 bg-amber-500/10 space-y-2">
      <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
        <AlertTriangle size={16} />
        <span>EVIDENCE CONFLICT DETECTED</span>
      </div>

      <ul className="space-y-1 pl-6 list-disc text-xs font-mono text-amber-200/90">
        {conflicts.map((conflict, idx) => (
          <li key={idx}>{conflict}</li>
        ))}
      </ul>

      <div className="pt-2 border-t border-amber-500/20 flex items-center gap-2 text-[11px] font-mono text-slate-300">
        <ShieldAlert size={14} className="text-amber-400 shrink-0" />
        <span>Visual and positional evidence disagree. Automatic escalation disabled.</span>
      </div>
    </div>
  );
};

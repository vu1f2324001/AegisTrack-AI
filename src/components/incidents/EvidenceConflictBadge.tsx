import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface EvidenceConflictBadgeProps {
  hasConflict: boolean;
  count?: number;
}

export const EvidenceConflictBadge: React.FC<EvidenceConflictBadgeProps> = ({
  hasConflict,
  count = 1,
}) => {
  if (!hasConflict) return null;

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 animate-pulse">
      <AlertTriangle size={12} className="text-amber-400" />
      CONFLICT ({count})
    </span>
  );
};

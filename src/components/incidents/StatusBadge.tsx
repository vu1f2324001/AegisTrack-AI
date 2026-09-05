import React from 'react';
import { IncidentStatus } from '../../types/incident';

interface StatusBadgeProps {
  status: IncidentStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case 'HIGH_CONFIDENCE':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          HIGH CONFIDENCE
        </span>
      );
    case 'HUMAN_REVIEW':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
          HUMAN REVIEW
        </span>
      );
    case 'UNCERTAIN':
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
          UNCERTAIN
        </span>
      );
  }
};

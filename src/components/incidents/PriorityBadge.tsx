import React from 'react';
import { getPriorityBadgeClass, getPriorityLabel } from '../../utils/incidentHelpers';

interface PriorityBadgeProps {
  priority: number;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getPriorityBadgeClass(
        priority
      )}`}
    >
      {getPriorityLabel(priority)}
    </span>
  );
};

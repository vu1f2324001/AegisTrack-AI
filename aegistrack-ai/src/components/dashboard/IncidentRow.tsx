import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Incident } from '../../types/incident';
import { ConfidenceBadge } from '../incidents/ConfidenceBadge';
import { StatusBadge } from '../incidents/StatusBadge';
import { PriorityBadge } from '../incidents/PriorityBadge';
import { EvidenceConflictBadge } from '../incidents/EvidenceConflictBadge';
import { formatExcursion, formatSeconds } from '../../utils/formatters';
import { ChevronRight } from 'lucide-react';

interface IncidentRowProps {
  incident: Incident;
}

export const IncidentRow: React.FC<IncidentRowProps> = ({ incident }) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/incidents/${incident.id}`)}
      className="border-b border-[#1e2638] hover:bg-[#131822] cursor-pointer transition-colors group text-xs font-mono"
    >
      <td className="py-3 px-3">
        <PriorityBadge priority={incident.priority} />
      </td>
      <td className="py-3 px-3 font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
        #{incident.id}
      </td>
      <td className="py-3 px-3 font-semibold text-slate-100">
        #{incident.carNumber}{' '}
        <span className="text-slate-500 font-normal">({incident.driverName.split(' ')[1]})</span>
      </td>
      <td className="py-3 px-3 text-slate-300">L{incident.lap}</td>
      <td className="py-3 px-3 text-slate-300">T{incident.turn}</td>
      <td className="py-3 px-3 text-amber-400 font-semibold">
        {formatExcursion(incident.excursionCm)}
      </td>
      <td className="py-3 px-3 text-slate-400">{formatSeconds(incident.durationSec)}</td>
      <td className="py-3 px-3">
        <ConfidenceBadge confidence={incident.confidence} />
      </td>
      <td className="py-3 px-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <StatusBadge status={incident.status} />
          <EvidenceConflictBadge hasConflict={incident.conflicts.length > 0} count={incident.conflicts.length} />
        </div>
      </td>
      <td className="py-3 px-3 text-right">
        <span className="inline-flex items-center text-cyan-400 group-hover:translate-x-0.5 transition-transform">
          Review <ChevronRight size={14} className="ml-1" />
        </span>
      </td>
    </tr>
  );
};

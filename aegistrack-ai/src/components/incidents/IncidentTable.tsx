import React, { useState } from 'react';
import { Incident } from '../../types/incident';
import { IncidentRow } from '../dashboard/IncidentRow';
import { ArrowUpDown } from 'lucide-react';
import { EmptyState } from '../ui/EmptyState';

interface IncidentTableProps {
  incidents: Incident[];
}

export const IncidentTable: React.FC<IncidentTableProps> = ({ incidents }) => {
  const [sortField, setSortField] = useState<'priority' | 'confidence' | 'lap' | 'excursionCm'>('priority');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sorted = [...incidents].sort((a, b) => {
    const factor = sortAsc ? 1 : -1;
    return (a[sortField] > b[sortField] ? 1 : -1) * factor;
  });

  if (sorted.length === 0) {
    return (
      <EmptyState
        title="NO INCIDENTS MATCH CRITERIA"
        description="Try clearing search filters or changing the active confidence tab."
      />
    );
  }

  return (
    <div className="overflow-x-auto border border-[#1e2638] rounded-md bg-[#0d1117]">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b border-[#1e2638] bg-[#090c10] text-[10px] font-mono text-slate-400 uppercase tracking-wider select-none">
            <th className="py-2.5 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort('priority')}>
              <div className="flex items-center gap-1">Priority <ArrowUpDown size={12} /></div>
            </th>
            <th className="py-2.5 px-3">ID</th>
            <th className="py-2.5 px-3">Car</th>
            <th className="py-2.5 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort('lap')}>
              <div className="flex items-center gap-1">Lap <ArrowUpDown size={12} /></div>
            </th>
            <th className="py-2.5 px-3">Turn</th>
            <th className="py-2.5 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort('excursionCm')}>
              <div className="flex items-center gap-1">Excursion <ArrowUpDown size={12} /></div>
            </th>
            <th className="py-2.5 px-3">Duration</th>
            <th className="py-2.5 px-3 cursor-pointer hover:text-cyan-400" onClick={() => handleSort('confidence')}>
              <div className="flex items-center gap-1">Confidence <ArrowUpDown size={12} /></div>
            </th>
            <th className="py-2.5 px-3">Status</th>
            <th className="py-2.5 px-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((inc) => (
            <IncidentRow key={inc.id} incident={inc} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

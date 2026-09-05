import React from 'react';
import { Card } from '../ui/Card';
import { Incident } from '../../types/incident';
import { IncidentRow } from './IncidentRow';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface IncidentQueueProps {
  incidents: Incident[];
}

export const IncidentQueue: React.FC<IncidentQueueProps> = ({ incidents }) => {
  return (
    <Card
      header={
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-100 uppercase tracking-wider">
              Live Incident Queue
            </h3>
            <p className="text-[11px] text-slate-400 font-mono">
              Chronological track-limit incursions awaiting or under review
            </p>
          </div>
          <Link
            to="/incidents"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            View All ({incidents.length}) <ArrowUpRight size={14} />
          </Link>
        </div>
      }
    >
      <div className="overflow-x-auto -mx-4 -my-4">
        <table className="w-full text-left border-collapse min-w-[750px]">
          <thead>
            <tr className="border-b border-[#1e2638] bg-[#090c10]/70 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              <th className="py-2.5 px-3">Priority</th>
              <th className="py-2.5 px-3">ID</th>
              <th className="py-2.5 px-3">Car</th>
              <th className="py-2.5 px-3">Lap</th>
              <th className="py-2.5 px-3">Turn</th>
              <th className="py-2.5 px-3">Excursion</th>
              <th className="py-2.5 px-3">Duration</th>
              <th className="py-2.5 px-3">Confidence</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {incidents.slice(0, 8).map((incident) => (
              <IncidentRow key={incident.id} incident={incident} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

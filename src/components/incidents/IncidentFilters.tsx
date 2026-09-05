import React from 'react';
import { Search } from 'lucide-react';

interface FilterState {
  search: string;
  tab: 'ALL' | 'HIGH_CONFIDENCE' | 'HUMAN_REVIEW' | 'UNCERTAIN' | 'CONFLICT';
  turn: string;
}

interface IncidentFiltersProps {
  filters: FilterState;
  onChange: (f: FilterState) => void;
}

export const IncidentFilters: React.FC<IncidentFiltersProps> = ({ filters, onChange }) => {
  const tabs = [
    { id: 'ALL', label: 'ALL INCIDENTS' },
    { id: 'HIGH_CONFIDENCE', label: 'HIGH CONFIDENCE' },
    { id: 'HUMAN_REVIEW', label: 'HUMAN REVIEW' },
    { id: 'UNCERTAIN', label: 'UNCERTAIN' },
    { id: 'CONFLICT', label: 'CONFLICTS' },
  ] as const;

  return (
    <div className="space-y-3 font-mono">
      <div className="flex flex-wrap gap-1 border-b border-[#1e2638] pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange({ ...filters, tab: tab.id })}
            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider transition-colors ${
              filters.tab === tab.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search by Car #, Driver, or Turn..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full bg-[#0d1117] border border-[#1e2638] rounded pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <select
          value={filters.turn}
          onChange={(e) => onChange({ ...filters, turn: e.target.value })}
          className="bg-[#0d1117] border border-[#1e2638] rounded px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
        >
          <option value="">ALL TURNS</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={`${i + 1}`}>
              TURN {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

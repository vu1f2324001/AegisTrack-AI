import { Incident } from '../types/incident';

export function getPriorityLabel(priority: number): string {
  switch (priority) {
    case 1: return 'P1 CRITICAL';
    case 2: return 'P2 ELEVATED';
    case 3: return 'P3 MONITOR';
    default: return 'P4 LOW';
  }
}

export function getPriorityBadgeClass(priority: number): string {
  switch (priority) {
    case 1: return 'bg-red-500/15 text-red-400 border-red-500/30';
    case 2: return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
    case 3: return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
    default: return 'bg-slate-700/30 text-slate-400 border-slate-700';
  }
}

export function hasEvidenceConflict(incident: Incident): boolean {
  return incident.conflicts.length > 0;
}

import React from 'react';
import { Incident } from '../../types/incident';
import { ExplanationPoint } from './ExplanationPoint';
import { Cpu, ShieldCheck } from 'lucide-react';

interface ExplanationPanelProps {
  incident: Incident;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ incident }) => {
  const isHighConfidence = incident.confidence >= 90;

  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
          Synthesized Evidence Factors:
        </h4>
        <ul className="space-y-2.5 bg-[#090c10] p-3.5 rounded border border-[#1e2638]">
          {incident.explanation.map((item, idx) => (
            <ExplanationPoint key={idx} text={item} isPositive={!item.includes('conflict') && !item.includes('occluded')} />
          ))}
        </ul>
      </div>

      <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-1">
          <Cpu size={14} /> AI EXPLANATION SUMMARY
        </div>
        <p className="text-xs text-slate-300 font-mono leading-relaxed">
          {isHighConfidence
            ? 'High-confidence event because visual, positional and temporal evidence independently corroborate track limit excursion without contradictory telemetry.'
            : 'Uncertain event flagged for manual inspection: multi-modal sensors report contradictory readings or insufficient optical confidence to warrant automated recommendation.'}
        </p>
      </div>

      <div className="flex items-center justify-between p-3 bg-[#0d1117] border border-slate-700 rounded font-mono text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block">SYSTEM RECOMMENDATION</span>
          <span className="font-bold text-slate-100">{incident.recommendation}</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-400 block">AUTHORITY</span>
          <span className="text-amber-400 font-bold flex items-center gap-1 justify-end">
            <ShieldCheck size={13} /> AWAITING STEWARD
          </span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Incident, StewardDecisionType } from '../../types/incident';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ShieldCheck, Check, X, HelpCircle, History } from 'lucide-react';

interface StewardDecisionPanelProps {
  incident: Incident;
  onDecisionSubmit: (decision: StewardDecisionType, notes?: string) => Promise<void>;
}

export const StewardDecisionPanel: React.FC<StewardDecisionPanelProps> = ({
  incident,
  onDecisionSubmit,
}) => {
  const [selected, setSelected] = useState<StewardDecisionType>(
    incident.stewardDecision !== 'PENDING' ? incident.stewardDecision : 'ACCEPTED'
  );
  const [notes, setNotes] = useState(incident.decisionNotes || '');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await onDecisionSubmit(selected, notes);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card
      header={
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-mono font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-cyan-400" />
            STEWARD DECISION CONSOLE
          </span>
          <span className="text-[10px] font-mono text-slate-400">HUMAN AUTHORITY</span>
        </div>
      }
    >
      <div className="space-y-4 font-mono text-xs">
        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-400 text-[11px] leading-relaxed">
          <strong className="text-cyan-300">AI RECOMMENDATION ≠ FINAL DECISION:</strong> AI signals
          are advisory. The human steward panel retains sole regulatory authority under Sporting
          Regulations.
        </div>

        <div className="space-y-2">
          <label
            onClick={() => setSelected('ACCEPTED')}
            className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${
              selected === 'ACCEPTED'
                ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300'
                : 'bg-[#090c10] border-slate-800 text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <input
              type="radio"
              name="decision"
              checked={selected === 'ACCEPTED'}
              onChange={() => setSelected('ACCEPTED')}
              className="accent-emerald-500"
            />
            <Check size={16} className="text-emerald-400" />
            <div>
              <div className="font-bold">ACCEPT VIOLATION (Confirm Lap Time Deletion)</div>
              <div className="text-[10px] text-slate-400">Evidence proves track limit breach</div>
            </div>
          </label>

          <label
            onClick={() => setSelected('REJECTED')}
            className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${
              selected === 'REJECTED'
                ? 'bg-rose-500/15 border-rose-500 text-rose-300'
                : 'bg-[#090c10] border-slate-800 text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <input
              type="radio"
              name="decision"
              checked={selected === 'REJECTED'}
              onChange={() => setSelected('REJECTED')}
              className="accent-rose-500"
            />
            <X size={16} className="text-rose-400" />
            <div>
              <div className="font-bold">REJECT / DISMISS (No Violation)</div>
              <div className="text-[10px] text-slate-400">
                Contact patch remained on line or evidence ambiguous
              </div>
            </div>
          </label>

          <label
            onClick={() => setSelected('FURTHER_REVIEW')}
            className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${
              selected === 'FURTHER_REVIEW'
                ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                : 'bg-[#090c10] border-slate-800 text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <input
              type="radio"
              name="decision"
              checked={selected === 'FURTHER_REVIEW'}
              onChange={() => setSelected('FURTHER_REVIEW')}
              className="accent-amber-500"
            />
            <HelpCircle size={16} className="text-amber-400" />
            <div>
              <div className="font-bold">REQUEST POST-SESSION INQUIRY</div>
              <div className="text-[10px] text-slate-400">
                Summon driver/team manager for hearing
              </div>
            </div>
          </label>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
            Stewarding Rationale Notes (Optional):
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder="E.g., Concur with Turn 8 inductive sensor..."
            className="w-full bg-[#090c10] border border-slate-800 rounded p-2 text-slate-200 text-xs font-mono focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <Button
          variant="accent"
          size="md"
          className="w-full font-mono font-bold tracking-wider uppercase py-2.5"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? 'RECORDING DECISION...' : 'CONFIRM STEWARD DECISION'}
        </Button>

        {incident.decisionTimestamp && (
          <div className="p-2 bg-slate-900/60 border border-slate-800 rounded text-[11px] text-slate-400 flex items-center gap-2">
            <History size={14} className="text-cyan-400" />
            <span>
              Recorded: {new Date(incident.decisionTimestamp).toLocaleTimeString()} by{' '}
              {incident.reviewedBy || 'Steward'}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

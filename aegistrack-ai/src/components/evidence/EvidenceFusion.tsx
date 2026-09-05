import React from 'react';
import { Card } from '../ui/Card';
import { Incident } from '../../types/incident';
import { EvidenceBar } from './EvidenceBar';
import { ConfidenceScore } from './ConfidenceScore';
import { EvidenceConflict } from './EvidenceConflict';

interface EvidenceFusionProps {
  incident: Incident;
}

export const EvidenceFusion: React.FC<EvidenceFusionProps> = ({ incident }) => {
  const e = incident.evidence;

  return (
    <Card
      header={
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-mono font-bold text-slate-100 uppercase tracking-wider">
            Evidence Fusion Engine
          </span>
          <span className="text-[10px] font-mono text-cyan-400">BAYESIAN FUSION v2.4</span>
        </div>
      }
    >
      <div className="space-y-4">
        <ConfidenceScore score={incident.confidence} />
        <EvidenceConflict conflicts={incident.conflicts} />
        <div className="space-y-3 pt-2">
          <EvidenceBar label="Video Camera Feed" score={e.video} weight="0.25" />
          <EvidenceBar label="Wheel Edge Tracking" score={e.wheelPosition} weight="0.20" />
          <EvidenceBar label="High-Precision D-GPS" score={e.gps} weight="0.15" />
          <EvidenceBar label="Track Geometry CAD" score={e.trackGeometry} weight="0.15" />
          <EvidenceBar label="Temporal Frame Matrix" score={e.temporal} weight="0.10" />
          <EvidenceBar label="Optical Visibility Score" score={e.visibility} weight="0.08" />
          <EvidenceBar label="Historical Turn Context" score={e.context} weight="0.07" />
        </div>
      </div>
    </Card>
  );
};

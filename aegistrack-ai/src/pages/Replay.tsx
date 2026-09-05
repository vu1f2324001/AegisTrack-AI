import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ReplayPlayer } from '../components/replay/ReplayPlayer';
import { useIncidents } from '../hooks/useIncidents';
import { EvidenceFusion } from '../components/evidence/EvidenceFusion';
import { ShowMeWhy } from '../components/explanation/ShowMeWhy';
import { Card } from '../components/ui/Card';
import { LoadingSkeleton } from '../components/ui/LoadingSkeleton';

export const Replay: React.FC = () => {
  const { incidents, loading } = useIncidents();
  const [selectedId, setSelectedId] = useState<string>('027');

  const currentIncident = incidents.find((i) => i.id === selectedId) || incidents[0];

  if (loading || !currentIncident) {
    return (
      <PageContainer title="REPLAY WORKSPACE">
        <LoadingSkeleton count={6} className="h-16" />
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="REPLAY WORKSPACE"
      subtitle="FRAME-BY-FRAME MULTI-SENSOR REPLAY ANALYSIS"
      actions={
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-400">SELECT INCIDENT:</span>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="bg-[#0d1117] border border-[#1e2638] rounded px-2.5 py-1 text-xs text-cyan-300 focus:outline-none"
          >
            {incidents.map((inc) => (
              <option key={inc.id} value={inc.id}>
                #{inc.id} • Car #{inc.carNumber} • T{inc.turn} ({inc.confidence}%)
              </option>
            ))}
          </select>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <ReplayPlayer incident={currentIncident} />
          <ShowMeWhy incident={currentIncident} />
        </div>
        <div className="lg:col-span-4 space-y-4">
          <Card header={<span className="text-xs font-mono font-bold">REPLAY METRIC OVERVIEW</span>}>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Driver:</span>
                <span className="text-slate-200">{currentIncident.driverName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Lap / Turn:</span>
                <span className="text-slate-200">
                  L{currentIncident.lap} / Turn {currentIncident.turn}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Excursion Depth:</span>
                <span className="text-rose-400 font-bold">{currentIncident.excursionCm} cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Current Decision:</span>
                <span className="text-amber-300">{currentIncident.stewardDecision}</span>
              </div>
            </div>
          </Card>
          <EvidenceFusion incident={currentIncident} />
        </div>
      </div>
    </PageContainer>
  );
};

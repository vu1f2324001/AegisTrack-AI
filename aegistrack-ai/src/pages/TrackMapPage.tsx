import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { TrackMap } from '../components/track/TrackMap';
import { mockTrackTurns } from '../data/mockTrack';
import { TrackTurnData } from '../types/track';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';

export const TrackMapPage: React.FC = () => {
  const [selectedTurn, setSelectedTurn] = useState<TrackTurnData | null>(mockTrackTurns[7]);

  return (
    <PageContainer
      title="TRACK GEOMETRY & INCURSION MAP"
      subtitle="SPATIAL DISTRIBUTION OF DETECTED TRACK LIMIT EXCURSIONS"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <TrackMap
            turns={mockTrackTurns}
            selectedTurn={selectedTurn}
            onSelectTurn={(t) => setSelectedTurn(t)}
          />
        </div>

        <div className="lg:col-span-4 space-y-4">
          {selectedTurn ? (
            <Card
              header={
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-bold text-slate-100 uppercase">
                    TURN {selectedTurn.turnNumber} DETAILS
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    {selectedTurn.turnName}
                  </span>
                </div>
              }
            >
              <div className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#090c10] border border-slate-800 rounded">
                    <span className="text-[10px] text-slate-500 uppercase block">Total Flags</span>
                    <span className="text-xl font-bold text-slate-100">
                      {selectedTurn.incidentCount}
                    </span>
                  </div>
                  <div className="p-3 bg-[#090c10] border border-slate-800 rounded">
                    <span className="text-[10px] text-slate-500 uppercase block">Mean Conf.</span>
                    <span className="text-xl font-bold text-emerald-400">
                      {selectedTurn.avgConfidence}%
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>High Confidence Violations:</span>
                    <span className="font-bold text-emerald-400">{selectedTurn.highConfidenceCount}</span>
                  </div>
                  <ProgressBar value={(selectedTurn.highConfidenceCount / selectedTurn.incidentCount) * 100} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>Human Review Flags:</span>
                    <span className="font-bold text-amber-400">{selectedTurn.humanReviewCount}</span>
                  </div>
                  <ProgressBar value={(selectedTurn.humanReviewCount / selectedTurn.incidentCount) * 100} color="bg-amber-500" />
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded text-[11px] text-slate-400 leading-relaxed">
                  Turn {selectedTurn.turnNumber} features high lateral curb strike velocity. Optical sightline 4 calibrates against inductive perimeter loop sensors.
                </div>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="p-6 text-center font-mono text-xs text-slate-500">
                Click any turn beacon on the track geometry map to inspect telemetry density.
              </div>
            </Card>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

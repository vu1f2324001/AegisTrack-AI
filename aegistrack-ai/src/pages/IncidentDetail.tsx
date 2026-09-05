import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useIncident } from '../hooks/useIncident';
import { PageContainer } from '../components/layout/PageContainer';
import { ReplayPlayer } from '../components/replay/ReplayPlayer';
import { EvidenceFusion } from '../components/evidence/EvidenceFusion';
import { ShowMeWhy } from '../components/explanation/ShowMeWhy';
import { StewardDecisionPanel } from '../components/steward/StewardDecisionPanel';
import { ConfidenceBadge } from '../components/incidents/ConfidenceBadge';
import { StatusBadge } from '../components/incidents/StatusBadge';
import { PriorityBadge } from '../components/incidents/PriorityBadge';
import { Card } from '../components/ui/Card';
import { LoadingSkeleton } from '../components/ui/LoadingSkeleton';
import { ToastContainer, ToastMessage } from '../components/ui/Toast';
import { ArrowLeft } from 'lucide-react';
import { formatExcursion, formatSeconds, formatSpeed } from '../utils/formatters';

export const IncidentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { incident, loading, submitDecision } = useIncident(id);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleDecision = async (decision: any, notes?: string) => {
    await submitDecision(decision, notes);
    setToasts((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: 'success',
        title: 'STEWARD DECISION RECORDED',
        message: `Decision updated to ${decision}. Stored in local state.`,
      },
    ]);
  };

  if (loading) {
    return (
      <PageContainer title="LOADING INCIDENT...">
        <LoadingSkeleton count={8} className="h-16" />
      </PageContainer>
    );
  }

  if (!incident) {
    return (
      <PageContainer title="INCIDENT NOT FOUND">
        <div className="p-8 text-center font-mono">
          <p className="text-slate-400 mb-4">Incident #{id} could not be located in local telemetry records.</p>
          <Link to="/incidents" className="text-cyan-400 hover:underline">
            ← Return to Incident List
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title={`INCIDENT #${incident.id} • CAR #${incident.carNumber}`}
      subtitle={`LAP ${incident.lap} • TURN ${incident.turn} (${incident.driverName} • ${incident.team})`}
      actions={
        <div className="flex items-center gap-2">
          <Link to="/incidents">
            <button className="px-3 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 flex items-center gap-1.5">
              <ArrowLeft size={14} /> Back to Queue
            </button>
          </Link>
          <PriorityBadge priority={incident.priority} />
          <StatusBadge status={incident.status} />
          <ConfidenceBadge confidence={incident.confidence} />
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Multi-Sensor Optical Replay
              </span>
              <span className="text-[11px] font-mono text-slate-500">SYNCHRONIZED SENSOR CAD</span>
            </div>
            <ReplayPlayer incident={incident} />
          </div>

          <ShowMeWhy incident={incident} />
          <StewardDecisionPanel incident={incident} onDecisionSubmit={handleDecision} />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <Card
            header={
              <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Telemetry & Boundary Metrics
              </span>
            }
          >
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-2.5 bg-[#090c10] border border-slate-800 rounded">
                <span className="text-[10px] text-slate-500 uppercase block">Max Excursion</span>
                <span className="text-lg font-bold text-rose-400">
                  {formatExcursion(incident.excursionCm)}
                </span>
                <span className="text-[9px] text-slate-500 block">Beyond white boundary</span>
              </div>

              <div className="p-2.5 bg-[#090c10] border border-slate-800 rounded">
                <span className="text-[10px] text-slate-500 uppercase block">Duration</span>
                <span className="text-lg font-bold text-slate-200">
                  {formatSeconds(incident.durationSec)}
                </span>
                <span className="text-[9px] text-slate-500 block">Across {incident.framesAffected} frames</span>
              </div>

              <div className="p-2.5 bg-[#090c10] border border-slate-800 rounded">
                <span className="text-[10px] text-slate-500 uppercase block">Apex Entry Speed</span>
                <span className="text-lg font-bold text-cyan-400">
                  {formatSpeed(incident.entrySpeedKmh)}
                </span>
                <span className="text-[9px] text-slate-500 block">Lateral Load 3.8G</span>
              </div>

              <div className="p-2.5 bg-[#090c10] border border-slate-800 rounded">
                <span className="text-[10px] text-slate-500 uppercase block">Exit Speed</span>
                <span className="text-lg font-bold text-cyan-400">
                  {formatSpeed(incident.exitSpeedKmh)}
                </span>
                <span className="text-[9px] text-slate-500 block">Delta -23.7 km/h</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              <strong>CONTEXT:</strong> {incident.context}
            </div>
          </Card>

          <EvidenceFusion incident={incident} />
        </div>
      </div>

      <ToastContainer toasts={toasts} onDismiss={(id) => setToasts((t) => t.filter((x) => x.id !== id))} />
    </PageContainer>
  );
};

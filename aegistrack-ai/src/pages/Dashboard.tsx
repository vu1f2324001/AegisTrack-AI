import React, { useEffect, useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { StatCard } from '../components/dashboard/StatCard';
import { IncidentQueue } from '../components/dashboard/IncidentQueue';
import { SessionStatus } from '../components/dashboard/SessionStatus';
import { ConfidenceOverview } from '../components/dashboard/ConfidenceOverview';
import { incidentService } from '../services/incidentService';
import { SessionData } from '../types/session';
import { Incident } from '../types/incident';
import { ShieldCheck, AlertTriangle, HelpCircle, Activity, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { LoadingSkeleton } from '../components/ui/LoadingSkeleton';

export const Dashboard: React.FC = () => {
  const [session, setSession] = useState<SessionData | null>(null);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const [s, inc] = await Promise.all([
        incidentService.getSession(),
        incidentService.getIncidents(),
      ]);
      setSession(s);
      setIncidents(inc);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleResetData = async () => {
    await incidentService.resetToDefaults();
    await loadData();
  };

  if (loading || !session) {
    return (
      <PageContainer title="RACE CONTROL DASHBOARD">
        <LoadingSkeleton count={6} className="h-16" />
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="RACE CONTROL DASHBOARD"
      subtitle="REAL-TIME EVIDENCE FUSION & TRACK LIMIT INCURSIONS"
      actions={
        <Button
          size="sm"
          variant="ghost"
          onClick={handleResetData}
          icon={<RotateCcw size={13} />}
          title="Reset local mock state"
        >
          RESET MOCK STATE
        </Button>
      }
    >
      <SessionStatus session={session} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="TOTAL INCIDENTS"
          value={session.totalIncidents}
          subtext="Flagged by multi-sensor array"
          icon={<Activity size={18} />}
          accent="slate"
        />
        <StatCard
          label="HIGH CONFIDENCE"
          value={session.highConfidenceCount}
          subtext="Clear breach (>90% Bayesian)"
          icon={<ShieldCheck size={18} className="text-emerald-400" />}
          accent="green"
        />
        <StatCard
          label="HUMAN REVIEW"
          value={session.humanReviewCount}
          subtext="Sensor dispute or edge breach"
          icon={<AlertTriangle size={18} className="text-amber-400" />}
          accent="amber"
        />
        <StatCard
          label="INSUFFICIENT EVIDENCE"
          value={session.uncertainCount}
          subtext="Occluded or low-frame events"
          icon={<HelpCircle size={18} className="text-rose-400" />}
          accent="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IncidentQueue incidents={incidents} />
        </div>
        <div>
          <ConfidenceOverview
            avgConfidence={session.averageConfidence}
            conflictsCount={session.conflictCount}
          />
        </div>
      </div>
    </PageContainer>
  );
};

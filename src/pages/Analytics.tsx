import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import {
  mockIncidentsByLap,
  mockConfidenceDistribution,
  mockIncidentsByTurn,
  mockEvidenceAgreement,
  mockExcursionTrend,
} from '../data/mockAnalytics';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <PageContainer
      title="STEWARDING ANALYTICS"
      subtitle="POPULATION-LEVEL TRACK LIMIT PATTERNS & SENSOR AGREEMENT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card
          header={
            <span className="text-xs font-mono font-bold text-slate-100 uppercase">
              Incidents Across Race Laps
            </span>
          }
        >
          <div className="h-64 w-full text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockIncidentsByLap}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                <XAxis dataKey="lap" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0d1117', borderColor: '#334155' }} />
                <Line type="monotone" dataKey="incidents" stroke="#06b6d4" strokeWidth={2} name="Total Incidents" />
                <Line type="monotone" dataKey="highConf" stroke="#10b981" strokeWidth={2} name="High Confidence" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card
          header={
            <span className="text-xs font-mono font-bold text-slate-100 uppercase">
              Confidence Score Distribution
            </span>
          }
        >
          <div className="h-64 w-full text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockConfidenceDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                <XAxis dataKey="range" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0d1117', borderColor: '#334155' }} />
                <Bar dataKey="count" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card
          header={
            <span className="text-xs font-mono font-bold text-slate-100 uppercase">
              Incursions by Turn Number
            </span>
          }
        >
          <div className="h-64 w-full text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockIncidentsByTurn}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                <XAxis dataKey="turn" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0d1117', borderColor: '#334155' }} />
                <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card
          header={
            <span className="text-xs font-mono font-bold text-slate-100 uppercase">
              Sensor Agreement Coherence
            </span>
          }
        >
          <div className="h-64 w-full text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={mockEvidenceAgreement}>
                <PolarGrid stroke="#1f293d" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
                <PolarRadiusAxis stroke="#64748b" />
                <Radar name="Agreement %" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.25} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card
        header={
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-mono font-bold text-slate-100 uppercase flex items-center gap-1.5">
              <TrendingUp size={16} className="text-amber-400" />
              Car #27 Longitudinal Excursion Trend (Turn 8)
            </span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              Review Prioritization Signal
            </span>
          </div>
        }
      >
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded flex items-center gap-2.5 text-amber-300">
            <AlertTriangle size={18} className="shrink-0" />
            <div>
              <strong>Increasing boundary-excursion trend detected:</strong> Excursion depth progressed from 5.2 cm (Lap 10) to 18.4 cm (Lap 34). This telemetry serves as a <em>review prioritization signal</em> and not an automated penalty.
            </div>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockExcursionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                <XAxis dataKey="lap" stroke="#64748b" label={{ value: 'Lap Number', position: 'insideBottom', offset: -5, fill: '#64748b' }} />
                <YAxis stroke="#64748b" label={{ value: 'Excursion (cm)', angle: -90, position: 'insideLeft', fill: '#64748b' }} />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0d1117', borderColor: '#334155' }} />
                <Line type="monotone" dataKey="excursionCm" stroke="#ef4444" strokeWidth={2.5} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

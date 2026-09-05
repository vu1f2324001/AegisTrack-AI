import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '../components/ui/Button';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useLocalStorage('aegistrack_settings_v1', {
    raceName: 'Grand Prix of Monaco',
    circuit: 'Circuit de Monaco (Synthetic Spec)',
    sessionType: 'RACE',
    highConfidenceThreshold: 90,
    humanReviewThreshold: 50,
    compactMode: false,
    showTelemetry: true,
    showConfidence: true,
    showEvidenceDetails: true,
  });

  return (
    <PageContainer
      title="SYSTEM SETTINGS"
      subtitle="STEWARDING THRESHOLDS & INTERFACE PREFERENCES"
    >
      <div className="max-w-3xl space-y-6 font-mono text-xs">
        <Card header={<span className="font-bold text-slate-200">SESSION IDENTIFIERS</span>}>
          <div className="space-y-3">
            <div>
              <label className="text-slate-400 block mb-1">Grand Prix Event Name</label>
              <input
                type="text"
                value={settings.raceName}
                onChange={(e) => setSettings({ ...settings, raceName: e.target.value })}
                className="w-full bg-[#090c10] border border-slate-800 rounded p-2 text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Circuit Geometry Name</label>
              <input
                type="text"
                value={settings.circuit}
                onChange={(e) => setSettings({ ...settings, circuit: e.target.value })}
                className="w-full bg-[#090c10] border border-slate-800 rounded p-2 text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </Card>

        <Card header={<span className="font-bold text-slate-200">BAYESIAN THRESHOLDS</span>}>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">High Confidence Auto-Escalation Threshold</span>
                <span className="text-emerald-400 font-bold">{settings.highConfidenceThreshold}%</span>
              </div>
              <input
                type="range"
                min="75"
                max="98"
                value={settings.highConfidenceThreshold}
                onChange={(e) =>
                  setSettings({ ...settings, highConfidenceThreshold: Number(e.target.value) })
                }
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Human Review Minimum Confidence Threshold</span>
                <span className="text-amber-400 font-bold">{settings.humanReviewThreshold}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="70"
                value={settings.humanReviewThreshold}
                onChange={(e) =>
                  setSettings({ ...settings, humanReviewThreshold: Number(e.target.value) })
                }
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>
        </Card>

        <Card header={<span className="font-bold text-slate-200">INTERFACE CONFIGURATION</span>}>
          <div className="space-y-3">
            {[
              { key: 'compactMode', label: 'Compact Data Density Mode' },
              { key: 'showTelemetry', label: 'Display Realtime Wheel Speed Telemetry' },
              { key: 'showConfidence', label: 'Render Confidence Badges on Queue' },
              { key: 'showEvidenceDetails', label: 'Expand Multi-Modal Fusion Bars by Default' },
            ].map((item) => (
              <label key={item.key} className="flex items-center justify-between p-2 rounded hover:bg-slate-800/40 cursor-pointer">
                <span className="text-slate-300">{item.label}</span>
                <input
                  type="checkbox"
                  checked={(settings as any)[item.key]}
                  onChange={(e) =>
                    setSettings({ ...settings, [item.key]: e.target.checked })
                  }
                  className="accent-cyan-500 w-4 h-4"
                />
              </label>
            ))}
          </div>
        </Card>

        <div className="flex justify-end">
          <Button variant="primary" size="md">
            SETTINGS PERSISTED TO LOCAL STORAGE
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, Printer, CheckCircle } from 'lucide-react';
import { useIncidents } from '../hooks/useIncidents';

export const Reports: React.FC = () => {
  const { incidents } = useIncidents();
  const inc = incidents[0];

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(incidents, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `aegistrack_steward_dossier_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  if (!inc) return null;

  return (
    <PageContainer
      title="STEWARD DECISION DOSSIER"
      subtitle="OFFICIAL EVIDENCE CERTIFICATE GENERATOR"
      actions={
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={handlePrint} icon={<Printer size={14} />}>
            PRINT
          </Button>
          <Button variant="primary" size="sm" onClick={handleExportJSON} icon={<Download size={14} />}>
            EXPORT REPORT (JSON)
          </Button>
        </div>
      }
    >
      <div className="max-w-3xl mx-auto">
        <Card className="bg-[#090c10] border-slate-700 p-8 font-mono space-y-6">
          <div className="border-b border-slate-700 pb-4 flex justify-between items-start">
            <div>
              <div className="text-xl font-bold tracking-wider text-slate-100">AEGISTRACK INCIDENT REPORT</div>
              <div className="text-xs text-slate-400">EVIDENCE-FUSION DECISION DOSSIER</div>
            </div>
            <div className="text-right text-xs">
              <div className="text-cyan-400 font-bold">DOC ID: AT-2026-027</div>
              <div className="text-slate-400">{new Date(inc.timestamp).toUTCString()}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs border-b border-slate-800 pb-4">
            <div>
              <span className="text-slate-500 block">CAR & DRIVER:</span>
              <span className="text-slate-200 font-bold">#{inc.carNumber} - {inc.driverName}</span>
            </div>
            <div>
              <span className="text-slate-500 block">SESSION LOCATION:</span>
              <span className="text-slate-200 font-bold">Lap {inc.lap} • Turn {inc.turn}</span>
            </div>
            <div>
              <span className="text-slate-500 block">MAXIMUM EXCURSION:</span>
              <span className="text-rose-400 font-bold">{inc.excursionCm} cm</span>
            </div>
            <div>
              <span className="text-slate-500 block">PERSISTENT DURATION:</span>
              <span className="text-slate-200 font-bold">{inc.durationSec}s ({inc.framesAffected} frames)</span>
            </div>
            <div>
              <span className="text-slate-500 block">EVIDENCE CONFIDENCE:</span>
              <span className="text-emerald-400 font-bold">{inc.confidence}% (HIGH CONFIDENCE)</span>
            </div>
            <div>
              <span className="text-slate-500 block">STEWARD STATUS:</span>
              <span className="text-amber-400 font-bold">{inc.stewardDecision}</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-300 mb-2">VALIDATED EVIDENCE CHANNELS:</div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> Video Optical Tracking (98%)</div>
              <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> Wheel Contact Footprint (93%)</div>
              <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> High-Precision D-GPS (89%)</div>
              <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> Track CAD Geometry (95%)</div>
              <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> Temporal Matrix (97%)</div>
              <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> Apex Context Baseline (91%)</div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded text-xs text-slate-300 space-y-1">
            <span className="font-bold text-cyan-400 block">SUMMARY STATEMENT:</span>
            <p>
              Autonomous sensory agreement confirmed rear-left contact patch excursion of 18.4 cm outside the track demarcation boundary during apex exit. No signal degradation or camera occlusion present.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-end text-[11px] text-slate-500">
            <div>
              <div>SYSTEM: AEGISTRACK EVIDENCE ENGINE v1.0</div>
              <div>HASH: 7f8a92b0c1e4d92</div>
            </div>
            <div className="text-right">
              <div className="border-b border-slate-600 w-48 mb-1"></div>
              <div>CHIEF RACE STEWARD SIGNATURE</div>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

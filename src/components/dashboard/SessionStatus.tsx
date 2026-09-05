import React from 'react';
import { Card } from '../ui/Card';
import { SessionData } from '../../types/session';
import { Activity, Clock, Shield } from 'lucide-react';

interface SessionStatusProps {
  session: SessionData;
}

export const SessionStatus: React.FC<SessionStatusProps> = ({ session }) => {
  return (
    <Card className="bg-[#0d1117] border-[#1e2638]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Activity size={20} />
          </div>
          <div>
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase">
              {session.eventName}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Circuit: {session.circuitName} • Type: {session.sessionType}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-slate-400" />
            <span className="text-slate-400">LAP:</span>
            <span className="text-cyan-300 font-bold">
              {session.currentLap} / {session.totalLaps}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-slate-400" />
            <span className="text-slate-400">CARS ACTIVE:</span>
            <span className="text-emerald-400 font-bold">{session.activeCars}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

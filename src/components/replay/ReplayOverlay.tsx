import React from 'react';
import { Incident } from '../../types/incident';

interface ReplayOverlayProps {
  incident: Incident;
  currentFrame: number;
}

export const ReplayOverlay: React.FC<ReplayOverlayProps> = ({ incident, currentFrame }) => {
  const isCrossing = currentFrame >= 4 && currentFrame <= 12;
  const offendingWheel = incident.offendingWheel;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/60 font-mono text-xs select-none">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="bg-black/70 border border-slate-700/80 px-2.5 py-1 rounded inline-block">
            <span className="text-cyan-400 font-bold">CAR #{incident.carNumber}</span> • LAP{' '}
            {incident.lap} • TURN {incident.turn}
          </div>
          <div className="text-[10px] text-slate-400">
            FRAME: {currentFrame} / 18 • FREQ: 60 FPS OPTICAL
          </div>
        </div>

        <div className="bg-black/70 border border-slate-700/80 px-2.5 py-1 rounded text-right">
          <div className="text-slate-300 font-bold">
            LATERAL EXCURSION:{' '}
            <span className={isCrossing ? 'text-rose-400' : 'text-slate-400'}>
              {isCrossing ? `+${incident.excursionCm} cm` : '0.0 cm (INSIDE)'}
            </span>
          </div>
          <div className="text-[10px] text-slate-400">
            SPEED: {Math.round(incident.entrySpeedKmh)} KM/H
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center h-48">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line
            x1="10%"
            y1="68%"
            x2="90%"
            y2="32%"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="6 3"
          />
          <text x="12%" y="64%" fill="#ffffff" fontSize="10" fontFamily="monospace">
            WHITE BOUNDARY LINE (CAD SIGHTLINE)
          </text>
        </svg>

        <div className="relative w-44 h-56 bg-slate-900/90 border border-cyan-500/50 rounded-lg p-2 shadow-2xl flex flex-col justify-between transform -rotate-12">
          <div className="flex justify-between -mx-3">
            <div
              className={`w-4 h-9 rounded-sm border ${
                offendingWheel === 'FRONT_LEFT' && isCrossing
                  ? 'bg-red-500 border-red-300 shadow-[0_0_10px_#ef4444]'
                  : 'bg-slate-700 border-slate-500'
              }`}
            />
            <div
              className={`w-4 h-9 rounded-sm border ${
                offendingWheel === 'FRONT_RIGHT' && isCrossing
                  ? 'bg-red-500 border-red-300 shadow-[0_0_10px_#ef4444]'
                  : 'bg-slate-700 border-slate-500'
              }`}
            />
          </div>

          <div className="text-center">
            <div className="text-[10px] text-slate-400">FRONT ▲</div>
            <div className="text-base font-bold text-white tracking-widest my-1">
              #{incident.carNumber}
            </div>
            <div className="text-[9px] text-cyan-400">{incident.team}</div>
          </div>

          <div className="flex justify-between -mx-3">
            <div
              className={`w-4 h-9 rounded-sm border ${
                (offendingWheel === 'REAR_LEFT' || offendingWheel === 'ALL_FOUR') && isCrossing
                  ? 'bg-red-500 border-red-300 shadow-[0_0_12px_#ef4444]'
                  : 'bg-slate-700 border-slate-500'
              }`}
            />
            <div
              className={`w-4 h-9 rounded-sm border ${
                (offendingWheel === 'REAR_RIGHT' || offendingWheel === 'ALL_FOUR') && isCrossing
                  ? 'bg-red-500 border-red-300 shadow-[0_0_12px_#ef4444]'
                  : 'bg-slate-700 border-slate-500'
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="bg-black/80 border border-slate-700 px-3 py-1.5 rounded max-w-sm">
          <span className="text-[10px] text-slate-400 uppercase block">Boundary Status:</span>
          {isCrossing ? (
            <span className="text-red-400 font-bold">
              {incident.offendingWheel.replace('_', '-')} wheel {incident.excursionCm} cm outside
            </span>
          ) : (
            <span className="text-emerald-400 font-bold">Chassis fully within track boundaries</span>
          )}
        </div>

        <div className="text-[10px] text-slate-400 bg-black/70 px-2 py-1 rounded border border-slate-800">
          PROTOTYPE HUD OVERLAY • SYNTHETIC REPLAY FEED
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { TrackTurnData } from '../../types/track';

interface TrackMapProps {
  turns: TrackTurnData[];
  selectedTurn: TrackTurnData | null;
  onSelectTurn: (turn: TrackTurnData) => void;
}

export const TrackMap: React.FC<TrackMapProps> = ({ turns, selectedTurn, onSelectTurn }) => {
  const trackPath = "M 180 380 C 200 320, 240 290, 260 290 C 300 290, 340 200, 380 170 C 420 140, 470 140, 500 150 C 560 170, 600 180, 620 210 C 640 240, 670 260, 670 280 C 670 310, 650 330, 650 350 C 650 390, 680 410, 690 440 C 700 480, 560 500, 510 510 C 470 520, 450 530, 440 530 C 380 530, 350 500, 320 490 C 270 470, 220 480, 210 470 C 180 440, 160 410, 180 380 Z";

  return (
    <div className="relative w-full aspect-[16/10] bg-[#07090e] border border-[#1e2638] rounded-md flex items-center justify-center p-4 select-none overflow-hidden">
      <svg
        viewBox="100 100 650 480"
        className="w-full h-full max-w-3xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={trackPath}
          fill="none"
          stroke="#1e293d"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={trackPath}
          fill="none"
          stroke="#0f172a"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={trackPath}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        {turns.map((t) => {
          const isSelected = selectedTurn?.turnNumber === t.turnNumber;
          const markerColor =
            t.severity === 'high' ? '#ef4444' : t.severity === 'medium' ? '#f59e0b' : '#10b981';

          return (
            <g
              key={t.turnNumber}
              className="cursor-pointer group"
              onClick={() => onSelectTurn(t)}
            >
              {isSelected && (
                <circle
                  cx={t.svgCoords.x}
                  cy={t.svgCoords.y}
                  r="18"
                  fill="none"
                  stroke={markerColor}
                  strokeWidth="2"
                  className="animate-ping"
                  opacity="0.6"
                />
              )}
              <circle
                cx={t.svgCoords.x}
                cy={t.svgCoords.y}
                r={isSelected ? '12' : '9'}
                fill="#0d1117"
                stroke={markerColor}
                strokeWidth="2.5"
                className="transition-all duration-200 group-hover:scale-125"
              />
              <text
                x={t.svgCoords.x}
                y={t.svgCoords.y + 3.5}
                textAnchor="middle"
                fontSize={isSelected ? '9' : '8'}
                fontWeight="bold"
                fill="#f8fafc"
                fontFamily="monospace"
                pointerEvents="none"
              >
                {t.turnNumber}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="absolute bottom-3 left-3 bg-black/80 border border-slate-800 px-3 py-1.5 rounded font-mono text-[10px] text-slate-400 space-x-3">
        <span>● <span className="text-red-400">High Incursions (&gt;15)</span></span>
        <span>● <span className="text-amber-400">Moderate (8-15)</span></span>
        <span>● <span className="text-emerald-400">Low (&lt;8)</span></span>
      </div>
    </div>
  );
};

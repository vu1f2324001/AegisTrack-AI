import React from 'react';

interface ReplayTimelineProps {
  currentFrame: number;
  totalFrames?: number;
  onSeek: (frame: number) => void;
}

export const ReplayTimeline: React.FC<ReplayTimelineProps> = ({
  currentFrame,
  totalFrames = 18,
  onSeek,
}) => {
  return (
    <div className="p-3 bg-[#090c10] border-x border-[#1e2638] font-mono text-xs">
      <div className="flex justify-between text-[10px] text-slate-400 mb-1.5">
        <span>BEFORE APEX</span>
        <span className="text-rose-400 font-bold">▲ CROSSING WINDOW (FR 4-12)</span>
        <span>AFTER EXIT</span>
      </div>

      <div className="relative w-full h-7 bg-slate-900 border border-slate-700 rounded cursor-pointer overflow-hidden flex items-center">
        <div
          className="absolute h-full bg-rose-500/20 border-x border-rose-500/50"
          style={{ left: '25%', width: '45%' }}
        />

        <input
          type="range"
          min="0"
          max={totalFrames}
          value={currentFrame}
          onChange={(e) => onSeek(Number(e.target.value))}
          className="w-full absolute inset-0 opacity-0 cursor-pointer z-20"
        />

        <div
          className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_8px_#06b6d4] z-10 pointer-events-none"
          style={{ left: `${(currentFrame / totalFrames) * 100}%` }}
        >
          <div className="w-2.5 h-2.5 bg-cyan-400 rotate-45 -ml-[3px] -mt-1" />
        </div>

        <div className="w-full flex justify-between px-2 pointer-events-none opacity-25">
          {Array.from({ length: totalFrames + 1 }).map((_, i) => (
            <div key={i} className="h-2 w-px bg-slate-400" />
          ))}
        </div>
      </div>
    </div>
  );
};

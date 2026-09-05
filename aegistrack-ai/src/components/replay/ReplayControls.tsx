import React from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

interface ReplayControlsProps {
  isPlaying: boolean;
  playbackSpeed: number;
  onTogglePlay: () => void;
  onPrevFrame: () => void;
  onNextFrame: () => void;
  onReset: () => void;
  onChangeSpeed: (speed: number) => void;
}

export const ReplayControls: React.FC<ReplayControlsProps> = ({
  isPlaying,
  playbackSpeed,
  onTogglePlay,
  onPrevFrame,
  onNextFrame,
  onReset,
  onChangeSpeed,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#0d1117] border border-[#1e2638] rounded-b-md">
      <div className="flex items-center gap-1.5">
        <Button size="sm" variant="ghost" onClick={onReset} title="Restart Replay">
          <RotateCcw size={14} />
        </Button>
        <Button size="sm" variant="ghost" onClick={onPrevFrame} title="Previous Frame">
          <SkipBack size={14} />
        </Button>
        <Button
          size="sm"
          variant={isPlaying ? 'danger' : 'primary'}
          onClick={onTogglePlay}
          className="w-20"
        >
          {isPlaying ? <Pause size={14} className="mr-1" /> : <Play size={14} className="mr-1" />}
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </Button>
        <Button size="sm" variant="ghost" onClick={onNextFrame} title="Next Frame">
          <SkipForward size={14} />
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-[10px] font-mono text-slate-400 mr-1.5">SPEED:</span>
        {[0.5, 1, 2].map((spd) => (
          <button
            key={spd}
            onClick={() => onChangeSpeed(spd)}
            className={`px-2 py-0.5 rounded text-xs font-mono ${
              playbackSpeed === spd
                ? 'bg-cyan-600 text-white font-bold'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {spd}x
          </button>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Incident } from '../../types/incident';
import { ReplayOverlay } from './ReplayOverlay';
import { ReplayControls } from './ReplayControls';
import { ReplayTimeline } from './ReplayTimeline';

interface ReplayPlayerProps {
  incident: Incident;
}

export const ReplayPlayer: React.FC<ReplayPlayerProps> = ({ incident }) => {
  const [currentFrame, setCurrentFrame] = useState(6);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const totalFrames = 18;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev >= totalFrames ? 0 : prev + 1));
      }, 150 / playbackSpeed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playbackSpeed, totalFrames]);

  return (
    <div className="flex flex-col border border-[#1e2638] rounded-md overflow-hidden bg-[#090c10]">
      <div className="relative w-full aspect-video bg-[#07090e] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#222f3e_1px,transparent_1px)] [background-size:16px_16px]"
        />
        <ReplayOverlay incident={incident} currentFrame={currentFrame} />
      </div>

      <ReplayTimeline
        currentFrame={currentFrame}
        totalFrames={totalFrames}
        onSeek={(fr) => setCurrentFrame(fr)}
      />

      <ReplayControls
        isPlaying={isPlaying}
        playbackSpeed={playbackSpeed}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onPrevFrame={() => setCurrentFrame((p) => Math.max(0, p - 1))}
        onNextFrame={() => setCurrentFrame((p) => Math.min(totalFrames, p + 1))}
        onReset={() => setCurrentFrame(0)}
        onChangeSpeed={(spd) => setPlaybackSpeed(spd)}
      />
    </div>
  );
};

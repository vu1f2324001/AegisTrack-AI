import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
  showLabel?: boolean;
  height?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color,
  showLabel = false,
  height = 'h-1.5',
  className = '',
}) => {
  const clamped = Math.max(0, Math.min(100, value));

  const getColor = () => {
    if (color) return color;
    if (clamped >= 90) return 'bg-emerald-500';
    if (clamped >= 70) return 'bg-cyan-500';
    if (clamped >= 50) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className={`w-full flex items-center gap-2 ${className}`}>
      <div className={`flex-1 bg-slate-800/80 rounded-full overflow-hidden ${height}`}>
        <div
          className={`${height} rounded-full transition-all duration-500 ease-out ${getColor()}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-mono text-slate-300 shrink-0 w-9 text-right font-medium">
          {clamped}%
        </span>
      )}
    </div>
  );
};

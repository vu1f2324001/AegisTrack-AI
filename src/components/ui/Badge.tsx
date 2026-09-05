import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  dot = false,
}) => {
  const base = 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono font-semibold tracking-wider border';

  const styles = {
    default: 'bg-slate-800 text-slate-300 border-slate-700',
    success: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    danger: 'bg-red-500/15 text-red-400 border-red-500/30',
    info: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    outline: 'bg-transparent text-slate-400 border-slate-700',
  };

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'success'
              ? 'bg-emerald-400 animate-pulse'
              : variant === 'danger'
              ? 'bg-red-400 animate-ping'
              : variant === 'warning'
              ? 'bg-amber-400'
              : 'bg-cyan-400'
          }`}
        />
      )}
      {children}
    </span>
  );
};

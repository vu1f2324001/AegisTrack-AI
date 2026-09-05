import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  header,
  footer,
  glow = false,
}) => {
  return (
    <div
      className={`bg-[#0d1117] border border-[#1e2638] rounded-md transition-all ${
        glow ? 'shadow-[0_0_15px_rgba(6,182,212,0.08)] border-cyan-900/40' : ''
      } ${className}`}
    >
      {header && (
        <div className="px-4 py-3 border-b border-[#1e2638] flex items-center justify-between">
          {header}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="px-4 py-2.5 border-t border-[#1e2638] bg-[#090c10]/40 rounded-b-md">
          {footer}
        </div>
      )}
    </div>
  );
};

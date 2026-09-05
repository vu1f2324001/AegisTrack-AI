import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute z-40 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-mono bg-slate-950 text-slate-200 border border-slate-700 rounded shadow-lg whitespace-nowrap">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
        </div>
      )}
    </div>
  );
};

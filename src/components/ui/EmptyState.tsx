import React from 'react';
import { AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon = <AlertCircle className="w-10 h-10 text-slate-500" />,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border border-dashed border-slate-800 rounded-md bg-[#090c10]/40">
      <div className="p-3 bg-slate-800/40 rounded-full mb-3">{icon}</div>
      <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono">
        {title}
      </h4>
      <p className="text-xs text-slate-400 max-w-sm mt-1 mb-4">{description}</p>
      {action}
    </div>
  );
};

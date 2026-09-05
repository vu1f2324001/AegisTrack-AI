import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  subtitle,
  actions,
  className = '',
}) => {
  return (
    <div className={`p-4 md:p-6 max-w-7xl mx-auto space-y-6 ${className}`}>
      {(title || actions) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#1e2638]">
          <div>
            {title && (
              <h1 className="text-xl md:text-2xl font-bold font-mono text-slate-100 uppercase tracking-tight">
                {title}
              </h1>
            )}
            {subtitle && <p className="text-xs font-mono text-slate-400 mt-1">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

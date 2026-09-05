import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = 'h-6 w-full',
  count = 1,
}) => {
  return (
    <div className="space-y-2 w-full animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`bg-slate-800/60 rounded ${className}`} />
      ))}
    </div>
  );
};

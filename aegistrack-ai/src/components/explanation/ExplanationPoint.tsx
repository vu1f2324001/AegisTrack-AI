import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ExplanationPointProps {
  text: string;
  isPositive?: boolean;
}

export const ExplanationPoint: React.FC<ExplanationPointProps> = ({ text, isPositive = true }) => {
  return (
    <li className="flex items-start gap-2.5 text-xs font-mono text-slate-200">
      {isPositive ? (
        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
      ) : (
        <AlertCircle size={15} className="text-amber-400 shrink-0 mt-0.5" />
      )}
      <span>{text}</span>
    </li>
  );
};

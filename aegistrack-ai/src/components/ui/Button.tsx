import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-150 rounded border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3.5 py-1.5 text-sm gap-2',
    lg: 'px-5 py-2.5 text-base gap-2.5',
  };

  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500/50 focus:ring-cyan-500',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 focus:ring-slate-500',
    accent: 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 focus:ring-emerald-500',
    danger: 'bg-red-600 hover:bg-red-500 text-white border-red-500/50 focus:ring-red-500',
    ghost: 'bg-transparent hover:bg-slate-800/60 text-slate-300 border-transparent focus:ring-slate-500',
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

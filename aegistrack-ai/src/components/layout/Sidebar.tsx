import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileSpreadsheet,
  PlaySquare,
  Compass,
  BarChart3,
  FileText,
  Sliders,
  ShieldCheck,
} from 'lucide-react';

interface SidebarProps {
  onNavClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavClick }) => {
  const navGroups = [
    {
      group: 'COMMAND CENTER',
      links: [{ to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> }],
    },
    {
      group: 'INCIDENT MANAGEMENT',
      links: [
        { to: '/incidents', label: 'Incidents', icon: <FileSpreadsheet size={18} /> },
        { to: '/replay', label: 'Replay Workspace', icon: <PlaySquare size={18} /> },
      ],
    },
    {
      group: 'ANALYSIS',
      links: [
        { to: '/track-map', label: 'Track Geometry Map', icon: <Compass size={18} /> },
        { to: '/analytics', label: 'Stewarding Analytics', icon: <BarChart3 size={18} /> },
        { to: '/reports', label: 'Decision Reports', icon: <FileText size={18} /> },
      ],
    },
    {
      group: 'SYSTEM',
      links: [{ to: '/settings', label: 'Threshold Settings', icon: <Sliders size={18} /> }],
    },
  ];

  return (
    <aside className="w-64 bg-[#090c10] border-r border-[#1e2638] flex flex-col justify-between select-none h-[calc(100vh-3.5rem)]">
      <div className="py-4 px-3 space-y-6 overflow-y-auto">
        {navGroups.map((grp) => (
          <div key={grp.group} className="space-y-1">
            <h4 className="px-3 text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              {grp.group}
            </h4>
            <div className="space-y-0.5 pt-1">
              {grp.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onNavClick}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded text-xs font-mono font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border-l-2 border-cyan-400 pl-[10px]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-[#1e2638] bg-[#0d1117]/60">
        <div className="flex items-start gap-2 text-[11px] font-mono text-slate-400">
          <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-slate-300 font-semibold block">HUMAN IN THE LOOP</span>
            AI Recommendation • Human Decision
          </div>
        </div>
      </div>
    </aside>
  );
};

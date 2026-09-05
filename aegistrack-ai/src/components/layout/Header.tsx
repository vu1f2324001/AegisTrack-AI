import React, { useState } from 'react';
import { Bell, Settings as SettingsIcon, Menu, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockSession } from '../../data/mockSession';

interface HeaderProps {
  onToggleMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleMobileSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-14 border-b border-[#1e2638] bg-[#090c10] px-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          aria-label="Toggle Menu"
        >
          <Menu size={18} />
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/40 flex items-center justify-center font-bold font-mono text-cyan-400 text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            AT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold tracking-wider text-slate-100 text-sm group-hover:text-cyan-400 transition-colors">
                AEGISTRACK AI
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                PROTOTYPE
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden md:block">
              Evidence Intelligence Platform
            </p>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4 bg-[#0d1117] border border-[#1e2638] px-3.5 py-1 rounded">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">SESSION:</span>
          <span className="text-xs font-semibold text-slate-200 uppercase font-mono">
            {mockSession.eventName}
          </span>
        </div>
        <span className="text-slate-600">•</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">STATUS:</span>
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            LIVE
          </span>
        </div>
        <span className="text-slate-600">•</span>
        <div className="text-xs font-mono text-slate-300">
          LAP {mockSession.currentLap}/{mockSession.totalLaps}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800 relative"
            title="Stewarding Alerts"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-[#0d1117] border border-slate-700 rounded-lg shadow-2xl z-50 p-2">
              <div className="px-2 py-1.5 border-b border-slate-800 flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-slate-200">ACTIVE ALERTS</span>
                <span className="text-[10px] font-mono text-amber-400">3 REQUIRE REVIEW</span>
              </div>
              <div className="divide-y divide-slate-800/60 max-h-64 overflow-y-auto">
                <Link
                  to="/incidents/042"
                  onClick={() => setShowNotifications(false)}
                  className="block p-2 hover:bg-slate-800/40 rounded transition-colors text-left"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-bold">#042 • CAR #18</span>
                    <span className="text-slate-400">Turn 12</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                    <ShieldAlert size={12} className="text-amber-400" />
                    Evidence conflict: GPS disagrees with optical detection.
                  </p>
                </Link>
                <Link
                  to="/incidents/048"
                  onClick={() => setShowNotifications(false)}
                  className="block p-2 hover:bg-slate-800/40 rounded transition-colors text-left"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-rose-400 font-bold">#048 • CAR #07</span>
                    <span className="text-slate-400">Turn 6</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                    <ShieldAlert size={12} className="text-rose-400" />
                    Low confidence (42%): Barrier shadow line occlusion.
                  </p>
                </Link>
                <Link
                  to="/incidents/051"
                  onClick={() => setShowNotifications(false)}
                  className="block p-2 hover:bg-slate-800/40 rounded transition-colors text-left"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-bold">#051 • CAR #33</span>
                    <span className="text-slate-400">Turn 3</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                    <ShieldAlert size={12} className="text-amber-400" />
                    Optical degradation from low-angle glare.
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link
          to="/settings"
          className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800"
          title="Stewarding Settings"
        >
          <SettingsIcon size={18} />
        </Link>

        <div className="pl-2 border-l border-slate-800 flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-cyan-400 font-bold">
            RC
          </div>
          <div className="hidden lg:block text-left">
            <div className="text-xs font-mono text-slate-200 font-medium leading-none">RACE CONTROL</div>
            <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
              <CheckCircle2 size={10} /> Active Panel
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

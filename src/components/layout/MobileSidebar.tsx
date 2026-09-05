import React from 'react';
import { Sidebar } from './Sidebar';
import { X } from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-72 bg-[#090c10] border-r border-slate-800 h-full flex flex-col">
        <div className="h-14 px-4 border-b border-slate-800 flex items-center justify-between">
          <span className="font-mono font-bold text-cyan-400 text-sm">AEGISTRACK MENU</span>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Sidebar onNavClick={onClose} />
        </div>
      </div>
    </div>
  );
};

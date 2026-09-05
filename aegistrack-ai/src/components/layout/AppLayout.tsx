import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileSidebar } from './MobileSidebar';

export const AppLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans">
      <Header onToggleMobileSidebar={() => setMobileOpen(true)} />
      <div className="flex-1 flex overflow-hidden">
        <div className="hidden lg:block shrink-0">
          <Sidebar />
        </div>
        <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <main className="flex-1 overflow-y-auto bg-[#07090e]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

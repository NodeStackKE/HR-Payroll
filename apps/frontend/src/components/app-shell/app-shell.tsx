
"use client";

import { useState } from "react";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <AppSidebar
        mobileOpen={mobileOpen}
        onNavigate={closeMobileMenu}
      />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <AppHeader
          onMenuClick={() => setMobileOpen(true)}
        />

        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

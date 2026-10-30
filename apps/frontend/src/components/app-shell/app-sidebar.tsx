
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { appNavigation } from "./app-navigation";

type AppSidebarProps = {
  mobileOpen: boolean;
  onNavigate: () => void;
};

export function AppSidebar({
  mobileOpen,
  onNavigate,
}: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onNavigate}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-white transition-transform md:static md:z-auto md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link
            href="/"
            onClick={onNavigate}
            className="text-xl font-bold text-blue-700"
          >
            People<span className="text-slate-900">Pay</span>
          </Link>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex-1 space-y-1 overflow-y-auto p-4"
        >
          {appNavigation.map(({ label, href, icon: Icon }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href ||
                  pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                  active
                    ? "bg-blue-600 font-medium text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={19} aria-hidden="true" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4 text-xs text-slate-500">
          HR-Payroll Management
        </div>
      </aside>
    </>
  );
}


import { Bell, Menu, Search } from "lucide-react";

type AppHeaderProps = {
  onMenuClick: () => void;
};

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-white px-4 md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="font-semibold text-slate-900">
            HR-Payroll
          </p>
          <p className="hidden text-xs text-slate-500 sm:block">
            Workforce management
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Search (placeholder)"
          className="rounded-lg border p-2.5 text-slate-600 hover:bg-slate-50"
        >
          <Search size={19} />
        </button>

        <button
          type="button"
          aria-label="Notifications (placeholder)"
          className="rounded-lg border p-2.5 text-slate-600 hover:bg-slate-50"
        >
          <Bell size={19} />
        </button>

        <div
          aria-label="User profile placeholder"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700"
        >
          U
        </div>
      </div>
    </header>
  );
}


import {
  CalendarCheck,
  ClipboardList,
  Users,
  Wallet,
} from "lucide-react";

const summaryCards = [
  {
    title: "Employees",
    description: "Workforce summary",
    icon: Users,
  },
  {
    title: "Attendance",
    description: "Attendance overview",
    icon: CalendarCheck,
  },
  {
    title: "Payroll",
    description: "Payroll overview",
    icon: Wallet,
  },
  {
    title: "Leave Requests",
    description: "Leave overview",
    icon: ClipboardList,
  },
];

export function DashboardPlaceholder() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <section>
        <p className="text-sm font-medium text-blue-700">
          Overview
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Your workspace for workforce and payroll management.
        </p>
      </section>

      <section
        aria-label="Dashboard summary placeholders"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-600">
                  {card.title}
                </p>

                <Icon
                  aria-hidden="true"
                  className="text-slate-400"
                  size={20}
                />
              </div>

              <p className="mt-5 text-3xl font-semibold text-slate-900">
                —
              </p>

              <p className="mt-2 text-xs text-slate-500">
                {card.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 sm:p-12">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <Users aria-hidden="true" size={24} />
          </div>

          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            Your dashboard workspace
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Dashboard widgets and verified metrics can be added when
            the relevant features and data sources are ready.
          </p>
        </div>
      </section>
    </div>
  );
}

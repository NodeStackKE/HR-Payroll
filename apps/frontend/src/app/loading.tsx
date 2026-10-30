
export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      className="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-8"
    >
      <span className="sr-only">Loading page content...</span>

      <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
      <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-xl border bg-white p-5"
          >
            <div className="h-4 w-24 rounded bg-slate-200" />
            <div className="mt-6 h-8 w-16 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      <div className="h-56 animate-pulse rounded-xl border bg-white" />
    </main>
  );
}

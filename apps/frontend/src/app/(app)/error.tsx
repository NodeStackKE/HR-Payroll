
"use client";

import { useEffect } from "react";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application page error:", error);
  }, [error]);

  return (
    <main className="mx-auto max-w-xl py-16 text-center">
      <h1 className="text-2xl font-bold text-slate-900">
        Something went wrong
      </h1>

      <p className="mt-3 text-sm text-slate-600">
        This page could not be displayed. Try again.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}

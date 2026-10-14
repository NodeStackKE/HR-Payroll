import type { Request, Response, NextFunction } from "express";

export function notFoundHandler(req: Request, res: Response, _next: NextFunction): void {
  const requestId =
    (req.headers["x-request-id"] as string | undefined) ||
    (res.locals.requestId as string | undefined) ||
    "unknown";

  res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: `Route ${req.method} ${req.originalUrl} not found`,
    },
    meta: {
      requestId,
    },
  });
}

import type { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "../lib/errors.js";

export const errorHandler: ErrorRequestHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  const requestId =
    (req.headers["x-request-id"] as string | undefined) ||
    (res.locals.requestId as string | undefined) ||
    "unknown";

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
        ...(err.details !== undefined ? { details: err.details } : {}),
      },
      meta: {
        requestId,
      },
    });
    return;
  }

  // Log unhandled exceptions in structured JSON format
  console.error(
    JSON.stringify({
      level: "error",
      requestId,
      msg: err.message || "Unhandled exception",
      stack: err.stack,
      time: new Date().toISOString(),
    })
  );

  // Return generic internal error to client without exposing internals
  res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_ERROR",
      message: "Internal server error",
    },
    meta: {
      requestId,
    },
  });
};

import { randomUUID } from "node:crypto";
import type { Request, Response, NextFunction } from "express";

export function requestIdMiddleware(req: Request, res: Response, next: NextFunction): void {
  const incomingId = req.headers["x-request-id"];
  const requestId = (Array.isArray(incomingId) ? incomingId[0] : incomingId) || randomUUID();

  req.headers["x-request-id"] = requestId;
  res.locals.requestId = requestId;
  res.setHeader("x-request-id", requestId);
  next();
}

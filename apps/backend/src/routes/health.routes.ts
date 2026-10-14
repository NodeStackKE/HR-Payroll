import { Router, type Request, type Response } from "express";

export const healthRouter: Router = Router();

healthRouter.get("/", (req: Request, res: Response): void => {
  const requestId =
    (req.headers["x-request-id"] as string | undefined) ||
    (res.locals.requestId as string | undefined) ||
    "unknown";

  res.status(200).json({
    status: "healthy",
    success: true,
    data: {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    meta: {
      requestId,
    },
  });
});

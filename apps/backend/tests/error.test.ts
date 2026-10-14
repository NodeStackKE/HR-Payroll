import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import express from "express";
import { errorHandler } from "../src/middleware/error.middleware.js";
import { requestIdMiddleware } from "../src/middleware/request-id.middleware.js";
import {
  AppError,
  BadRequestError,
  ValidationError,
  ConflictError,
} from "../src/lib/errors.js";

function createTestErrorApp() {
  const app = express();
  app.use(express.json());
  app.use(requestIdMiddleware);

  app.get("/test/bad-request", () => {
    throw new BadRequestError("Invalid parameter provided");
  });

  app.get("/test/validation-error", () => {
    throw new ValidationError("Input validation failed", [
      { path: "body.email", message: "Invalid email", code: "invalid_string" },
    ]);
  });

  app.get("/test/conflict", () => {
    throw new ConflictError("Resource already exists");
  });

  app.get("/test/unhandled-error", () => {
    throw new Error("Unexpected database connection crash");
  });

  app.use(errorHandler);
  return app;
}

describe("Centralized Error Middleware", () => {
  const app = createTestErrorApp();

  it("should handle BadRequestError with 400 and stable error code", async () => {
    const res = await request(app).get("/test/bad-request");

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      success: false,
      error: {
        code: "BAD_REQUEST",
        message: "Invalid parameter provided",
      },
      meta: {
        requestId: expect.any(String),
      },
    });
    expect(res.headers["x-request-id"]).toBe(res.body.meta.requestId);
  });

  it("should handle ValidationError with 422, stable code and details", async () => {
    const res = await request(app).get("/test/validation-error");

    expect(res.status).toBe(422);
    expect(res.body).toEqual({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Input validation failed",
        details: [
          { path: "body.email", message: "Invalid email", code: "invalid_string" },
        ],
      },
      meta: {
        requestId: expect.any(String),
      },
    });
  });

  it("should handle ConflictError with 409 and stable code", async () => {
    const res = await request(app).get("/test/conflict");

    expect(res.status).toBe(409);
    expect(res.body).toEqual({
      success: false,
      error: {
        code: "CONFLICT",
        message: "Resource already exists",
      },
      meta: {
        requestId: expect.any(String),
      },
    });
  });

  it("should handle unexpected errors with 500 and INTERNAL_ERROR without leaking internals", async () => {
    // Spy on console.error so test output stays clean
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const res = await request(app).get("/test/unhandled-error");

    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error",
      },
      meta: {
        requestId: expect.any(String),
      },
    });
    // Ensure the internal error message is NOT exposed to client
    expect(JSON.stringify(res.body)).not.toContain("Unexpected database connection crash");
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});

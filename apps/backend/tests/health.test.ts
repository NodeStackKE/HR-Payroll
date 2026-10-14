import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("Health Check Endpoints", () => {
  it("GET /health should return 200 with predictable health payload", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("status", "healthy");
    expect(res.body.data).toMatchObject({
      status: "healthy",
    });
    expect(res.body.data.timestamp).toBeDefined();
    expect(typeof res.body.data.uptime).toBe("number");
    expect(res.body.meta).toHaveProperty("requestId");
    expect(typeof res.body.meta.requestId).toBe("string");
    expect(res.headers["x-request-id"]).toBe(res.body.meta.requestId);
  });

  it("GET /healthz should also return 200 with predictable payload", async () => {
    const res = await request(app).get("/healthz");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe("healthy");
    expect(res.body.meta.requestId).toBeDefined();
  });

  it("should preserve incoming X-Request-ID header in response and meta", async () => {
    const customRequestId = "test-custom-request-id-12345";
    const res = await request(app)
      .get("/health")
      .set("x-request-id", customRequestId);

    expect(res.status).toBe(200);
    expect(res.headers["x-request-id"]).toBe(customRequestId);
    expect(res.body.meta.requestId).toBe(customRequestId);
  });
});

import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("Not Found Middleware", () => {
  it("GET /non-existent-route should return standardized 404 response", async () => {
    const res = await request(app).get("/non-existent-route");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Route GET /non-existent-route not found",
      },
      meta: {
        requestId: expect.any(String),
      },
    });
    expect(res.headers["x-request-id"]).toBe(res.body.meta.requestId);
  });

  it("POST /v1/missing should return standardized 404 response", async () => {
    const res = await request(app)
      .post("/v1/missing")
      .send({ data: "test" });

    expect(res.status).toBe(404);
    expect(res.body).toEqual({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Route POST /v1/missing not found",
      },
      meta: {
        requestId: expect.any(String),
      },
    });
  });

  it("should preserve custom x-request-id on 404 responses", async () => {
    const customRequestId = "req-notfound-custom-999";
    const res = await request(app)
      .get("/api/unknown")
      .set("x-request-id", customRequestId);

    expect(res.status).toBe(404);
    expect(res.body.meta.requestId).toBe(customRequestId);
    expect(res.headers["x-request-id"]).toBe(customRequestId);
  });
});

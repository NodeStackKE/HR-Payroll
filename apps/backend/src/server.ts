import type { Server } from "node:http";
import { app } from "./app.js";
import { env } from "./config/index.js";

const server: Server = app.listen(env.PORT, () => {
  console.log(`[Backend] Server listening on port ${env.PORT} in ${env.NODE_ENV} mode`);
});

function handleShutdown(signal: string): void {
  console.log(`[Backend] Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log("[Backend] HTTP server closed.");
    process.exit(0);
  });

  // Force close after 10s timeout
  setTimeout(() => {
    console.error("[Backend] Could not close connections in time, forcefully shutting down");
    process.exit(1);
  }, 10000).unref();
}

process.on("SIGTERM", () => handleShutdown("SIGTERM"));
process.on("SIGINT", () => handleShutdown("SIGINT"));

export { server };

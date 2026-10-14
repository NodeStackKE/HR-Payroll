# Backend Application (`@payroll/api`)

Initial Express & TypeScript backend application runtime for the HR Payroll platform.

## Task Details
* **TASK ID:** BE-001
* **TITLE:** Backend Application Bootstrap
* **OWNER:** Stephen
* **TYPE:** Backend
* **PRIORITY:** P0
* **AREA:** `apps/backend/`

## Objective
Establish the initial Express/TypeScript backend runtime and basic HTTP application structure.

## Requirements
- [x] Express application setup (`src/app.ts`)
- [x] TypeScript configuration extending monorepo base (`tsconfig.json`)
- [x] Application factory & middleware chain (`src/app.ts`)
- [x] HTTP server entrypoint with lifecycle management (`src/server.ts`)
- [x] Environment variable loading & validation (`src/config/env.ts`)
- [x] GET `/health` and `/healthz` endpoints (`src/routes/health.routes.ts`)
- [x] Standardized Not-Found 404 middleware (`src/middleware/not-found.middleware.ts`)
- [x] Centralized error middleware with `AppError` hierarchy (`src/middleware/error.middleware.ts`, `src/lib/errors.ts`)
- [x] Basic application startup configuration & graceful shutdown (`SIGTERM`, `SIGINT`)

## Acceptance Criteria
- [x] **Backend starts successfully in development mode:** Configured `"dev": "tsx watch src/server.ts"` with graceful shutdown handlers.
- [x] **GET `/health` returns HTTP 200:** Endpoint returns HTTP status 200.
- [x] **Health endpoint returns a simple predictable response:** Returns `{ status: "healthy", success: true, data: { status: "healthy", timestamp, uptime }, meta: { requestId } }`.
- [x] **Invalid routes return a standardized 404 response:** Returns `{ success: false, error: { code: "NOT_FOUND", message }, meta: { requestId } }`.
- [x] **Application errors are handled by centralized error middleware:** Catches operational errors, maps HTTP status codes, and sanitizes 500 errors so internal traces are not exposed to clients.
- [x] **TypeScript compilation passes:** Passes `tsc --noEmit` with zero errors.
- [x] **No TypeScript errors are introduced:** Strict mode enabled, explicit annotations across routes and middleware.
- [x] **Existing project conventions are followed:** Adheres to ADR-0009 version pinning, `docs/api-conventions.md` envelope standards, and request ID correlation.

## Development & Testing Commands

```bash
# Start development server
pnpm --filter @payroll/api dev

# Run TypeScript typecheck
pnpm --filter @payroll/api typecheck

# Build for production
pnpm --filter @payroll/api build

# Run test suite
pnpm --filter @payroll/api test
```

## Summary
<!-- Provide a brief overview of the changes introduced in this PR. -->

## Task
- **Task ID:** BE-001
- **Title:** Backend Application Bootstrap

## Acceptance Criteria Checklist
- [x] Backend starts successfully in development mode
- [x] GET `/health` returns HTTP 200
- [x] Health endpoint returns a simple predictable response
- [x] Invalid routes return a standardized 404 response
- [x] Application errors are handled by centralized error middleware
- [x] TypeScript compilation passes (`tsc --noEmit`)
- [x] No TypeScript errors are introduced
- [x] Existing project conventions are followed (pinned versions, response envelopes)

## Testing Performed
- [x] Unit tests for `/health` and `/healthz`
- [x] Unit tests for 404 not-found handler
- [x] Unit tests for centralized error middleware
- [x] `pnpm --filter @payroll/api test` (10/10 tests passed)
- [x] `pnpm --filter @payroll/api typecheck` (0 errors)

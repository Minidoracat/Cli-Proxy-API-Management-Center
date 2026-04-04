<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# router

## Purpose
React Router v7 configuration with HashRouter. Defines all application routes and provides authentication-guarded routing.

## Key Files

| File | Description |
|------|-------------|
| `MainRoutes.tsx` | Route definitions — maps URL paths to page components |
| `ProtectedRoute.tsx` | Auth guard — redirects unauthenticated users to login |

## For AI Agents

### Working In This Directory
- Uses HashRouter (for single-file/file:// compatibility)
- When adding a new page, add its route in `MainRoutes.tsx`
- Protected routes require a valid management key in the auth store

<!-- MANUAL: -->

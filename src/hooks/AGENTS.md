<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# hooks

## Purpose
Global custom React hooks shared across the application. Provides reusable logic for API calls, debouncing, storage, media queries, pagination, and UI behaviors.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export for all hooks |
| `useApi.ts` | API request wrapper hook with loading/error state |
| `useDebounce.ts` | Debounced value hook |
| `useEdgeSwipeBack.ts` | Edge swipe gesture detection for mobile back navigation |
| `useHeaderRefresh.ts` | Pull-to-refresh header behavior |
| `useInterval.ts` | setInterval as a hook with cleanup |
| `useLocalStorage.ts` | localStorage-backed state hook |
| `useMediaQuery.ts` | CSS media query reactive hook |
| `usePagination.ts` | Pagination logic hook |
| `useUnsavedChangesGuard.ts` | Warn before leaving with unsaved changes |
| `useVisualConfig.ts` | Visual config editor state and logic |

## For AI Agents

### Working In This Directory
- Follow `use<Name>.ts` naming convention
- Export all hooks from `index.ts`
- Hooks should be pure logic — no JSX rendering
- Keep hooks generic enough for cross-page reuse; page-specific hooks go in `pages/hooks/`

<!-- MANUAL: -->

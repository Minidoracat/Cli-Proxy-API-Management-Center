<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# hooks (pages)

## Purpose
Page-specific hooks for the Logs page — log parsing, filtering, scrolling, and trace resolution.

## Key Files

| File | Description |
|------|-------------|
| `logTypes.ts` | TypeScript types for parsed log entries |
| `logParsing.ts` | Log line parsing logic — extracts level, timestamp, message |
| `useLogFilters.ts` | Hook for log search, level filtering, management traffic hiding |
| `useLogScroller.ts` | Auto-scroll and infinite scroll logic for log viewer |

## For AI Agents

### Working In This Directory
- These hooks are specific to `LogsPage` — not reusable elsewhere
- Log parsing handles the CLI Proxy API's log format
- `useLogScroller` implements incremental polling and auto-tail

<!-- MANUAL: -->

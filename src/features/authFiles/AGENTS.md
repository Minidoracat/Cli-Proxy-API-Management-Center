<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# authFiles

## Purpose
Auth files feature module — manages JSON credential files (upload/download/delete), OAuth excluded models, OAuth model alias mappings, prefix proxy editor, and per-credential quota display.

## Key Files

| File | Description |
|------|-------------|
| `constants.ts` | Feature-specific constants |
| `uiState.ts` | UI state management for auth files feature |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `components/` | Auth file UI components — cards, modals, editors (see `components/AGENTS.md`) |
| `hooks/` | Auth file data and logic hooks (see `hooks/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Self-contained feature with own components and hooks
- Manages credential file lifecycle: upload → list → view models → delete
- OAuth exclusion uses `*` wildcard patterns for model matching
- Prefix proxy editor modal for per-file proxy configuration

<!-- MANUAL: -->

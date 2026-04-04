<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# features

## Purpose
Self-contained feature modules with their own components, hooks, and state. Follows a feature-slice architecture where each feature encapsulates its domain logic.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `authFiles/` | Auth files management — upload/download credentials, OAuth exclusions, model aliases (see `authFiles/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Each feature is a self-contained module with `components/`, `hooks/`, and shared state
- Features differ from `components/` — they own business logic, not just UI
- When adding a new feature, create a subdirectory with `components/` and `hooks/` folders

<!-- MANUAL: -->

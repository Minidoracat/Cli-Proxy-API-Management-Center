<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# quota

## Purpose
Quota-specific utility functions — building quota objects, parsing API responses, formatting display values, resolving provider quota, and validating limits.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export |
| `builders.ts` | Construct quota data objects from raw inputs |
| `parsers.ts` | Parse quota API responses into typed structures |
| `formatters.ts` | Format quota values for display (percentages, limits) |
| `resolvers.ts` | Resolve which quota config applies to a given provider |
| `constants.ts` | Quota-specific constants (provider names, default limits) |
| `validators.ts` | Validate quota input values |

## For AI Agents

### Working In This Directory
- Pure utility functions — no React dependencies
- Used by `components/quota/` and `stores/useQuotaStore`
- When adding a new provider's quota, update builders, parsers, and resolvers

<!-- MANUAL: -->

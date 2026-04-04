<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# quota

## Purpose
Quota management UI components — cards displaying quota limits and usage per provider, with grid layout and data loading hooks.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export |
| `QuotaCard.tsx` | Individual quota display card with progress bar |
| `QuotaSection.tsx` | Quota section container — groups cards by provider |
| `quotaConfigs.ts` | Quota configuration definitions per provider |
| `useGridColumns.ts` | Responsive grid column count hook |
| `useQuotaLoader.ts` | Data fetching hook for quota information |

## For AI Agents

### Working In This Directory
- `quotaConfigs.ts` defines the structure for each provider's quota display
- Add new provider quota support by adding a config entry and corresponding API call
- Grid layout adapts columns based on viewport width

### Dependencies

#### Internal
- `@/stores/useQuotaStore` — quota state
- `@/utils/quota/` — quota parsing, formatting, validation

<!-- MANUAL: -->

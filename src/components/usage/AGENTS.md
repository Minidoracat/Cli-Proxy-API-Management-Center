<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# usage

## Purpose
Usage statistics visualization components — charts, stat cards, and detailed breakdowns for request/token data, costs, and service health.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export |
| `UsageChart.tsx` | Main line/bar chart for request/token over time |
| `CostTrendChart.tsx` | Cost estimation trend chart |
| `TokenBreakdownChart.tsx` | Token type breakdown (cached/reasoning) chart |
| `ChartLineSelector.tsx` | Toggle chart line visibility |
| `StatCards.tsx` | Summary stat cards (total requests, tokens, etc.) |
| `ApiDetailsCard.tsx` | Per-API key usage breakdown |
| `ModelStatsCard.tsx` | Per-model usage statistics |
| `CredentialStatsCard.tsx` | Per-credential usage statistics |
| `RequestEventsDetailsCard.tsx` | Request event details and logs |
| `ServiceHealthCard.tsx` | Service health/availability indicator |
| `PriceSettingsCard.tsx` | Model pricing configuration for cost estimation |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `hooks/` | Usage data hooks — chart data, sparklines, data loading (see `hooks/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Charts use Chart.js via `react-chartjs-2`
- Data hooks in `hooks/` handle fetching and transforming usage data
- Model prices are persisted through the backend `/model-prices` API, with a local fallback cache.

### Dependencies

#### Internal
- `@/stores/useUsageStatsStore` — usage data state
- `@/utils/usage/` — chart config helpers

<!-- MANUAL: -->

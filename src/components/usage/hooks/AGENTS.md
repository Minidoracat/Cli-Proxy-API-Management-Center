<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# hooks (usage)

## Purpose
Custom hooks for usage data fetching, chart data transformation, and sparkline generation.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export |
| `useUsageData.ts` | Main hook — fetches and manages usage statistics data |
| `useChartData.ts` | Transforms raw usage data into Chart.js-compatible datasets |
| `useSparklines.ts` | Generates mini sparkline data for stat cards |

## For AI Agents

### Working In This Directory
- `useUsageData` is the primary data source for all usage components
- Chart data hooks produce `ChartData<>` objects compatible with react-chartjs-2

<!-- MANUAL: -->

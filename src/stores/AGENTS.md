<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# stores

## Purpose
Zustand state stores for global application state. Each store manages a specific domain slice.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export for all stores |
| `useAuthStore.ts` | Authentication state — management key, connection status, server info |
| `useConfigStore.ts` | Config editor state — YAML content, dirty tracking, save/reload |
| `useLanguageStore.ts` | Language selection state |
| `useModelsStore.ts` | Models list state — fetched from `/v1/models` |
| `useNotificationStore.ts` | Toast notification queue |
| `useQuotaStore.ts` | Quota data — limits and usage per provider |
| `useThemeStore.ts` | Theme state — light/dark mode |
| `useUsageStatsStore.ts` | Usage statistics data — requests, tokens, charts |
| `useClaudeEditDraftStore.ts` | Draft state for Claude provider edit form |
| `useOpenAIEditDraftStore.ts` | Draft state for OpenAI provider edit form |

## For AI Agents

### Working In This Directory
- Follow `use<Name>Store.ts` naming convention
- Zustand stores with `create()` — no providers needed
- Export all stores from `index.ts`
- Keep stores focused on one domain; avoid cross-store dependencies where possible
- Draft stores (`*EditDraftStore`) hold form state to persist across navigation

<!-- MANUAL: -->

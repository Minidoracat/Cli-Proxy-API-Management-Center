<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# pages

## Purpose
Page-level React components, each mapped to a route. Handles top-level layout and composition of domain components for each management section.

## Key Files

| File | Description |
|------|-------------|
| `DashboardPage.tsx` | Dashboard — connection status, version info, quick stats |
| `LoginPage.tsx` | Login — API address and management key entry |
| `ConfigPage.tsx` | Config editor — YAML source/visual editing with save/reload |
| `LogsPage.tsx` | Log viewer — tail, search, auto-refresh, download error logs |
| `UsagePage.tsx` | Usage stats — request/token charts, per-API/model breakdown |
| `QuotaPage.tsx` | Quota management — limits and usage across providers |
| `AiProvidersPage.tsx` | AI providers overview — navigate to provider-specific editors |
| `AiProvidersGeminiEditPage.tsx` | Gemini provider config editor |
| `AiProvidersClaudeEditPage.tsx` | Claude provider config editor |
| `AiProvidersClaudeModelsPage.tsx` | Claude models management |
| `AiProvidersCodexEditPage.tsx` | Codex provider config editor |
| `AiProvidersVertexEditPage.tsx` | Vertex AI provider config editor |
| `AiProvidersOpenAIEditPage.tsx` | OpenAI-compatible provider config editor |
| `AiProvidersOpenAIModelsPage.tsx` | OpenAI provider models management |
| `AiProvidersAmpcodeEditPage.tsx` | Ampcode provider config editor |
| `AiProvidersClaudeEditLayout.tsx` | Layout wrapper for Claude edit subpages |
| `AiProvidersOpenAIEditLayout.tsx` | Layout wrapper for OpenAI edit subpages |
| `AuthFilesPage.tsx` | Auth files management — upload/download/delete credentials |
| `AuthFilesOAuthExcludedEditPage.tsx` | OAuth excluded models editor |
| `AuthFilesOAuthModelAliasEditPage.tsx` | OAuth model alias editor |
| `OAuthPage.tsx` | OAuth flow — device/redirect auth for providers |
| `SystemPage.tsx` | System info — quick links, `/v1/models` grouped view |
| `PlaceholderPage.tsx` | Placeholder for unimplemented pages |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `hooks/` | Page-specific hooks — log parsing, filtering, scrolling (see `hooks/AGENTS.md`) |
| `Login/` | Login page styles (see `Login/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Each page has a corresponding `*.module.scss` for scoped styles
- Pages compose domain components from `components/` and `features/`
- Provider edit pages follow a consistent pattern: fetch config → form → save
- Layout components (`*EditLayout.tsx`) wrap sub-pages with shared navigation

### Common Patterns
- Page naming: `<Feature>Page.tsx` with `<Feature>Page.module.scss`
- Provider edit pages: `AiProviders<Provider>EditPage.tsx`
- Pages use Zustand stores for state and `services/api/` for backend calls

<!-- MANUAL: -->

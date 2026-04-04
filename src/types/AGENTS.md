<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# types

## Purpose
TypeScript type definitions and interfaces for all application domains. Provides shared type contracts between services, stores, and components.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export for all types |
| `api.ts` | API response/request types for management endpoints |
| `auth.ts` | Authentication types — login, connection state |
| `authFile.ts` | Auth file types — credentials, file metadata |
| `config.ts` | Configuration types — server config structure |
| `provider.ts` | Provider types — Gemini, Claude, OpenAI, Vertex, Codex settings |
| `ampcode.ts` | Ampcode provider-specific types |
| `oauth.ts` | OAuth flow types — device/redirect auth |
| `quota.ts` | Quota types — limits, usage per provider |
| `usage.ts` | Usage statistics types — request/token data |
| `log.ts` | Log entry types |
| `common.ts` | Shared utility types |
| `sourceInfo.ts` | Source info types for credential resolution |
| `visualConfig.ts` | Visual config editor types |
| `style.d.ts` | SCSS module type declarations |

## For AI Agents

### Working In This Directory
- All types are exported via `index.ts` — import from `@/types`
- Keep types close to their domain (e.g., quota types in `quota.ts`)
- `style.d.ts` declares `*.module.scss` module types for TypeScript

<!-- MANUAL: -->

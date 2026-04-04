<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# api

## Purpose
Axios-based API client modules — one module per domain endpoint. All communication with the CLI Proxy API Management API (`/v0/management`) goes through this layer.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export for all API modules |
| `client.ts` | Axios instance setup — base URL, auth headers, interceptors |
| `apiCall.ts` | Generic API call wrapper with error handling |
| `transformers.ts` | Request/response data transformers |
| `config.ts` | Config read/update API calls |
| `configFile.ts` | Config file (YAML) read/save/reload API calls |
| `apiKeys.ts` | API key CRUD operations |
| `authFiles.ts` | Auth file upload/download/delete/list API calls |
| `providers.ts` | Provider settings read/update API calls |
| `vertex.ts` | Vertex AI-specific API calls |
| `ampcode.ts` | Ampcode-specific API calls |
| `models.ts` | Model list fetching (`/v1/models`) |
| `oauth.ts` | OAuth flow initiation and status polling |
| `logs.ts` | Log tailing and error log download |
| `usage.ts` | Usage statistics fetching |
| `version.ts` | Server version info API call |

## For AI Agents

### Working In This Directory
- `client.ts` creates the shared Axios instance — all modules use it
- `apiCall.ts` wraps calls with consistent error handling
- Auth header (`Authorization: Bearer <key>`) is set on the client instance
- When adding a new API domain, create a new module file and export from `index.ts`

### Dependencies

#### Internal
- `@/services/storage/secureStorage` — reads stored management key
- `@/utils/connection` — URL normalization

<!-- MANUAL: -->

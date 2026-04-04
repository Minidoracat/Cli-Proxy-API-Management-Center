<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# services

## Purpose
Backend communication and browser storage services. All API calls to the CLI Proxy API Management API go through this layer.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `api/` | Axios-based API client modules per domain (see `api/AGENTS.md`) |
| `storage/` | Secure browser storage with obfuscated keys (see `storage/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- API services are the single source of truth for backend communication
- Storage services handle sensitive data (management key) with lightweight encryption
- Never make direct Axios calls from components — use `services/api/`

<!-- MANUAL: -->

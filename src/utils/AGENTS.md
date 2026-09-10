<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# utils

## Purpose
Utility functions for data formatting, validation, encryption, clipboard, download, and domain-specific helpers. Pure functions with no React dependencies.

## Key Files

| File | Description |
|------|-------------|
| `clipboard.ts` | Clipboard read/write utilities |
| `compare.ts` | Object/value comparison helpers |
| `connection.ts` | API address normalization and URL building |
| `constants.ts` | App-wide constants |
| `download.ts` | File download trigger utilities |
| `encryption.ts` | Lightweight obfuscation for management key storage (`enc::v1::...`) |
| `format.ts` | Number/date/size formatting |
| `headers.ts` | HTTP header parsing utilities |
| `helpers.ts` | General-purpose helper functions |
| `language.ts` | Language detection and mapping |
| `models.ts` | Model name parsing and utilities |
| `sourceResolver.ts` | Source info resolution logic |
| `usage.ts` | Usage data transformation, pricing and cost utilities |
| `validation.ts` | Input validation functions |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `quota/` | Quota-specific utilities — builders, parsers, formatters (see `quota/AGENTS.md`) |
| `usage/` | Usage chart configuration and helpers (see `usage/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Keep utilities as pure functions — no side effects, no React imports
- Domain-specific utilities go in subdirectories (`quota/`, `usage/`)
- Generic utilities stay at the top level

<!-- MANUAL: -->

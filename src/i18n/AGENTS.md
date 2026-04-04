<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# i18n

## Purpose
Internationalization configuration using i18next. Supports English, Simplified Chinese, and Russian with browser-based language auto-detection.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | i18next initialization — language detection, fallback config |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `locales/` | Translation JSON files per language (see `locales/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Use `t('key')` via `useTranslation()` hook in components
- All user-facing strings must be in locale files, not hardcoded
- When adding new strings, update all three locale files (en, zh-CN, ru)

<!-- MANUAL: -->

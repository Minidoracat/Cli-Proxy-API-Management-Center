<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# assets

## Purpose
Static assets including AI provider brand icons and inline logo data.

## Key Files

| File | Description |
|------|-------------|
| `logoInline.ts` | Base64-encoded project logo as inline data URL |
| `react.svg` | React logo SVG |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `icons/` | AI provider brand SVG icons (see `icons/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Icons are SVG files used in provider UI sections
- `logoInline.ts` exports a data URL string — update it when the logo changes
- All assets are inlined at build time (single-file output)

<!-- MANUAL: -->

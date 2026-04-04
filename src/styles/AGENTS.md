<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# styles

## Purpose
Global SCSS foundation — variables, themes, mixins, reset, and shared style utilities. Auto-imported into all SCSS modules via Vite config.

## Key Files

| File | Description |
|------|-------------|
| `variables.scss` | Design tokens — colors, spacing, typography, breakpoints (auto-imported everywhere) |
| `themes.scss` | Light/dark theme definitions using CSS custom properties |
| `mixins.scss` | Reusable SCSS mixins (responsive breakpoints, etc.) |
| `reset.scss` | CSS reset/normalize |
| `global.scss` | Global base styles |
| `layout.scss` | Global layout utilities |
| `components.scss` | Shared component style utilities |

## For AI Agents

### Working In This Directory
- `variables.scss` is auto-imported via Vite's `additionalData` — use `$var` directly in any SCSS module
- Theme switching uses CSS custom properties defined in `themes.scss`
- Prefer SCSS Modules (`*.module.scss`) for component styles over global classes
- Use existing mixins from `mixins.scss` before creating new ones

<!-- MANUAL: -->

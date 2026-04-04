<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# components

## Purpose
Reusable React components organized by domain. Contains shared UI primitives, layout, config editor, provider sections, usage charts, quota cards, and model alias visualization.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `common/` | Shared components — modals, notifications, transitions, splash (see `common/AGENTS.md`) |
| `config/` | Config editor — YAML source editor, visual editor, diff modal (see `config/AGENTS.md`) |
| `layout/` | App layout shell (see `layout/AGENTS.md`) |
| `modelAlias/` | Model mapping diagram visualization (see `modelAlias/AGENTS.md`) |
| `providers/` | AI provider configuration sections (see `providers/AGENTS.md`) |
| `quota/` | Quota management cards and sections (see `quota/AGENTS.md`) |
| `ui/` | Base UI primitives — buttons, inputs, modals, selects, toggles (see `ui/AGENTS.md`) |
| `usage/` | Usage statistics charts and cards (see `usage/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Domain-specific components go in their respective subdirectory
- Generic/reusable primitives go in `ui/`
- Cross-cutting shared components go in `common/`
- Use SCSS Modules (`*.module.scss`) for component-scoped styles
- Barrel exports via `index.ts` where present

<!-- MANUAL: -->

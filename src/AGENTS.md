<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# src

## Purpose
Application source code for the CLI Proxy API Management Center web UI. Contains all React components, pages, services, state stores, styles, types, and utilities.

## Key Files

| File | Description |
|------|-------------|
| `main.tsx` | App entry point — renders React root with router and providers |
| `App.tsx` | Root component — sets up routes, theme, layout |
| `App.css` | Root-level styles |
| `index.css` | Global CSS reset/base |
| `vite-env.d.ts` | Vite environment type declarations |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `assets/` | Static assets — icons and inline SVGs (see `assets/AGENTS.md`) |
| `components/` | Reusable UI components organized by domain (see `components/AGENTS.md`) |
| `features/` | Feature modules with self-contained logic (see `features/AGENTS.md`) |
| `hooks/` | Global custom React hooks (see `hooks/AGENTS.md`) |
| `i18n/` | Internationalization config and locale files (see `i18n/AGENTS.md`) |
| `pages/` | Page-level components mapped to routes (see `pages/AGENTS.md`) |
| `router/` | React Router configuration (see `router/AGENTS.md`) |
| `services/` | API client and storage services (see `services/AGENTS.md`) |
| `stores/` | Zustand state stores (see `stores/AGENTS.md`) |
| `styles/` | Global SCSS — variables, themes, mixins, reset (see `styles/AGENTS.md`) |
| `types/` | TypeScript type definitions (see `types/AGENTS.md`) |
| `utils/` | Utility functions — formatting, validation, encryption (see `utils/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Import paths use `@/` alias (resolves to `src/`)
- SCSS Modules: `*.module.scss` for component-scoped styles
- Global SCSS variables available via auto-import of `@/styles/variables.scss`
- State management: Zustand stores in `stores/`
- API calls: go through `services/api/` layer using Axios

### Common Patterns
- Pages = route-level components in `pages/`
- Components = reusable, domain-grouped in `components/`
- Features = self-contained modules with own components + hooks in `features/`
- Barrel exports via `index.ts` in most directories
- Hooks pattern: `use<Name>.ts` for custom hooks

## Dependencies

### Internal
- All subdirectories are interconnected — pages use components, hooks, stores, and services

<!-- MANUAL: -->

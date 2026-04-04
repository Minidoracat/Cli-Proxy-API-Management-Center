<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# CLI Proxy API Management Center

## Purpose
Single-file Web UI (React + TypeScript) for operating and troubleshooting the **CLI Proxy API** via its Management API. Manages config, credentials, logs, usage stats, quota, and AI provider settings. Builds to a single `management.html` inlined via `vite-plugin-singlefile`.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | Dependencies and scripts (dev/build/lint/format/type-check) |
| `vite.config.ts` | Vite config — single-file build, SCSS modules, path aliases, version injection |
| `tsconfig.json` | Root TypeScript config (references app + node configs) |
| `tsconfig.app.json` | App-level TS config (strict, DOM types) |
| `tsconfig.node.json` | Node-level TS config (for vite.config.ts) |
| `eslint.config.js` | ESLint flat config with React hooks/refresh plugins |
| `.prettierrc` | Prettier formatting rules |
| `index.html` | Entry HTML — Vite injects all assets here |
| `LICENSE` | MIT license |
| `logo.jpg` | Project logo |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | Application source code (see `src/AGENTS.md`) |
| `.github/` | GitHub Actions workflows (see `.github/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Build: `npm run build` (tsc + vite build → single `dist/index.html`)
- Dev: `npm run dev` (Vite dev server at localhost:5173)
- Lint: `npm run lint` / Type check: `npm run type-check`
- Format: `npm run format`
- Path alias: `@` → `./src`
- All SCSS files auto-import `@/styles/variables.scss`

### Testing Requirements
- No test framework configured — verify via `npm run lint` and `npm run type-check`
- Manual testing against a running CLI Proxy API backend

### Common Patterns
- Single-file output: all assets inlined (CSS, JS, images)
- Version injected at build time via `__APP_VERSION__` global
- SCSS Modules with camelCase locals and hashed class names
- HashRouter for client-side routing (works in `file://` context)

## Dependencies

### External
- React 19 + ReactDOM — UI framework
- TypeScript 5.9 — Type safety
- Vite 7 + vite-plugin-singlefile — Build tooling
- Zustand — State management
- Axios — HTTP client
- react-router-dom v7 — Routing (HashRouter)
- Chart.js + react-chartjs-2 — Data visualization
- CodeMirror 6 (@uiw/react-codemirror) — YAML editor
- i18next + react-i18next — Internationalization (en, zh-CN, ru)
- motion — Animations
- yaml — YAML parsing
- sass — SCSS preprocessing

<!-- MANUAL: -->

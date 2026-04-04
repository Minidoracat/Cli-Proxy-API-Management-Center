<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# workflows

## Purpose
GitHub Actions CI/CD workflows for automated release builds.

## Key Files

| File | Description |
|------|-------------|
| `release.yml` | Builds and publishes `dist/management.html` on `vX.Y.Z` tag push |

## For AI Agents

### Working In This Directory
- Tagging `vX.Y.Z` triggers the release workflow
- Output artifact is renamed from `index.html` to `management.html`
- Version is injected via the `VERSION` environment variable

<!-- MANUAL: -->

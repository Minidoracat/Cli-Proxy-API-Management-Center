<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# components (authFiles)

## Purpose
UI components for the auth files feature — file cards, model viewer, quota display, OAuth exclusion/alias editors, and prefix proxy configuration.

## Key Files

| File | Description |
|------|-------------|
| `AuthFileCard.tsx` | Card displaying a single auth file with actions (download, delete) |
| `AuthFileModelsModal.tsx` | Modal showing supported models for a credential |
| `AuthFileQuotaSection.tsx` | Quota progress display per auth file |
| `AuthFilesPrefixProxyEditorModal.tsx` | Modal for editing prefix proxy settings |
| `OAuthExcludedCard.tsx` | Card for managing OAuth excluded model patterns |
| `OAuthModelAliasCard.tsx` | Card for managing OAuth model alias mappings |
| `QuotaProgressBar.tsx` | Visual progress bar for quota usage |

## For AI Agents

### Working In This Directory
- Components are used by `AuthFilesPage`, `AuthFilesOAuthExcludedEditPage`, and `AuthFilesOAuthModelAliasEditPage`
- `AuthFileCard` handles runtime-only indicators and per-file actions

<!-- MANUAL: -->

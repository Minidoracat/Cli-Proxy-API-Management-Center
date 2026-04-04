<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# hooks (authFiles)

## Purpose
Data fetching and business logic hooks for the auth files feature.

## Key Files

| File | Description |
|------|-------------|
| `useAuthFilesData.ts` | Main data hook — fetches auth file list with search/filter/pagination |
| `useAuthFilesModels.ts` | Fetches supported models per auth file credential |
| `useAuthFilesOauth.tsx` | OAuth exclusion and model alias management logic |
| `useAuthFilesPrefixProxyEditor.ts` | Prefix proxy editor state and save logic |
| `useAuthFilesStats.ts` | Auth files statistics (counts, status breakdown) |
| `useAuthFilesStatusBarCache.ts` | Caching for auth file status bar display |

## For AI Agents

### Working In This Directory
- `useAuthFilesData` is the primary hook — manages the file list lifecycle
- Hooks compose `services/api/authFiles` for backend communication

<!-- MANUAL: -->

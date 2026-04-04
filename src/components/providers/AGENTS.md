<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# providers

## Purpose
AI provider configuration section components. Each provider (Gemini, Claude, Codex, OpenAI, Vertex, Ampcode) has its own section component for editing provider-specific settings.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `AmpcodeSection/` | Ampcode provider config — upstream URL, force mappings (see `AmpcodeSection/AGENTS.md`) |
| `ClaudeSection/` | Claude provider config — API keys, base URL, model aliases (see `ClaudeSection/AGENTS.md`) |
| `CodexSection/` | Codex provider config (see `CodexSection/AGENTS.md`) |
| `GeminiSection/` | Gemini provider config (see `GeminiSection/AGENTS.md`) |
| `OpenAISection/` | OpenAI-compatible provider config — multi-key, model import (see `OpenAISection/AGENTS.md`) |
| `ProviderNav/` | Provider navigation tabs (see `ProviderNav/AGENTS.md`) |
| `VertexSection/` | Vertex AI provider config (see `VertexSection/AGENTS.md`) |
| `hooks/` | Shared provider hooks (see `hooks/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Each provider section follows the same pattern: form fields → save to backend
- Shared hook `useProviderStats` provides common provider statistics
- Provider sections are rendered inside layout wrappers from `pages/`
- Each section has `index.ts` barrel export

<!-- MANUAL: -->

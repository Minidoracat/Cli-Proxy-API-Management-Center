<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# config

## Purpose
Config editor components — provides both a YAML source editor (CodeMirror) and a visual block-based editor for editing the server's `/config.yaml`, plus a diff modal for reviewing changes.

## Key Files

| File | Description |
|------|-------------|
| `ConfigSection.tsx` | Main config section — tabs between source and visual editors |
| `ConfigSection.module.scss` | Config section scoped styles |
| `ConfigSourceEditor.tsx` | CodeMirror-based YAML source editor with search |
| `VisualConfigEditor.tsx` | Block-based visual config editor |
| `VisualConfigEditor.module.scss` | Visual editor scoped styles |
| `VisualConfigEditorBlocks.tsx` | Individual config block components for the visual editor |
| `DiffModal.tsx` | Side-by-side diff viewer for config changes before saving |
| `DiffModal.module.scss` | Diff modal scoped styles |

## For AI Agents

### Working In This Directory
- CodeMirror 6 is used for YAML editing (`@uiw/react-codemirror`, `@codemirror/lang-yaml`)
- `@codemirror/merge` powers the diff view
- Visual editor blocks are lazy-mounted for performance
- Dirty tracking compares current vs saved YAML content

### Dependencies

#### Internal
- `@/stores/useConfigStore` — config state management
- `@/hooks/useVisualConfig` — visual editor logic
- `@/services/api/configFile` — save/reload API calls

<!-- MANUAL: -->

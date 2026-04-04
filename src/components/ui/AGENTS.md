<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# ui

## Purpose
Base UI primitive components — the design system building blocks used across all pages and features.

## Key Files

| File | Description |
|------|-------------|
| `Button.tsx` | Button component with variants (primary, secondary, danger, ghost) |
| `Input.tsx` | Text input component |
| `Select.tsx` | Dropdown select component |
| `Select.module.scss` | Select scoped styles |
| `Modal.tsx` | Modal dialog component |
| `Card.tsx` | Card container component |
| `ToggleSwitch.tsx` | Toggle switch component |
| `ToggleSwitch.module.scss` | Toggle switch scoped styles |
| `LoadingSpinner.tsx` | Loading indicator |
| `EmptyState.tsx` | Empty state placeholder component |
| `AutocompleteInput.tsx` | Input with autocomplete suggestions |
| `HeaderInputList.tsx` | Dynamic list for HTTP header key-value pairs |
| `ModelInputList.tsx` | Dynamic list for model entries |
| `modelInputListUtils.ts` | Utility functions for model input list logic |
| `SelectionCheckbox.tsx` | Checkbox for multi-selection |
| `SelectionCheckbox.module.scss` | Selection checkbox scoped styles |
| `icons.tsx` | SVG icon components |

## For AI Agents

### Working In This Directory
- These are the lowest-level UI building blocks — keep them generic
- No business logic in UI primitives
- Use SCSS Modules for component-scoped styles
- `icons.tsx` contains inline SVG icon components (not file-based icons)

<!-- MANUAL: -->

<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# modelAlias

## Purpose
Model mapping diagram visualization — renders the model alias/mapping relationships as an interactive diagram with context menus and modals.

## Key Files

| File | Description |
|------|-------------|
| `index.ts` | Barrel export |
| `ModelMappingDiagram.tsx` | Main diagram component — renders mapping arrows between models |
| `ModelMappingDiagram.module.scss` | Diagram scoped styles |
| `ModelMappingDiagramColumns.tsx` | Column layout for source/target model lists |
| `ModelMappingDiagramContextMenu.tsx` | Right-click context menu for diagram items |
| `ModelMappingDiagramModals.tsx` | Add/edit/delete modals for model mappings |
| `ModelMappingDiagramTypes.ts` | TypeScript types for diagram data structures |

## For AI Agents

### Working In This Directory
- Diagram renders model alias relationships visually (source → target)
- Context menu provides quick edit/delete actions
- Types are co-located in `ModelMappingDiagramTypes.ts`

<!-- MANUAL: -->

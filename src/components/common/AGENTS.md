<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# common

## Purpose
Shared cross-cutting components used throughout the application — modals, notifications, page transitions, and splash screen.

## Key Files

| File | Description |
|------|-------------|
| `ConfirmationModal.tsx` | Reusable confirmation dialog with accept/cancel actions |
| `NotificationContainer.tsx` | Toast notification display container |
| `PageTransition.tsx` | Animated page transition wrapper |
| `PageTransition.scss` | Page transition animation styles |
| `PageTransitionLayer.ts` | Transition layer configuration/logic |
| `SecondaryScreenShell.tsx` | Shell layout for secondary/sub-pages |
| `SecondaryScreenShell.module.scss` | Secondary screen shell scoped styles |
| `SplashScreen.tsx` | Initial loading splash screen |
| `SplashScreen.scss` | Splash screen styles |

## For AI Agents

### Working In This Directory
- These are app-wide shared components — changes here affect many pages
- Page transitions use the `motion` library for animations
- `SecondaryScreenShell` wraps sub-pages with consistent back-navigation UX

<!-- MANUAL: -->

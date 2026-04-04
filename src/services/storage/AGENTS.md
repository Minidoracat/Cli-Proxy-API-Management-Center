<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-04 | Updated: 2026-04-04 -->

# storage

## Purpose
Secure browser storage service — wraps localStorage with lightweight obfuscation for sensitive values like the management key.

## Key Files

| File | Description |
|------|-------------|
| `secureStorage.ts` | Read/write localStorage with `enc::v1::` obfuscation format |

## For AI Agents

### Working In This Directory
- Management key is stored as `enc::v1::<base64>` — not plaintext, but not strong encryption
- Uses `@/utils/encryption` for encode/decode

<!-- MANUAL: -->

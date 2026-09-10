import { expect, test } from 'bun:test';
import { buildSourceInfoMap, resolveSourceDisplay } from '../src/utils/sourceResolver';
import { collectUsageDetails } from '../src/utils/usage';

test('xAI API-key usage resolves to its configured credential without an auth file', () => {
  const sourceMap = buildSourceInfoMap({
    xaiApiKeys: [{ apiKey: 'xai-source-test-key', prefix: 'grok-work' }],
  });
  const [detail] = collectUsageDetails({
    apis: {
      client: {
        models: {
          'grok-4.5': {
            details: [{ timestamp: '2026-09-11T00:00:00Z', source: 'xai-source-test-key' }],
          },
        },
      },
    },
  });

  expect(resolveSourceDisplay(detail.source, undefined, sourceMap, new Map())).toEqual({
    displayName: 'grok-work',
    type: 'xai',
  });
});

import test from 'node:test';
import assert from 'node:assert/strict';

import { fetchGitHubStats } from '../src/js/features/github-snapshot.js';
import { translate } from '../src/js/render/translations.js';
import { createFakeDocument } from './dom-test-helpers.js';

const ids = [
  'githubRepoCount',
  'githubActiveRepoCount',
  'githubFlagshipRepo',
  'githubFlagshipMeta',
  'githubLatestRepo',
  'githubLatestDate',
];

test('fetchGitHubStats renders GitHub API data into the snapshot card', async () => {
  const { document, elements } = createFakeDocument(ids);
  global.document = document;

  const fakeFetch = async (url) => {
    if (url.includes('/repos?')) {
      return {
        ok: true,
        async json() {
          return [
            { name: 'older-repo', pushed_at: '2025-01-01T00:00:00Z' },
            { name: 'newest-repo', pushed_at: '2026-04-01T00:00:00Z' },
          ];
        },
      };
    }

    return {
      ok: true,
      async json() {
        return { public_repos: 33 };
      },
    };
  };

  await fetchGitHubStats('en', (path) => translate('en', path), fakeFetch);

  assert.equal(elements.get('githubRepoCount').textContent, '33');
  assert.equal(elements.get('githubActiveRepoCount').textContent, '1');
  assert.equal(
    elements.get('githubFlagshipRepo').textContent,
    'github-portfolio-auditor',
  );
  assert.equal(elements.get('githubLatestRepo').textContent, 'newest-repo');
  assert.match(elements.get('githubLatestDate').textContent, /Updated on/i);
});

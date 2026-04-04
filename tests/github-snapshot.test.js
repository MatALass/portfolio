import test from 'node:test';
import assert from 'node:assert/strict';

import { fetchGitHubStats } from '../src/js/features/github-snapshot.js';
import { translate } from '../src/js/render/translations.js';
import { FLAGSHIP_REPO, FLAGSHIP_META } from '../src/js/data/config.js';
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
  // Flagship comes from config.js, not from translations
  assert.equal(elements.get('githubFlagshipRepo').textContent, FLAGSHIP_REPO);
  assert.equal(elements.get('githubFlagshipMeta').textContent, FLAGSHIP_META);
  assert.equal(elements.get('githubLatestRepo').textContent, 'newest-repo');
  assert.match(elements.get('githubLatestDate').textContent, /Updated on/i);
});

test('fetchGitHubStats sets error state when API call fails', async () => {
  const { document, elements, FakeElement } = createFakeDocument(ids);

  // Register a fake snapshot card so querySelector('.github-snapshot-card') finds it
  const snapshotCard = new FakeElement('snapshot-card', 'div');
  snapshotCard.classList.add('github-snapshot-card');
  elements.set('snapshot-card', snapshotCard);

  global.document = document;

  const failingFetch = async () => {
    throw new Error('Network error');
  };

  await fetchGitHubStats('en', (path) => translate('en', path), failingFetch);

  assert.equal(elements.get('githubRepoCount').textContent, translate('en', 'github.unavailable'));
  assert.equal(elements.get('githubActiveRepoCount').textContent, translate('en', 'github.unavailable'));
  assert.equal(elements.get('githubFlagshipRepo').textContent, FLAGSHIP_REPO);
  assert.ok(snapshotCard.classList.contains('github-snapshot--error'));
});
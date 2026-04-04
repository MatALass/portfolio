import test from 'node:test';
import assert from 'node:assert/strict';

import {
  translations,
  projectTranslations,
} from '../src/js/data/content/index.js';
import { getNestedValue, ensureLanguage } from '../src/js/utils/path.js';
import {
  validateProjectShape,
  validateProjectTranslations,
} from '../src/js/validation/content.js';

test('translations expose both supported languages', () => {
  assert.deepEqual(Object.keys(translations).sort(), ['en', 'fr']);
});

test('project translations exist for both supported languages with matching ids', () => {
  assert.equal(projectTranslations.en.length, projectTranslations.fr.length);
  assert.deepEqual(
    projectTranslations.en.map((project) => project.id),
    projectTranslations.fr.map((project) => project.id),
  );
});

test('project translation payload passes structural validation', () => {
  assert.deepEqual(validateProjectTranslations(projectTranslations), []);
});

test('nested translation lookup works', () => {
  assert.equal(
    getNestedValue(translations.en, 'hero.metrics.biLabel'),
    'KPI design & reporting',
  );
  assert.equal(getNestedValue(translations.fr, 'nav.projects'), 'Projets');
});

test('language fallback stays deterministic', () => {
  assert.equal(ensureLanguage('fr', ['en', 'fr']), 'fr');
  assert.equal(ensureLanguage('es', ['en', 'fr']), 'en');
});

test('validateProjectShape reports missing required fields', () => {
  const errors = validateProjectShape(
    {
      id: 'test',
      tags: ['x'],
      decisions: ['a', 'b'],
      proof: ['a', 'b'],
      meta: [
        ['k', 'v'],
        ['k2', 'v2'],
      ],
      links: [['GitHub', 'https://github.com', true]],
    },
    'en',
  );
  assert.ok(errors.some((e) => e.includes('title')));
});

test('validateProjectShape reports insufficient decisions', () => {
  const minimal = {
    id: 'x',
    title: 'X',
    badge: 'B',
    category: 'C',
    shortPitch: 'p',
    shortDescription: 'd',
    status: 's',
    focus: 'f',
    stack: 'st',
    tags: ['t'],
    quote: 'q',
    summary: 's',
    context: 'c',
    architecture: 'a',
    decisions: ['only one'],
    proof: ['a', 'b'],
    meta: [
      ['k', 'v'],
      ['k2', 'v2'],
    ],
    links: [['G', 'https://g.com', true]],
  };
  const errors = validateProjectShape(minimal, 'en');
  assert.ok(errors.some((e) => e.includes('decisions')));
});

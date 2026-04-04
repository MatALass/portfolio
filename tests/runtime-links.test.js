import test from 'node:test';
import assert from 'node:assert/strict';

import { applyRuntimeLinks } from '../src/js/features/runtime-links.js';
import { createFakeDocument } from './dom-test-helpers.js';

const ids = ['hero-cta-cv', 'contact-resume-link', 'github-profile-link'];

test('applyRuntimeLinks injects CV and GitHub URLs from configuration', () => {
  const { document, elements } = createFakeDocument(ids);
  global.document = document;

  applyRuntimeLinks();

  assert.equal(
    elements.get('hero-cta-cv').href,
    './assets/docs/mathieu-alassoeur-cv.pdf',
  );
  assert.equal(
    elements.get('contact-resume-link').href,
    './assets/docs/mathieu-alassoeur-cv.pdf',
  );
  assert.equal(
    elements.get('github-profile-link').href,
    'https://github.com/MatALass',
  );
});

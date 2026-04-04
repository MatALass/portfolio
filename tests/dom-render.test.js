import test from 'node:test';
import assert from 'node:assert/strict';

import { applyStaticTranslations } from '../src/js/render/translations.js';
import { renderProjects } from '../src/js/render/projects.js';
import { projectTranslations } from '../src/js/data/content.js';
import { createFakeDocument } from './dom-test-helpers.js';

const translationElementIds = [
  'nav-projects',
  'nav-experience',
  'nav-stack',
  'nav-about',
  'nav-play',
  'hero-eyebrow-text',
  'hero-title-accent',
  'hero-desc-text',
  'hero-cta-projects',
  'hero-cta-github',
  'hero-cta-cv',
  'hero-note-text',
  'panel-title-text',
  'panel-copy-text',
  'metric-bi-label',
  'metric-bi-sub',
  'metric-ml-label',
  'metric-ml-sub',
  'metric-game-label',
  'metric-game-sub',
  'metric-web-label',
  'metric-web-sub',
  'projects-eyebrow-text',
  'projects-subtitle-text',
  'experience-eyebrow-text',
  'experience-subtitle-text',
  'stack-eyebrow-text',
  'stack-subtitle-text',
  'about-eyebrow-text',
  'about-subtitle-text',
  'play-eyebrow-text',
  'play-subtitle-text',
  'github-snapshot-kicker',
  'github-snapshot-title',
  'github-profile-link',
  'github-repos-label',
  'github-repos-sub',
  'github-active-label',
  'github-active-sub',
  'github-flagship-label',
  'github-latest-label',
  'play-kicker-text',
  'play-project-title-text',
  'play-project-copy-text',
  'play-live-link',
  'play-github-link',
  'play-browser-open',
  'play-back-link',
  'play-embed-label-text',
  'play-embed-hint-text',
  'play-placeholder-title-text',
  'play-placeholder-link',
  'contact-title-text',
  'contact-note-text',
  'contact-resume-text',
  'footer-note-text',
  'modal-context-title',
  'modal-architecture-title',
  'modal-decisions-title',
  'modal-proof-title',
  'projects-title-text',
  'experience-title-text',
  'stack-title-text',
  'about-title-text',
  'play-title-text',
  'about-copy-block',
  'about-quote-line',
  'play-placeholder-copy-text',
  'play-points-list',
  'exp-1-date',
  'exp-1-role',
  'exp-1-org',
  'exp-1-copy',
  'exp-1-points',
  'exp-2-date',
  'exp-2-role',
  'exp-2-org',
  'exp-2-copy',
  'exp-2-points',
  'stack-card-1-title',
  'stack-data-label',
  'stack-data-copy',
  'stack-bi-label',
  'stack-bi-copy',
  'stack-eng-label',
  'stack-eng-copy',
  'stack-work-label',
  'stack-work-copy',
  'stack-card-2-title',
  'strength-list',
  'langToggle',
  'modalCloseBtn',
];

test('applyStaticTranslations updates static DOM content for French', () => {
  const { document, elements, metaDescription } = createFakeDocument(
    translationElementIds,
  );
  global.document = document;

  applyStaticTranslations('fr');

  assert.equal(document.documentElement.lang, 'fr');
  assert.match(document.title, /Mathieu Alassoeur/);
  assert.match(metaDescription.attributes.content, /Portfolio|portfolio/i);
  assert.equal(elements.get('nav-projects').textContent, 'Projets');
  assert.match(
    elements.get('projects-title-text').innerHTML,
    /manière de raisonner/,
  );
  assert.equal(elements.get('langToggle').textContent, 'FR');
  assert.match(elements.get('play-points-list').innerHTML, /Algorithmes/);
});

test('applyStaticTranslations updates static DOM content for English', () => {
  const { document, elements, metaDescription } = createFakeDocument(
    translationElementIds,
  );
  global.document = document;

  applyStaticTranslations('en');

  assert.equal(document.documentElement.lang, 'en');
  assert.equal(elements.get('nav-projects').textContent, 'Projects');
  assert.match(
    elements.get('projects-title-text').innerHTML,
    /how I think/,
  );
  assert.equal(elements.get('langToggle').textContent, 'EN');
});

test('renderProjects renders all projects in the correct order', () => {
  const { document, elements } = createFakeDocument(['projectGrid']);
  global.document = document;

  renderProjects('en', {
    openCase: 'Open case view →',
    focusLabel: 'Focus',
    stackLabel: 'Stack',
    statusLabel: 'Status',
  });

  const grid = elements.get('projectGrid');
  const expectedIds = projectTranslations.en.map((project) => project.id);

  assert.equal(grid.children.length, expectedIds.length);
  assert.match(grid.children[0].innerHTML, /GitHub Portfolio Auditor/);
  assert.match(
    grid.children[expectedIds.length - 1].innerHTML,
    /Automata Toolkit/,
  );
});
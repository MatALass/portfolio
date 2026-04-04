import { translations } from './data/content/index.js';
import { ensureLanguage } from './utils/path.js';
import { applyStaticTranslations, translate } from './render/translations.js';
import { renderProjects } from './render/projects.js';
import { openProjectModal, closeProjectModal } from './features/modal.js';
import { fetchGitHubStats } from './features/github-snapshot.js';
import { setupPlayableDemo } from './features/playable-demo.js';
import { setupCustomCursor } from './features/cursor.js';
import {
  setupActiveNav,
  setupScrollBar,
  setupSectionReveal,
} from './features/navigation.js';

const supportedLanguages = Object.keys(translations);
let currentLanguage = ensureLanguage(
  localStorage.getItem('portfolio-lang') || 'en',
  supportedLanguages,
);

function t(path) {
  return translate(currentLanguage, path);
}

function renderLanguageDependentUI() {
  applyStaticTranslations(currentLanguage);
  renderProjects(currentLanguage, {
    openCase: t('ui.openCase'),
    focusLabel: t('ui.focusLabel'),
    stackLabel: t('ui.stackLabel'),
    statusLabel: t('ui.statusLabel'),
  });
  setupPlayableDemo(t);
  void fetchGitHubStats(currentLanguage, t);
}

function setLanguage(language) {
  currentLanguage = ensureLanguage(language, supportedLanguages);
  localStorage.setItem('portfolio-lang', currentLanguage);
  renderLanguageDependentUI();

  const modalOverlay = document.getElementById('projectModalOverlay');
  if (modalOverlay?.classList.contains('open')) {
    closeProjectModal();
  }
}

function setupLanguageToggle() {
  document.getElementById('langToggle')?.addEventListener('click', () => {
    setLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
  });
}

function setupProjectModalInteractions() {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest?.('[data-project-id]');
    if (trigger) {
      openProjectModal(currentLanguage, trigger.dataset.projectId, t);
    }
  });

  const modalOverlay = document.getElementById('projectModalOverlay');
  document
    .getElementById('modalCloseBtn')
    ?.addEventListener('click', closeProjectModal);

  modalOverlay?.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProjectModal();
    }
  });
}

export function bootstrap() {
  setupLanguageToggle();
  setupProjectModalInteractions();
  setupCustomCursor();
  setupScrollBar();
  setupSectionReveal();
  setupActiveNav();
  setLanguage(currentLanguage);
}

bootstrap();

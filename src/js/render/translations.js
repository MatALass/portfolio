import { translations } from '../data/content/index.js';
import { getNestedValue } from '../utils/path.js';

export function translate(language, path) {
  return getNestedValue(translations[language], path);
}

export function fillSimpleList(elementId, items) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

export function applyStaticTranslations(language) {
  document.documentElement.lang = language;
  document.title = translations[language].pageTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', translations[language].metaDescription);

  const t = (path) => translate(language, path);

  const contentMap = {
    'nav-projects': t('nav.projects'),
    'nav-experience': t('nav.experience'),
    'nav-stack': t('nav.stack'),
    'nav-about': t('nav.about'),
    'nav-play': t('nav.play'),
    'hero-eyebrow-text': t('hero.eyebrow'),
    'hero-title-accent': t('hero.titleAccent'),
    'hero-desc-text': t('hero.desc'),
    'hero-cta-projects': t('hero.ctaProjects'),
    'hero-cta-github': t('hero.ctaGithub'),
    'hero-cta-cv': t('hero.ctaCv'),
    'hero-note-text': t('hero.note'),
    'panel-title-text': t('hero.panelTitle'),
    'panel-copy-text': t('hero.panelCopy'),
    'metric-bi-label': t('hero.metrics.biLabel'),
    'metric-bi-sub': t('hero.metrics.biSub'),
    'metric-ml-label': t('hero.metrics.mlLabel'),
    'metric-ml-sub': t('hero.metrics.mlSub'),
    'metric-game-label': t('hero.metrics.gameLabel'),
    'metric-game-sub': t('hero.metrics.gameSub'),
    'metric-web-label': t('hero.metrics.webLabel'),
    'metric-web-sub': t('hero.metrics.webSub'),
    'projects-eyebrow-text': t('sections.projectsEyebrow'),
    'projects-subtitle-text': t('sections.projectsSubtitle'),
    'experience-eyebrow-text': t('sections.experienceEyebrow'),
    'experience-subtitle-text': t('sections.experienceSubtitle'),
    'stack-eyebrow-text': t('sections.stackEyebrow'),
    'stack-subtitle-text': t('sections.stackSubtitle'),
    'about-eyebrow-text': t('sections.aboutEyebrow'),
    'about-subtitle-text': t('sections.aboutSubtitle'),
    'play-eyebrow-text': t('play.eyebrow'),
    'play-subtitle-text': t('play.subtitle'),
    'github-snapshot-kicker': t('github.snapshotKicker'),
    'github-snapshot-title': t('github.snapshotTitle'),
    'github-profile-link': t('github.profileLink'),
    'github-repos-label': t('github.reposLabel'),
    'github-repos-sub': t('github.reposSub'),
    'github-active-label': t('github.activeLabel'),
    'github-active-sub': t('github.activeSub'),
    'github-flagship-label': t('github.flagshipLabel'),
    'github-latest-label': t('github.latestLabel'),
    'play-kicker-text': t('play.kicker'),
    'play-project-title-text': t('play.projectTitle'),
    'play-project-copy-text': t('play.projectCopy'),
    'play-live-link': t('play.live'),
    'play-github-link': t('play.github'),
    'play-browser-open': t('play.fullPage'),
    'play-back-link': t('play.back'),
    'play-embed-label-text': t('play.embedLabel'),
    'play-embed-hint-text': t('play.embedHint'),
    'play-placeholder-title-text': t('play.placeholderTitle'),
    'play-placeholder-link': t('play.placeholderLink'),
    'contact-title-text': t('contact.title'),
    'contact-note-text': t('contact.note'),
    'contact-resume-text': t('contact.resume'),
    'footer-note-text': t('footer.note'),
    'modal-context-title': t('modal.context'),
    'modal-architecture-title': t('modal.architecture'),
    'modal-decisions-title': t('modal.decisions'),
    'modal-proof-title': t('modal.proof'),
  };

  for (const [id, value] of Object.entries(contentMap)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  const htmlMap = {
    'projects-title-text': t('sections.projectsTitle'),
    'experience-title-text': t('sections.experienceTitle'),
    'stack-title-text': t('sections.stackTitle'),
    'about-title-text': t('sections.aboutTitle'),
    'play-title-text': t('play.title'),
    'about-copy-block': translations[language].about.paragraphs
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join(''),
  };

  for (const [id, value] of Object.entries(htmlMap)) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = value;
  }

  document.getElementById('about-quote-line').textContent =
    translations[language].about.quote;
  document.getElementById('play-placeholder-copy-text').textContent = t(
    'play.placeholderCopy',
  );
  document.getElementById('play-points-list').innerHTML = translations[
    language
  ].play.points
    .map((item) => `<div class="play-point">${item}</div>`)
    .join('');

  const experienceOne = translations[language].experience.one;
  document.getElementById('exp-1-date').textContent = experienceOne.date;
  document.getElementById('exp-1-role').textContent = experienceOne.role;
  document.getElementById('exp-1-org').textContent = experienceOne.org;
  document.getElementById('exp-1-copy').textContent = experienceOne.copy;
  fillSimpleList('exp-1-points', experienceOne.points);

  const experienceTwo = translations[language].experience.two;
  document.getElementById('exp-2-date').textContent = experienceTwo.date;
  document.getElementById('exp-2-role').textContent = experienceTwo.role;
  document.getElementById('exp-2-org').textContent = experienceTwo.org;
  document.getElementById('exp-2-copy').textContent = experienceTwo.copy;
  fillSimpleList('exp-2-points', experienceTwo.points);

  const stack = translations[language].stack;
  document.getElementById('stack-card-1-title').textContent = stack.card1Title;
  document.getElementById('stack-data-label').textContent = stack.dataLabel;
  document.getElementById('stack-data-copy').textContent = stack.dataCopy;
  document.getElementById('stack-bi-label').textContent = stack.biLabel;
  document.getElementById('stack-bi-copy').textContent = stack.biCopy;
  document.getElementById('stack-eng-label').textContent = stack.engLabel;
  document.getElementById('stack-eng-copy').textContent = stack.engCopy;
  document.getElementById('stack-work-label').textContent = stack.workLabel;
  document.getElementById('stack-work-copy').textContent = stack.workCopy;
  document.getElementById('stack-card-2-title').textContent = stack.card2Title;
  document.getElementById('strength-list').innerHTML = stack.strengths
    .map((item) => `<li>${item}</li>`)
    .join('');

  const toggle = document.getElementById('langToggle');
  toggle.textContent = translations[language].languageButton;
  toggle.setAttribute('aria-label', translations[language].switchTo);

  document
    .getElementById('modalCloseBtn')
    .setAttribute('aria-label', t('modal.closeAria'));
}

import {
  fillLinks,
  fillList,
  fillMeta,
  fillTags,
  getProjects,
} from '../render/projects.js';

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

let lastFocusedElement = null;

const CAN_LISTEN_ON_DOCUMENT =
  typeof document !== 'undefined' &&
  typeof document.addEventListener === 'function' &&
  typeof document.removeEventListener === 'function';

function trapFocus(event) {
  if (event.key !== 'Tab') return;

  const modal = document.querySelector('.modal');
  if (!modal) return;

  const focusable = Array.from(modal.querySelectorAll(FOCUSABLE_SELECTORS));
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey) {
    if (document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
    return;
  }

  if (document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function openProjectModal(language, projectId, translate) {
  const project = getProjects(language).find(
    (candidate) => candidate.id === projectId,
  );
  if (!project) return;

  lastFocusedElement = document.activeElement ?? null;

  document.getElementById('modalCategory').textContent =
    project.category || translate('modal.project');
  document.getElementById('projectModalTitle').textContent = project.title;
  document.getElementById('modalQuote').textContent = project.quote;
  document.getElementById('modalSummary').textContent = project.summary;
  document.getElementById('modalContext').textContent = project.context;
  document.getElementById('modalArchitecture').textContent =
    project.architecture;

  fillTags(project.tags);
  fillMeta(project.meta);
  fillLinks(project.links);
  fillList('modalDecisions', project.decisions);
  fillList('modalProof', project.proof);

  const overlay = document.getElementById('projectModalOverlay');
  overlay.hidden = false;
  overlay.inert = false;
  overlay.classList.add('open');

  document.body.classList.add('modal-open');

  const closeButton = document.getElementById('modalCloseBtn');
  closeButton?.focus?.();

  if (CAN_LISTEN_ON_DOCUMENT) {
    document.addEventListener('keydown', trapFocus);
  }
}

export function closeProjectModal() {
  const overlay = document.getElementById('projectModalOverlay');
  overlay.classList.remove('open');
  overlay.inert = true;
  overlay.hidden = true;

  document.body.classList.remove('modal-open');

  if (CAN_LISTEN_ON_DOCUMENT) {
    document.removeEventListener('keydown', trapFocus);
  }

  lastFocusedElement?.focus?.();
}

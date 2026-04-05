import { ENABLE_CUSTOM_CURSOR } from '../data/config.js';

/**
 * Injects cursor DOM nodes at runtime only when the cursor is enabled.
 * This replaces the previously static markup in index.html which was dead
 * code whenever ENABLE_CUSTOM_CURSOR = false.
 */
function injectCursorElements() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.id = 'cursor';

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.id = 'ring';

  document.body.prepend(ring);
  document.body.prepend(cursor);

  return { cursor, ring };
}

export function setupCustomCursor() {
  if (!ENABLE_CUSTOM_CURSOR) {
    document.body.classList.remove('custom-cursor-enabled');
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  const isTouchDevice = window.matchMedia(
    '(hover: none), (pointer: coarse)',
  ).matches;

  if (prefersReducedMotion || isTouchDevice) {
    document.body.classList.remove('custom-cursor-enabled');
    return false;
  }

  const { cursor, ring } = injectCursorElements();

  document.body.classList.add('custom-cursor-enabled');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }

  animateRing();

  const interactiveSelector =
    'a, button, .project-card, .timeline-item, .stack-card, .hero-panel, .metric-card, .github-snapshot-card, .play-info-card, .play-embed-card';

  document.addEventListener('mouseover', (event) => {
    if (!event.target.closest(interactiveSelector)) return;
    cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
    cursor.style.background = 'var(--terra)';
    ring.style.opacity = '0.7';
  });

  document.addEventListener('mouseout', (event) => {
    if (!event.target.closest(interactiveSelector)) return;
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'var(--indigo)';
    ring.style.opacity = '0.4';
  });

  return true;
}

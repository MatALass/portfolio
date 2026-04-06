import { MORPION_EMBED_URL } from '../data/config.js';

export function setupPlayableDemo(translate) {
  const frame = document.getElementById('morpionFrame');
  const placeholder = document.getElementById('labPlaceholder');
  const hint = document.getElementById('lab-embed-hint-text');
  const browserUrl = document.getElementById('lab-browser-url');
  const browserOpen = document.getElementById('lab-browser-open');
  const liveLink = document.getElementById('lab-live-link');

  if (!frame || !placeholder || !hint) return;

  if (MORPION_EMBED_URL && /^https?:\/\//.test(MORPION_EMBED_URL)) {
    frame.src = MORPION_EMBED_URL;
    frame.title = translate('lab.projectTitle');
    frame.loading = 'lazy';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.style.display = 'block';
    placeholder.style.display = 'none';
    hint.textContent = translate('lab.embedHint');

    if (browserUrl) browserUrl.textContent = MORPION_EMBED_URL;
    if (browserOpen) browserOpen.href = MORPION_EMBED_URL;
    if (liveLink) liveLink.href = MORPION_EMBED_URL;
    return;
  }

  frame.removeAttribute('src');
  frame.style.display = 'none';
  placeholder.style.display = 'grid';
  hint.textContent = translate('lab.embedHint');

  if (browserUrl) browserUrl.textContent = translate('lab.embedHint');
  if (browserOpen) browserOpen.href = MORPION_EMBED_URL;
}

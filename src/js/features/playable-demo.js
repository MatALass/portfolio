import { MORPION_EMBED_URL } from '../data/config.js';

export function setupPlayableDemo(translate) {
  const frame = document.getElementById('morpionFrame');
  const placeholder = document.getElementById('playPlaceholder');
  const hint = document.getElementById('play-embed-hint-text');
  const browserUrl = document.getElementById('play-browser-url');
  const browserOpen = document.getElementById('play-browser-open');
  const liveLink = document.getElementById('play-live-link');

  if (!frame || !placeholder || !hint) return;

  if (MORPION_EMBED_URL && /^https?:\/\//.test(MORPION_EMBED_URL)) {
    frame.src = MORPION_EMBED_URL;
    frame.title = translate('play.projectTitle');
    frame.loading = 'lazy';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.style.display = 'block';
    placeholder.style.display = 'none';
    hint.textContent = translate('play.embedHint');

    if (browserUrl) browserUrl.textContent = MORPION_EMBED_URL;
    if (browserOpen) browserOpen.href = MORPION_EMBED_URL;
    if (liveLink) liveLink.href = MORPION_EMBED_URL;
    return;
  }

  frame.removeAttribute('src');
  frame.style.display = 'none';
  placeholder.style.display = 'grid';
  hint.textContent = translate('play.embedHint');

  if (browserUrl) browserUrl.textContent = translate('play.embedHint');
  if (browserOpen)
    browserOpen.href = 'https://morpion-ultime.vercel.app/';
}

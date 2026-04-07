import { projectTranslations } from '../data/content/index.js';
import { escapeHtml } from '../utils/escape.js';

export function getProjects(language) {
  return projectTranslations[language];
}

/**
 * Create a text node safely — no innerHTML risk.
 */
function text(str) {
  return document.createTextNode(String(str));
}

/**
 * Create an element with optional className and append children (strings or nodes).
 */
function el(tag, className, ...children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const child of children) {
    node.appendChild(typeof child === 'string' ? text(child) : child);
  }
  return node;
}

/**
 * Create a <span class="tag"> safely.
 */
function tagSpan(label) {
  return el('span', 'tag', label);
}

/**
 * Build a .mini-meta-row element without innerHTML.
 */
function miniMetaRow(labelStr, valueStr) {
  const row = document.createElement('div');
  row.className = 'mini-meta-row';
  row.appendChild(el('span', null, labelStr));
  row.appendChild(el('div', null, valueStr));
  return row;
}

export function createProjectCard(project, labels) {
  const card = document.createElement('article');
  card.className = 'project-card';

  // Top row: title + badge
  const top = document.createElement('div');
  top.className = 'project-top';
  top.appendChild(el('div', 'project-name', project.title));
  const badge = el('div', `project-badge ${project.badgeClass}`, project.badge);
  top.appendChild(badge);
  card.appendChild(top);

  // Pitch + description
  card.appendChild(el('div', 'project-pitch', project.shortPitch));
  card.appendChild(el('p', 'project-desc', project.shortDescription));

  // Mini meta
  const miniMeta = document.createElement('div');
  miniMeta.className = 'project-mini-meta';
  miniMeta.appendChild(miniMetaRow(labels.focusLabel, project.focus));
  miniMeta.appendChild(miniMetaRow(labels.stackLabel, project.stack));
  miniMeta.appendChild(miniMetaRow(labels.statusLabel, project.status));
  card.appendChild(miniMeta);

  // Tags
  const tags = document.createElement('div');
  tags.className = 'tags';
  for (const tag of project.tags) tags.appendChild(tagSpan(tag));
  card.appendChild(tags);

  // Actions
  // Actions
  const actions = document.createElement('div');
  actions.className = 'project-actions';

  const openBtn = document.createElement('button');
  openBtn.className = 'card-action';
  openBtn.dataset.projectId = project.id;
  openBtn.appendChild(text(labels.openCase));
  actions.appendChild(openBtn);

  for (const [label, href] of project.links) {
    const link = document.createElement('a');
    link.className = 'project-link-inline';
    link.href = href;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.appendChild(text(label));
    actions.appendChild(link);
  }

  card.appendChild(actions);
  return card;
}

export function renderProjects(language, labels) {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  getProjects(language).forEach((project) =>
    grid.appendChild(createProjectCard(project, labels)),
  );
}

export function fillList(elementId, items) {
  const element = document.getElementById(elementId);
  element.innerHTML = items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
}

export function fillTags(tags) {
  const element = document.getElementById('modalTags');
  element.innerHTML = '';
  for (const tag of tags) element.appendChild(tagSpan(tag));
}

export function fillMeta(meta) {
  const element = document.getElementById('modalMeta');
  element.innerHTML = '';
  for (const [label, value] of meta) {
    const item = document.createElement('div');
    item.className = 'modal-meta-item';
    item.appendChild(el('div', 'modal-meta-label', label));
    item.appendChild(el('div', 'modal-meta-value', value));
    element.appendChild(item);
  }
}

export function fillLinks(links) {
  const element = document.getElementById('modalLinks');
  element.innerHTML = '';
  links.forEach(([label, href, primary], index) => {
    const a = document.createElement('a');
    a.className = `modal-link${index === 0 && primary ? ' primary' : ''}`;
    a.href = href;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.appendChild(text(label));
    element.appendChild(a);
  });
}

import { projectTranslations } from '../data/content/index.js';
import { escapeHtml } from '../utils/escape.js';

export function getProjects(language) {
  return projectTranslations[language];
}


export function createProjectCard(project, labels) {
  const card = document.createElement('article');
  card.className = 'project-card';

  // Safe text nodes for all user-controlled fields
  const title = escapeHtml(project.title);
  const badge = escapeHtml(project.badge);
  const shortPitch = escapeHtml(project.shortPitch);
  const shortDescription = escapeHtml(project.shortDescription);
  const focus = escapeHtml(project.focus);
  const stack = escapeHtml(project.stack);
  const status = escapeHtml(project.status);
  const projectId = escapeHtml(project.id);
  const githubHref = escapeHtml(project.links[0][1]);
  const githubLabel = escapeHtml(project.links[0][0]);
  const openCase = escapeHtml(labels.openCase);
  const focusLabel = escapeHtml(labels.focusLabel);
  const stackLabel = escapeHtml(labels.stackLabel);
  const statusLabel = escapeHtml(labels.statusLabel);

  card.innerHTML = `
    <div class="project-top">
      <div class="project-name">${title}</div>
      <div class="project-badge ${escapeHtml(project.badgeClass)}">${badge}</div>
    </div>

    <div class="project-pitch">${shortPitch}</div>
    <p class="project-desc">${shortDescription}</p>

    <div class="project-mini-meta">
      <div class="mini-meta-row"><span>${focusLabel}</span><div>${focus}</div></div>
      <div class="mini-meta-row"><span>${stackLabel}</span><div>${stack}</div></div>
      <div class="mini-meta-row"><span>${statusLabel}</span><div>${status}</div></div>
    </div>

    <div class="tags">
      ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
    </div>

    <div class="project-actions">
      <button class="card-action" data-project-id="${projectId}">${openCase}</button>
      <a class="project-link-inline" href="${githubHref}" target="_blank" rel="noreferrer">${githubLabel}</a>
    </div>
  `;
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
  element.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
}

export function fillTags(tags) {
  const element = document.getElementById('modalTags');
  element.innerHTML = tags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join('');
}

export function fillMeta(meta) {
  const element = document.getElementById('modalMeta');
  element.innerHTML = meta
    .map(
      ([label, value]) => `
      <div class="modal-meta-item">
        <div class="modal-meta-label">${escapeHtml(label)}</div>
        <div class="modal-meta-value">${escapeHtml(value)}</div>
      </div>
    `,
    )
    .join('');
}

export function fillLinks(links) {
  const element = document.getElementById('modalLinks');
  element.innerHTML = links
    .map(
      ([label, href, primary], index) => `<a class="modal-link ${index === 0 && primary ? 'primary' : ''}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`,
    )
    .join('');
} 
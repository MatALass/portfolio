import { projectTranslations } from "../data/content.js";

export function getProjects(language) {
  return projectTranslations[language];
}

export function createProjectCard(project, labels) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-top">
      <div class="project-name">${project.title}</div>
      <div class="project-badge ${project.badgeClass}">${project.badge}</div>
    </div>

    <div class="project-pitch">${project.shortPitch}</div>
    <p class="project-desc">${project.shortDescription}</p>

    <div class="project-mini-meta">
      <div class="mini-meta-row"><span>${labels.focusLabel}</span><div>${project.focus}</div></div>
      <div class="mini-meta-row"><span>${labels.stackLabel}</span><div>${project.stack}</div></div>
      <div class="mini-meta-row"><span>${labels.statusLabel}</span><div>${project.status}</div></div>
    </div>

    <div class="tags">
      ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>

    <div class="project-actions">
      <button class="card-action" data-project-id="${project.id}">${labels.openCase}</button>
      <a class="project-link-inline" href="${project.links[0][1]}" target="_blank" rel="noreferrer">${project.links[0][0]}</a>
    </div>
  `;
  return card;
}

export function renderProjects(language, labels) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  getProjects(language).forEach((project) => grid.appendChild(createProjectCard(project, labels)));
}

export function fillList(elementId, items) {
  const element = document.getElementById(elementId);
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

export function fillTags(tags) {
  const element = document.getElementById("modalTags");
  element.innerHTML = tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

export function fillMeta(meta) {
  const element = document.getElementById("modalMeta");
  element.innerHTML = meta
    .map(([label, value]) => `
      <div class="modal-meta-item">
        <div class="modal-meta-label">${label}</div>
        <div class="modal-meta-value">${value}</div>
      </div>
    `)
    .join("");
}

export function fillLinks(links) {
  const element = document.getElementById("modalLinks");
  element.innerHTML = links
    .map(
      ([label, href, primary], index) => `
        <a
          class="modal-link ${index === 0 && primary ? "primary" : ""}"
          href="${href}"
          target="_blank"
          rel="noreferrer"
        >
          ${label}
        </a>
      `,
    )
    .join("");
}

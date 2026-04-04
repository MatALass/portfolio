import { getProjects, fillList, fillLinks, fillMeta, fillTags } from "../render/projects.js";

export function openProjectModal(language, projectId, translate) {
  const project = getProjects(language).find((candidate) => candidate.id === projectId);
  if (!project) return;

  document.getElementById("modalCategory").textContent = project.category || translate("modal.project");
  document.getElementById("projectModalTitle").textContent = project.title;
  document.getElementById("modalQuote").textContent = project.quote;
  document.getElementById("modalSummary").textContent = project.summary;
  document.getElementById("modalContext").textContent = project.context;
  document.getElementById("modalArchitecture").textContent = project.architecture;

  fillTags(project.tags);
  fillMeta(project.meta);
  fillLinks(project.links);
  fillList("modalDecisions", project.decisions);
  fillList("modalProof", project.proof);

  const overlay = document.getElementById("projectModalOverlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

export function closeProjectModal() {
  const overlay = document.getElementById("projectModalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

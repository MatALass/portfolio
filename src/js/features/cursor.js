export function setupCustomCursor() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("ring");

  if (prefersReducedMotion || isTouchDevice || !cursor || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener("mousemove", (event) => {
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

  const interactiveSelector = "a, button, .project-card, .timeline-item, .stack-card, .hero-panel, .metric-card, .github-snapshot-card, .play-info-card, .play-embed-card";

  document.addEventListener("mouseover", (event) => {
    if (!event.target.closest(interactiveSelector)) return;
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    cursor.style.background = "var(--terra)";
    ring.style.opacity = "0.7";
  });

  document.addEventListener("mouseout", (event) => {
    if (!event.target.closest(interactiveSelector)) return;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "var(--indigo)";
    ring.style.opacity = "0.4";
  });
}

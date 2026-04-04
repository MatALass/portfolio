import test from "node:test";
import assert from "node:assert/strict";

import { openProjectModal, closeProjectModal } from "../src/js/features/modal.js";
import { setupPlayableDemo } from "../src/js/features/playable-demo.js";
import { translate } from "../src/js/render/translations.js";
import { createFakeDocument } from "./dom-test-helpers.js";

const modalIds = [
  "modalCategory", "projectModalTitle", "modalQuote", "modalSummary", "modalContext", "modalArchitecture",
  "modalTags", "modalMeta", "modalLinks", "modalDecisions", "modalProof", "projectModalOverlay",
  "morpionFrame", "playPlaceholder", "play-embed-hint-text", "play-browser-url", "play-browser-open", "play-live-link",
];

test("openProjectModal fills content and toggles modal state", () => {
  const { document, elements } = createFakeDocument(modalIds);
  global.document = document;

  openProjectModal("en", "automata-toolkit", (path) => translate("en", path));

  assert.equal(elements.get("modalCategory").textContent, "Software engineering");
  assert.equal(elements.get("projectModalTitle").textContent, "Automata Toolkit");
  assert.match(elements.get("modalTags").innerHTML, /CLI/);
  assert.match(elements.get("modalLinks").innerHTML, /github.com\/MatALass\/automata-toolkit/);
  assert.ok(elements.get("projectModalOverlay").classList.contains("open"));
  assert.equal(elements.get("projectModalOverlay").attributes["aria-hidden"], "false");
  assert.ok(document.body.classList.contains("modal-open"));

  closeProjectModal();
  assert.ok(!elements.get("projectModalOverlay").classList.contains("open"));
  assert.equal(elements.get("projectModalOverlay").attributes["aria-hidden"], "true");
  assert.ok(!document.body.classList.contains("modal-open"));
});

test("setupPlayableDemo uses the configured live URL for iframe and links", () => {
  const { document, elements } = createFakeDocument(modalIds);
  global.document = document;

  setupPlayableDemo((path) => translate("en", path));

  assert.equal(elements.get("morpionFrame").src, "https://matalass.github.io/morpion-ultime/");
  assert.equal(elements.get("morpionFrame").style.display, "block");
  assert.equal(elements.get("playPlaceholder").style.display, "none");
  assert.equal(elements.get("play-browser-url").textContent, "https://matalass.github.io/morpion-ultime/");
  assert.equal(elements.get("play-browser-open").href, "https://matalass.github.io/morpion-ultime/");
  assert.equal(elements.get("play-live-link").href, "https://matalass.github.io/morpion-ultime/");
});

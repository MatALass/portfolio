import test from "node:test";
import assert from "node:assert/strict";

import { translations, projectTranslations } from "../src/js/data/content.js";
import { getNestedValue, ensureLanguage } from "../src/js/utils/path.js";

test("translations expose both supported languages", () => {
  assert.deepEqual(Object.keys(translations).sort(), ["en", "fr"]);
});

test("project translations exist for both languages with matching ids", () => {
  const enIds = projectTranslations.en.map((project) => project.id);
  const frIds = projectTranslations.fr.map((project) => project.id);
  assert.deepEqual(frIds, enIds);
  assert.ok(enIds.length >= 6);
});

test("nested translation lookup works", () => {
  assert.equal(getNestedValue(translations.en, "nav.projects"), "Projects");
  assert.equal(getNestedValue(translations.fr, "nav.projects"), "Projets");
});

test("language fallback stays deterministic", () => {
  assert.equal(ensureLanguage("fr", ["en", "fr"]), "fr");
  assert.equal(ensureLanguage("de", ["en", "fr"]), "en");
});

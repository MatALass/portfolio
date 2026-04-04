import test from "node:test";
import assert from "node:assert/strict";

import { ACTIVE_WINDOW_MS, formatGithubDate, summarizeGitHubRepos } from "../src/js/utils/github.js";

test("summarizeGitHubRepos returns latest repo and active count", () => {
  const now = new Date("2026-04-04T12:00:00Z").getTime();
  const repos = [
    { name: "older", pushed_at: "2025-01-01T00:00:00Z" },
    { name: "recent", pushed_at: "2026-03-20T00:00:00Z" },
    { name: "latest", pushed_at: "2026-04-01T00:00:00Z" },
  ];

  const summary = summarizeGitHubRepos(repos, now);
  assert.equal(summary.activeCount, 2);
  assert.equal(summary.latestRepoName, "latest");
  assert.equal(summary.latestPushedAt, "2026-04-01T00:00:00Z");
});

test("active window constant stays at 180 days", () => {
  assert.equal(ACTIVE_WINDOW_MS, 180 * 24 * 60 * 60 * 1000);
});

test("formatGithubDate localizes output", () => {
  assert.match(formatGithubDate("2026-04-01T00:00:00Z", "fr"), /2026/);
  assert.match(formatGithubDate("2026-04-01T00:00:00Z", "en"), /2026/);
});

import { GITHUB_USERNAME } from "../data/content.js";
import { formatGithubDate, summarizeGitHubRepos } from "../utils/github.js";

export async function fetchGitHubStats(language, translate) {
  const repoCountEl = document.getElementById("githubRepoCount");
  const activeRepoCountEl = document.getElementById("githubActiveRepoCount");
  const flagshipRepoEl = document.getElementById("githubFlagshipRepo");
  const flagshipMetaEl = document.getElementById("githubFlagshipMeta");
  const latestRepoEl = document.getElementById("githubLatestRepo");
  const latestDateEl = document.getElementById("githubLatestDate");

  repoCountEl.textContent = translate("github.loading");
  activeRepoCountEl.textContent = translate("github.loading");
  flagshipRepoEl.textContent = translate("github.flagshipRepo");
  flagshipMetaEl.textContent = translate("github.flagshipMeta");
  latestRepoEl.textContent = translate("github.loading");
  latestDateEl.textContent = translate("github.latestSubLoading");

  if (!GITHUB_USERNAME || GITHUB_USERNAME === "YOUR_GITHUB_USERNAME") {
    repoCountEl.textContent = translate("github.setUsername");
    activeRepoCountEl.textContent = translate("github.setUsername");
    flagshipRepoEl.textContent = translate("github.flagshipRepo");
    flagshipMetaEl.textContent = translate("github.flagshipMeta");
    latestRepoEl.textContent = translate("github.setUsername");
    latestDateEl.textContent = translate("github.replaceUsername");
    return;
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}`),
      fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?per_page=100&sort=updated`),
    ]);

    if (!userResponse.ok) throw new Error(`GitHub user API returned ${userResponse.status}`);
    if (!reposResponse.ok) throw new Error(`GitHub repos API returned ${reposResponse.status}`);

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    repoCountEl.textContent = String(user.public_repos ?? translate("github.unavailable"));
    flagshipRepoEl.textContent = translate("github.flagshipRepo");
    flagshipMetaEl.textContent = translate("github.flagshipMeta");

    if (!Array.isArray(repos) || repos.length === 0) {
      activeRepoCountEl.textContent = "0";
      latestRepoEl.textContent = translate("github.noRepos");
      latestDateEl.textContent = translate("github.nothingFound");
      return;
    }

    const summary = summarizeGitHubRepos(repos);
    activeRepoCountEl.textContent = String(summary.activeCount);
    latestRepoEl.textContent = summary.latestRepoName || translate("github.unavailable");
    latestDateEl.textContent = summary.latestPushedAt
      ? `${translate("github.updatedOn")} ${formatGithubDate(summary.latestPushedAt, language)}`
      : translate("github.unknownDate");
  } catch (error) {
    repoCountEl.textContent = translate("github.unavailable");
    activeRepoCountEl.textContent = translate("github.unavailable");
    flagshipRepoEl.textContent = translate("github.flagshipRepo");
    flagshipMetaEl.textContent = translate("github.flagshipMeta");
    latestRepoEl.textContent = translate("github.unavailable");
    latestDateEl.textContent = translate("github.nothingFound");
    console.error("GitHub stats error:", error);
  }
}

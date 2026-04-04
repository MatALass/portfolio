export const ACTIVE_WINDOW_MS = 180 * 24 * 60 * 60 * 1000;

export function summarizeGitHubRepos(repos, now = Date.now()) {
  if (!Array.isArray(repos) || repos.length === 0) {
    return { activeCount: 0, latestRepoName: null, latestPushedAt: null };
  }

  const activeCount = repos.filter((repo) => {
    if (!repo?.pushed_at) return false;
    const pushedAt = new Date(repo.pushed_at).getTime();
    return Number.isFinite(pushedAt) && now - pushedAt <= ACTIVE_WINDOW_MS;
  }).length;

  const latestRepo =
    [...repos]
      .filter((repo) => repo?.pushed_at)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))[0] ?? null;

  return {
    activeCount,
    latestRepoName: latestRepo?.name ?? null,
    latestPushedAt: latestRepo?.pushed_at ?? null,
  };
}

export function formatGithubDate(isoDate, language) {
  if (!isoDate) return null;
  const locale = language === 'fr' ? 'fr-FR' : 'en-GB';
  return new Date(isoDate).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

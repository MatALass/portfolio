import {
  FLAGSHIP_META,
  FLAGSHIP_REPO,
  GITHUB_USERNAME,
} from '../data/config.js';
import { formatGithubDate, summarizeGitHubRepos } from '../utils/github.js';

function setGitHubSnapshotState({
  repoCount,
  activeCount,
  latestRepo,
  latestDate,
  flagshipRepo,
  flagshipMeta,
  isError = false,
}) {
  document.getElementById('githubRepoCount').textContent = repoCount;
  document.getElementById('githubActiveRepoCount').textContent = activeCount;
  document.getElementById('githubFlagshipRepo').textContent = flagshipRepo;
  document.getElementById('githubFlagshipMeta').textContent = flagshipMeta;
  document.getElementById('githubLatestRepo').textContent = latestRepo;
  document.getElementById('githubLatestDate').textContent = latestDate;

  const card = document.querySelector('.github-snapshot-card');
  if (card) {
    card.classList.toggle('github-snapshot--error', isError);
  }
}

export async function fetchGitHubStats(language, translate, fetchImpl = fetch) {
  setGitHubSnapshotState({
    repoCount: translate('github.loading'),
    activeCount: translate('github.loading'),
    flagshipRepo: FLAGSHIP_REPO,
    flagshipMeta: FLAGSHIP_META,
    latestRepo: translate('github.loading'),
    latestDate: translate('github.latestSubLoading'),
  });

  if (!GITHUB_USERNAME || GITHUB_USERNAME === 'YOUR_GITHUB_USERNAME') {
    setGitHubSnapshotState({
      repoCount: translate('github.setUsername'),
      activeCount: translate('github.setUsername'),
      flagshipRepo: FLAGSHIP_REPO,
      flagshipMeta: FLAGSHIP_META,
      latestRepo: translate('github.setUsername'),
      latestDate: translate('github.replaceUsername'),
    });
    return;
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetchImpl(
        `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}`,
      ),
      fetchImpl(
        `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?per_page=100&sort=updated`,
      ),
    ]);

    if (!userResponse.ok)
      throw new Error(`GitHub user API returned ${userResponse.status}`);
    if (!reposResponse.ok)
      throw new Error(`GitHub repos API returned ${reposResponse.status}`);

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      setGitHubSnapshotState({
        repoCount: String(user.public_repos ?? translate('github.unavailable')),
        activeCount: '0',
        flagshipRepo: FLAGSHIP_REPO,
        flagshipMeta: FLAGSHIP_META,
        latestRepo: translate('github.noRepos'),
        latestDate: translate('github.nothingFound'),
      });
      return;
    }

    const summary = summarizeGitHubRepos(repos);

    setGitHubSnapshotState({
      repoCount: String(user.public_repos ?? translate('github.unavailable')),
      activeCount: String(summary.activeCount),
      flagshipRepo: FLAGSHIP_REPO,
      flagshipMeta: FLAGSHIP_META,
      latestRepo: summary.latestRepoName || translate('github.unavailable'),
      latestDate: summary.latestPushedAt
        ? `${translate('github.updatedOn')} ${formatGithubDate(summary.latestPushedAt, language)}`
        : translate('github.unknownDate'),
    });
  } catch (error) {
    setGitHubSnapshotState({
      repoCount: translate('github.unavailable'),
      activeCount: translate('github.unavailable'),
      flagshipRepo: FLAGSHIP_REPO,
      flagshipMeta: FLAGSHIP_META,
      latestRepo: translate('github.unavailable'),
      latestDate: translate('github.nothingFound'),
      isError: true,
    });
    console.error('GitHub stats error:', error);
  }
}

import { CV_FILE_PATH, GITHUB_USERNAME } from '../data/config.js';

export function applyRuntimeLinks() {
  const cvTargets = ['hero-cta-cv', 'contact-resume-link'];
  cvTargets.forEach((id) => {
    const element = document.getElementById(id);
    if (element && CV_FILE_PATH) {
      element.href = CV_FILE_PATH;
    }
  });

  const profileLink = document.getElementById('github-profile-link');
  if (profileLink && GITHUB_USERNAME) {
    profileLink.href = `https://github.com/${encodeURIComponent(GITHUB_USERNAME)}`;
  }
}

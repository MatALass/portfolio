/**
 * projects/index.js
 * Aggregates all project definitions and re-exports them in the same shape
 * as the original projects.js — one object per language containing an array
 * of projects in display order.
 *
 * To add a project: create a new file in this directory, import it here,
 * and add it to the ordered arrays below.
 */

import { githubPortfolioAuditor } from './github-portfolio-auditor.js';
import { datavizDashboard } from './dataviz-dashboard.js';
import { schoolBusDashboard } from './school-bus-dashboard.js';
import { anssiVulnerabilityIntelligence } from './anssi-vulnerability-intelligence.js';
import { footpredict } from './footpredict.js';
import { automataToolkit } from './automata-toolkit.js';

const PROJECT_MODULES = [
  githubPortfolioAuditor,
  datavizDashboard,
  schoolBusDashboard,
  anssiVulnerabilityIntelligence,
  footpredict,
  automataToolkit,
];

export const projectTranslations = {
  en: PROJECT_MODULES.map((p) => p.en),
  fr: PROJECT_MODULES.map((p) => p.fr),
};

const REQUIRED_PROJECT_FIELDS = [
  'id',
  'title',
  'badge',
  'category',
  'shortPitch',
  'shortDescription',
  'status',
  'focus',
  'stack',
  'tags',
  'quote',
  'summary',
  'context',
  'architecture',
  'decisions',
  'proof',
  'meta',
  'links',
];

export function validateProjectShape(project, language) {
  const errors = [];

  for (const field of REQUIRED_PROJECT_FIELDS) {
    if (!(field in project)) {
      errors.push(
        `[${language}] project "${project?.id ?? 'unknown'}" is missing field "${field}"`,
      );
    }
  }

  if (!Array.isArray(project?.tags) || project.tags.length === 0) {
    errors.push(
      `[${language}] project "${project?.id ?? 'unknown'}" must expose at least one tag`,
    );
  }

  if (!Array.isArray(project?.decisions) || project.decisions.length < 2) {
    errors.push(
      `[${language}] project "${project?.id ?? 'unknown'}" should expose at least two decisions`,
    );
  }

  if (!Array.isArray(project?.proof) || project.proof.length < 2) {
    errors.push(
      `[${language}] project "${project?.id ?? 'unknown'}" should expose at least two proof points`,
    );
  }

  if (!Array.isArray(project?.meta) || project.meta.length < 2) {
    errors.push(
      `[${language}] project "${project?.id ?? 'unknown'}" should expose project meta pairs`,
    );
  }

  if (!Array.isArray(project?.links) || project.links.length === 0) {
    errors.push(
      `[${language}] project "${project?.id ?? 'unknown'}" should expose at least one external link`,
    );
  }

  return errors;
}

export function validateProjectTranslations(projectTranslations) {
  const languages = Object.keys(projectTranslations);
  const errors = [];

  if (languages.length === 0) {
    return ['No project translations were provided'];
  }

  const [referenceLanguage, ...otherLanguages] = languages;
  const referenceIds = projectTranslations[referenceLanguage].map(
    (project) => project.id,
  );

  for (const language of languages) {
    const projects = projectTranslations[language];
    const ids = projects.map((project) => project.id);

    if (new Set(ids).size !== ids.length) {
      errors.push(`[${language}] contains duplicated project ids`);
    }

    for (const project of projects) {
      errors.push(...validateProjectShape(project, language));
    }
  }

  for (const language of otherLanguages) {
    const ids = projectTranslations[language].map((project) => project.id);
    if (JSON.stringify(ids) !== JSON.stringify(referenceIds)) {
      errors.push(
        `[${language}] project ids do not match the ${referenceLanguage} ordering: expected ${referenceIds.join(', ')}`,
      );
    }
  }

  return errors;
}

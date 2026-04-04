export function getNestedValue(object, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], object);
}

export function ensureLanguage(language, supportedLanguages) {
  return supportedLanguages.includes(language)
    ? language
    : supportedLanguages[0];
}

import { generalTranslations } from './general.js';
import { experienceTranslations } from './experience.js';
import { stackTranslations } from './stack.js';
import { aboutTranslations } from './about.js';
import { labTranslations } from './lab.js';
import { projectTranslations } from './projects/index.js';

export { projectTranslations };

export const translations = Object.fromEntries(
  Object.keys(generalTranslations).map((language) => [
    language,
    {
      ...generalTranslations[language],
      experience: experienceTranslations[language],
      stack: stackTranslations[language],
      about: aboutTranslations[language],
      lab: labTranslations[language],
    },
  ]),
);

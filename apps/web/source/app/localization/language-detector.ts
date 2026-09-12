import type { DetectorOptions } from 'i18next-browser-languagedetector'

const languageStorageKey = 'tanda.language'

export const languageDetectionOptions = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
  lookupLocalStorage: languageStorageKey,
} satisfies DetectorOptions

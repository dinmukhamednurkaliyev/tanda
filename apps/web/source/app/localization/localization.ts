import localization from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { namespaces, resources } from './resources'

export const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
] as const

function syncDocumentLanguage() {
  const language = localization.resolvedLanguage ?? 'ru'
  document.documentElement.lang = language
  document.documentElement.dir = localization.dir(language)
}

localization.on('languageChanged', syncDocumentLanguage)

export const initializeLocalization = localization
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: languages.map(({ code }) => code),
    fallbackLng: 'ru',
    load: 'languageOnly',
    defaultNS: 'common',
    ns: [...namespaces],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'tanda.language',
    },
    interpolation: { escapeValue: false },
  })
  .then(syncDocumentLanguage)

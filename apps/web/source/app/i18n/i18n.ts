import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { en } from './locales/en'
import { ru } from './locales/ru'

export const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
] as const

export const resources = { ru, en }

function syncDocumentLanguage() {
  const language = i18n.resolvedLanguage ?? 'ru'
  document.documentElement.lang = language
  document.documentElement.dir = i18n.dir(language)
}

i18n.on('languageChanged', syncDocumentLanguage)

export const initializeInternationalization = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: languages.map(({ code }) => code),
    fallbackLng: 'ru',
    load: 'languageOnly',
    defaultNS: 'common',
    ns: ['common', 'home'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'tanda.language',
    },
    interpolation: { escapeValue: false },
  })
  .then(syncDocumentLanguage)

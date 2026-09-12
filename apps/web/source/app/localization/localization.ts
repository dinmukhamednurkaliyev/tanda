import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { languageDetectionOptions } from './language-detector'
import { availableLanguages, namespaces, resources, type Language } from './resources'

const fallbackLanguage: Language = 'ru'

function syncDocumentLanguage(language: string): void {
  document.documentElement.lang = language
  document.documentElement.dir = i18next.dir(language)
}

export const localization = i18next

export async function initializeLocalization(): Promise<void> {
  localization.on('languageChanged', syncDocumentLanguage)

  await localization
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: availableLanguages.map(({ code }) => code),
      fallbackLng: fallbackLanguage,
      load: 'languageOnly',
      defaultNS: 'common',
      ns: [...namespaces],
      detection: languageDetectionOptions,

      interpolation: {
        escapeValue: false,
      },
    })

  syncDocumentLanguage(localization.resolvedLanguage ?? fallbackLanguage)
}

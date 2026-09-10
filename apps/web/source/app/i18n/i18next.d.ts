import 'i18next'
import type { ru } from './locales/ru'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: typeof ru
    strictKeyChecks: true
  }
}

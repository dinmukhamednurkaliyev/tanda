import { useTranslation } from 'react-i18next'

import { languages } from '@/app/i18n/i18n'

export function LanguageSelect() {
  const { t, i18n } = useTranslation('common')

  return (
    <label className="flex items-center gap-2 text-label text-on-surface-secondary">
      <span>{t('language')}</span>
      <select
        className="min-h-control-small rounded-control border border-border-interactive bg-surface px-3 text-on-surface"
        value={i18n.resolvedLanguage ?? 'ru'}
        onChange={(event) => void i18n.changeLanguage(event.target.value)}
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} lang={code}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSelect } from '@/app/components/language-select/LanguageSelect'

import { Button } from '@/app/components/button/Button'

function HomePage() {
  const { t } = useTranslation(['home', 'common'])
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <main
      data-theme={theme}
      className="min-h-screen bg-background-primary px-4 py-8 text-on-background sm:px-8 sm:py-12"
    >
      <div className="mx-auto max-w-content space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border-primary pb-6">
          <span className="text-title">
            Tanda<span className="text-primary">.</span>
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <LanguageSelect />
            <Button
              variant="outline"
              size="small"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {t(theme === 'light' ? 'common:darkTheme' : 'common:lightTheme')}
            </Button>
          </div>
        </header>

        <section className="rounded-dialog bg-primary-container p-6 text-on-primary-container sm:p-10">
          <p className="mb-4 text-label">{t('eyebrow')}</p>
          <h1 className="max-w-reading text-display">{t('title')}</h1>
          <p className="mt-5 max-w-reading text-body">{t('description')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>{t('start')}</Button>
            <Button variant="secondary">{t('learnMore')}</Button>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="space-y-6 rounded-card border border-border-primary bg-surface p-6 text-on-surface">
            <div>
              <h2 className="text-title">{t('solutionsTitle')}</h2>
              <p className="mt-2 text-body text-on-surface-secondary">
                {t('solutionsDescription')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>{t('common:continue')}</Button>
              <Button variant="outline">{t('details')}</Button>
              <Button variant="ghost">{t('later')}</Button>
              <Button variant="danger">{t('common:delete')}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-border-secondary pt-6">
              <Button size="small">{t('small')}</Button>
              <Button size="medium">{t('medium')}</Button>
              <Button size="large">{t('large')}</Button>
            </div>
          </section>

          <section className="space-y-6 rounded-card border border-border-primary bg-surface p-6 text-on-surface">
            <div>
              <h2 className="text-title">{t('organizeTitle')}</h2>
              <p className="mt-2 text-body text-on-surface-secondary">{t('organizeDescription')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button disabled>{t('common:unavailable')}</Button>
              <Button loading>{t('common:saving')}</Button>
            </div>
            <div className="rounded-control bg-surface-container p-4 text-body text-on-surface-secondary">
              {t('placeholder')}
            </div>
          </section>
        </div>

        <section
          aria-label={t('notificationsLabel')}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <p className="rounded-control bg-success-container p-4 text-label text-on-success-container">
            {t('success')}
          </p>
          <p className="rounded-control bg-warning-container p-4 text-label text-on-warning-container">
            {t('warning')}
          </p>
          <p className="rounded-control bg-error-container p-4 text-label text-on-error-container">
            {t('error')}
          </p>
          <p className="rounded-control bg-information-container p-4 text-label text-on-information-container">
            {t('information')}
          </p>
        </section>
        <footer className="text-caption text-on-surface-muted">
          Tanda · {t('common:preview')}
        </footer>
      </div>
    </main>
  )
}

export default HomePage

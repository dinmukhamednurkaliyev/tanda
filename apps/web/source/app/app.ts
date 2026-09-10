import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app/App'
import { initializeInternationalization } from '@/app/i18n/i18n'
import '@/app/app.css'

await initializeInternationalization

createRoot(document.getElementById('root')!).render(
  createElement(StrictMode, null, createElement(App)),
)

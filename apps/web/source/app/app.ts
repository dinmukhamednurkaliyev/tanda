import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app/App'
import { initializeLocalization } from '@/app/localization/localization'
import '@/app/app.css'

await initializeLocalization()

createRoot(document.getElementById('root')!).render(
  createElement(StrictMode, null, createElement(App)),
)

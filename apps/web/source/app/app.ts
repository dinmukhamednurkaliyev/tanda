import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app/App'
import '@/app/app.css'

createRoot(document.getElementById('root')!).render(
  createElement(StrictMode, null, createElement(App)),
)

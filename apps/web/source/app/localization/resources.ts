import englishCartMessages from './locales/messages/english/cart.json'
import englishCatalogMessages from './locales/messages/english/catalog.json'
import englishCheckoutMessages from './locales/messages/english/checkout.json'
import englishCommonMessages from './locales/messages/english/common.json'
import englishHomeMessages from './locales/messages/english/home.json'
import englishProductMessages from './locales/messages/english/product.json'

import russianCartMessages from './locales/messages/russian/cart.json'
import russianCatalogMessages from './locales/messages/russian/catalog.json'
import russianCheckoutMessages from './locales/messages/russian/checkout.json'
import russianCommonMessages from './locales/messages/russian/common.json'
import russianHomeMessages from './locales/messages/russian/home.json'
import russianProductMessages from './locales/messages/russian/product.json'

export const availableLanguages = [
  {
    code: 'ru',
    label: 'Русский',
  },
  {
    code: 'en',
    label: 'English',
  },
] as const

export type Language = (typeof availableLanguages)[number]['code']

export const namespaces = ['common', 'home', 'catalog', 'product', 'cart', 'checkout'] as const

const russianMessages = {
  common: russianCommonMessages,
  home: russianHomeMessages,
  catalog: russianCatalogMessages,
  product: russianProductMessages,
  cart: russianCartMessages,
  checkout: russianCheckoutMessages,
}

export type Messages = typeof russianMessages

const englishMessages = {
  common: englishCommonMessages,
  home: englishHomeMessages,
  catalog: englishCatalogMessages,
  product: englishProductMessages,
  cart: englishCartMessages,
  checkout: englishCheckoutMessages,
} satisfies Messages

export const resources = {
  ru: russianMessages,
  en: englishMessages,
} satisfies Record<Language, Messages>

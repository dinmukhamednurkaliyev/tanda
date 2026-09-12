import russianCommon from './locales/messages/russian/common.json'
import russianHome from './locales/messages/russian/home.json'
import russianCatalog from './locales/messages/russian/catalog.json'
import russianProduct from './locales/messages/russian/product.json'
import russianCart from './locales/messages/russian/cart.json'
import russianCheckout from './locales/messages/russian/checkout.json'
import englishCommon from './locales/messages/english/common.json'
import englishHome from './locales/messages/english/home.json'
import englishCatalog from './locales/messages/english/catalog.json'
import englishProduct from './locales/messages/english/product.json'
import englishCart from './locales/messages/english/cart.json'
import englishCheckout from './locales/messages/english/checkout.json'

export const namespaces = ['common', 'home', 'catalog', 'product', 'cart', 'checkout'] as const

const russian = {
  common: russianCommon,
  home: russianHome,
  catalog: russianCatalog,
  product: russianProduct,
  cart: russianCart,
  checkout: russianCheckout,
}

export type Messages = typeof russian

export const resources = {
  ru: russian,
  en: {
    common: englishCommon,
    home: englishHome,
    catalog: englishCatalog,
    product: englishProduct,
    cart: englishCart,
    checkout: englishCheckout,
  } satisfies Messages,
}

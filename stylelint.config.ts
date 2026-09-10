import type { Config } from 'stylelint'

export default {
  extends: ['stylelint-config-standard'],

  ignoreFiles: ['**/dist/**', '**/dist-ssr/**'],
} satisfies Config

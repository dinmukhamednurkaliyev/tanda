import type { Config } from 'stylelint'

export default {
  extends: ['stylelint-config-standard'],

  overrides: [
    {
      files: ['apps/web/**/*.css'],
      extends: ['stylelint-config-tailwindcss'],
      rules: {
        'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*(--[a-z0-9]+(-[a-z0-9]+)*)?$',
        'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['apply'] }],
        'declaration-property-value-no-unknown': [
          true,
          { ignoreProperties: { '/.*/': ['/--(?:alpha|spacing|value|modifier)\\(/'] } },
        ],
        'function-no-unknown': [
          true,
          { ignoreFunctions: ['theme', '--alpha', '--spacing', '--value', '--modifier'] },
        ],
      },
    },
  ],

  ignoreFiles: ['**/dist/**', '**/dist-ssr/**'],
} satisfies Config

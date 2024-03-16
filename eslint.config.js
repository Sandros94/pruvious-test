// eslint.config.js
import { nuxt, stefanobartoletti, tailwind } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  {}, // @antfu/eslint-config options, must always be present as first item even if empty
  nuxt,
  tailwind,
  {
    // ESlint Flat config rule object
    rules: {
      'vue/html-self-closing': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  },
)

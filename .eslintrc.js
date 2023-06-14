module.exports = {
  root: true,
  extends: [
    '@vue/eslint-config-typescript',
    'plugin:vue/vue3-strongly-recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-unused-vars': 'warn',
    'comma-style': ['error', 'last'],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'never',
        math: 'always',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
  },
}

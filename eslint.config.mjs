
import { globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default withVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/no-unused-vars': 'warn',
      'comma-style': ['error', 'last'],
      'vue/operator-linebreak': ['error', 'before'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
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
    }
  }, globalIgnores([
    'node_modules',
    '.nuxt',
    '.output',
    'dist',
  ]))

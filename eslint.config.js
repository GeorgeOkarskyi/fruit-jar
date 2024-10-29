import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {...globals.browser, ...globals.node},
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'prefer-const': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-nested-ternary': 'error',
      'no-dupe-class-members': ['error'],
      'no-undef': ['error'],
      'no-array-constructor': 'off',
      'no-use-before-define': ['error', { functions: false, classes: true }],
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off',
      'no-shadow': ['warn'],
      'no-await-in-loop': 'warn',
      'no-restricted-globals': 'warn',
      'no-plusplus': 'warn',
      'no-param-reassign': 'warn',
      'class-methods-use-this': 'off',
      'no-void': 'warn',
    },
  },
)

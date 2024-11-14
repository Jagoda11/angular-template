import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import angular from '@angular-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angular,
      prettier,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...angular.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  {
    ignores: [
      'dist/',
      'node_modules/',
      'build/',
      '**/*.spec.ts',
      'coverage/',
      'karma.conf.js',
    ],
  },
]

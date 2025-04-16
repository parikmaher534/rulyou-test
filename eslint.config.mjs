import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/eslint.config.mjs'],
  },
  ...compat.extends('airbnb-base', 'airbnb-typescript/base'),
  {
    plugins: {
      perfectionist,
      '@typescript-eslint': typescriptEslintEslintPlugin,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },

    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/indent': 'off',
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],

      'no-console': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-restricted-syntax': 'off',
      'default-case': 'off',
      'no-await-in-loop': 'off',
      'consistent-return': 'off',
      'class-methods-use-this': 'off',
      'object-curly-newline': 'off',
      'no-param-reassign': 'off',
      'max-classes-per-file': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-plusplus': 'off',
      'prettier/prettier': ['error'],
      'linebreak-style': 'off',

      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          newlinesBetween: 'always',
          type: 'alphabetical',

          groups: [
            ['builtin', 'external'],
            'modules-alias',
            'src-alias',
            ['internal', 'parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],

          customGroups: {
            value: {
              'modules-alias': '^@/.*',
              'src-alias': '^~/.+',
            },
          },
        },
      ],

      'perfectionist/sort-exports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          groupKind: 'mixed',
        },
      ],
    },
  },
];

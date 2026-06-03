import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import checkFile from 'eslint-plugin-check-file';

export default [
  {
    ignores: ['node_modules/', 'playwright-report/', 'test-results/', 'blob-report/', 'coverage/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.ts'],
    plugins: {
      'check-file': checkFile,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'class',
          format: ['PascalCase'],
        },
      ],
    },
  },

  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/*.ts': 'KEBAB_CASE',
          'tests/**/*.ts': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },

  {
    files: ['tests/**/*.ts'],
    rules: {
      'playwright/expect-expect': 'error',
      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/prefer-web-first-assertions': 'error',
      'playwright/prefer-to-have-count': 'warn',
      'playwright/prefer-to-have-length': 'warn',
    },
  },
];

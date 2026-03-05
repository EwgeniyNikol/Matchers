import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      globals: {
        ...globals.jest,  // все переменные Jest
        ...globals.node   // все переменные Node.js
      }
    }
  },
  {
    rules: {
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2]
    }
  }
];

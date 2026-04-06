export default [
  // ── Source files ──────────────────────────────────────────────────────────
  {
    files: ['src/**/*.js', 'eslint.config.js', 'vite.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        AbortController: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        IntersectionObserver: 'readonly',
        requestAnimationFrame: 'readonly',
        console: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'always'],
      'no-shadow': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],
      'no-var': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    },
  },

  // ── Test files ────────────────────────────────────────────────────────────
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        global: 'writable',
        console: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'always'],
      'no-shadow': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],
      'no-var': 'error',
      'no-console': 'off',
      'sort-imports': 'off',
    },
  },
];

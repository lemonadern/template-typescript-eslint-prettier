module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    semi: ['off', 'always'],
    'import/order': ['error', {
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
      },
    }],
  },
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react-hooks', 'simple-import-sort', 'import'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],

    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    'react/no-direct-mutation-state': 'error',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/no-useless-path-segments': 'error',
    'import/order': 'off',
    'import/no-duplicates': 'error',

    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'avoid',
        jsxBracketSameLine: false,
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
  },
}

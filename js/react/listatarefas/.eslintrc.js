module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier', 'eslint-plugin-prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "react/jsx-filename-extension": 0,
    'react/react-in-jsx-scope': 'off',
    "react/state-in-constructor": 0
  },
};

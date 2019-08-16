module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    "jest/globals": true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ["jest"],
  rules: {
    'no-console': 'off',
  },
};

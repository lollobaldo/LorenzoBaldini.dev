module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    // "jest/globals": true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // plugins: ["jest"],
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*webpack*.js"]}],
    'no-console': 'off',
  },
};

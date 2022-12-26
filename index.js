const rules = {
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function'],
      unnamedComponents: ['arrow-function'],
    },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': [
    'warn',
    { callbacksLast: true, reservedFirst: true, shorthandLast: true },
  ],
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
};

module.exports = {
  env: { browser: true },
  extends: ['./base.js', 'airbnb', 'airbnb/hooks'],
  parserOptions: { ecmaVersion: 'latest' },
  rules,
  overrides: [
    {
      extends: [
        './base.js',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
      ],
      files: '**/*.ts?(x)',
      rules,
    },
  ],
};
require('@rushstack/eslint-patch/modern-module-resolution');

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
  'react/no-unstable-nested-components': [
    'error', 
    { allowAsProps: true }
  ],
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/no-array-index-key': 'off',
  'react/no-danger': 'off',
  'react/react-in-jsx-scope': 'off',
  'import/extensions': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/prefer-default-export': 'off',
  'no-param-reassign': 'off',
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
      ],
      files: '**/*.ts?(x)',
      rules:{
        ...rules,
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
};
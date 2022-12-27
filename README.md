# eslint-config-skylight
[![](https://img.shields.io/npm/v/eslint-config-skylight)](https://www.npmjs.com/package/eslint-config-skylight)

This package provides an extensible shared config for `eslintrc`.

## Installation
```
# npm
npm i -D eslint-config-skylight

# yarn
yarn add -D eslint-config-skylight
```

## Configuration

### skylight
This entry point enables the linting rules for `react`.

### skylight/base
This entry point enables the linting rules for `node`.

### skylight/prettier
This entry point enables the linting rules for `prettier`.

### skylight/next
This entry point enables the linting rules for `next`.

## Usage

### eslintrc.js

```javascript
module.exports = {
  extends: [
    'skylight',
    'skylight/prettier',
    'skylight/next'
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
};
```
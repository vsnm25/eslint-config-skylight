require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['airbnb-base'],
    parserOptions: { ecamVersion: 'latest' },
    plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
    rules: {
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'sort-keys-fix/sort-keys-fix': 'warn',
        'sort-destructure-keys/sort-destructure-keys': 'warn',
    },
    overrides: [
        {
            extends: ['airbnb-base', 'airbnb-typescript/base'],
            files: '**/*.ts?(x)',
            plugins: ['typescript-sort-keys']
        }
    ]
}
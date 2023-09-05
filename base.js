require('@rushstack/eslint-patch/modern-module-resolution');

const rules = {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'no-console': ['warn', { allow: ['warn', 'info', 'error']}],
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',    
};

module.exports = {
    extends: ['airbnb-base'],
    parserOptions: { ecamVersion: 'latest' },
    plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
    rules,
    overrides: [
        {
            extends: [
                'airbnb-base', 
                'airbnb-typescript/base', 
                'plugin:typescript-sort-keys/recommended'
            ],
            files: '**/*.ts?(x)',
            plugins: ['typescript-sort-keys'],
            rules: {
                ...rules,
                'typescript-sort-keys/interface': 'warn',
                'typescript-sort-keys/string-enum': 'warn',
            },
        }
    ]
}
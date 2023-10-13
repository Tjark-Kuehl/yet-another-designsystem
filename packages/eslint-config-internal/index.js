require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@eslint-config-liebe/base',
    '@eslint-config-liebe/vitest',
    '@eslint-config-liebe/typescript',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@eslint-config-liebe/vue',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:perfectionist/recommended-natural',
  ],
  plugins: [
    'you-dont-need-lodash-underscore',
  ],
  ignorePatterns: ["node_modules/", "dist/", ".turbo/"],
  parserOptions: {
    extraFileExtensions: ['.vue', '.json'],
  },
  rules: {
    // TypeScript specific rule
    '@typescript-eslint/prefer-enum-initializers': 'error',

    // Rule for preventing import of extraneous dependencies, only applies to devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'simple-import-sort/imports': 'off',

    // Rules from 'you-dont-need-lodash-underscore' plugin
    // These rules warn about using certain lodash/underscore functions that can be replaced with native alternatives

    // Warns when using 'isArray' function from lodash/underscore
    'you-dont-need-lodash-underscore/is-array': 'warn',

    // Warns when using 'values' function from lodash/underscore
    'you-dont-need-lodash-underscore/values': 'warn',

    // Warns when using 'keys' function from lodash/underscore
    'you-dont-need-lodash-underscore/keys': 'warn',

    // Warns when using 'omit' function from lodash/underscore
    'you-dont-need-lodash-underscore/omit': 'warn',

    // Warns when using 'castArray' function from lodash/underscore
    'you-dont-need-lodash-underscore/cast-array': 'warn',

    /**
     * Warns when using 'reduce' function from lodash/underscore
     * Considered an easier function to replace, hence an error is thrown to encourage replacement
     */
    'you-dont-need-lodash-underscore/reduce': 'warn',

    /**
     * Warns when using 'filter' function from lodash/underscore
     * Considered an easier function to replace, hence an error is thrown to encourage replacement
     */
    'you-dont-need-lodash-underscore/filter': 'warn',

    /**
     * Warns when using 'each' function from lodash/underscore
     * Considered an easier function to replace, hence an error is thrown to encourage replacement
     */
    'you-dont-need-lodash-underscore/each': 'warn',

    /**
     * Warns when using 'uniq' function from lodash/underscore
     * Considered an easier function to replace, hence an error is thrown to encourage replacement
     */
    'you-dont-need-lodash-underscore/uniq': 'warn',
  },
};
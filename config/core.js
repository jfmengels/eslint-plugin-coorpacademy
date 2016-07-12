'use strict';

module.exports = {
    parserOptions: {
        sourceType: 'module'
    },
    plugins: [
        'promise'
    ],
    rules: {
        'promise/always-return': 'error',
        'promise/always-catch': 'off',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'error',
        'promise/param-names': 'error',

        'accessor-pairs': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'off',
        'brace-style': 'off',
        'callback-return': ['error', ['callback', 'cb', 'next']],
        'camelcase': 'off',
        'class-methods-use-this': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'complexity': ['off', 11],
        'computed-property-spacing': ['error', 'never'],
        'consistent-return': 'off',
        'consistent-this': 'off',
        'constructor-super': 'error',
        'curly': 'off',
        'default-case': 'off',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': ['error', 'never'],
        'func-names': 'off',
        'func-style': 'off',
        'generator-star-spacing': 'off',
        'global-require': 'off',
        'guard-for-in': 'error',
        'handle-callback-err': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': ['error', 2, { 'SwitchCase': 1 }],
        'init-declarations': 'off',
        'jsx-quotes': 'off',
        'key-spacing': 'error',
        'keyword-spacing': ['error', {
            'overrides': {
                'catch': { 'after': true },
                'do': { 'after': true },
                'else': { 'after': true },
                'for': { 'after': true },
                'if': { 'after': true },
                'switch': { 'after': true },
                'try': { 'after': true },
                'while': { 'after': true },
                'default': { 'after': false }
            }
        }],
        'linebreak-style': 'error',
        'lines-around-comment': 'off',
        'max-depth': ['error', 4],
        'max-len': ['error', 120],
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements-per-line': ['error', { 'max': 1 }],
        'max-statements': 'off',
        'multiline-ternary': 'off',
        'new-cap': 'off',
        'new-parens': 'off',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'off',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-catch-shadow': 'off',
        'no-class-assign': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-continue': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'off',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'off',
        'no-empty-character-class': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-empty': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'off',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'off',
        'no-label-var': 'off',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'error',
        'no-mixed-requires': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {'max': 1}],
        'no-native-reassign': 'error',
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'error',
        'no-nested-ternary': 'error',
        'no-new-func': 'off',
        'no-new-object': 'off',
        'no-new-require': 'off',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-obj-calls': 'error',
        'no-octal-escape': 'off',
        'no-octal': 'error',
        'no-param-reassign': 'error',
        'no-path-concat': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-proto': 'off',
        'no-prototype-builtins': 'off',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': ['error', {builtinGlobals: true, hoist: 'all'}],
        'no-spaced-func': 'error',
        'no-sparse-arrays': 'error',
        'no-sync': 'off',
        'no-tabs': 'off',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'off',
        'no-undef': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'off',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'error',
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'off',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-var': 'off',
        'no-void': 'error',
        'no-warning-comments': 'warn',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'object-shorthand': 'off',
        'one-var-declaration-per-line': 'off',
        'one-var': 'off',
        'operator-assignment': 'off',
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'prefer-arrow-callback': 'off',
        'prefer-const': 'off',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'prefer-template': 'off',
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single', 'avoid-escape'],
        'radix': 'off',
        'require-jsdoc': 'off',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        'semi-spacing': 'error',
        'semi': ['error', 'always'],
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', { 'words': false, 'nonwords': false }],
        'spaced-comment': ['error', 'always'],
        'strict': ['error', 'global'],
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'],
        'unicode-bom': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'any'],
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',
        'yoda': ['error', 'never', { 'exceptRange': true }],
    }
};

'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['fp', 'import', 'json', 'promise', 'unicorn'],
  rules: {
    'fp/no-arguments': 'off',
    'fp/no-class': 'error',
    'fp/no-delete': 'off',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'off',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'off',
    'fp/no-mutating-methods': 'off',
    'fp/no-mutation': 'off',
    'fp/no-nil': 'off',
    'fp/no-proxy': 'error',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'off',
    'fp/no-throw': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-valueof-field': 'error',

    'promise/always-catch': 'off',
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'off',
    'promise/no-native': 'error',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'off',
    'promise/no-return-in-finally': 'off',
    'promise/no-return-wrap': 'off',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/valid-params': 'error',

    '@coorpacademy/coorpacademy/no-async-callback': 'error',
    '@coorpacademy/coorpacademy/no-dangerous-logs': 'error',
    '@coorpacademy/coorpacademy/no-overwriting-spread': 'error',

    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': 'error',
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'error',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: true,
        allowObject: true
      }
    ],
    'import/no-commonjs': 'off',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['error', {'newlines-between': 'ignore'}],
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'off',

    'unicorn/catch-error-name': 'off',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': ['error', {case: 'kebabCase'}],
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',

    'accessor-pairs': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'off',
    'brace-style': 'off',
    'callback-return': ['error', ['callback', 'cb', 'next']],
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    complexity: ['off', 11],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'constructor-super': 'error',
    curly: 'off',
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'global-require': 'off',
    'getter-return': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent-legacy': 'off',
    indent: ['error', 2, {SwitchCase: 1}],
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        overrides: {
          catch: {after: true},
          do: {after: true},
          else: {after: true},
          for: {after: true},
          if: {after: true},
          switch: {after: true},
          try: {after: true},
          while: {after: true},
          default: {after: false}
        }
      }
    ],
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', {before: 'never', after: 'always'}],
    'lines-between-class-members': 'error',
    'max-depth': ['error', 4],
    'max-len': ['error', 120],
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements-per-line': ['error', {max: 1}],
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'off',
    'new-parens': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
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
    'no-duplicate-imports': 'off',
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
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
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
    'no-restricted-properties': [
      'error',
      {
        object: 'Promise',
        property: 'longStackTraces'
      }
    ],
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: ['Promise', 'name', 'find']
      }
    ],
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
    'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'off',
    'no-var': 'off',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'object-shorthand': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', 'avoid-escape'],
    radix: 'off',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    semi: ['error', 'always'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {words: false, nonwords: false}],
    'spaced-comment': ['error', 'always'],
    strict: ['error', 'global'],
    'switch-colon-spacing': ['error', {after: true, before: false}],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    yoda: ['error', 'never', {exceptRange: true}]
  },
  settings: {
    'import/ignore': ['node_modules', '\\.css$']
  }
};

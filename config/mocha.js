'use strict';

module.exports = {
    env: {
        mocha: true
    },
    plugins: [
        'mocha'
    ],
    rules: {
        'mocha/handle-done-callback': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-hooks': 'off',
        "mocha/no-hooks-for-single-case": ["error", {"allow": ["after"]}],
        'mocha/no-identical-title': 'error',
        'mocha/no-mocha-arrows': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-synchronous-tests': 'off',
        'mocha/no-top-level-hooks': 'error',
        'mocha/valid-suite-description': 'off',
        'mocha/valid-test-description': 'off'
    }
};

const fs = require('fs');
const path = require('path');

const typescriptConfig = fs.existsSync('tsconfig.json') ? path.resolve('tsconfig.json') : undefined;
//test
console.log('hi');
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module', // Don't know if this is going to mess things up later - but this removes the use-strict error in this package
  },
  extends: ['prettier'],
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    camelcase: 'error',
    'capitalized-comments': ['error', 'always', { ignoreConsecutiveComments: true }],
    'class-methods-use-this': 'off',
    complexity: ['error', 10],
    'consistent-return': 'error',
    'consistent-this': 'off',
    'constructor-super': 'error',
    curly: ['error', 'multi', 'consistent'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'getter-return': ['error', { allowImplicit: false }], // I hate implicit returns
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'id-denylist': 'off', // Sometimes generics are okay, but naming stuff is important
    'id-length': 'off', // Sometimes single character names are okay, but naming stuff is important
    'id-match': 'off', // Naming things is hard, but can't be solved with this
    'init-declarations': 'off', // This is sometimes necessary
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'logical-assignment-operators': 'warn',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 3],
    'max-lines': ['error', { max: 300, skipBlankLines: false, skipComments: false }],
    'max-lines-per-function': 'off', // This should be handled in review
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 5],
    'max-statements': 'off', // This should be handled in review
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'off', // Sometimes it makes sense to do starred block, and sometimes with //s
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-confusing-arrow': 'error',
    'no-cond-assign': ['error', 'always'], // Set to always until I run into a problem and then reevaluate
    'no-console': 'warn', // This is tough - do not want console in browser, but okay with it in Node. Set to warn to try and get best of both worlds
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'warn', // Going to set this to warn to figure out why this is a bad idea to enable
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error', // Might regret this at some point, but it seems unreadable so error
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error', // Sometimes you want to do it (maybe for testing/mocking), but can disable this rule for those cases
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error', // I don't use labels, but might be something interesting in the future, so keeping at warn
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off', // Sometimes this is ok
    'no-misleading-character-class': 'off', // I can't imagine this ever coming up - regex for emojis is...weird.
    'no-mixed-operators': 'warn', // Setting this to warn, as I'm not sure when I run into this but am curious
    'no-multi-assign': 'error', // Bad readability
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error', // Might regret this one
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'off', // This is a duplicate of no-new-native-nonconstructor
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off', // I don't foresee that I will use any object that shadows the prototype method - might regret this later
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off', // Not applicable for this config
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-imports': 'off', // Not applicable for this config
    'no-restricted-properties': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off', // This is taken care of by no-shadow-restricted-names
    'no-underscore-dangle': 'error', // Prefer correct js private key
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'warn', // Want to see this rule in action before I make a decision
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'off', // Already taken care of
    'object-shorthand': 'warn', // I think I want this off, but warning to verify
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }], // I don't really understand this one, maybe because it's 3 am
    'operator-assignment': 'off', // Readability on a case-by-case basis
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
    'prefer-const': 'error',
    'prefer-destructuring': 'off', // I like it for objects, but nor for arrays
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-atomic-updates': 'off',
    'require-await': 'warn', // Not sure about this one - setting to warn to see if I run into issues
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'error', // Might hate this, but going to see
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': ['warn', 'always', { markers: ['/'] }], // Might hate this, but going to see
    strict: 'error',
    'symbol-description': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    'array-bracket-newline': ['warn', 'consistent'], // I'm not sure about this
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['warn', 'consistent'], // I'm not sure about this
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'off', // This is too much to take a look right now
    'comma-dangle': ['error', 'always-multiline'], // I think I want always, but maybe it should be only
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'dot-location': ['error', 'property'],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: typescriptConfig,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
    },
  ],
};

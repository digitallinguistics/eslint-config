import stylistic from '@stylistic/eslint-plugin-js'

// ESLint v1.7.2
export default {
  plugins: {
    '@stylistic/js': stylistic,
  },
  rules: {
    '@stylistic/js/function-call-spacing': `error`,
    'array-bracket-newline':               [`error`, `consistent`],
    'array-element-newline':               [`error`, `consistent`],
    'arrow-parens':                        [`error`, `as-needed`],
    'comma-dangle':                        [`error`, `always-multiline`],
    'dot-location':                        [`error`, `property`],
    'function-call-argument-newline':      [`error`, `consistent`],
    'function-paren-newline':              `error`,
    'generator-star-spacing':              `error`,
    'implicit-arrow-linebreak':            `error`,
    'indent':                              [`error`, 2],
    'key-spacing':                         [`error`, {
      align: `value`,
      mode:   `minimum`,
    }],
    quotes:         [`error`, `backtick`],
    'semi-spacing': `error`,
    'semi-style':   `error`,
  },
}

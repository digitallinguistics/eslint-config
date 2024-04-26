// ESLint v8.48.0
export default [
  {
    rules: {
      'object-curly-spacing': [
        `error`,
        `always`,
        {
          objectsInObjects: true,
        },
      ],
      'object-property-newline': [
        `warn`,
        {
          allowMultiplePropertiesPerLine: true,
        },
      ],
      'operator-linebreak': [
        `error`,
        `before`,
        {
          overrides: {
            ':': `ignore`,
            '?': `ignore`,
          },
        },
      ],
      'require-atomic-updates':      `warn`,
      'rest-spread-spacing':         `error`,
      'space-before-blocks':         `error`,
      'space-before-function-paren': [
        `error`,
        {
          anonymous: `never`,
          named:     `never`,
        },
      ],
      'space-in-parens': `error`,
      'space-infix-ops': `error`,
      'space-unary-ops': `error`,
      'spaced-comment':  [
        `error`,
        `always`,
        {
          markers: [`*`],
        },
      ],
      'switch-colon-spacing':   `error`,
      'template-curly-spacing': [
        `warn`,
        `always`,
      ],
      'template-tag-spacing': `error`,
      'yield-star-spacing':   `error`,
    },
  },
]

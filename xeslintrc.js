// ESLint v8.48.0
export default [
  {
    rules: {
      "comma-dangle": [
      `error`,
      `always-multiline`,
      ],
      "comma-spacing": `error`,
      "comma-style": `error`,
      "computed-property-spacing": `error`,
      "dot-location": [
      `error`,
      `property`,
      ],
      "eol-last": `warn`,
      "func-call-spacing": `error`,
      "function-paren-newline": `error`,
      "generator-star-spacing": `error`,
      "implicit-arrow-linebreak": `error`,
      "key-spacing": [
      `error`,
      {
        align: `value`,
        mode: `minimum`,
      },
      ],
      "keyword-spacing": `error`,
      "lines-around-comment": `off`,
      "lines-between-class-members": `warn`,
      "max-len": [
      `warn`,
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
      },
      ],
      "max-statements-per-line": [
      `warn`,
      {
        max: 2,
      },
      ],
      "newline-per-chained-call": [
      `warn`,
      { ignoreChainWithDepth: 3 },
      ],
      "no-confusing-arrow": `warn`,
      "no-duplicate-imports": [
      `warn`,
      {
        includeExports: true,
      },
      ],
      "no-extra-parens": [`warn`, `all`, { ternaryOperandBinaryExpressions: false }],
      "no-floating-decimal": `error`,
      "no-mixed-operators": `warn`,
      "no-multi-spaces": [
      `error`,
      {
        exceptions: {
          AssignmentExpression: true,
          AssignmentPattern: true,
          IfStatement: true,
          ImportDeclaration: true,
          ImportSpecifier: true,
          SwitchCase: true,
          VariableDeclaration: true,
          VariableDeclarator: true,
        },
        ignoreEOLComments: true,
      },
      ],
      "no-multiple-empty-lines": `warn`,
      "no-new-object": `warn`,
      "no-return-await": `warn`,
      "no-tabs": `warn`,
      "no-trailing-spaces": `off`,
      "no-whitespace-before-property": `error`,
      "nonblock-statement-body-position": `error`,
      "object-curly-newline": [
      `warn`,
      {
        ObjectExpression: {
          consistent: true,
          minProperties: 4,
        },
        ObjectPattern: {
          multiline: true,
        },
      },
      ],
      "object-curly-spacing": [
      `error`,
      `always`,
      {
        objectsInObjects: true,
      },
      ],
      "object-property-newline": [
      `warn`,
      {
        allowMultiplePropertiesPerLine: true,
      },
      ],
      "operator-linebreak": [
      `error`,
      `before`,
      {
        overrides: {
          ":": `ignore`,
          "?": `ignore`,
        },
      },
      ],
      "require-atomic-updates": `warn`,
      "rest-spread-spacing": `error`,
      "space-before-blocks": `error`,
      "space-before-function-paren": [
      `error`,
      {
        anonymous: `never`,
        named: `never`,
      },
      ],
      "space-in-parens": `error`,
      "space-infix-ops": `error`,
      "space-unary-ops": `error`,
      "spaced-comment": [
      `error`,
      `always`,
      {
        markers: [`*`],
      },
      ],
      "switch-colon-spacing": `error`,
      "template-curly-spacing": [
      `warn`,
      `always`,
      ],
      "template-tag-spacing": `error`,
      "yield-star-spacing": `error`,
    },
  },
]

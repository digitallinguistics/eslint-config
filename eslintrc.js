import js from '@eslint/js'

// ESLint v8.48.0
export default [
js.configs.recommended,
{
  name: `dlx-config`,
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  rules:                         {
    "array-bracket-newline": [
      `warn`,
      {
        multiline: true,
      },
    ],
    "array-bracket-spacing": `error`,
    "arrow-parens":          [
      `error`,
      `as-needed`,
    ],
    "arrow-spacing":    `error`,
    "block-spacing":    `error`,
    "brace-style":      [
      `warn`,
      `1tbs`,
      {
        allowSingleLine: true,
      },
    ],
    "comma-dangle":           [
      `error`,
      `always-multiline`,
    ],
    "comma-spacing":             `error`,
    "comma-style":               `error`,
    "computed-property-spacing": `error`,
    "dot-location":       [
      `error`,
      `property`,
    ],
    "eol-last":           `warn`,
    "func-call-spacing":  `error`,
    "function-paren-newline": `error`,
    "generator-star-spacing": `error`,
    "implicit-arrow-linebreak": `error`,
    indent:                     [
      `error`,
      2,
      {
        MemberExpression: 0,
        SwitchCase:       2,
      },
    ],
    "key-spacing": [
      `error`,
      {
        align: `value`,
        mode:  `minimum`,
      },
    ],
    "keyword-spacing":              `error`,
    "lines-around-comment":         `off`,
    "lines-between-class-members":  `warn`,
    "max-len":                     [
      `warn`,
      {
        code:           120,
        ignoreComments: true,
        ignoreStrings:  true,
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
    "no-confusing-arrow":   `warn`,
    "no-duplicate-imports":          [
      `warn`,
      {
        includeExports: true,
      },
    ],
    "no-extra-parens":       [`warn`, `all`, { ternaryOperandBinaryExpressions: false }],
    "no-floating-decimal":  `error`,
    "no-mixed-operators": `warn`,
    "no-multi-spaces":    [
      `error`,
      {
        exceptions: {
          AssignmentExpression: true,
          AssignmentPattern:    true,
          IfStatement:          true,
          ImportDeclaration:    true,
          ImportSpecifier:      true,
          SwitchCase:           true,
          VariableDeclaration:  true,
          VariableDeclarator:   true,
        },
        ignoreEOLComments: true,
      },
    ],
    "no-multiple-empty-lines":      `warn`,
    "no-new-object":                `warn`,
    "no-return-await": `warn`,
    "no-tabs":                     `warn`,
    "no-trailing-spaces":          `off`,
    "no-unneeded-ternary":          [
      `error`,
      {
        defaultAssignment: false,
      },
    ],
    "no-unused-expressions":           `error`,
    "no-useless-call":                  `error`,
    "no-useless-computed-key":          `warn`,
    "no-useless-concat":                `warn`,
    "no-useless-constructor":           `warn`,
    "no-useless-rename":                `warn`,
    "no-useless-return":                `warn`,
    "no-var":                           `warn`,
    "no-warning-comments":              `warn`,
    "no-whitespace-before-property":    `error`,
    "nonblock-statement-body-position": `error`,
    "object-curly-newline":             [
      `warn`,
      {
        ObjectExpression: {
          consistent:    true,
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
    "object-shorthand": `warn`,
    "one-var":          [
      `error`,
      `never`,
    ],
    "operator-assignment": `error`,
    "operator-linebreak":  [
      `error`,
      `before`,
      {
        overrides: {
          ":": `ignore`,
          "?": `ignore`,
        },
      },
    ],
    "prefer-arrow-callback": [
      `error`,
      {
        allowNamedFunctions: true,
      },
    ],
    "prefer-const":                   `error`,
    "prefer-destructuring":           `warn`,
    "prefer-exponentiation-operator": `warn`,
    "prefer-named-capture-group":     `warn`,
    "prefer-numeric-literals":        `warn`,
    "prefer-object-has-own":          `warn`,
    "prefer-promise-reject-errors":   `warn`,
    "prefer-rest-params":             `warn`,
    "prefer-spread":                  `warn`,
    "prefer-template":                `warn`,
    "quote-props":                    [
      `warn`,
      `as-needed`,
    ],
    quotes: [
      `error`,
      `backtick`,
      {
        allowTemplateLiterals: true,
        avoidEscape:           true,
      },
    ],
    "require-atomic-updates": `warn`,
    "require-await":          `warn`,
    "require-unicode-regexp": `warn`,
    "rest-spread-spacing":    `error`,
    semi:                     [
      `error`,
      `never`,
    ],
    "semi-spacing": `error`,
    "semi-style":   `error`,
    "sort-imports": [
      `warn`,
      {
        allowSeparatedGroups:  true,
        ignoreCase:            true,
        memberSyntaxSortOrder: [
          `none`,
          `all`,
          `single`,
          `multiple`,
        ],
      },
    ],
    "sort-keys": [
      `warn`,
      `asc`,
      {
        allowLineSeparatedGroups: true,
        caseSensitive:            false,
        natural:                  true,
      },
    ],
    "sort-vars":                   `warn`,
    "space-before-blocks":         `error`,
    "space-before-function-paren": [
      `error`,
      {
        anonymous: `never`,
        named:     `never`,
      },
    ],
    "space-in-parens": `error`,
    "space-infix-ops": `error`,
    "space-unary-ops": `error`,
    "spaced-comment":  [
      `error`,
      `always`,
      {
        markers: [`*`],
      },
    ],
    "switch-colon-spacing":   `error`,
    "symbol-description":     `error`,
    "template-curly-spacing": [
      `warn`,
      `always`,
    ],
    "template-tag-spacing": `error`,
    "unicode-bom":          `error`,
    "vars-on-top":          `warn`,
    "yield-star-spacing":   `error`,
    yoda:                   [
      `warn`,
      `never`,
      {
        exceptRange: true,
      },
    ],
  },
},
{
  name: `dlx-test-overrides`,
  rules: {
      files: [`**/*.test.*`],
      rules: {
        "func-names": `off`,
        "max-nested-callbacks": `off`,
        "max-params": `off`,
        "no-magic-numbers": `off`,
        "no-param-reassign": `off`,
        "prefer-arrow-callback": `off`,
      },
    },
}]
// ESLint v8.32.0
module.exports = {
  env: {
    es2022: true,
  },
  extends:   [`eslint:recommended`],
  overrides: [
    {
      files: [`**/*.test.*`],
      rules: {
        "func-names":            `off`,
        "max-nested-callbacks":  `off`,
        "max-params":            `off`,
        "no-magic-numbers":      `off`,
        "no-param-reassign":     `off`,
        "prefer-arrow-callback": `off`,
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: `latest`,
    sourceType:  `module`,
  },
  reportUnusedDisableDirectives: true,
  rules:                         {
    "accessor-pairs":        `warn`,
    "array-bracket-newline": [
      `warn`,
      {
        multiline: true,
      },
    ],
    "array-bracket-spacing": `error`,
    "array-callback-return": `warn`,
    "arrow-body-style":      `warn`,
    "arrow-parens":          [
      `error`,
      `as-needed`,
    ],
    "arrow-spacing":    `error`,
    "block-scoped-var": `warn`,
    "block-spacing":    `error`,
    "brace-style":      [
      `warn`,
      `1tbs`,
      {
        allowSingleLine: true,
      },
    ],
    camelcase:                `warn`,
    "class-methods-use-this": `off`,
    "comma-dangle":           [
      `error`,
      `always-multiline`,
    ],
    "comma-spacing":             `error`,
    "comma-style":               `error`,
    "computed-property-spacing": `error`,
    curly:                       [
      `error`,
      `multi-line`,
      `consistent`,
    ],
    "default-case":       `warn`,
    "default-case-last":  `warn`,
    "default-param-last": `warn`,
    "dot-location":       [
      `error`,
      `property`,
    ],
    "dot-notation":       `error`,
    "eol-last":           `warn`,
    eqeqeq:               `warn`,
    "func-call-spacing":  `error`,
    "func-name-matching": `error`,
    "func-names":         [
      `warn`,
      `as-needed`,
    ],
    "function-paren-newline": `error`,
    "generator-star-spacing": `error`,
    "grouped-accessor-pairs": [
      `error`,
      `getBeforeSet`,
    ],
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
    "keyword-spacing":             `error`,
    "lines-around-comment":        `off`,
    "lines-between-class-members": `warn`,
    "logical-assignment-operators": [`warn`, `always`, {
      enforceForIfStatements: true,
    }],
    "max-depth":                   `warn`,
    "max-len":                     [
      `warn`,
      {
        code:           120,
        ignoreComments: true,
        ignoreStrings:  true,
      },
    ],
    "max-nested-callbacks": [
      `warn`,
      3,
    ],
    "max-params":              `warn`,
    "max-statements":          `off`,
    "max-statements-per-line": [
      `warn`,
      {
        max: 2,
      },
    ],
    "new-cap":                  `warn`,
    "newline-per-chained-call": [
      `warn`,
      { ignoreChainWithDepth: 3 },
    ],
    "no-alert":             `off`,
    "no-array-constructor": `warn`,
    "no-bitwise":           `warn`,
    "no-caller":            `error`,
    "no-confusing-arrow":   `warn`,
    "no-console":           [
      `warn`,
      {
        allow: [
          `error`,
          `info`,
          `table`,
          `time`,
          `timeEnd`,
          `warn`,
        ],
      },
    ],
    "no-constant-binary-expression": `error`,
    "no-constructor-return":         `warn`,
    "no-duplicate-imports":          [
      `warn`,
      {
        includeExports: true,
      },
    ],
    "no-else-return": `error`,
    "no-empty":       [
      `error`,
      {
        allowEmptyCatch: false,
      },
    ],
    "no-empty-function": `error`,
    "no-empty-static-block": `error`,
    "no-eq-null":        `error`,
    "no-eval":           `warn`,
    "no-extend-native":  `warn`,
    "no-extra-bind":     `warn`,
    "no-extra-label":    `warn`,
    "no-extra-parens":   `warn`,
    "no-fallthrough":    [
      `error`,
      {
        commentPattern: `/falls?\\s?through/i`,
      },
    ],
    "no-floating-decimal":  `error`,
    "no-implicit-coercion": `warn`,
    "no-implicit-globals":  `warn`,
    "no-implied-eval":      `warn`,
    "no-invalid-this":      `warn`,
    "no-iterator":          `error`,
    "no-label-var":         `warn`,
    "no-lone-blocks":       `warn`,
    "no-lonely-if":         `warn`,
    "no-loop-func":         `warn`,
    "no-magic-numbers":     [
      `warn`,
      {
        ignore: [
          -1,
          0,
          1,
          2,
          60,
          200,
          201,
          204,
          207,
          302,
          304,
          400,
          401,
          403,
          404,
          405,
          408,
          409,
          410,
          412,
          413,
          422,
          429,
          449,
          500,
          503,
        ],
        ignoreArrayIndexes:            true,
        ignoreClassFieldInitialValues: true,
        ignoreDefaultValues:           true,
      },
    ],
    "no-mixed-operators": `warn`,
    "no-multi-assign":    `warn`,
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
    "no-multi-str":               `error`,
    "no-multiple-empty-lines":    `warn`,
    "no-negated-condition":       `warn`,
    "no-nested-ternary":          `warn`,
    "no-new":                     `warn`,
    "no-new-func":                `warn`,
    "no-new-native-nonconstructor": `error`,
    "no-new-object":              `warn`,
    "no-new-wrappers":            `warn`,
    "no-octal-escape":            `error`,
    "no-param-reassign":          `warn`,
    "no-promise-executor-return": `warn`,
    "no-proto":                   `error`,
    "no-return-assign":           [
      `warn`,
      `always`,
    ],
    "no-return-await": `warn`,
    "no-script-url":   `warn`,
    "no-self-compare": `error`,
    "no-sequences":    `error`,
    "no-shadow":       [
      `warn`,
      {
        allow: [
          `cb`,
          `done`,
          `err`,
          `error`,
          `ev`,
          `event`,
          `name`,
          `resolve`,
          `reject`,
          `status`,
          `Text`,
        ],
        builtinGlobals: true,
        hoist:          `all`,
      },
    ],
    "no-tabs":                     `warn`,
    "no-template-curly-in-string": `warn`,
    "no-throw-literal":            `error`,
    "no-trailing-spaces":          `off`,
    "no-undef":                    [
      `error`,
      {
        typeof: true,
      },
    ],
    "no-undef-init":        `error`,
    "no-undefined":         `warn`,
    "no-underscore-dangle": [
      `warn`,
      {
        allow: [
          `__dirname`,
          `__filename`,
          `_ts`,
          `_etag`,
        ],
      },
    ],
    "no-unmodified-loop-condition": `warn`,
    "no-unneeded-ternary":          [
      `error`,
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable-loop":             `error`,
    "no-unused-expressions":           `error`,
    "no-unused-private-class-members": `error`,
    "no-use-before-define":            [
      `warn`,
      {
        classes:   false,
        functions: false,
      },
    ],
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
        caseSensitive: false,
        natural:       true,
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
}

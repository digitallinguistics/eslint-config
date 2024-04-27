export default {
  linterOptions: { reportUnusedDisableDirectives: `error` },
  name:          `dlx-config`,
  rules:         {

    // Potential Problems
    'accessor-pairs':        `warn`,
    'array-callback-return': `warn`,
    'consistent-return':     `warn`,
    'default-case':          `warn`,
    'default-case-last':     `warn`,
    'default-param-last':    `warn`,
    eqeqeq:                  `warn`,
    'func-name-matching':    `error`,
    'func-names':            [`warn`, `as-needed`],
    'no-bitwise':            `warn`,
    'no-caller':             `warn`,
    'no-console':            [
      `warn`,
      {
        allow: [
          `error`,
          `info`,
          `warn`,
        ],
      },
    ],
    'no-constructor-return': `warn`,
    'no-duplicate-imports':  `error`,
    'no-empty-function':     `warn`,
    'no-empty-static-block': `warn`,
    'no-eq-null':            `error`,
    'no-eval':               `warn`,
    'no-extend-native':      `warn`,
    'no-extra-bind':         `warn`,
    'no-extra-label':        `warn`,
    'no-implicit-coercion':  `warn`,
    'no-implicit-globals':   `warn`,
    'no-implied-eval':       `warn`,
    'no-invalid-this':       `warn`,
    'no-iterator':           `warn`,
    'no-label-var':          `warn`,
    'no-lone-blocks':        `warn`,
    'no-lonely-if':          `warn`,
    'no-loop-func':          `warn`,
    'no-multi-assign':       `warn`,
    'no-new':                `warn`,
    'no-new-func':           `warn`,
    'no-new-wrappers':       `warn`,
    'no-octal-escape':       `error`,
    'no-param-reassign':     `warn`,
    'no-proto':              `error`,
    'no-script-url':         `warn`,
    'no-self-compare':       `error`,
    'no-shadow':             [
      `warn`,
      {
        allow: [
          `cb`,
          `done`,
          `err`,
          `error`,
          `ev`,
          `event`,
          `resolve`,
          `reject`,
        ],
        builtinGlobals: true,
        hoist:          `all`,
      },
    ],
    'no-template-curly-in-string':  `warn`,
    'no-throw-literal':             `error`,
    'no-unmodified-loop-condition': `warn`,
    'no-unneeded-ternary':          `error`,
    'no-unreachable-loop':          `error`,
    'no-unused-expressions':        `error`,
    'no-use-before-define':         `warn`,
    'no-useless-assignment':        `warn`,
    'no-useless-call':              `error`,
    'no-useless-computed-key':      `error`,
    'no-useless-concat':            `warn`,
    'no-useless-constructor':       `warn`,
    'no-useless-rename':            `error`,
    'no-useless-return':            `error`,
    'prefer-const':                 `error`,
    'prefer-promise-reject-errors': `error`,
    'require-atomic-updates':       `warn`,
    'require-await':                `error`,
    'require-unicode-regexp':       `warn`,
    'symbol-description':           `error`,
    'unicode-bom':                  `error`,

    // Style
    'arrow-body-style':             `warn`,
    camelcase:                      `warn`,
    curly:                          [`error`, `multi-line`, `consistent`],
    'dot-notation':                 `error`,
    'grouped-accessor-pairs':       [`warn`, `getBeforeSet`],
    'logical-assignment-operators': [`warn`, `always`, { enforceForIfStatements: true }],
    'max-depth':                    `warn`,
    'max-nested-callbacks':         [`warn`, 3],
    'max-params':                   `warn`,
    'new-cap':                      `warn`,
    'no-else-return':               `error`,
    'no-magic-numbers':             [
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
    'no-negated-condition': `warn`,
    'no-nested-ternary':    `warn`,
    'no-return-assign':     [`warn`, `always`],
    'no-sequences':         `error`,
    'no-undef-init':        `error`,
    'no-underscore-dangle': [
      `warn`,
      {
        allow: [
          `__dirname`,
          `__filename`,
        ],
      },
    ],
    'no-void':                        `warn`,
    'no-warning-comments':            `warn`,
    'object-shorthand':               `error`,
    'operator-assignment':            `error`,
    'prefer-arrow-callback':          `error`,
    'prefer-destructuring':           `warn`,
    'prefer-exponentiation-operator': `warn`,
    'prefer-named-capture-group':     `warn`,
    'prefer-numeric-literals':        `warn`,
    'prefer-object-has-own':          `warn`,
    'prefer-spread':                  `warn`,
    'prefer-template':                `warn`,
    'sort-imports':                   [
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
    'sort-keys': [
      `warn`,
      `asc`,
      {
        allowLineSeparatedGroups: true,
        caseSensitive:            false,
        natural:                  true,
      },
    ],
    'sort-vars':   `warn`,
    'vars-on-top': `warn`,
    yoda:          [
      `warn`,
      `never`,
      { exceptRange: true },
    ],

  },
}

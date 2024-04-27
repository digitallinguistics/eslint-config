export default {
  files: [`**/*.test.*`],
  name:  `dlx-test-overrides`,
  rules: {
    'func-names':            `off`,
    'max-nested-callbacks':  `off`,
    'max-params':            `off`,
    'no-magic-numbers':      `off`,
    'no-param-reassign':     `off`,
    'prefer-arrow-callback': `off`,
  },
}

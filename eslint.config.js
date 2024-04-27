import js       from '@eslint/js'
import problems from './problems.js'
import style    from './style.js'
import tests    from './tests.js'

// ESLint v9.1.0
export default [
  js.configs.recommended,
  style,
  problems,
  tests,
]

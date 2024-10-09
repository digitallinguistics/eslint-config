import js       from '@eslint/js'
import problems from './problems.js'
import style    from './style.js'
import tests    from './tests.js'

export default [
  js.configs.recommended,
  style,
  problems,
  tests,
]

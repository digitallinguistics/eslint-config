# eslint-config

ESLint config for Digital Linguistics (DLx) projects

## How to use

1. Install peer dependencies: `npm i -D eslint @eslint/js @stylistic/eslint-plugin-js`.
2. Install the shared DLx config: `npm install -D @digitallinguistics/eslint-config`.
3. Add an `eslint.config.js` file with the following content:

```js
import config from '@digitallinguistics/eslint-config'

export default [...config]
```

Alternatively, you can import just individual portions of the stylesheet:

```js
import problemsConfig from '@digitallinguistics/eslint-config/problems.js'

export default [problemsConfig]
```

## Releases

1. Increment the version number.
2. `npm publish`

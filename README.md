# eslint-config

ESLint config for Digital Linguistics (DLx) projects

## How to use

1. Install ESLint: `npm i -D eslint`.
2. Install: `npm install -D @digitallinguistics/eslint-config`.
3. Add an `eslint.config.js` file with the following content:

```js
import config from '@digitallinguistics/eslint-config'

export default [...config]
```

## Releases

1. Increment the version number.
2. `npm publish`

# tag-clean

Clears all non-true values from template string

## Usage example

1. Importing

in ts:

```ts
import { tls } from 'tag-clean'
```

in js:

```js
const { tls } = require('tag-clean')
```

2. Using

```js
console.log(tls`Something ${someFalseValue && 'Optional Text'}`) // "Something "
console.log(tls`Something ${someTrueValue && 'Optional Text'}`) // "Something Optional Text"
console.log(tls`${null}, ${undefined}, ${false}, ${''}, ${NaN}, ${0}`) // ", , , , , 0"
```

# paused

A very tiny no dependency awaitable timer.

This package is available in ESM and CJS formats

## Installation

```bash
npm i paused
```

## Usage

```js
import { paused } from 'paused';
// OR
const { paused } = require('paused');

async function hello() {
  // with just timeout in ms
  await paused(2000);
  // with timeout and value that is resolved
  const value = await paused(4000, 'world');
  console.log(value); // world
}
```

## License

MIT © [Manan Joshi](https://mananjoshi.me)

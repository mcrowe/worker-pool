# worker-pool

Simple worker pool for typescript and javascript

## Usage

> npm install @mcrowe/worker-pool --save

```js
import WorkerPool from '@mcrowe/worker-pool'

function work() {
  return Promise.resolve()
}

const pool = new WorkerPool(10, 100, work)

pool.start()

//...

pool.stop()
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.

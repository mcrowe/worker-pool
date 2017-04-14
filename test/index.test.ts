import assert = require('assert')
import WorkerPool from '../src'


suite('index', () => {})


test('index', done => {
  let i = 0

  async function work() {
    i += 1
  }

  const pool = new WorkerPool(3, 100, work)

  pool.start()

  setTimeout(() => {
    assert.equal(30, i)
    pool.stop()
    done()
  }, 1000)
})
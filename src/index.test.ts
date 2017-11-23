import test from 'ava'
import WorkerPool from './'


test.cb('basics', t => {
  let i = 0

  async function work() {
    i += 1
  }

  const pool = new WorkerPool(3, 100, work)

  pool.start()

  setTimeout(() => {
    t.is(i, 30)
    pool.stop()
    t.end()
  }, 1000)
})


test.cb('worker id', t => {
  const ids = new Set<number>()

  async function work(id: number) {
    ids.add(id)
  }

  const pool = new WorkerPool(3, 100, work)

  pool.start()

  setTimeout(() => {
    t.true( ids.has(0) )
    t.true( ids.has(1) )
    t.true( ids.has(2) )
    t.false( ids.has(3) )
    pool.stop()
    t.end()
  }, 1000)
})
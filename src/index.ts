export type Promiser = () => Promise<void>


class WorkerPool {

  size: number
  delay: number
  fn: Promiser
  isRunning: boolean

  constructor(size: number, delay: number, fn: Promiser) {
    this.size = size
    this.delay = delay
    this.fn = fn
    this.isRunning = false
  }

  start() {
    this.isRunning = true

    for (let i = 0; i < this.size; i++) {
      this.work()
    }
  }

  stop() {
    this.isRunning = false
  }

  private async work() {
    if (!this.isRunning) {
      return
    }
    try {
      await this.fn()
    } catch (e) {
      console.error('Error working', e)
    }

    setTimeout(() => this.work(), this.delay)
  }

}


export default WorkerPool
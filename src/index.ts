export interface IHandler {
  (id?: number): Promise<void>
}


class WorkerPool {

  size: number
  delay: number
  fn: IHandler
  isRunning: boolean

  constructor(size: number, delay: number, fn: IHandler) {
    this.size = size
    this.delay = delay
    this.fn = fn
    this.isRunning = false
  }

  start() {
    this.isRunning = true

    for (let i = 0; i < this.size; i++) {
      this.work(i)
    }
  }

  stop() {
    this.isRunning = false
  }

  private async work(id: number) {
    if (!this.isRunning) {
      return
    }
    try {
      await this.fn(id)
    } catch (e) {
      console.error('Error working', e)
    }

    setTimeout(() => this.work(id), this.delay)
  }

}


export default WorkerPool
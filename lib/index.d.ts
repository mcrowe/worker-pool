export interface IHandler {
    (id?: number): Promise<void>;
}
declare class WorkerPool {
    size: number;
    delay: number;
    fn: IHandler;
    isRunning: boolean;
    constructor(size: number, delay: number, fn: IHandler);
    start(): void;
    stop(): void;
    private work(id);
}
export default WorkerPool;

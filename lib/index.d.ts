export declare type Promiser = () => Promise<void>;
declare class WorkerPool {
    size: number;
    delay: number;
    fn: Promiser;
    isRunning: boolean;
    constructor(size: number, delay: number, fn: Promiser);
    start(): void;
    stop(): void;
    private work();
}
export default WorkerPool;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WorkerPool {
    constructor(size, delay, fn) {
        this.size = size;
        this.delay = delay;
        this.fn = fn;
        this.isRunning = false;
    }
    start() {
        this.isRunning = true;
        for (let i = 0; i < this.size; i++) {
            this.work();
        }
    }
    stop() {
        this.isRunning = false;
    }
    work() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isRunning) {
                return;
            }
            try {
                yield this.fn();
            }
            catch (e) {
                console.error('Error working', e);
            }
            setTimeout(() => this.work(), this.delay);
        });
    }
}
exports.default = WorkerPool;

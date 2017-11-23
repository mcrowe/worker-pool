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
const ava_1 = require("ava");
const _1 = require("./");
ava_1.default.cb('basics', t => {
    let i = 0;
    function work() {
        return __awaiter(this, void 0, void 0, function* () {
            i += 1;
        });
    }
    const pool = new _1.default(3, 100, work);
    pool.start();
    setTimeout(() => {
        t.is(i, 30);
        pool.stop();
        t.end();
    }, 1000);
});
ava_1.default.cb('worker id', t => {
    const ids = new Set();
    function work(id) {
        return __awaiter(this, void 0, void 0, function* () {
            ids.add(id);
        });
    }
    const pool = new _1.default(3, 100, work);
    pool.start();
    setTimeout(() => {
        t.true(ids.has(0));
        t.true(ids.has(1));
        t.true(ids.has(2));
        t.false(ids.has(3));
        pool.stop();
        t.end();
    }, 1000);
});

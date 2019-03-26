"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const process = __importStar(require("process"));
class Args {
    constructor() {
        this.args = null;
        this.map = new Map();
        this.args = [].concat(process.argv).splice(2);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Args();
        }
        return this.instance;
    }
    regArg(name, dealFunc) {
        this.map.set(name, dealFunc);
    }
    run() {
        if (!this.args) {
            throw "No Args!";
        }
        const name = this.args[0];
        const args = [].concat(this.args).splice(1);
        if (!this.map.has(name) || !this.map.get(name)) {
            throw `${name} has not been registered!`;
        }
        const func = this.map.get(name);
        if (func) {
            func(args);
        }
    }
}
Args.instance = null;
exports.Args = Args;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const base_bootstrap_1 = require("./base.bootstrap");
class default_1 extends base_bootstrap_1.Bootstrap {
    constructor(app) {
        super();
        this.app = app;
    }
    initialize() {
        return new Promise((resolve, _reject) => {
            const server = http_1.default.createServer(this.app);
            server.listen(3000).on('listening', () => {
                resolve('Promesa resuelta con éxito');
                console.log('Listening on http://localhost:3000');
            });
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=server.bootstrap.js.map
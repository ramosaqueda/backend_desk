"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const base_bootstrap_1 = require("./base.bootstrap");
const app_service_1 = require("./services/app.service");
class default_1 extends base_bootstrap_1.Bootstrap {
    constructor(app) {
        super();
        this.app = app;
    }
    initialize() {
        return new Promise((_resolve, reject) => {
            const server = http_1.default.createServer(this.app);
            server
                .listen(`${app_service_1.AppService.PORT}`)
                .on('listening', () => {
                console.log(`Server listening on port: ${app_service_1.AppService.PORT}`);
            })
                .on('error', error => {
                reject(error);
                console.log(`Server error on port: ${app_service_1.AppService.PORT}`);
            });
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=server.bootstrap.js.map
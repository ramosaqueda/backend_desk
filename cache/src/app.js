"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const health_1 = __importDefault(require("./helpers/health"));
const errors_1 = __importDefault(require("./helpers/errors"));
const compression_1 = __importDefault(require("compression"));
const user_routes_1 = __importDefault(require("./modules/user/interfaces/http/user.routes"));
const system_routes_1 = __importDefault(require("./modules/systems/interfaces/http/system.routes"));
class App {
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.owaspSecurityMiddlewares();
        this.mountHealtCheck();
        this.mountMiddlewares();
        this.mountRoutes();
        this.mountError();
    }
    owaspSecurityMiddlewares() {
        this.expressApp.use((0, hpp_1.default)());
        this.expressApp.use((0, helmet_1.default)());
        this.expressApp.use((0, cors_1.default)({
            origin: '*',
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        }));
    }
    mountHealtCheck() {
        this.expressApp.use('/', health_1.default);
    }
    mountMiddlewares() {
        this.expressApp.use((0, compression_1.default)());
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(express_1.default.urlencoded({ extended: true }));
    }
    mountError() {
        this.expressApp.use(errors_1.default.notFound);
    }
    mountmiddleware() {
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(express_1.default.urlencoded({ extended: true }));
    }
    mountRoutes() {
        this.expressApp.use('/user', user_routes_1.default);
        this.expressApp.use('/system', system_routes_1.default);
    }
}
exports.default = new App().expressApp;
//# sourceMappingURL=app.js.map
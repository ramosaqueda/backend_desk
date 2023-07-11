"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const system_application_1 = __importDefault(require("../../application/system.application"));
const SystemInfraestructure_1 = __importDefault(require("../../infraestructure/SystemInfraestructure"));
const system_controller_1 = __importDefault(require("./system.controller"));
const infraestructure = new SystemInfraestructure_1.default();
const application = new system_application_1.default(infraestructure);
const controller = new system_controller_1.default(application);
class SystemRouter {
    constructor() {
        this.expressRouter = (0, express_1.Router)();
        this.mountRoutes();
    }
    mountRoutes() {
        this.expressRouter.post('/insert', controller.insert);
        this.expressRouter.get('/list', controller.list);
        this.expressRouter.post('/listOne/:id', controller.listOne);
        this.expressRouter.put('/update/:id', controller.update);
        this.expressRouter.delete('/delete/:id', controller.delete);
    }
}
exports.default = new SystemRouter().expressRouter;
//# sourceMappingURL=system.routes.js.map
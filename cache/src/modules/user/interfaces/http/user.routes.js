"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_application_1 = __importDefault(require("../../application/user.application"));
const UserInfraestructure_1 = __importDefault(require("../../infraestructure/UserInfraestructure"));
const user_controller_1 = __importDefault(require("./user.controller"));
const infraestructure = new UserInfraestructure_1.default();
const application = new user_application_1.default(infraestructure);
const controller = new user_controller_1.default(application);
class UserRouter {
    constructor() {
        this.expressRouter = (0, express_1.Router)();
        this.mountRoutes();
    }
    mountRoutes() {
        this.expressRouter.post('/insert', controller.insert);
        this.expressRouter.get('/list', controller.list);
        this.expressRouter.post('/listOne/:guid', controller.listOne);
        this.expressRouter.put('/update/:guid', controller.update);
        this.expressRouter.delete('/delete/:guid', controller.delete);
    }
}
exports.default = new UserRouter().expressRouter;
//# sourceMappingURL=user.routes.js.map
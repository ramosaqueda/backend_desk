"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterHealth {
    constructor() {
        this.expressRouter = (0, express_1.Router)();
    }
    mountroutes() {
        this.expressRouter.get('/', (_req, res) => {
            res.send('Servido cargado Correctamente');
        });
    }
}
exports.default = new RouterHealth().expressRouter;
//# sourceMappingURL=health.js.map
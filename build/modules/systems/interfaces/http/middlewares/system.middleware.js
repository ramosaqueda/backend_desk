"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareListOne = void 0;
// Objetivo: Realizar validações de dados de entrada
const class_validator_1 = require("class-validator");
const SystemListOne_validator_1 = require("../validators/SystemListOne.validator");
class SystemMiddleware {
    static async ValidateListOne(req, _res, next) {
        const { id } = req.params;
        const my_id = parseInt(id);
        const systemListOneValidator = new SystemListOne_validator_1.SystemListOneValidator();
        systemListOneValidator.id = my_id;
        const errors = await (0, class_validator_1.validate)(systemListOneValidator);
        if (errors.length > 0) {
            console.log(errors);
            return next(new Error('Invalid request'));
        }
        next();
    }
}
exports.MiddlewareListOne = [
    SystemMiddleware.ValidateListOne,
];
//# sourceMappingURL=system.middleware.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareListOne = void 0;
const class_validator_1 = require("class-validator");
const userListOne_validator_1 = require("../validators/userListOne.validator");
class UserMiddleware {
    static async ValidateListOne(req, _res, next) {
        const { guid } = req.params;
        const userListOneValidator = new userListOne_validator_1.UserListOneValidator();
        userListOneValidator.guid = guid;
        const errors = await (0, class_validator_1.validate)(userListOneValidator);
        if (errors.length > 0) {
            console.log(errors);
            return next(new Error('Invalid request'));
        }
        next();
    }
}
exports.MiddlewareListOne = [
    UserMiddleware.ValidateListOne,
];
//# sourceMappingURL=user.middleware.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_password_service_1 = require("./services/user-password.service");
const user_1 = __importDefault(require("./user"));
const user_exception_1 = require("./exceptions/user.exception");
const neverthrow_1 = require("neverthrow");
class UserFactory {
    async create(name, lastname, email, password) {
        if (!name || name.trim() === '') {
            return (0, neverthrow_1.err)(new user_exception_1.UserNameRequiredException());
        }
        if (!lastname || lastname.trim() === '') {
            return (0, neverthrow_1.err)(new user_exception_1.UserLastnameRequiredException());
        }
        if (!password || password.trim() === '') {
            return (0, neverthrow_1.err)(new user_exception_1.UserPasswordRequiredException());
        }
        if (password.length < 5) {
            return (0, neverthrow_1.err)(new user_exception_1.UserPasswordLengthInvalidException(password));
        }
        const passwordHash = await user_password_service_1.UserPasswordService.hash(password);
        const userProperties = {
            name,
            lastname,
            email,
            password: passwordHash,
            guid: (0, uuid_1.v4)(),
            refreshToken: (0, uuid_1.v4)(),
        };
        const user = new user_1.default(userProperties);
        return (0, neverthrow_1.ok)(user);
    }
}
exports.default = UserFactory;
//# sourceMappingURL=user-factory.js.map
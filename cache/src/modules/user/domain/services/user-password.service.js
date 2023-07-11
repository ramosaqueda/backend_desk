"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserPasswordService {
    static hash(password) {
        return bcryptjs_1.default.hash(password, 10);
    }
}
exports.UserPasswordService = UserPasswordService;
//# sourceMappingURL=user-password.service.js.map
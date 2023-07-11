"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class UserUpdateMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            lastname: data.lastname,
            email: data.email.value,
            guid: data.guid,
        };
    }
}
exports.UserUpdateMapping = UserUpdateMapping;
//# sourceMappingURL=user-update.dto.js.map
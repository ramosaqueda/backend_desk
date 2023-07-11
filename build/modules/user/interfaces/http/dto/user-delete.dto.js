"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class UserDeleteMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            lastname: data.lastname,
            email: data.email.value,
            guid: data.guid,
        };
    }
}
exports.UserDeleteMapping = UserDeleteMapping;
//# sourceMappingURL=user-delete.dto.js.map
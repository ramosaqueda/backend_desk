"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInsertMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class UserInsertMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            lastname: data.lastname,
            email: data.email.value,
            guid: data.guid,
        };
    }
}
exports.UserInsertMapping = UserInsertMapping;
//# sourceMappingURL=user-insert.dto.js.map
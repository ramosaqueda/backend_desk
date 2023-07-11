"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class UserListMapping extends dto_generic_1.DTO {
    execute(data) {
        return data.map((user) => {
            return {
                name: user.name,
                lastname: user.lastname,
                guid: user.guid,
            };
        });
    }
}
exports.UserListMapping = UserListMapping;
//# sourceMappingURL=user-list.dto.js.map
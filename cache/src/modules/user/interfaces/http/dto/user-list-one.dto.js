"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListOneMapping = void 0;
const dto_generic_1 = require("./dto.generic");
//creamos la clase que implementa la interfaz heredada del singleton
class UserListOneMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            lastname: data.lastname,
            email: data.email.value,
            guid: data.guid,
        };
    }
}
exports.UserListOneMapping = UserListOneMapping;
//# sourceMappingURL=user-list-one.dto.js.map
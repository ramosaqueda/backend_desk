"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemDeleteMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class SystemDeleteMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            description: data.description,
            url: data.url,
            class_css: data.class_css,
        };
    }
}
exports.SystemDeleteMapping = SystemDeleteMapping;
//# sourceMappingURL=system-delete.dto.js.map
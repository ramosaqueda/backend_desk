"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemUpdateMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class SystemUpdateMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            description: data.description,
            url: data.url,
            class_css: data.class_css,
        };
    }
}
exports.SystemUpdateMapping = SystemUpdateMapping;
//# sourceMappingURL=system-update.dto.js.map
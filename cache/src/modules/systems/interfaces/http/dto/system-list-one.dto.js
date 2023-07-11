"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemListOneMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class SystemListOneMapping extends dto_generic_1.DTO {
    execute(data) {
        return {
            name: data.name,
            description: data.description,
            url: data.url,
            class_css: data.class_css,
        };
    }
}
exports.SystemListOneMapping = SystemListOneMapping;
//# sourceMappingURL=system-list-one.dto.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemListMapping = void 0;
const dto_generic_1 = require("./dto.generic");
class SystemListMapping extends dto_generic_1.DTO {
    execute(data) {
        return data.map((system) => {
            return {
                name: system.name,
                description: system.description,
                url: system.url,
                class_css: system.class_css,
            };
        });
    }
}
exports.SystemListMapping = SystemListMapping;
//# sourceMappingURL=system-list.dto.js.map
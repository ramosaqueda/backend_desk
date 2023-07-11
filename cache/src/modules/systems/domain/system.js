"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class System {
    constructor(systemProperties) {
        this.active = true;
        Object.assign(this, systemProperties);
    }
    properties() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            url: this.url,
            class_css: this.class_css,
            active: this.active,
        };
    }
    update(fields) {
        Object.assign(this, fields);
    }
    delete() {
        this.active = false;
    }
}
exports.default = System;
//# sourceMappingURL=system.js.map
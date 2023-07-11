"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(usertProperties) {
        this.active = true;
        Object.assign(this, usertProperties);
    }
    properties() {
        return {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            refreshToken: this.refreshToken,
            active: this.active,
            guid: this.guid,
        };
    }
    update(fields) {
        Object.assign(this, fields);
    }
    delete() {
        this.active = false;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map
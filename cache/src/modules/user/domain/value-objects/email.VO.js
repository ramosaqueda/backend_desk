"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVO = void 0;
const vo_class_1 = require("../../../shared/vo.class");
const user_exception_1 = require("../exceptions/user.exception");
const neverthrow_1 = require("neverthrow");
class EmailVO extends vo_class_1.ValueObject {
    constructor(props) {
        super(props);
    }
    static create(email) {
        if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
            return (0, neverthrow_1.err)(new user_exception_1.UserEmailInvalidException());
        }
        return (0, neverthrow_1.ok)(new EmailVO({ value: email }));
    }
    get value() {
        return this.props.value;
    }
}
exports.EmailVO = EmailVO;
//# sourceMappingURL=email.VO.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidVO = void 0;
const uuid_1 = require("uuid");
const vo_class_1 = require("../../../shared/vo.class");
const user_exception_1 = require("../exceptions/user.exception");
const neverthrow_1 = require("neverthrow");
class GuidVO extends vo_class_1.ValueObject {
    constructor(props) {
        super(props);
    }
    static create(guid) {
        if (!(0, uuid_1.validate)(guid)) {
            return (0, neverthrow_1.err)(new user_exception_1.UserGuidInvalidException());
        }
        return (0, neverthrow_1.ok)(new GuidVO({ value: guid }));
    }
    get value() {
        return this.props.value;
    }
}
exports.GuidVO = GuidVO;
//# sourceMappingURL=guid.vo.js.map
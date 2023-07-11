"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlVO = void 0;
const vo_class_1 = require("../../../shared/vo.class");
const system_exceptions_1 = require("../exceptions/system.exceptions");
const neverthrow_1 = require("neverthrow");
class urlVO extends vo_class_1.ValueObject {
    constructor(props) {
        super(props);
    }
    static create(url) {
        if (!url.match(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/gi)) {
            return (0, neverthrow_1.err)(new system_exceptions_1.SystemUrlInvalidException());
        }
        return (0, neverthrow_1.ok)(new urlVO({ value: url }));
    }
    get value() {
        return this.props.value;
    }
}
exports.urlVO = urlVO;
//# sourceMappingURL=url.vo.js.map
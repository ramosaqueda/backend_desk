"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
const domainException_enum_1 = require("./enums/domainException.enum");
class DomainException extends Error {
    constructor(message) {
        super(message); //
        this.name = domainException_enum_1.DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION;
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exceptions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = exports.DomainExceptionCode = void 0;
var DomainExceptionCode;
(function (DomainExceptionCode) {
    DomainExceptionCode["DEFAULT_DOMAIN_EXCEPTION"] = "DEFAULT_DOMAIN_EXCEPTION";
    DomainExceptionCode["SYSTEM_NAME_REQUIRED"] = "SYSTEM_NAME_REQUIRED";
    DomainExceptionCode["SYSTEM_DESCRIPTION_REQUIRED"] = "SYSTEM_DESCRIPTION_REQUIRED";
    DomainExceptionCode["SYSTEM_URL_REQUIRED"] = "SYSTEM_URL_REQUIRED";
    DomainExceptionCode["SYSTEM_URL_INVALID"] = "SYSTEM_URL_INVALID";
    DomainExceptionCode["SYSTEM_CLASS_CSS_REQUIRED"] = "SYSTEM_PASSWORD_REQUIRED";
    DomainExceptionCode["SYSTEM_NOT_FOUND"] = "SYSTEM_NOT_FOUND";
})(DomainExceptionCode = exports.DomainExceptionCode || (exports.DomainExceptionCode = {}));
class DomainException extends Error {
    constructor(message) {
        super(message); //
        this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION;
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exceptions.js.map
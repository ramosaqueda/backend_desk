"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = exports.DomainExceptionCode = void 0;
var DomainExceptionCode;
(function (DomainExceptionCode) {
    //incluiremos varias propiedades configuradas como llave y valor
    DomainExceptionCode["DEFAULT_DOMAIN_EXCEPTION"] = "DEFAULT_DOMAIN_EXCEPTION";
    DomainExceptionCode["USER_NAME_REQUIRED"] = "USER_NAME_REQUIRED";
    DomainExceptionCode["USER_LASTNAME_REQUIRED"] = "USER_LASTNAME_REQUIRED";
    DomainExceptionCode["USER_EMAIL_REQUIRED"] = "USER_EMAIL_REQUIRED";
    DomainExceptionCode["USER_EMAIL_INVALID"] = "USER_EMAIL_INVALID";
    DomainExceptionCode["USER_PASSWORD_REQUIRED"] = "USER_PASSWORD_REQUIRED";
    DomainExceptionCode["USER_PASSWORD_LENGTH_INVALID"] = "USER_PASSWORD_LENGTH_INVALID";
    DomainExceptionCode["USER_GUID_INVALID"] = "USER_GUID_INVALID";
    DomainExceptionCode["USER_NOT_FOUND"] = "USER_NOT_FOUND";
})(DomainExceptionCode = exports.DomainExceptionCode || (exports.DomainExceptionCode = {}));
//crearemos una clase padre que capture errores, ademas será unca clase heredada de
class DomainException extends Error {
    //la clase error es nativa de js, contiene entre otras propiedades el mensaje de error
    constructor(message) {
        super(message); //
        this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION;
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
const domainException_enum_1 = require("./enums/domainException.enum");
//crearemos una clase padre que capture errores, ademas será unca clase heredada de
class DomainException extends Error {
    //la clase error es nativa de js, contiene entre otras propiedades el mensaje de error
    constructor(message) {
        super(message); //
        this.name = domainException_enum_1.DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION;
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map
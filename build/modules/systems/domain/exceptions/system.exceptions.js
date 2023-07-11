"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemNotFoundException = exports.SystemClassCssRequiredException = exports.SystemUrlInvalidException = exports.SystemUrlRequiredException = exports.SystemDescriptionRequiredException = exports.SystemNameRequiredException = void 0;
const domain_exceptions_1 = require("./domain.exceptions");
class SystemNameRequiredException extends domain_exceptions_1.DomainException {
    constructor() {
        super(SystemNameRequiredException.getMessage());
        this.name = domain_exceptions_1.DomainExceptionCode.SYSTEM_NAME_REQUIRED;
    }
    static getMessage() {
        return 'Name is required';
    }
}
exports.SystemNameRequiredException = SystemNameRequiredException;
class SystemDescriptionRequiredException extends domain_exceptions_1.DomainException {
    constructor() {
        super(SystemDescriptionRequiredException.getMessage());
        this.name = domain_exceptions_1.DomainExceptionCode.SYSTEM_DESCRIPTION_REQUIRED;
    }
    static getMessage() {
        return 'Description is required';
    }
}
exports.SystemDescriptionRequiredException = SystemDescriptionRequiredException;
class SystemUrlRequiredException extends domain_exceptions_1.DomainException {
    constructor() {
        super(SystemUrlRequiredException.getMessage());
        this.name = domain_exceptions_1.DomainExceptionCode.SYSTEM_URL_REQUIRED;
    }
    static getMessage() {
        return 'Url is required';
    }
}
exports.SystemUrlRequiredException = SystemUrlRequiredException;
class SystemUrlInvalidException extends domain_exceptions_1.DomainException {
    constructor() {
        super(SystemUrlInvalidException.getMessage());
        this.name = domain_exceptions_1.DomainExceptionCode.SYSTEM_URL_INVALID;
    }
    static getMessage() {
        return 'Url is invalid';
    }
}
exports.SystemUrlInvalidException = SystemUrlInvalidException;
class SystemClassCssRequiredException extends domain_exceptions_1.DomainException {
    constructor() {
        super(SystemClassCssRequiredException.getMessage());
        this.name = domain_exceptions_1.DomainExceptionCode.SYSTEM_CLASS_CSS_REQUIRED;
    }
    static getMessage() {
        return 'Class css is required';
    }
}
exports.SystemClassCssRequiredException = SystemClassCssRequiredException;
class SystemNotFoundException extends domain_exceptions_1.DomainException {
    constructor() {
        super(SystemNotFoundException.getMessage());
        this.name = domain_exceptions_1.DomainExceptionCode.SYSTEM_NOT_FOUND;
    }
    static getMessage() {
        return 'System not found';
    }
}
exports.SystemNotFoundException = SystemNotFoundException;
//# sourceMappingURL=system.exceptions.js.map
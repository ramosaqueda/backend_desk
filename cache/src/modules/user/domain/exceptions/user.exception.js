"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = exports.UserGuidInvalidException = exports.UserPasswordLengthInvalidException = exports.UserPasswordRequiredException = exports.UserEmailInvalidException = exports.UserEmailRequiredException = exports.UserLastnameRequiredException = exports.UserNameRequiredException = void 0;
const domain_exception_1 = require("./domain.exception");
const domainException_enum_1 = require("./enums/domainException.enum");
class UserNameRequiredException extends domain_exception_1.DomainException {
    constructor() {
        super(UserNameRequiredException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_NAME_REQUIRED;
    }
    static getMessage() {
        return 'Name is required';
    }
}
exports.UserNameRequiredException = UserNameRequiredException;
class UserLastnameRequiredException extends domain_exception_1.DomainException {
    constructor() {
        super(UserLastnameRequiredException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_LASTNAME_REQUIRED;
    }
    static getMessage() {
        return 'Lastname is required';
    }
}
exports.UserLastnameRequiredException = UserLastnameRequiredException;
class UserEmailRequiredException extends domain_exception_1.DomainException {
    constructor() {
        super(UserEmailRequiredException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_EMAIL_REQUIRED;
    }
    static getMessage() {
        return 'Email is required';
    }
}
exports.UserEmailRequiredException = UserEmailRequiredException;
class UserEmailInvalidException extends domain_exception_1.DomainException {
    constructor() {
        super(UserEmailInvalidException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_EMAIL_INVALID;
    }
    static getMessage() {
        return 'Email is invalid';
    }
}
exports.UserEmailInvalidException = UserEmailInvalidException;
class UserPasswordRequiredException extends domain_exception_1.DomainException {
    constructor() {
        super(UserPasswordRequiredException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_PASSWORD_REQUIRED;
    }
    static getMessage() {
        return 'Password is required';
    }
}
exports.UserPasswordRequiredException = UserPasswordRequiredException;
class UserPasswordLengthInvalidException extends domain_exception_1.DomainException {
    constructor(password) {
        super(UserPasswordLengthInvalidException.getMessage(password));
        this.name = domainException_enum_1.DomainExceptionCode.USER_PASSWORD_LENGTH_INVALID;
    }
    static getMessage(password) {
        return `Password must be more than 4 characters, but '${password}' has only ${password.length}`;
    }
}
exports.UserPasswordLengthInvalidException = UserPasswordLengthInvalidException;
class UserGuidInvalidException extends domain_exception_1.DomainException {
    constructor() {
        super(UserGuidInvalidException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_GUID_INVALID;
    }
    static getMessage() {
        return 'Guid is invalid';
    }
}
exports.UserGuidInvalidException = UserGuidInvalidException;
class UserNotFoundException extends domain_exception_1.DomainException {
    constructor() {
        super(UserNotFoundException.getMessage());
        this.name = domainException_enum_1.DomainExceptionCode.USER_NOT_FOUND;
    }
    static getMessage() {
        return 'User not found';
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=user.exception.js.map
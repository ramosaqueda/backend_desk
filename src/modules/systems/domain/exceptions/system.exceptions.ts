import { DomainException } from './domain.exceptions'
import { DomainExceptionCode } from './enums/domainException.enum'
export class SystemNameRequiredException extends DomainException {
	constructor() {
		super(SystemNameRequiredException.getMessage())
		this.name = DomainExceptionCode.SYSTEM_NAME_REQUIRED
	}
	static getMessage() {
		return 'Name is required'
	}
}

export class SystemDescriptionRequiredException extends DomainException {
	constructor() {
		super(SystemDescriptionRequiredException.getMessage())
		this.name = DomainExceptionCode.SYSTEM_DESCRIPTION_REQUIRED
	}
	static getMessage() {
		return 'Description is required'
	}
}

export class SystemUrlRequiredException extends DomainException {
	constructor() {
		super(SystemUrlRequiredException.getMessage())
		this.name = DomainExceptionCode.SYSTEM_URL_REQUIRED
	}
	static getMessage() {
		return 'Url is required'
	}
}

export class SystemUrlInvalidException extends DomainException {
	constructor() {
		super(SystemUrlInvalidException.getMessage())
		this.name = DomainExceptionCode.SYSTEM_URL_INVALID
	}
	static getMessage() {
		return 'Url is invalid'
	}
}

export class SystemClassCssRequiredException extends DomainException {
	constructor() {
		super(SystemClassCssRequiredException.getMessage())
		this.name = DomainExceptionCode.SYSTEM_CLASS_CSS_REQUIRED
	}
	static getMessage() {
		return 'Class css is required'
	}
}

export class SystemNotFoundException extends DomainException {
	constructor() {
		super(SystemNotFoundException.getMessage())
		this.name = DomainExceptionCode.SYSTEM_NOT_FOUND
	}
	static getMessage() {
		return 'System not found'
	}
}

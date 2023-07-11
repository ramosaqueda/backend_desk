import {DomainExceptionCode} from "./enums/domainException.enum"

//crearemos una clase padre que capture errores, ademas será unca clase heredada de
export abstract class DomainException extends Error {
	//la clase error es nativa de js, contiene entre otras propiedades el mensaje de error
	constructor(message?: string) {
		super(message) //
		this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION
	}
}

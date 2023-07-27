import { EmailVO } from '../value-objects/email.VO'

export interface UserRequired {
	name: string
	lastname: string
	email: EmailVO
	password: string
}

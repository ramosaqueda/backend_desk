import { IsNotEmpty, IsString, MinLength, IsNumber, Min } from 'class-validator'
export class SystemListOneValidator {
	@Min(0, { message: 'Id must be greater then 0' })
	id: number
}

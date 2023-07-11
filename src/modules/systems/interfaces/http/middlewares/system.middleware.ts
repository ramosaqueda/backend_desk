// Objetivo: Realizar validações de dados de entrada
import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { SystemListOneValidator } from '../validators/SystemListOne.validator'

class SystemMiddleware {
	static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
		const { id } = req.params
		const my_id = parseInt(id)
		const systemListOneValidator = new SystemListOneValidator()
		systemListOneValidator.id = my_id
		const errors = await validate(systemListOneValidator)

		if (errors.length > 0) {
			console.log(errors)
			return next(new Error('Invalid request'))
		}

		next()
	}
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
	SystemMiddleware.ValidateListOne,
]

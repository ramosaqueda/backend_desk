import { NextFunction, Request, Response } from 'express'
import SystemApplication from '../../application/system.application'
import SystemFactory from '../../domain/system-factory'
import { urlVO } from '../../domain/value-objects/url.vo'
import { IError } from '../helpers/ierror'
import { SystemInsertMapping } from './dto/system-insert.dto'
import { SystemListOneMapping } from './dto/system-list-one.dto'
import { SystemListMapping } from './dto/system-list.dto'
import { SystemUpdateMapping } from './dto/system-update.dto'
import { SystemDeleteMapping } from './dto/system-delete.dto'

export default class {
	constructor(private application: SystemApplication) {
		this.insert = this.insert.bind(this)
		this.list = this.list.bind(this)
		this.listOne = this.listOne.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async insert(req: Request, res: Response, next: NextFunction) {
		const { name, description, url, class_css } = req.body

		const urlResult = urlVO.create(url)
		if (urlResult.isErr()) {
			const err: IError = new Error(urlResult.error.message)
			err.status = 411
			return next(err)
		}


		const systemResult = await new SystemFactory().create(name, description, urlResult.value,  class_css)

		if (systemResult.isErr()) {
			const err: IError = new Error(systemResult.error.message)
			err.status = 411
			return next(err)
		} else {
			console.log(systemResult.value)
		/*	const data = await this.application.insert(systemResult.value)
			const result = new SystemInsertMapping().execute(data.properties())
			res.status(201).json(result)*/
			res.status(201).json({ message: 'System created' })
		}
	}

	async list(_req: Request, res: Response) {
		const list = await this.application.list()
		const result = new SystemListMapping().execute(list.map(system => system.properties()))
		res.json(result)

	}

	async listOne(req: Request, res: Response, next: NextFunction) {
		//debemos llamar aplicacion.
		const { id } = req.params
		const my_id = parseInt(id)

		const systemResult = await this.application.listOne(my_id)
		if (systemResult.isErr()) {
			return res.status(404).json({ message: systemResult.error.message })
		} else if (systemResult.isOk()) {
			const result = new SystemListOneMapping().execute(systemResult.value.properties())
			//return res.status(200).json(result)
			return res.json(result) //por defecto, cuando el resultado es OK retorna el 200
		}
	}

	async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		const my_id = parseInt(id)
		const fieldsToUpdate = req.body
		const dataResult = await this.application.update(my_id, fieldsToUpdate)
		if (dataResult.isErr()) {
			const err: IError = new Error(dataResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const result = new SystemUpdateMapping().execute(dataResult.value.properties())
			res.status(200).json(result)
		}
	}

	async delete(req: Request, res: Response, next: NextFunction) {
		const id = req.params.id
		const my_id = parseInt(id)
		const dataResult = await this.application.delete(my_id)
		if (dataResult.isErr()) {
			const err: IError = new Error(dataResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const result = new SystemDeleteMapping().execute(dataResult.value.properties())
			res.status(200).json(result)
		}
	}
}

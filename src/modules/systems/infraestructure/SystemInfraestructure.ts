import {err, ok, Result} from 'neverthrow'
import databaseBootstrap from 'src/bootstrap/database.bootstrap'

import System , {SystemUpdate} from '../domain/system'
import {SystemRepository} from '../domain/system.repository'
import { urlVO } from '../domain/value-objects/url.vo'
import { SystemEntity } from './system.entity'
import { SystemNotFoundException, SystemUrlInvalidException } from '../domain/exceptions/system.exceptions'

export default class SystemInfraestructure implements SystemRepository {
	async insert(system: System): Promise<System> {
		const systemInsert = new SystemEntity()
		const {id, name, url, active} = system.properties()

		Object.assign(systemInsert, {
			id,
			name,
			url: url.value,
			active,
		})

		await databaseBootstrap.dataSource.getRepository(SystemEntity).save(systemInsert)
		return system
		throw new Error('Method not implemented.')
	}

	async list(): Promise<System[]> {
		const repo = databaseBootstrap.dataSource.getRepository(SystemEntity)
		const result = await repo.find({ where: { active: true } })
		return result.map((el: SystemEntity) => {
			const urlResult = urlVO.create(el.url)

			if (urlResult.isErr()) {
				throw new Error('url invalid')
			}
			return new System({
				id: el.id,
				name: el.name,
				url: urlResult.value,
				active: el.active,
			})
		})
	}

	async listOne(id: number): Promise<Result<System, Error>> {
		const repo = databaseBootstrap.dataSource.getRepository(SystemEntity)
		const result = await repo.findOne({ where: { id } })
		const urllResult = urlVO.create(result.url)
		if (urllResult.isErr()) {
			throw new Error('url invalid')
		}

		if(!result){
			return err(new Error('System not found'))
		}
		else{
			return ok(new System({
				id: result.id,
				name: result.name,
				url: urllResult.value,
				active: result.active,
			}))
		}
	}

	async update(id: number, system: Partial<SystemUpdate>): Promise<Result<System, SystemNotFoundException>> {
		const repo = databaseBootstrap.dataSource.getRepository(SystemEntity)
		const result = await repo.findOne({ where: { id } })
		if (!result) {
			return err(new SystemNotFoundException())
		}
		const urlResult = urlVO.create(system.url)
		if (urlResult.isErr()) {
			throw new Error('url invalid')
		}
		result.name = system.name
		result.url = urlResult.value
		result.active = system.active
		await repo.save(result)
		return ok(new System({
			id: result.id,
			name: result.name,
			url: urlResult.value,
			active: result.active,
		}))
	}


	const delete = async (id: number): Promise<Result<System, SystemNotFoundException>> => {
		const repo = databaseBootstrap.dataSource.getRepository(SystemEntity)
		const systemFound = await repo.findOne({ where: { id } })
		if (systemFound) {
			systemFound.active = false
			const SystemEntity = await repo.save(systemFound)
			const urlResult = urlVO.create(SystemEntity.url)
			if (urlResult.isErr()) {
				return err(new SystemUrlInvalidException())
			}
			return ok(new System({
				id: SystemEntity.id,
				name: SystemEntity.name,
				url: urlResult.value,
				active: SystemEntity.active,
			}))
		} else {
			retuurn err(new SystemNotFoundException())
		}

}

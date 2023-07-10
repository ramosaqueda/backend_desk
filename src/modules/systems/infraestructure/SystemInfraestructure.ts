import { err, ok, Result } from 'neverthrow'
import DataBaseBootstrap from '../../../bootstrap/database.bootstrap'

import System, { SystemUpdate } from '../domain/system'
import { SystemRepository } from '../domain/system.repository'
import { urlVO } from '../domain/value-objects/url.vo'
import { SystemEntity } from './system.entity'
import { SystemNotFoundException, SystemUrlInvalidException } from '../domain/exceptions/system.exceptions'

export default class SystemInfraestructure implements SystemRepository {
	async insert(system: System): Promise<System> {
		const systemInsert = new SystemEntity()
		const { id, name, description, url, active, class_css } = system.properties()

		Object.assign(systemInsert, {
			id,
			name,
			description,
			url: url.value,
			class_css,
			active,
		})

		await DataBaseBootstrap.dataSource.getRepository(SystemEntity).save(systemInsert)
		return system
		throw new Error('Method not implemented.')
	}

	async list(): Promise<System[]> {
		const repo = DataBaseBootstrap.dataSource.getRepository(SystemEntity)
		const result = await repo.find({ where: { active: true } })
		return result.map((el: SystemEntity) => {
			const urlResult = urlVO.create(el.url)

			if (urlResult.isErr()) {
				throw new Error('url invalid')
			}
			return new System({
				id: el.id,
				name: el.name,
				description: el.description,
				url: urlResult.value,
				class_css: el.class_css,
				active: el.active,
			})
		})
	}

	async listOne(id: number): Promise<Result<System, Error>> {
		const repo = DataBaseBootstrap.dataSource.getRepository(SystemEntity)
		const result = await repo.findOne({ where: { id } })
		const urllResult = urlVO.create(result.url)
		if (urllResult.isErr()) {
			throw new Error('url invalid')
		}

		if (!result) {
			return err(new Error('System not found'))
		} else {
			return ok(
				new System({
					id: result.id,
					name: result.name,
					description: result.description,
					url: urllResult.value,
					class_css: result.class_css,
					active: result.active,
				}),
			)
		}
	}

	async update(id: number, system: Partial<SystemUpdate>): Promise<Result<System, SystemNotFoundException>> {
		const repo = DataBaseBootstrap.dataSource.getRepository(SystemEntity)
		const systemFound = await repo.findOne({ where: { id } })
		if (systemFound) {
			Object.assign(systemFound, system)
			const SystemEntity = await repo.save(systemFound)
			const urlResult = urlVO.create(SystemEntity.url)
			if (urlResult.isErr()) {
				return err(new SystemUrlInvalidException())
			}
			return ok(
				new System({
					id: SystemEntity.id,
					name: SystemEntity.name,
					description: SystemEntity.description,
					url: urlResult.value,
					class_css: SystemEntity.class_css,
					active: SystemEntity.active,
				}),
			)
		}
	}

	delete = async (id: number): Promise<Result<System, SystemNotFoundException>> => {
		const repo = DataBaseBootstrap.dataSource.getRepository(SystemEntity)
		const systemFound = await repo.findOne({ where: { id } })
		if (systemFound) {
			systemFound.active = false
			const SystemEntity = await repo.save(systemFound)
			const urlResult = urlVO.create(SystemEntity.url)
			if (urlResult.isErr()) {
				return err(new SystemUrlInvalidException())
			}
			return ok(
				new System({
					id: SystemEntity.id,
					name: SystemEntity.name,
					description: SystemEntity.description,
					url: urlResult.value,
					class_css: SystemEntity.class_css,
					active: SystemEntity.active,
				}),
			)
		} else {
			return err(new SystemNotFoundException())
		}
	}
}

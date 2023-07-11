import System from '../domain/system'
import { SystemUpdate } from '../domain/interfaces/systemUpdate.interface'
import { SystemRepository } from '../domain/system.repository'

export default class SystemApplication {
	constructor(private readonly systemRepository: SystemRepository) {}

	insert(system: System) {
		return this.systemRepository.insert(system)
	}

	list() {
		return this.systemRepository.list()
	}

	listOne(id: number) {
		return this.systemRepository.listOne(id)
	}

	update(id: number, system: Partial<SystemUpdate>) {
		return this.systemRepository.update(id, system)
	}

	delete(id: number) {
		return this.systemRepository.delete(id)
	}
}

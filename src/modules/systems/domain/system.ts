import { IEntity } from 'src/modules/shared/entity.interface'
import { SystemUpdate } from './interfaces/systemUpdate.interface'
import { SystemProperties } from './types/systemPropperties.type'
import { urlVO } from './value-objects/url.vo'


export default class System implements IEntity<SystemProperties, SystemUpdate> {
	private readonly id: number
	private name: string
	private description: string
	private url: urlVO
	private class_css: string
	private active: boolean

	constructor(systemProperties: SystemProperties) {
		this.active = true
		Object.assign(this, systemProperties)
	}

	properties(): SystemProperties {
		return {
			id: this.id,
			name: this.name,
			description: this.description,
			url: this.url,
			class_css: this.class_css,
			active: this.active,
		}
	}

	update(fields: SystemUpdate) {
		Object.assign(this, fields)
	}

	delete() {
		this.active = false
	}
}

import { IEntity } from 'src/modules/shared/entity.interface'
import { urlVO } from './value-objects/url.vo'

interface SystemRequired {
	name: string
	description: string
	url: urlVO
	class_css: string
}

interface SystemOptional {
	id: number
	active: boolean
}

export interface SystemUpdate {
	name: string
	description: string
	url: urlVO
	class_css: string
}

export type SystemProperties = Required<SystemRequired> & Partial<SystemOptional>

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

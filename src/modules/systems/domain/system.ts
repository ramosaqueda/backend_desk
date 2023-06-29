import { IEntity } from "src/modules/shared/entity.interface"

interface SystemRequired {
	name: string,
	description: string,
	url: string,
	class_css: string
}

interface SystemOptional {
	active: boolean
}

export	interface SystemUpdate {
	name: string,
	description: string,
	url: string,
	class_css: string
}

export type SystemProperties = Required<SystemRequired> & Partial<SystemOptional>

export default class System  implements IEntity<SystemProperties, SystemUpdate>{
	private name: string
	private description: string
	private url: string
	private active: boolean
	private class_css: string

	constructor(systemProperties: SystemProperties) {
		this.active = true
		Object.assign(this, systemProperties)
	}

	properties(): SystemProperties {
		return {
			name: this.name,
			description: this.description,
			url: this.url,
			class_css: this.class_css
		}
	}


	update(fields: SystemUpdate) {
		Object.assign(this, fields)
	}

	delete() {
		this.active = false
	}

}


import { urlVO } from 'src/modules/systems/domain/value-objects/url.vo'

export interface SystemDTO {
	name: string
	description: string
	url: urlVO
	class_css: string
}


import { SystemProperties } from 'src/modules/systems/domain/system'
import { urlVO } from 'src/modules/systems/domain/value-objects/url.vo'
import { DTO } from './dto.generic'
interface SystemDTO {
	name: string
	description: string
	url: urlVO
	class_css: string
}

export type SystemDeleteDTO = SystemDTO

export class SystemUpdateMapping extends DTO<SystemProperties, SystemDeleteDTO> {
	execute(data: SystemProperties): SystemDeleteDTO {
		return {
			name: data.name,
			description: data.description,
			url: data.url,
			class_css: data.class_css,
		}
	}
}

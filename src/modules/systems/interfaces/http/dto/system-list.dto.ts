import { SystemProperties } from 'src/modules/systems/domain/system'
import { urlVO } from 'src/modules/systems/domain/value-objects/url.vo'
import { DTO } from './dto.generic'
interface SystemDTO {
	name: string
	description: string
	url: urlVO
	class_css: string
}
export type SystemListDTO = SystemDTO[]

export class SystemListMapping extends DTO<SystemProperties[], SystemListDTO> {
	execute(data: SystemProperties[]): SystemListDTO {
		return data.map((system: SystemProperties) => {
			return {
				name: system.name,
				description: system.description,
				url: system.url,
				class_css: system.class_css,
			}
		})
	}
}

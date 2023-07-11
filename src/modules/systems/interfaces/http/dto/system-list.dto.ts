import { SystemProperties } from 'src/modules/systems/domain/types/systemPropperties.type'
import { DTO } from './dto.generic'
import { SystemListDTO } from './types/systemList.type'

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

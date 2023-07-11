import { SystemProperties } from 'src/modules/systems/domain/types/systemPropperties.type'
import { DTO } from './dto.generic'
import { SystemDeleteDTO } from './types/systemDelete.type'

export class SystemDeleteMapping extends DTO<SystemProperties, SystemDeleteDTO> {
	execute(data: SystemProperties): SystemDeleteDTO {
		return {
			name: data.name,
			description: data.description,
			url: data.url,
			class_css: data.class_css,
		}
	}
}

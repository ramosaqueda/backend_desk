import { SystemProperties } from 'src/modules/systems/domain/types/systemPropperties.type'
import { DTO } from './dto.generic'
import { SystemListOneDTO } from './types/systemListOne.type'
export class SystemListOneMapping extends DTO<SystemProperties, SystemListOneDTO> {
	execute(data: SystemProperties): SystemListOneDTO {
		return {
			name: data.name,
			description: data.description,
			url: data.url,
			class_css: data.class_css,
		}
	}
}

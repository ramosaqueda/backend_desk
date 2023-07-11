import { SystemProperties } from 'src/modules/systems/domain/types/systemPropperties.type'
import { DTO } from './dto.generic'
import {SystemUpdateDTO } from './types/systemUpdate.type'

export class SystemUpdateMapping extends DTO<SystemProperties, SystemUpdateDTO> {
	execute(data: SystemProperties): SystemUpdateDTO {
		return {
			name: data.name,
			description: data.description,
			url: data.url,
			class_css: data.class_css,
		}
	}
}

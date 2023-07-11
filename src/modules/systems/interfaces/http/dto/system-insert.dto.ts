import { SystemProperties } from 'src/modules/systems/domain/types/systemPropperties.type'
import { DTO } from './dto.generic'
import { SystemInsertDTO } from './types/systemInsert.type'
export class SystemInsertMapping extends DTO<SystemProperties, SystemInsertDTO> {
	execute(data: SystemProperties): SystemInsertDTO {
		return {
			name: data.name,
			description: data.description,
			url: data.url,
			class_css: data.class_css,
		}
	}
}

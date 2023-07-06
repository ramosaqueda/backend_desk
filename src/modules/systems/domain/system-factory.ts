import System from './system'
import { SystemProperties } from './system'
import { urlVO } from './value-objects/url.vo'
import { Result, err, ok } from 'neverthrow'
import {
	SystemNameRequiredException,
	SystemDescriptionRequiredException,
	SystemUrlRequiredException,
	SystemUrlInvalidException,
} from './exceptions/system.exceptions'

export type SystemResult = Result<
	System,
	SystemNameRequiredException | SystemDescriptionRequiredException | SystemUrlRequiredException
>
export default class SystemFactory {
	async create(name: string, description: string, url: urlVO, class_css: string): Promise<SystemResult> {
		if (!name) {
			return err(new SystemNameRequiredException())
		}
		if (!description) {
			return err(new SystemDescriptionRequiredException())
		}
		if (!url) {
			return err(new SystemUrlRequiredException())
		}
		const systemProperties: SystemProperties = {
			name,
			description,
			url,
			class_css,
		}
		const system = new System(systemProperties)
		return ok(system)
	}
}
